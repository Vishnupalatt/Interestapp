import { useState } from 'react';
import './App.css';
import { TextField,Button,Stack } from '@mui/material';

function App() {
  const [total,setTotal]=useState(0)
  const [principle,setPrinciple]=useState('')
  const [rate,setRate]=useState('')
  const [time,setTime]=useState('')

  const [validPrinciple,setValidPrinciple]=useState(true)
  const [validRate,setValidRate]=useState(true)
  const [validTime,setValidTime]=useState(true)
  
 const handleSubmit=(e)=>{
    e.preventDefault()
    if(!principle || !rate || !time){
      alert("Enter Valid Value")
    }
    else{
      let a=principle*rate/100*time
      setTotal(a)
    }
  }
  function handleReset(){
    setPrinciple(0)
    setTime(0)
    setRate(0)
    setTotal(0)
    setValidPrinciple(true)
    setValidRate(true)
    setValidTime(true)    

  }
  const validateInput=(e)=>{
    const {name,value}=e.target
    // console.log(!!value.match((/^[0-9]{1,}$/)))
    if(!!value.match((/^[0-9]{1,}$/))){
      if(name=='principle'){
        setPrinciple(value)
        setValidPrinciple(true)
      }
      else if(name=='rate'){
        setRate(value)
        setValidRate(true)
      }
      else{
        setTime(value)
        setValidTime(true)
      }
    }
    else{
      if(name=='principle'){
        setPrinciple(value)
        setValidPrinciple(false)
      }
      else if(name=='rate'){
        setRate(value)
        setValidRate(false)
      }
      else{
        setTime(value)
        setValidTime(false)
      }
    }
  }
// console.log(handleReset)
  // console.log(principle,rate,time)
  return (
    <div style={{height:'100vh'}} className="w-100 d-flex justify-content-center align-items-center bg-dark ">
      <div className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate Your Simple Interest Easily</p>
        <div style={{backgroundColor:'#ebdb34'}} className='text-center rounded '>
          <h4 className='pt-3'>₹{' '}{total}</h4>
          <p className='pb-3'> Total Simple Interest</p>
        </div>
        <form onSubmit={(event)=>handleSubmit(event)}>
          <div className='d-flex flex-column '>
           <div>
        <TextField className='mt-4 w-100' id="outlined-basic1" label="₹ Principal amount" variant="outlined" 
        value={principle} name='principle' onChange={(event)=>validateInput(event)}/>
        {
          !validPrinciple &&
          <div className='text-danger'>
            *invalid principle amount value
          </div>
        }
          </div>
          <div>
        <TextField className='mt-4 w-100' id="outlined-basic2" label="₹ Rate of interest (p.a) %" variant="outlined"
         value={rate} name='rate' onChange={(event)=>validateInput(event)}/>
         {
          !validRate &&
          <div className='text-danger' >
            *invalid rate of interest value
          </div>

         }
         </div>
            <div>
        <TextField className='mt-4 w-100' id="outlined-basic3" label="₹ Time period ( yr )" variant="outlined"
         value={time} name='time' onChange={(event)=>validateInput(event)} />
         {
          !validTime &&
          <div className='text-danger'>
            *invalid time period
          </div>
         }
           </div>
          </div>
          <Stack direction={'row'} spacing={2} className='mt-4 '>
             <Button type='submit'  variant="contained" className='bg-dark w-50 py-2' disabled={validPrinciple && validRate && validTime ? false:true}>Calculate</Button>
             <Button onClick={handleReset}  variant="outlined" className='w-50 py-2'>Reset</Button>
        </Stack>


        </form>   
      </div>
    </div>
  )
}

export default App;
