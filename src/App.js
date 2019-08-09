import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Layout from "./components/layout";
import Header from "./components/header";


function App() {
  return (
    <main role="main" className="container" style={{backgroundColor: '#e3f2fd'}}>
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
