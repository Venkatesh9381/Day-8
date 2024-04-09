import React, { useState } from 'react'

const Deposit = () => {
    const [amount,setAmount]=useState(0);

    const handleAmount=()=>{
        // setAmount(amount+100);
        // console.log(amount);
        setAmount((previousValue)=>{
          return  previousValue+100;
         
        })
    }

  return (
    <div>
        <h1>Current Amount:{amount}</h1>
        <button onClick={handleAmount}>Deposit:100</button>
      
    </div>
  )
}

export default Deposit
