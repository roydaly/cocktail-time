import React from 'react';

const DrinkFaves = props => {

  function handleClick(e) {
    e.stopPropagation()
    props.handleFaveToggle()
  }

  let addRemove = ''
  if (props.isFave) {
    addRemove = 'remove_from_queue'
  } else {
    addRemove = 'add_to_queue'
  }

  return (
    <div onClick={handleClick} className={'drink-row-fave ' + addRemove}>
      <p className='material-icons'>{addRemove}</p>
    </div>
  );
}

export default DrinkFaves; 