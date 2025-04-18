import React from 'react';
import  Menu  from './components/menustatic';
import Footer from './components/footer';
import * as stylex from '@stylexjs/stylex';

const appStyles = stylex.create({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
    padding: '2rem',
    textAlign: 'center',
  },
});   

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Menu />
      <main>
        <h1>Welcome to Tunester</h1>
        <p>Your one-stop platform for music and events!</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
