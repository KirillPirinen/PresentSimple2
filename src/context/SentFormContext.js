import { createContext, useCallback, useContext, useEffect, 
  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SendForm } from "../redux/actions/SentForm.ac";

const formContext = createContext();

export const FormContextProvider = ({ children }) => {
  const {uuid} = useParams()

  const ranges = useSelector((state) => state.sentForm.ranges);
  const form = useSelector((state) => state.sentForm.form);

  const getInitData = () => {
    const stateFromLS = JSON.parse(window.localStorage.getItem(uuid))
    return stateFromLS || null
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [data, setData] = useState(getInitData());

  const setRanges = (arr) => {
    setData(arr.map((el) => ({ ...el, payload: [] })));
  };

  const clearForm = setRanges.bind(null, ranges)

  useEffect(() => {
    if(!Array.isArray(data) && ranges) setRanges(ranges)
  }, [ranges]);

  useEffect(() => {
    if(Array.isArray(data)) localStorage.setItem(uuid, JSON.stringify(data));
  }, [data]);


  const changeHandler = useCallback((e, rangeid, inputid) => {
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
  }, []);
  
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

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(SendForm(form.id || uuid, data, navigate))
  }

  return (
    <formContext.Provider
      value={{ uuid, changeHandler, data, form, addInput, deleteInput, clearForm, dispatch, navigate, submitHandler }}
    >
      {children}
    </formContext.Provider>
  );
};

export const useSentFormContext = () => useContext(formContext);
