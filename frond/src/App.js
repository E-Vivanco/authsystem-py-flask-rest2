import RegisterForm from './auth/registerform';
import './App.css';
import { useState } from 'react';

function App() {
  const[name,setName]=useState('')
  const[lastname,setLastName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('none')
  const[avatar,setAvatar]=useState('sin-imagen')

  const handlesumit= async e =>{
    e.preventDefault()

    const formData= new FormData()
    formData.append('name',name);
    formData.append('lastname',lastname);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('avatar',avatar);

    const data2 =await registerFetch(formData);
     console.log(data2)
  }
  const registerFetch =async data =>{
    const resp= await fetch('https://5000-evivanco-authsystempyfl-r906cwdh8n8.ws-eu93.gitpod.io/api/register',{method:'POST',body: data})
    const data2 = await resp.json()
    return data2
  }


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8 offset md-2'>
          <RegisterForm handlesumit={handlesumit} name={name} lastname={lastname} email={email} password={password} avatar={avatar} setName={setName} setLastName={setLastName} setEmail={setEmail} setPassword={setPassword} setAvatar={setAvatar} />
        </div>
      </div>
    </div>
  );
}

export default App;
