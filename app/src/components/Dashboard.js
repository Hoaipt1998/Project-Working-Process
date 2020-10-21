import React, { useState, useEffect } from 'react';
import dashboard from '../services/Dashboard';

const Dashboard = () => {

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

  return (
    <div className="container">
      <div className="row">
        {products && products.map((product) => (
          <div className="col-md-4">
            <div className="media align-items-lg-center flex-column flex-lg-row p-3">
              <div className="media-body order-2 order-lg-1">
                <h3 className="mt-0 font-weight-bold mb-2">{product.name}</h3>
                <div style={{ textAlign: 'center' }}><img src="" alt="Generic placeholder image" width={250} height={350} className="ml-lg-5 order-1 order-lg-2" /></div>
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
