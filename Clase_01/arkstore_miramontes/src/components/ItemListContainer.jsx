import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { askData } from '../helper/AcessData'
import { ItemList } from './ItemList'

const ItemListContainer = () => {
    const [products,setProducts]= useState([])
    const [loading,setLoading]=useState(false)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        askData()
        .then((res) => {
            if (!categoryId){
                setProducts( res )
            }else {
                setProducts( res.filter((product) => product.category === categoryId) )
            }
        })
        .catch((err) => {
            console.log(err);
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