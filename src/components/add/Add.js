import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAns,
  sendNumbersToStore,
  subTraction,
  fetchs,
  multiplication,
  fetchm,
  division,
  fetchd,
  addition
} from '../../redux/addRedux/add.actions';
import { ADD_KEY, DIV_KEY, MUL_KEY, SUB_KEY } from '../../redux/addRedux/addReducer';

const Add = () => {
  let dispatch = useDispatch();
  let [number, setNumber] = useState({
    num1: '',
    num2: '',
    ans: ''
  });

  let handleChange = event => {
    setNumber({
      ...number,
      [event.target.name]: event.target.value
    });
  };
  // let handleChangeAdd = event => {
  //   setNumber({
  //     ...number,
  //     [event.target.name]: event.target.value
  //   });
  // };

  let handleChangeSub = event => {
    setNumber({
      ...number,
      [event.target.name]: event.target.value
    });
  };

  // let handleChangeMul = event => {
  //   setNumber({
  //     ...number,
  //     [event.target.name]: event.target.value
  //   });
  // };
  // let handleChangeDiv = event => {
  //   setNumber({
  //     ...number,
  //     [event.target.name]: event.target.value
  //   });
  // };


  let handleClear = () => {
    setNumber({
      ...number,
      num1: '',
      num2: '',
      ans: ''
    });
  };
  let handleAdd = event => {
    event.preventDefault();
   
    dispatch(addition(number));
    dispatch(fetchAns(number));
  };

  let handleSub = event => {
    event.preventDefault();
    dispatch(subTraction(number));
    dispatch(fetchs(number));
  };

  // let handleMul = event => {
  //   event.preventDefault();
  //   dispatch(multiplication(number));
  //   dispatch(fetchm(number));
  // };
  // let handleDiv = event => {
  //   event.preventDefault();
  //   dispatch(division(number));
  //   dispatch(fetchd(number));
  // };

  let viewAdd = useSelector(state => {
    return state[ADD_KEY];
  });
      let viewSub = useSelector((state)=>{
        return state[SUB_KEY]
    })

//     let viewMul = useSelector((state)=>{
//       return state[MUL_KEY]
//   })

//   let viewDiv = useSelector((state)=>{
//     return state[DIV_KEY]
// })

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-4" />
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">COUNTER APP</div>
            <div className="card-body">
              <form >
                <div className="form-group mb-4">
                  <label for="num1">First Input</label>
                  <input
                    name="num1"
                    value={number.num1}
                    onChange={handleChange}
                    type="number"
                    placeholder="0"
                    className="form-control"
                  />
                </div>

                <div className="form-group mb-4">
                  <label for="num2">Second Input</label>
                  <input
                    name="num2"
                    value={number.num2}
                    onChange={handleChange}
                    type="number"
                    placeholder="0"
                    className="form-control"
                  />
                </div>

                <div className="form-group mb-4" >
                  <label for="ans">Add</label>
                  <input
                    name="ans"
                    value={viewAdd.ans}
                    onChange={handleChange}
                    type="number"
                    placeholder="0"
                    className="form-control"
                    disabled
                  />
                </div>

                <div className="form-group mb-4" >
                  <label for="ans">Sub</label>
                  <input
                    name="ans"
                    value={viewSub.ans}
                    onChange={handleChangeSub}
                    type="number"
                    placeholder="0"
                    className="form-control"
                    disabled
                  />
                </div>

                {/* <div className="form-group mb-4" >
                  <label for="ans">Mul</label>
                  <input
                    name="ans"
                    value={viewMul.ans}
                    onChange={handleChangeMul}
                    type="number"
                    placeholder="0"
                    className="form-control"
                    disabled
                  />
                </div>

                <div className="form-group mb-4" >
                  <label for="ans">Div</label>
                  <input
                    name="ans"
                    value={viewDiv.ans}
                    onChange={handleChangeDiv}
                    type="number"
                    placeholder="0"
                    className="form-control"
                    disabled
                  />
                </div> */}

                <div className="form-group mb-4">
                  <button
                    onClick={handleClear}
                    className="btn btn-secondary btn-sm"
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success btn-sm"
                    style={{ marginLeft: 15 }}
                    onClick={handleAdd}
                  >
                    ADD
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success btn-sm"
                    style={{ marginLeft: 15 }}
                    onClick={handleSub}
                  >
                    SUB
                  </button>
                  {/* <button
                    type="submit"
                    className="btn btn-success btn-sm"
                    style={{ marginLeft: 15 }}
                    onClick={handleMul}
                  >
                    MUL
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success btn-sm"
                    style={{ marginLeft: 15 }}
                    onClick={handleDiv}
                  >
                    DIV
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4" />
        <div className="col-md-4" />
      </div>
    </React.Fragment>
  );
};
export default Add;
