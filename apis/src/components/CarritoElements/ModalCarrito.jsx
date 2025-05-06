import { useContext } from "react"
import { CarritoContext } from "../../context/carrito"
import { Icon } from "@iconify/react/dist/iconify.js"


function ModalCarrito() {
    const { carrito, quitarCarrito } = useContext(CarritoContext)
    return (
        <div className=" group-hover:flex absolute top-10 right-10 flex-col gap-2 bg-white py-4 px-2 rounded-xl z-12 min-w-fit">
            {carrito && carrito.map((item) => (
                <div key={item.id} className="flex gap-2 items-center justify-start text-gray-400 p-2 border-gray-300 border-b-1 " >
                    <Icon icon="solar:cart-cross-broken"
                        onClick={() => quitarCarrito(item.id)}
                        width="24" height="24" className="cursor-pointer hover:text-red-500" />
                    <h4 className="">{item.cantidad}- {item.title}</h4>
                </div>
            ))}
        </div>
    )
}

export default ModalCarrito