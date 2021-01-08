import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Hello from './components/Hello.js'
import Message from './components/Message'
import Counter from './components/Counter'
import EvintBind from './components/EvintBind'
import Parent from './components/Parent'
import IFcomponent from './components/Conditional'
import ListName from './components/ListName'
import Form from './forms/Form'
import Refinput from './refs/Refs'
import ParentRefs from './refs/ParentRefs'
import ForwardRefs from './refs/ParentForwardRefs'
import Portal from './refs/Portals'
function App() {
  return (
    <div className="App">
      {/* <Greet  name="first props in class" mytry="1"/>
      <Hello name="hamza" >
        <button> press </button>
        <button> press </button>
      </Hello>
      <Message />
      <Counter /> */}
      {/* <EvintBind /> */}
      {/* <Parent /> for send eventHandler from parent to Child by props */}
      {/* <IFcomponent />for if Condition in render (HTML) */}
      {/* <ListName /> renfering list on view by using map in component */}
      {/* <Form /> form and state and submit  */}
      {/* <Refinput /> call ref from same class */}
      <ParentRefs /> call ref from another component 
      {/* <ForwardRefs /> easiest way to forward Ref from parent to child */}
      {/* <Portal /> */}
    </div>
  );
}

export default App;
