import React from 'react'

const Registerform = ({handlesumit,
    name,lastname,email,password,avatar,setName,setLastName,setEmail,setPassword,setAvatar}) => {

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


    return (
        <div className='container'>
          <div className='row'>
            <div className='col-8 offset md-2'>
              <input name={name} lastname={lastname} email={email} password={password} avatar={avatar} setName={setName} setLastName={setLastName} setEmail={setEmail} setPassword={setPassword} setAvatar={setAvatar} />
            </div>
          </div>
        </div>
      );
    }
export default Registerform