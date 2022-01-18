import styles from "./Inputs.module.scss"

export const MainSelect = ({maxNum, firstOpt, ...rest}) => {
  return (
    <select defaultValue={firstOpt} className={styles.select} {...rest}>
      {maxNum && (
        <>
        {firstOpt && <option key='1' value={firstOpt} disabled>{firstOpt}</option>}
        {
          Array.apply(null, Array(--maxNum)).map((_, index) => {
            const val = index + 2;
            return (
              <option key={String(val)} value={val} selected>{val}</option>
            )
          })
        }
        </>
      )}
    </select>
  )
}
