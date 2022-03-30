import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'


export const CartWidget = () => {

    const { quantityCart } = useContext(CartContext)
    return (
        <Link to="/cart" role="button" className="relative flex">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1200 1200"><path fill="#FDE047" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0zM297.583 253.491l106.787 33.545c14.137 4.643 23.553 17.771 25.195 31.201l6.006 58.812l483.545 53.979c20.763 4.022 35.353 22.769 32.446 42.041l-30.029 169.188c-3.822 17.697-18.479 29.828-34.79 30.029H457.178l-8.423 47.974h407.959c21.332.751 36.957 16.995 37.207 35.962c-.885 21.638-18.325 35.801-37.207 36.035H405.542c-22.756-1.882-39.462-19.915-35.962-41.968l19.189-105.615l-30.029-295.236l-82.764-26.366c-9.6-3.2-16.806-9.219-21.606-18.019c-9.082-19.032-.599-40.104 15.601-49.219c9.246-4.806 18.276-5.405 27.612-2.343zm162.598 559.497c31.066 0 56.25 25.184 56.25 56.25c0 31.065-25.184 56.25-56.25 56.25c-31.064 0-56.25-25.185-56.25-56.25c0-31.066 25.184-56.25 56.25-56.25zm330.175 0c31.065 0 56.25 25.184 56.25 56.25c0 31.065-25.185 56.25-56.25 56.25s-56.25-25.185-56.25-56.25c0-31.066 25.185-56.25 56.25-56.25z"/></svg>
            <span className="absolute left-5 top-0 rounded-full bg-red-500 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {quantityCart()}
            </span>
        </Link>
    )
}