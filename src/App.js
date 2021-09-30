import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import Newpaper from './Components/Newspaper/Newpaper';

function App() {
  return (
    <div className="App">
      <Button variant="contained">Connect Me</Button>
      <Newpaper></Newpaper>
    </div>
  );
}

export default App;
