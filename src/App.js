import React,{useState} from 'react';
import {connect} from 'react-redux'
import {increaseCounter, decreaseCounter, multiplyCounter, divisionCounter} from './redux/Counter/counter.actions';
import {Button} from 'react-bootstrap'
import './App.css'

function App(props) {
  const [count, setCount] = useState({input1:0, input2:0 }) 
  return(
    <div className="App">
      <h3>Count : {props.count}</h3>
      <label>First Input</label>
      <input type="number" name="input1"  required onChange={(e)=>{
        setCount({
          ...count,
          [e.target.name]: e.target.value
        })
      }} /><br/><br/>
       <label>Second Input</label>
      <input type="number" name="input2" required onChange={(e)=>{
        setCount({
          ...count,
          [e.target.name]: e.target.value
        })
      }} /><br/><br/>
      <Button classname="btn1" onClick={()=> props.increaseCounter(count)}>Add</Button>
      <Button classname="btn2" onClick={()=> props.decreaseCounter(count)}>Sub</Button>
      <Button classname="btn3" onClick={()=> props.multiplyCounter(count)}>Mul</Button>
      <Button classname="btn4" onClick={()=> props.divisionCounter(count)}>Div</Button>
    </div>
  )
}

const mapStateToprops = state => {
  return{
    count: state.counter.count,
  }
}
const mapDispatchToProps = dispatch => {
  return{
    increaseCounter:(count) =>dispatch(increaseCounter(count)),
    decreaseCounter:(count) =>dispatch(decreaseCounter(count)),
    multiplyCounter:(count) =>dispatch(multiplyCounter(count)),
    divisionCounter:(count) =>dispatch(divisionCounter(count))
  }
}
export default connect(mapStateToprops ,mapDispatchToProps)(App);