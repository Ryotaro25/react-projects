import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items, removeItem, editItem}) => {
  return (
  <div className='grocery-list'>
  {items.map((item) => {
    const {id, title} = item;
    return <a key={id} className="grocery-item">
      <p className="title">{title}</p>
      <div className="btn-container">
        <button type='button' className='edit-btn' onClick={() => editItem(id) }>
          <FaEdit />
        </button>
         <button type='button' className='delete-btn' onClick={() => removeItem(id)}>
          <FaEdit />
        </button>
      </div>
    </a>
  })}
  </div>);
}

export default List
