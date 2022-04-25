import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { db } from '../../src/utils/firebase';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "items", itemId)

        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
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