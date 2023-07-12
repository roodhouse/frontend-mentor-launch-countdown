import './App.css';
import Body from './components/Body'
import Countdown from './components/Countdown'
import Social from './components/Social'

function App() {
  return (
    <div className="App">
     <div id='mainWrapper' className='bg-background h-screen'>
      <div id='mainContainer' className='bg-[url("/src/images/bg-stars.svg")] h-full pt-[142px] px-6 pb-12'>
        <div id='bodyWrapper' className='mb-[54px]'>
          <Body />
        </div>
        <div id='countdownWrapper' className='mb-[163px]'>
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
