import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginCheck({ isLoggedIn }) {
    // const [token, setToken] = useState(null);
   const [decodedToken, setDecodedToken] = useState(null);
 const [nombre, setNombre] = useState("");

    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setDecodedToken(parseJwt(token));
            setNombre(parseJwt(token).name);
            console.log(decodedToken)
            isLoggedIn = true;
        }
    }, []);


    
    return (
        <>
            {isLoggedIn ? (
                <div>
                    <p>Bienvenido,{nombre}</p>
                </div>
            ) : (
                <div>
                    <p>No has iniciado sesión</p>
                </div>
            )}
        </>
    );
}

export default LoginCheck;