import { collection, addDoc, Timestamp, updateDoc, doc, getDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { CartContext } from "./context/CartContext"
import { db } from "../../src/utils/firebase"
import { Button } from "../helper/Button"

export const Checkout = () => {
    
    const {cart, totalCart, emptyCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const createOrder = () => {
        const order = {
            buyer: values,
            items: cart,
            total: totalCart(),
            date: Timestamp.fromDate(new Date())
        }

        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, order)
            .then((resp) => {
                cart.forEach((item) => {
                    const docRef = doc(db, 'items', item.id)
                    getDoc(docRef)
                        .then((dbDoc) => {
                            updateDoc(docRef, {stock: dbDoc.data().stock - item.count})
                        })
                })

                setOrderId(resp.id)
                emptyCart()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const [values, setValues] = useState({
        name:'',
        email:'',
        phone:''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.name.length < 3) {
            alert("The name is too short")
            return
        }
        if (values.email.length < 5) {
            alert("The email is not valid")
            return
        }
        if (values.phone.length < 8) {
            alert("The phone number is not valid")
            return
        }

        createOrder()
    }

    if (orderId) {
        return (
            <div className="h-screen flex flex-col items-center justify-center">
                <h2 className="text-4xl text-center">Thank you for your purchase!</h2>
                <h3 className="text-2xl text-center">Your order number is: {orderId}</h3>
                <Link to="/" className="flex justify-center"><Button>Get more items!</Button></Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="h-screen">
            <h2 className="text-4xl text-center">Checkout</h2>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center my-20">
                    <fieldset className="flex flex-col items-center gap-4 my-40 py-4 px-10 bg-yellow-300 border-2 border-gray-700">
                        <legend className="text-2xl font-semibold text-center mt-10">Thank you for your purchase!</legend>
                    <input className="bg-black placeholder:text-white focus:outline-none focus:border-2 focus:border-gray-400 w-72" type="text" placeholder="Your name" value={values.name} onChange={handleInputChange} name="name"/>

                    <input className="bg-black placeholder:text-white focus:outline-none focus:border-2 focus:border-gray-400 w-72" type="email" placeholder="Your email" value={values.email} onChange={handleInputChange} name="email"/>

                    <input className="bg-black placeholder:text-white focus:outline-none focus:border-2 focus:border-black w-72" type="tel" placeholder="Your phone number" value={values.phone} onChange={handleInputChange} name="phone"/>

                    <button type="submit" className="border-2 border-gray-900 bg-yellow-300 font-semibold mx-10 w-48 rounded-full mt-2">Send</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}