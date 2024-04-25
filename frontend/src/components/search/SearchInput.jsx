import { useState } from 'react';
import './search.css';

export function SeachInput({ placeholder, searchButton, border }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setText('');
  }

  return (
    <form
      className='search_slot'
      onSubmit={handleSubmit}
      style={{boxShadow: border ? 'var(--box-shadow-md)' : ''}}
    >
      <input
        type="text"
        value={text}
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value)}
        style={{width: searchButton ? 'auto' : '100%' }}
      />
      {searchButton && <button className='button'>
        <i className="bx bx-search-alt" ></i>
      </button>}
    </form>
  )
}
