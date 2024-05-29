import './App.css';
import Countdown from './components/CountdownLayout';
function App() {
  return (
    <div className='container'>
    <div className="App">
      <h1 style={{color: 'white'}}>Countdown <span style={{color:"#b54aff"}}>Timer</span></h1>
      <Countdown/>
    </div>
    </div> 
  );
}
export default App;