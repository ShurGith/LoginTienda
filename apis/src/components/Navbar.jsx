import { NavLink } from 'react-router-dom'
import Enlaces from '../data/Enlaces'
import { Icon } from "@iconify/react";
import { useContext } from 'react';
import { CarritoContext } from '../context/carrito';
import ModalCarrito from './CarritoElements/ModalCarrito';
import { LogueadoContext } from '../context/logueado';

function Navbar() {
    const { carrito } = useContext(CarritoContext)
    const { isLoggedIn } = useContext(LogueadoContext);
    const countCarrito = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <nav className='py-6 bg-slate-400 flex justify-around items-center relative'>

            <h1 className='text-2xl font-bold'>Ecommerce</h1>
            {isLoggedIn ? <h2 className='text-2xl font-bold'>Bienvenido {isLoggedIn.name}</h2> : null}
             
            <ul className='flex justify-center gap-4'>
                {Enlaces.map((enlace) => (
                    (enlace.nombre === "Login" || enlace.nombre === "Registro") && isLoggedIn ? "" :
                        enlace.nombre === "Logout" && !isLoggedIn ? "" :
                            <NavLink to={enlace.url} key={enlace.id}>
                                <li className='py-2 px-6 bg-amber-500 rounded-md min-w-[100px] text-white'>
                                    {enlace.nombre}
                                </li>
                            </NavLink>
                ))}
            </ul>
                {countCarrito > 0 &&
            <div className='group'>
                 <ModalCarrito />
                    <NavLink to={'/carrito'} className='relative'>
                        <Icon icon="solar:cart-large-broken" width="40" height="40" color="white" />
                        <output className='absolute -top-2 -right-2 bg-black text-white w-6 h-6 rounded-full flex justify-center items-center'>
                            {countCarrito}
                        </output>
                    </NavLink>
            </div>
                }

        </nav>
    )
}
export default Navbar

