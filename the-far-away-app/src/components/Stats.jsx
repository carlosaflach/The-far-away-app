export const Stats = ({ itens }) => {
  if (!itens.length)
    return (
      <p className='stats'>
        <em>Start adding some items to your packing list 🚀 </em>
      </p>
    );

  const numItems = itens.length;
  const numPacked = itens.filter((item) => item.packed).length;

  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? ' You got everything! Ready to go ✈️'
          : `🧳 You have ${numItems} items on your list, and you already pack ${numPacked} ${percentage}%`}{' '}
      </em>
    </footer>
  );
};
