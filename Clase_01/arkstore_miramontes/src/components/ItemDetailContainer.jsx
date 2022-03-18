import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { askData } from '../helper/AcessData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        askData()
        .then((res) => {
            setItem( res.find((product) => product.id === Number(itemId)) )
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <div className="h-screen">
            {
                loading
                ? <h2 className="text-7xl font-semibold text-center pt-96">Loading...</h2>
                : <ItemDetail {...item} />
            }
        </div>
    )
}

export default ItemDetailContainer