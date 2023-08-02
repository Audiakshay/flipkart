import React from 'react'
import { useSelector } from 'react-redux'

const ProductPreview = () => {
    const val = useSelector((res) => res?.products)
    console.log(val);
    return (
        <div>ProductPreview</div>
    )
}

export default ProductPreview