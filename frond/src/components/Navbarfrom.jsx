import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

const Navbarfrom = () => {
  const { store, actions } = useContext(Context);
  const navigate= useNavigate ();
  <ul className="nav justify-content-center py-3">

  {
    store.currentUser === null ?
   (
    <li className="nav-item">
      <Link className="nav-link" to="/login">Login</Link>
    </li>
  ):(
    <>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
      <li className='nav-item'>
        <Link className="nav-link" to="/profile">Profile</Link>
      </li>
      <li className='nav-item'>
        <a className='nav-link' to="/#" onClick={(e)=>{
          e.preventDefault();
          actions.getLogout();
          navigate('/login');
        }}>Logout </a>
      </li>
      <li className='nav-item'>
       {
         store.currentUser?.user?.avatar !== "" ?
         ({}):
       (
        <img src="./profile" alt="avatar" width={40} height={40} className="rounded-circle"/>
        )
       
       }
      </li>    
    </>
   
  )
}
</ul>
}

export default Navbarfrom