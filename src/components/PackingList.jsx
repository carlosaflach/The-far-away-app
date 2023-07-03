import { useState } from 'react';
import Item from './Item';

export const PackingList = ({ itens, onAddItem, onDeleteItem, onToggleItem }) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItens;

  if (sortBy === 'input') sortedItens = itens;

  if (sortBy === 'description') sortedItens = itens.slice().sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed') sortedItens = itens.slice().sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className='list'>
      <ul>
        {sortedItens.map((item) => (
          <Item key={item.id} item={item} onAddItem={onAddItem} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        ))}
      </ul>
      <div className='actions'>
        <select name='' id='' value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
      </div>
    </div>
  );
};
