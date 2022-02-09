import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from '../../components/Avatar/Avatar'
import { Loader } from '../../components/Loader/Loader'
import { TabsWrapper } from '../../components/Tabs/TabsWrapper'
import { getProfileData } from '../../redux/actions/profile.ac'
import ArchiveWishesTab from './ArchiveWishesTab'
import FormsTab from './FormsTab'
import GiveTab from './GiveTab'
import { GroupsTab } from './GroupsTab'
import { PersonalTab } from './PersonalTab'
import styles from './Profile.module.scss'
import WishesTab from './WishesTab'

export const Profile = () => {
  const user = useSelector(state=>state.user)
  const loader = useSelector(state=>state.loader)
  const {Forms, Groups, Presents, Wishes, Wishlist, email, lname, phone, name, avatar} = useSelector(state=>state.profile)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getProfileData())
  }, [dispatch])

  const links = [
    {link:'Кабинет', icon:'fa-user'},
    {link:'Мой список', icon:'fa-list-ol'},
    {link:'Я дарю', icon:'fa-upload'},
    {link:'Анкеты', icon:'fa-check-square-o'},
    {link:'Группы', icon:'fa-users'},
    {link:'Мне подарили', icon:'fa-download'}  
  ]

  return (
    <>
      <div className={styles.info}>
        <Avatar src={avatar}/>
        <h3>{user.name || name} {user.lname || lname}</h3>
      </div>
      <div className={styles.content}>
            {loader ? <Loader/> : 
            (
            <TabsWrapper links={links}>
              <PersonalTab user={{email, lname, phone, name, avatar}}/>
              <WishesTab wishlist={Wishlist}/>
              <GiveTab wishes={Wishes} presents={Presents}/>
              <FormsTab forms={Forms}/>
              <GroupsTab groups={Groups}/>
              <ArchiveWishesTab wishlist={Wishlist}/>
            </TabsWrapper>
            )}
      </div>
    </>
  )
}
