import { useSearchParams } from 'react-router-dom'
import { getFormData } from '../../custom/getFormData'
import styles from './Search.module.scss'
import { SearchForm } from './SearchForm'
import { SearchResults } from './SearchResults'

export const Search = () => {
  const [query, setQuery] = useSearchParams()

  const submitHandler = (e) => {
    e.preventDefault()
    setQuery(getFormData(e.target))
  }

  return (
    <div className={styles.content}>
       {query.has('email') ? 
       <SearchResults/> :
       <SearchForm submitHandler={submitHandler}/>
       }
    </div>
  )
}
