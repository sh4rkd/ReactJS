import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from "../../src/utils/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import { ItemList } from './ItemList'

const ItemListContainer = () => {
    const [products,setProducts]= useState([])
    const [loading,setLoading]=useState(false)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const itemsRef = collection(db, "items")
        const q = categoryId ? query(itemsRef, where("category","==", categoryId)) : itemsRef

        getDocs (q)
            .then((resp) => {
                setProducts(resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
        .finally(() => {
            setLoading(false)
        });
    }, [categoryId]);

    return (
        <div className="h-screen">
            {
                loading
                ? <h2 className="text-7xl font-semibold text-center pt-96">Loading...</h2>
                    : <ItemList products={products}/>
            } 
        </div>
    )
}

export default ItemListContainer