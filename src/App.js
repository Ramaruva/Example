import logo from './logo.svg';
import './App.css';
import {Change} from './components/counter'
import { Todo } from './components/Todo';
import { Input } from './components/Input';
import {Routes} from './routes/Routes';
function App() {
  return (
    <div className="App">
      <header >
        <Routes />
      </header>
    </div>
  );
}

export default App;
