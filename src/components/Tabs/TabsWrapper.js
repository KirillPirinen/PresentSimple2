import { Children, useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import TabLink from './TabLink'
import styles from './Tabs.module.scss'

export const TabsWrapper = ({children, links}) => {

  const getInitTab = () => {
    return +window.localStorage.getItem('tab') || 0
  }

  let i = -1;

  const [tab, setTabs] = useState(getInitTab())

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
    <TransitionGroup>
      <CSSTransition key={tab} classNames="fade" timeout={400}>
          <div>
            {Children.map(children, el => {
              i++;
              return tab === i && el
            })}
          </div>
      </CSSTransition>
    </TransitionGroup>
    </>
  )
}
