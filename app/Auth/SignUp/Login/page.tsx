import React from 'react'

function login() {
  return (
   <form>
    <label>Email</label>
    <input type='email' placeholder='enter your email here...'></input>
    <label>Password</label>
    <input type='password' placeholder='enter your passwrod...'></input>
    <button>Submit</button>
   </form>
  )
}

export default login
