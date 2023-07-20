import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn colorCartButton position-relative">
            <BsFillCartPlusFill/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
            </button>
        </div>

    )
}

export default CartWidget;