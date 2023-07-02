export const Form = () => {
  return (
    <form className='add-form'>
      <h3> What do you need for your tripe?</h3>
      <select name='' id=''>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((el, i) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
      <input type='text' placeholder='Item...' />
      <button>Add</button>
    </form>
  );
};
