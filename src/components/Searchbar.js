import { useState } from 'react';

export default function Searchbar({ apiFetcher, getSearchValue }) {

  const [ searchValue, setSearchValue ] = useState('');

  const onChange = (e) => {
    setSearchValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // apiFetcher(searchValue);
    if (searchValue.length > 0) {
      getSearchValue(searchValue);
      setSearchValue('');
    }
  }

  return (
    <form onSubmit={onSubmit} className="search-form">
      <input className="search-form__input" type="text" onChange={onChange} value={searchValue} placeholder="Enter a city..." />
      <input type="submit" className="search-form__button" value="Search" />
    </form>
  )
}
