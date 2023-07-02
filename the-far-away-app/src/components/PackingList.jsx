import Item from './Item';

export const PackingList = ({ itens, setItens, onDelete }) => {
  return (
    <div className='list'>
      <ul>
        {itens.map((item) => (
          <Item key={item.id} item={item} updateItens={setItens} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};
