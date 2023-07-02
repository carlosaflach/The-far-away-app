import { useState } from 'react';

export const Form = ({ setItens }) => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log('newItem', newItem);

    setItens((prev) => [...prev, newItem]);

    setDescription('');
    setQuantity(1);
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3> What do you need for your tripe?</h3>
      <select name='' id='' value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((el, i) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
      <input type='text' placeholder='Item...' value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  );
};
