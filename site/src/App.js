import React from 'react';
import Routers from './router'
import Layout from './layout'
import Footer from './footer'
import './style/app.css';


function App() {
  return (
    <>

    <Layout> </Layout>

    <div className="container">
        
      <div className="content">
        

        <Routers></Routers>

      </div>

    </div>
      <Footer> 
          
      </Footer>
    </>
  );
}

export default App;
