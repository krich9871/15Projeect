import React, { useState } from 'react';

import Categories from './Component/Categories';
import Menu from './Component/Menu';
import item_data from './data/data'

const allCategories = ['all', ...new Set(item_data.map((item_s) => item_s.category))];
function App() {


  const [menuitems, Setmenuitens] = useState(item_data);
  const [categories, Setcategories] = useState(allCategories);

  const filteritems = (categories) => {
    if (categories === 'all') {
      Setmenuitens(item_data);
      return;
    }
    const finditems = item_data.filter((items) => items.category === categories)
    Setmenuitens(finditems);
  }
  return (
    <main>
      <section className=' menu section'>
        <div className='title'>
          <h2>Menu Come!!!</h2>
        </div>
        <Categories categories={categories} filteritems={filteritems} />
        <Menu item_data={menuitems} />
      </section>
    </main>
  );
}

export default App;
