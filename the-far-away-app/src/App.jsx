export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
    </div>
  );
}

export const Logo = () => {
  return <h1>FarWay Logo</h1>;
};

export const Form = () => {
  return (
    <div className='add-form'>
      <h3> What do you need for your tripe?</h3>
    </div>
  );
};

export const PackingList = () => {
  return <div className='list'>LIST</div>;
};

export const Stats = () => {
  return (
    <footer>
      <em> You have x Items on your list, and you already pack X%</em>
    </footer>
  );
};
