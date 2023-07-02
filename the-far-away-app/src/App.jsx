import { useState } from 'react';
import { Form } from './components/Form';
import { Logo } from './components/Logo';
import { PackingList } from './components/PackingList';
import { Stats } from './components/Stats';

export default function App() {
  const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: true },
    { id: 2, description: 'Socks', quantity: 12, packed: false },
  ];
  const [itens, setItens] = useState(initialItems);

  const removeItem = (id) => {
    console.log('id', id);

    setItens(itens.filter((item) => item.id !== id));
  };
  return (
    <div className='app'>
      <Logo />
      <Form setItens={setItens} />
      <PackingList itens={itens} setItens={setItens} onDelete={removeItem} />
      <Stats />
    </div>
  );
}
