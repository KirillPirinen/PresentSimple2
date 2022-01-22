import { Children, useEffect, useState } from 'react'
import TabLink from './TabLink'
import styles from './Tabs.module.scss'

export const TabsWrapper = ({children, links}) => {

  const getInitTab = () => {
    return +window.localStorage.getItem('tab') || 0
  }

  const [tab, setTabs] = useState(getInitTab())

  let i = -1;
  
  useEffect(()=> {
    window.localStorage.setItem('tab', tab)
  }, [tab])

  return (
    <>
		<div className={styles.container}>
			{links?.map((el, index) => (<TabLink 
        onClick={() => setTabs(index)} 
        key={String(index)} 
        text={el.link}
        icon={el.icon} 
        active={index === tab}
      /> ))}

    </div>
        {Children.map(children, el => {
          i++;
          return tab === i && el
        })}
    </>
  )
}
