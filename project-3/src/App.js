import React from 'react';

import Review from './Component/Review';

function App() {
  return (
    <>
      <main>
        <div className='container'>
          <div className='title'>
            <h3>
              All our reviews

            </h3>
          </div>
          <Review />
        </div>

      </main>
    </>
  );
}

export default App;
