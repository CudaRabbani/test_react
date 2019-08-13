import React from 'react';
import './App.css';
import Layout from "./components/layout";
import Header from "./components/header";
import Axios from 'axios';


function App() {
    console.log (React.version);
  return (
    <main role="main" className="container-fluid" style={{backgroundColor: '#e3f2fd'}}>
        <div className="row">
            <div className="col">
                <Header/>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <Layout/>
            </div>
        </div>
    </main>
  );
}

export default App;
