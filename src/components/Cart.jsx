import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import { Button } from '../helper/Button'
import { Link } from 'react-router-dom'

export const Cart = () => {

    const { cart, totalCart, emptyCart, clearItem } = useContext(CartContext)

    if (cart.length === 0) {
        return <div className="h-screen">
            <h2 className="text-4xl text-center mt-96">Your cart is empty</h2>
            <p  className="text-2xl text-center">Go ahead and add some cool items to it!</p>
            <Link to="/" className="flex justify-center"><Button>Item List</Button></Link>
        </div>
    }


    return (
        <>
            <div className="h-screen">
                <h2 className="text-4xl text-center">Cart content</h2>
                <hr/>

                {
                    cart.map((item) => (
                        <div className="flex flex-col items-center">
                            <div className=" flex flex-row p-2 gap-2 bg-black w-max m-5 border-2 border-white-700 text-white" key={item.id}>
                                <div className="flex flex-col">
                                <h4 className="text-2xl">{item.name}</h4>
                                    <div className="flex flex-col items-center">
                                    <img className="flex border-2 border-gray-900 mt-2 w-56" src={item.img} alt={item.name}></img>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col justify-center items-center font-semibold ml-4 border-2 border-gray-500 mt-2 space-y-2">
                                                <p>Quantity: {item.count}</p>
                                                <p>Price: ${(item.count * item.price).toFixed(2)}</p>
                                                <button className="flex justify-center w-10 border-2 h-8 items-center border-white text-black bg-yellow-300 rounded-full" onClick={() => clearItem(item.id)}>
                                                    <BsFillTrashFill />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <hr/>
                <div className="flex flex-col items-center">
                    <h2 className="font-semibold text-2xl">Total: ${totalCart().toFixed(2)}</h2>

                    <div className="w-60">
                        <button className="text-lg font-medium border-2 w-full border-white bg-yellow-300 rounded-full" onClick={emptyCart}>Empty Cart</button>
                        <Link to="/checkout"><button className="text-lg font-medium border-2 w-full border-white bg-yellow-300 rounded-full">Proceed to checkout</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}