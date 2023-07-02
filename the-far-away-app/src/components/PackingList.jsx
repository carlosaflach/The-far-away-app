import Item from './Item';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: true },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
];

export const PackingList = () => {
  return (
    <div className='list'>
      <ul >
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
    </ul>
    </div>
  );
};
