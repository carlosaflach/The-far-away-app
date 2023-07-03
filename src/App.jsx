import { useState } from 'react';
import { Form } from './components/Form';
import { Logo } from './components/Logo';
import { PackingList } from './components/PackingList';
import { Stats } from './components/Stats';

export default function App() {
  const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: false },
  ];
  const [itens, setItens] = useState(initialItems);

  const removeItem = (id) => {
    setItens(itens.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItens((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
  };

  const handleDeleteAllItens = () => {
    const confirmed = window.confirm('Are you sure you want to delete all items?');
    confirmed && setItens([]);
  };

  return (
    <div className='app'>
      <Logo />
      <Form onAddItem={setItens} />
      <PackingList itens={itens} onDeleteItem={removeItem} onToggleItem={handleToggleItem} onDeleteAllItens={handleDeleteAllItens} />
      <Stats itens={itens} />
    </div>
  );
}
