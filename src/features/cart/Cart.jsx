import LinkButton from '../../ui/LinkButton'
import Button from '../../ui/Button'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart } from './cartSlice'
import EmptyCart from './EmptyCart'

function Cart() {
    //useSelector is how we read data from the store
    const username = useSelector((state) => state.user.username)
    const cart = useSelector(getCart)
    const dispatch = useDispatch()

    if (!cart.length) return <EmptyCart />

    return (
        <div className="px-4 py-3">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <h2 className="text-xl font-semibold mt-7">
                Your cart, {username}
            </h2>

            <ul className="mt-3 border-b divide-y divide-stone-200">
                {cart.map((item) => (
                    <CartItem item={item} key={item.pizzaId} />
                ))}
            </ul>

            <div className="mt-6 space-x-2">
                <Button to="/order/new" type="primary">
                    Order pizzas
                </Button>

                <Button type="secondary" onClick={() => dispatch(clearCart())}>
                    Clear Cart
                </Button>
            </div>
        </div>
    )
}

export default Cart
