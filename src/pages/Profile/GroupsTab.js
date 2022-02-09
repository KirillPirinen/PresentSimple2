import { useNavigate } from 'react-router-dom';
import { GroupCard } from '../../components/GroupCard/GroupCard';
import { InfoText } from '../../components/Typography/InfoText';
import styles from './Profile.module.scss';

export const GroupsTab = ({groups = []}) => {
  const navigate = useNavigate()
  return (
      <>
        <h4>Список групп в которых вы участник: {groups.length}</h4>
        <div className={styles.formsTab}>
          {groups.length ? 
          groups.map(e => (
            <GroupCard group={e} onClick={()=>navigate(`/group/${e.id}`)}/>
          )) :
          <InfoText text='На данный момент вы не участвуете ни в каких группах'/>}
        </div>
        </>
      )
}
