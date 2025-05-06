import { useContext, useEffect, useState } from "react";
import { LogueadoContext } from '../context/logueado';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const { token, setIsLoggedIn } = useContext(LogueadoContext);
    const navigate = useNavigate();
   

    useEffect(() => {
        if (token) {
            localStorage.removeItem('token');
            setIsLoggedIn("");
            navigate('/nosotros');
        }
    }, []);
  return (
    <div>Logout</div>
  )
}

export default Logout