import cartImg from "./images/cart.svg"

const CartWidget = () => {
    return (
        <button type="button" class="btn btn-light border border-dark position-relative">
            <img src={cartImg} alt="carrito" width={20} />
            <span class="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill border border-dark">
                1
            </span>
        </button>
    )

}

export default CartWidget;