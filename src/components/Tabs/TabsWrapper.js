import { Children, useCallback, useState } from 'react'
import TabLink from './TabLink'
import styles from './Tabs.module.scss'

export const TabsWrapper = ({children, links}) => {

  const [tab, setTabs] = useState(0)

  let i = -1;

  return (
    <>
		<div className={styles.container}>
			{links?.map((el, index) => (<TabLink 
        onClick={() => setTabs(index)} 
        key={String(index)} 
        text={el} 
        active={index === tab}
      /> ))}

    </div>
        {Children.map(children, function (el) {
          i++;
          return tab === i && el
        })}
    </>
  )
}
