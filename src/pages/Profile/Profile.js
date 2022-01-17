import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from '../../components/Avatar/Avatar'
import { Loader } from '../../components/Loader/Loader'
import { TabsWrapper } from '../../components/Tabs/TabsWrapper'
import { getProfileData } from '../../redux/actions/profile.ac'
import styles from './Profile.module.scss'
import WishesTab from './WishesTab'

export const Profile = () => {
  const user = useSelector(state=>state.user)
  const profile = useSelector(state=>state.profile)
  const {Forms, Groups, Presents, Wishes, Wishlist, email, lname, phone, name} = profile;
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getProfileData())
  }, [dispatch])

  return (
    <>
      <div className={styles.info}>
        <Avatar gender="male"/>
        <h3>{user.name || name} {user.lname || lname}</h3>
      </div>
      <div className={styles.content}>
            <TabsWrapper
              links={['Мой список', 'Я дарю', 'Анкеты', 'Группы', 'Мне подарили']}
              >
                <WishesTab wishlist={Wishlist}/>
                <div>Таб 2</div>
                <div>Таб 3</div>
                <div>Таб 4</div>
                <div>Таб 5</div>
            </TabsWrapper>
      </div>
    </>
  )
}
