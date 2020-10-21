
 import React,  {Component} from 'react';

import React, { Component, useContext } from 'react';
export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems: []
        };

        this.addToCart = this.addToCart.bind(this);
        this.clearCart = this.clearCart.bind(this);
    }

    componentDidMount() {
        // Đọc Cookie
        const cartJSON = localStorage.getItem('cart');

        if (cartJSON) {
            const cart = JSON.parse(cartJSON);

            this.setState({
                cartItems: cart
            })

            console.log(cart);
        }
    }

    componentDidUpdate() {
        // Cập nhật cookie
        const cartJSON = JSON.stringify(this.state.cartItems);
        localStorage.setItem('cart', cartJSON);
    }

    addToCart(product) {
        console.log("adding product")
        this.setState({
            cartItems: this.state.cartItems.concat(product)
        });
    }

    clearCart() {
        this.setState({
            cartItems: []
        });
    }

    render() {
        return <CartContext.Provider value={{
            cartItems: this.state.cartItems,
            addToCart: this.addToCart,
            clearCart: this.clearCart
        }}>
            {
                this.props.children
            }
        </CartContext.Provider>
    }
}

const CartPage = () => {

    const { cartItems, clearCart } = useContext(CartContext);

    const _arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    return (
        <div className="container mb-4">
            <div className="row">
                <div className="col-12">
                    <div className="table-responsive">
                        <div className="col-sm-12 col-md-6 text-right">
                            <button className="btn btn-block btn-danger text-uppercase m-2"
                                onClick={() => clearCart()}>Clear Cart</button>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col"> </th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Available</th>
                                    <th scope="col" className="text-center">Quantity</th>
                                    <th scope="col" className="text-right">Price</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    cartItems && cartItems.map(product => (
                                        <tr key={product.id}>
                                            <td>{product.imageUrl && <img src={`data:image/jpg;base64,${_arrayBufferToBase64(product.imageUrl.data)}`} alt="product_image" width="50px" height="50px" />} </td>
                                            <td>{product.name}</td>
                                            <td>{product.quantity}</td>
                                            <td><input className="form-control" type="text" /></td>
                                            <td className="text-right">{product.price} $</td>
                                            <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash" /> </button> </td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td><strong>Total</strong></td>
                                    <td className="text-right"><strong></strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className="row">
                        <div className="col-sm-12  col-md-6">
                            <a className="btn btn-block btn-light" routerlink="/" type="submit">Continue Shopping</a>
                        </div>
                        <div className="col-sm-12 col-md-6 text-right">
                            <button className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default CartPage;