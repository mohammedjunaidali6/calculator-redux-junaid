import React from 'react';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter, multiplyCounter, divisionCounter } from './redux/Counter/counter.actions';
import { Button } from 'react-bootstrap';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h3>Count : {props.count}</h3>
      <Button className="btn1" onClick={()=> props.increaseCounter()}>Addition</Button><br/><br/>
      <Button className="btn2" onClick={()=> props.decreaseCounter()}>Subtraction</Button><br/><br/>
      <Button className="btn3" onClick={()=> props.multiplyCounter()}>Multiply</Button><br/><br/>
      <Button className="btn4" onClick={()=> props.divisionCounter()}>Division</Button><br/><br/>


    </div>
  );
}

const mapStateToProps = state => {
 return{
  count: state.counter.count,
 }
}
const mapDispatchToProps = dispatch => {
  return{
    increaseCounter:() =>dispatch(increaseCounter()),
    decreaseCounter:() =>dispatch(decreaseCounter()),
    multiplyCounter:()=> dispatch(multiplyCounter()),
    divisionCounter:()=> dispatch(divisionCounter()),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
