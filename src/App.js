import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const categories = items.map((item) => item.category);
  const uniqueCategories = ['all', ...new Set(categories)];

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories uniqueCategories={uniqueCategories} />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
