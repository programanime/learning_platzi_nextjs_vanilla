import React from "react"
import { useRouter } from "next/router"

const ProductItem = ( props ) => {
    const router  = useRouter()
    
    return (
        <div>
          This is the page {JSON.stringify(router.query.id)}
        </div>
    )
}

export default ProductItem
