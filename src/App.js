import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Components/Form/Form';
import UserList from './Components/UserList/UserList';
import Nav from './Components/Nav/Nav';

function App() {
  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem('userList');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('userList', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems(prev => [...prev, item]);
  };

  return (
    <Router>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Form onRegister={addItem} />} />
          <Route path="/users" element={<UserList data={items} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
