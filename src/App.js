import './App.css';
import Body from './components/Body'
import Countdown from './components/Countdown'
import Social from './components/Social'

function App() {
  return (
    <div className="App">
     <div id='mainWrapper' className='bg-background h-screen'>
      <div id='mainContainer' className='bg-[url("/src/images/bg-stars.svg")] h-full pt-[142px] flex flex-col justify-between'>
        <div id='bodyWrapper' className='mb-[54px] px-6'>
          <Body />
        </div>
        <div id='countdownWrapper' className='mb-[163px] px-6'>
          <Countdown />
        </div>
        <div id='socialWrapper'>
          <Social />
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
