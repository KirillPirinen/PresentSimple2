import { SimpleButton } from '../../components/Buttons/SimpleButton';
import { FormsList } from './FormsList'
import { SearchFailure } from './SearchFailure';
import { UserBlock } from './UserBlock'

export const SearchResults = () => {

  const forms = [
    {id:'1', name:'Петр', lname:'Иванов', createdAt:new Date(), updatedAt:new Date(), isActive:true},
    {id:'2', name:'Петр', lname:'Иванов', createdAt:new Date(), updatedAt:new Date(), isActive:true},
    {id:'3', name:'Петр', lname:'Иванов', createdAt:new Date(), updatedAt:false, isActive:false}
  ]
  //const forms = false;
  const user = false

  return (
    <>
      {user && <UserBlock user={forms[0]}/>}
      {forms && <FormsList forms={forms} withUser={Boolean(user)}/>}
      {!(user || forms) && <SearchFailure/>}
    </>
  )
}
