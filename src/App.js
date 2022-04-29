import './App.css';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      Macarella

      <div>
        <Button name={'first'} />
        <Button name={'second'}/>
        <Button name="third"/>
        <Button name="fourth"/>
      </div>


    </div>
  );
}

export default App;
