import React, { useState } from "react"
import AuthForm from "./AuthForm.js"

const initInputs = { username: "", password: ""}

export default function Auth(){
  const [ Inputs, setInputs ] = useState(initInputs)
  const [ toggle, setToggle ] = useState(false)

  function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }
  function handleSignup(e){
    e.preventDefault()
    //signup function from context with inputs for the parameter
  }
  function handleLogin(e){
    e.preventDefault()
    //login function from context with inputs for the parameter
  }
  function toggleForm(){
    setToggle(prev => !prev)
    //resetAuthErr function from context 


  }
  return(
    <div>
      {!toggle ?
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={}
            inputs={inputs}
            btnText=""
            errMsg={errMsg} />
          <p>Already a Member?</p>
        </>
        :
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={}
            inputs={inputs}
            btnText=""
            errMsg={errMsg} />
          <p>Not Yet a Member?</p>
        </>
      }
    </div>
  )
}