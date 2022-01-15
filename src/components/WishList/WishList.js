import { useParams } from 'react-router-dom'
import { Wish } from '../Wish/Wish'
import styles from './WishList.module.scss'

export const WishList = () => {
  
  const data = [
    {id:'1', title:'Носки', description:'Дыряевые с елочкой из озон за 500р', isBinded:true, WishPhoto:false, Group:{max:10, value:9}},
    {id:'2', title:'Носки', description:'Дыряевые с елочкой из озон за 500р', 
    isBinded:false, WishPhoto:{image:'https://img.static.funnysocks.ru/upload/products/prod_2200_20200305131750_794417662/krasnie-jnrb-noski-ostrie-taki.png'}},
    {id:'3', title:'Носки', description:'Дыряевые с елочкой из озон за 500р', 
    isBinded:false, WishPhoto:{image:'https://nowatermark.ozone.ru/s3/multimedia-z/6077778431.jpg'}},
    {id:'4', title:'Носки', description:'Дыряевые с елочкой из озон за 500р', 
    isBinded:false, WishPhoto:{image:'https://myfriday.ru/upload/iblock/061/06172568ccae08b0ae46c710640495c5.jpg'}, Group:{max:5, value:3}},
    {id:'5', title:'Носки', description:'Дыряевые с елочкой из озон за 500р', 
    isBinded:false, WishPhoto:{image:'https://img.static.funnysocks.ru/upload/products/prod_2034_20200422144058_1230403372/tsvetnie-noski-jnrb-noski-polniy-boekomplekt.jpg'}},
    {id:'6', title:'Носки', description:'Дыряевые с елочкой из озон за 500р', 
    isBinded:false, WishPhoto:{image:'https://img.static.funnysocks.ru/upload/products/prod_2200_20200305131750_794417662/krasnie-jnrb-noski-ostrie-taki.png'}},
    {id:'7', title:'Носки', description:'Дыряевые с елочкой из озон за 500р', 
    isBinded:false, WishPhoto:{image:'https://img.static.funnysocks.ru/upload/products/prod_2200_20200305131750_794417662/krasnie-jnrb-noski-ostrie-taki.png'}},
    {id:'8', title:'Носки', description:'Дыряевые с елочкой из озон за 500р', isBinded:true, WishPhoto:false},
  ]

  return (
      <div className={styles.content}>
        {data?.map(el=>(<Wish key={el.id} wish={el}/>))}
      </div>
  )
}

