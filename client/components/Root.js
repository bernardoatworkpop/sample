import React from 'react';

// internal
import Layout from './Layout';
import Button from './Button';

function Root() {
  return (
    <div style={{textAlign: 'center'}}>
      <Layout>
        <Button
          onClick={()=> {console.log('I was clicked!');}}
          label='I am your label!'
        />
      </Layout>
    </div>
  );
}

export default Root;
