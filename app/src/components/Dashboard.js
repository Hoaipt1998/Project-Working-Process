import React, { useState, useEffect } from 'react';
import dashboard from '../services/Dashboard';

const Dashboard = () => {

  useEffect(() => {
    const loadProducts = async () => {
      const products = await dashboard();
      if (products) {
        console.log(products)
        setProducts(products);
      }
    }

    loadProducts();
  }, []);

  const [products, setProducts] = useState([]);

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
    <div className="container">
      <div className="row">
        {products && products.map((product) => (
          <div className="col-md-4">
            <div className="media align-items-lg-center flex-column flex-lg-row p-3">
              <div className="media-body order-2 order-lg-1">
                <h3 className="mt-0 font-weight-bold mb-2">{product.name}</h3>
                <div style={{ textAlign: 'center' }}>{product.imageUrl && <img src={`data:image/jpg;base64,${_arrayBufferToBase64(product.imageUrl.data)}`} alt="Generic placeholder image" width={250} height={350} className="ml-lg-5 order-1 order-lg-2" />}</div>
                <p>{product.description}</p>
                <div className="d-flex align-items-center justify-content-between mt-1">
                  <h6 className="font-weight-bold my-2"></h6>
                </div>
                <h6 className="font-weight-bold my-2"> </h6>
                <br />
                <button style={{ height: '40px', width: '90px', backgroundColor: 'blue', color: 'white', borderRadius: '5px', border: 'none' }}></button>
                <button style={{ height: '40px', width: '90px', backgroundColor: 'yellow', color: 'rgb(0, 0, 0)', borderRadius: '5px', border: 'none' }}></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Dashboard;
