import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Greetings Young Adventurer! I trust this letter finds you well. I am Edith Lawke, of Lawke's Academy for Adventurous Youth."/>
    </>    
  );
}

export default App;
