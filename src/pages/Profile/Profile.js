import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from '../../components/Avatar/Avatar'
import { Loader } from '../../components/Loader/Loader'
import { TabsWrapper } from '../../components/Tabs/TabsWrapper'
import { getProfileData } from '../../redux/actions/profile.ac'
import ArchiveWishesTab from './ArchiveWishesTab'
import FormsTab from './FormsTab'
import GiveTab from './GiveTab'
import { GroupsTab } from './GroupsTab'
import styles from './Profile.module.scss'
import WishesTab from './WishesTab'

export const Profile = () => {
  const user = useSelector(state=>state.user)
  const profile = useSelector(state=>state.profile)
  const {Forms, Groups, Presents, Wishes, Wishlist, email, lname, phone, name, avatar} = profile;
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getProfileData())
  }, [dispatch])

  return (
    <>
      <div className={styles.info}>
        <Avatar src={avatar} gender="male"/>
        <h3>{user.name || name} {user.lname || lname}</h3>
      </div>
      <div className={styles.content}>
            <TabsWrapper
              links={['Мой список', 'Я дарю', 'Анкеты', 'Группы', 'Мне подарили']}
              >
                <WishesTab wishlist={Wishlist}/>
                <GiveTab wishes={Wishes} presents={Presents}/>
                <FormsTab forms={Forms}/>
                <GroupsTab groups={Groups}/>
                <ArchiveWishesTab wishlist={Wishlist}/>
            </TabsWrapper>
      </div>
    </>
  )
}
