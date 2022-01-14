import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const formContext = createContext();

export const FormContextProvider = ({ children }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {ranges, form} = useSelector((state) => state.sentForm);
  const [data, setData] = useState([]);

  useMemo(() => {
    setData(ranges?.map((el) => ({ ...el, payload: [] })));
  }, [ranges]);

  const setRanges = (arr) => {
    setData(arr.map((el) => ({ ...el, payload: [] })));
  };

  const changeHandler = (e, rangeid, inputid) => {
    setData((prev) => {
      return prev.map((range) => {
        if (range.id === rangeid) {
          const newPayload = range.payload.map((input) => {
            if (input.id === inputid) {
              const newInput = { ...input, [e.target.name]: e.target.value };
              return newInput;
            } else return input;
          });
          return { ...range, payload: newPayload };
        } else return range;
      });
    });
  };

  const addInput = (rangeid, inputid) => {
    setData((prev) =>
      prev.map((range) => {
        if (range.id === rangeid) {
          return {
            ...range,
            payload: [
              ...range.payload,
              { id: inputid, key: range.to + inputid },
            ],
          };
        } else return range;
      })
    );
  };

  const deleteInput = (rangeid, inputId) => {
    setData((prev) =>
      prev.map((range) => {
        if (range.id === rangeid) {
          return {
            ...range,
            payload: range.payload.filter((e) => e.id !== inputId),
          };
        } else return range;
      })
    );
  };

  return (
    <formContext.Provider
      value={{ changeHandler, data, form, addInput, deleteInput, setRanges, dispatch, navigate }}
    >
      {children}
    </formContext.Provider>
  );
};

export const useSentFormContext = () => useContext(formContext);
