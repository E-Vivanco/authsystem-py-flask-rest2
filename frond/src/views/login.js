import { useContext, useEffect, useState } from "react"
import { Context } from "../store/appContext";
import Swal from 'sweetalert2';
import { useNavigate} from "react-router-dom";

const Login = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    
    const [data, setData] = useState({
        email:'',
        password: ''
    })

    const handleChange = e => {
        const { email, value } = e.target;
        setData({
            ...data,
            [email]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const resp = await actions.getLogin(data)
        console.log(resp);
        if(resp.access_token){
            Swal.fire({
                title: 'Inicio de Session!!',
                confirmButtonText: 'Ok',
              }).then((result) => {
                
                if (result.isConfirmed) {
                    navigate('/')
                }
              })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: resp.msg,
                footer: 'Please try again!'
            })
        }
    }

    useEffect(() => {
        if(store.currentUser !== null){
            navigate('/login')
        }
    }, [store.currentUser])


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 col-sm-12 col-12">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="username">Email</label>
                            <input type="text" name="email" value={data.email} className="form-control" placeholder="Insert email" onChange={handleChange} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={data.password} className="form-control" placeholder="Insert password" onChange={handleChange} />
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-info mb-3">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login

