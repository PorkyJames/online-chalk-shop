import React from "react";
import {connect} from "react-redux"
import { addToCart } from "../redux/action";

const ProductList = ({products, addToCart}) => {
    return (
        <div className = "productList">
            <h2 id="title">Chalk</h2>

            <ul className='products'>
                {products.map(product => (
                    <div key={product.name} className="product">
                        <img src={product.img} />
                        <div className="productDetails">
                            <h3>{product.name}</h3>
                            <p id ="productPrice">Price: {product.price}</p>
                            <button id="buyBtn" onClick={() => addToCart(product)}></button>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;
