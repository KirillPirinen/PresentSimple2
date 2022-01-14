import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components/Loader/Loader';
import { cleanSeachData, searchData } from '../../redux/actions/search.ac';
import { FormsList } from './FormsList'
import { SearchFailure } from './SearchFailure';
import { UserBlock } from './UserBlock'

export const SearchResults = ({query}) => {

  const [forceNew, setForce] = useState(false)

  const {forms, user} = useSelector(state=>state.search)
  const loader = useSelector(state=>state.loader)

  const dispatch = useDispatch()

  let payload = {email:query.get('email')}
  const phone = query.get('phone')

  if(phone && phone.length === 11) payload.phone = phone
  if(forms) {
    const {name, lname, email, phone} = forms[0]
    payload = {name, lname, email, phone:phone || '', ...payload}
  }

  useEffect(()=> {
    dispatch(searchData(payload))
    return dispatch(cleanSeachData())
  }, [dispatch])

  return forceNew || ((!user && !forms) && !loader) ? (<SearchFailure payload={payload}/>) : (
    <>
      {user && <UserBlock user={user}/>}
      {forms && <FormsList setForce={setForce} forms={forms} withUser={Boolean(user)}/>}
    </>
  )
    
}

