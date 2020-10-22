import React, { useState, useEffect, useContext } from 'react';
import dashboard from '../services/Dashboard';
import { CartContext } from '../components/Cart';
import { Link } from 'react-router-dom';
import SearchProduct from '../services/SearchProduct';

const Dashboard = () => {

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await dashboard();
      if (products) {
        setProducts(products);
      }
    }

    loadProducts();
  }, []);

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  const _arrayBufferToBase64 = (buffer) => {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const onClickSearch = async (e) => {

    const result = await SearchProduct(search);

    if (result) {
        setProducts(result);
    }
  }

  return (
    <div className="container ">
    <div className="row justify-content-center">
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 m-4">
    <div className="input-group">
    <input type="text" className="form-control" placeholder="Search" 
    value={search}
    onChange = {(e) => onChangeSearch(e)}/>
    <span className="input-group-btn">
      <button type="button" className="btn btn-primary" onClick = {onClickSearch}>Search</button>
    </span>
  </div>
    </div>
    </div>
      <div className="row">
        {products && products.map((product) => (

          <div className="col-md-3 my-3">
            <div className="media align-items-lg-center flex-column flex-lg-row p-3 border">
              <div className="media-body order-2 order-lg-1">
                <h5 className="mt-0 font-weight-bold mb-2">{product.name}</h5>
                <div style={{ textAlign: 'center' }}>{product.imageUrl && <img src={`data:image/jpg;base64,${_arrayBufferToBase64(product.imageUrl.data)}`} alt="Generic placeholder image"  height={300} width ="100%" className="  order-1 order-lg-2 mb-4" />}</div>
                <p className=" ">{product.description}</p>
                <p className="font-weight-bold" style={{color:'red'}} >{product.price} $ </p>
                <div className ="flex justify-content-between ">
                    <button className="btn btn-primary" 
                      onClick={() => addToCart(product)}>Add to Cart</button>
                    <Link className="btn btn-success" to={`/products/${product._id}`}>Detail</Link>
                </div>
                

              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}
export default Dashboard;