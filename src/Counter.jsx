import React,{useState}from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increament,decreament,reset,countWithNum } from './redux/CounterSlice';

function Counter() {
  const  count=useSelector((store)=>store.counterReducer.counter)
  console.log(count);
  const dispatch=useDispatch()
  const [num,setNum]=useState(0)
  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:"80vh"}}>
    <div className='w-75 border border-2 border-light p-5'>
        <h3 className='text-center text-danger'>Counter</h3>
        <h2 className='text-center text-light'>{count}</h2>
        <div className=' d-flex justify-content-center'> 
        <button className='btn btn-success me-3' onClick={()=>{dispatch(increament())}}>+Incremdent</button>
        <button className='btn btn-danger me-3'onClick={()=>{dispatch(decreament())}}>-Decrement</button>
        <button className='btn btn-info' onClick={()=>{dispatch(reset())}}>Reset</button>
        </div>
        <div className='my-3 d-flex justify-content-around'>
          <input type="number" onChange={(e)=>{setNum(e.target.value)}} placeholder='Enter Number' className='form-control' />
          <button className='btn btn-primary' onClick={()=>{dispatch(countWithNum(num))}}>Count</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Counter