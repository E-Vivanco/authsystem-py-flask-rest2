import { useContext, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { Context } from "../store/appContext";

const Home = () => {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate()


  useEffect(() => {
      if(store.currentUser === null){
            navigate('/login')
      }
  }, [store.currentUser])
  

  return (
    <div>Home</div>
  )
}

export default Home

/*
import { useContext, useEffect } from "react"
import {useNavigate} from "react-router-dom";
#import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext"

export default function Home(){

    const { store, actions } = useContext(Context);
    #const history = useHistory();
	const navigate = useNavigate()


    useEffect(() => {
        if(store.currentUser === null){
            	navigate('/login')
        }
    }, [store.currentUser])
    
    return (
        <h1>Home</h1>
    )
}

*/