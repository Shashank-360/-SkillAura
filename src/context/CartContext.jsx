import { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Auth } from './AuthContext'
import axios from 'axios'
export let CartData = createContext()
const CartContext = ({ children }) => {
    let [cart, setCart] = useState([])
    let { user } = useContext(Auth)
    let addToCart = async (props) => {
        let exist = cart.find(item => item.id === props.id)
        if (exist) {
            toast.error("Course already in cart")
            return
        }
        let cartObject = { ...props, userId: user.id }
        let result = await axios.post('http://localhost:8055/cart', cartObject)
        setCart(prev => [...prev, result.data])
    }

    let removeFromCart = async (id) => {
        await axios.delete(`http://localhost:8055/cart/${id}`)
        setCart(prev => prev.filter(item => item.id !== id))
    }
    let loadCart = async () => {
        let res = await axios.get(`http://localhost:8055/cart?userId=${user.id}`)
        setCart(res.data)
    }

    useEffect(() => {
        loadCart()
    }, [user])
    return (
        <CartData.Provider value={{ addToCart, cart, removeFromCart }}>
            {children}
        </CartData.Provider>
    )
}

export default CartContext
