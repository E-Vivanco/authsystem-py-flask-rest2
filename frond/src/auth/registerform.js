import React from 'react'

const RegisterForm = ({handlesumit,name,lastname,email,password,avatar,setName,setEmail,setAvatar}) => {
  return (
    <>
    <form onSubmit={handlesumit}>
        <div className='form-group mb-3'>
            <label htmlFor='form'>Name:</label>
            <input type="text" name="name" className="form-control" placeholder="Ingrese nombre"  value={name} onChange={e=>setName(e.target.value)}/>
        </div>
        <div className='form-group mb-3'>
            <label htmlFor='form'>Lastname:</label>
            <input type="text" name="lastname" className="form-control" placeholder="Ingrese apellido"  value={lastname} onChange={e=>setName(e.target.value)}/>
        </div>
        <div className='form-group mb-3'>
            <label htmlFor='form'>Email:</label>
            <input type="text" name="email" className="form-control" placeholder="Ingrese email"  value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className='form-group mb-3'>
            <label htmlFor='form'>Password:</label>
            <input type="password" name="password" className="form-control" placeholder="Ingrese password"  value={password} onChange={e=>setName(e.target.value)}/>
        </div>
        <div className='form-group mb-3'>
            <label htmlFor='form'>Avatar:</label>
            <input type="file" name="avatar" className="form-control" placeholder="Ingrese archivo"  onChange={e=>setAvatar(e.target.files)}multiple/>
        </div>
        <button className='btn btn-info mb-3'>Enviar</button>
    </form>
    </>
  )
}

export default RegisterForm