import React, { useState } from 'react';

function EmojiButton({ id, src, label, onSelect }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected); // Toggle isSelected state on click
    onSelect(id); // Notify parent component (Home) of selected emoji
  };

  return (
    <button
      className={`mood-emoji-btn ${isSelected ? 'selected-emoji' : 'unselected-emoji'}`}
      onClick={handleClick} // Pass handleClick function to onClick event
    >
      <img src={src} alt={label} />
    </button>
  );
}

export default EmojiButton;

  //