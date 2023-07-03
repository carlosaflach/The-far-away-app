import Item from './Item';

export const PackingList = ({ itens, onAddItem, onDeleteItem, onToggleItem }) => {
  return (
    <div className='list'>
      <ul>
        {itens.map((item) => (
          <Item key={item.id} item={item} onAddItem={onAddItem} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        ))}
      </ul>
    </div>
  );
};
