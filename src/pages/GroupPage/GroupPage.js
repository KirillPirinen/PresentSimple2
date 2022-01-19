import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Chat } from '../../components/Chat/Chat';
import { HrText } from '../../components/Dividers/HrText';
import { ImitationLink } from '../../components/Links/ImitationLink';
import { Loader } from '../../components/Loader/Loader';
import { Progress } from '../../components/Proggress/Progress';
import { InfoText } from '../../components/Typography/InfoText';
import { UserCard } from '../../components/UserCard/UserCard';
import { Wish } from '../../components/Wish/Wish';
import { getStatusColor } from '../../custom/getStatusColor';
import { getGroupInfo } from '../../redux/actions/groupPage.ac';
import styles from './GroupPage.module.scss';

export const GroupPage = () => {

  const {group_id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const group = useSelector(state => state.groupPage)
  const me = useSelector(state => state.user)

  useEffect(()=> {
    dispatch(getGroupInfo(group_id, navigate))
  }, [dispatch])
  
  const propsHandler = (user) => me.id === user.id ? {
      key:user.id, user,
      label:true
      } 
    : {key:user.id, user, onClick:()=>navigate(`/wishlist/${user.id}`)} 
  

  return group ? (
      <div className={styles.content}>
      <div className={styles.title}>
        <h3>Группа <ImitationLink style={{color:'brown'}} to={`https://t.me/${group.telegram}`} target='_blank' text={group.telegram}/></h3>
        <div>
          <Progress 
              max={group.maxusers} 
              value={group.currentusers}
              style={{color:getStatusColor(group.currentusers, group.maxusers)}} 
          />
          <span>Текущее количество участников {group.currentusers} / {group.maxusers}</span>
        </div>
      </div>
      <div className={styles.infchat}>
      <div className={styles.info}>
        <h3>Группа для сбора средств на подарок для пользователя {group.Wish.Wishlist.User.name} {group.Wish.Wishlist.User.lname}</h3>
        <Wish wish={group.Wish} label={true} addClass={styles.customWish}/>
        <HrText text="Примечание"/>
        <InfoText text="Если вы решите не дожидаться наполнения группы, закройте её для вступления новых участников"/>
      </div>
      <Chat/>
      </div>
      <div className={styles.users}>
        {group.Users.map(user => <UserCard 
        {...propsHandler(user)}
        />)}
      </div>
    </div>
    ) : <Loader/>
}
