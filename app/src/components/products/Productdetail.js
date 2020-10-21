import React, { useState, useEffect } from 'react';
import getProduct from '../../services/Productdetail';

const Productdetail = ({ match
}) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        const loadProduct = async () => {
            const result = await getProduct(match.params.id);
            
            if (result) {
                setProduct(result);
            }
        }

        loadProduct();
    }, [match.params.id]);

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
                <div className="col-md-6">{product.imageUrl && <img src={`data:image/jpg;base64,${_arrayBufferToBase64(product.imageUrl.data)}`} alt="product_image" width="200px" className="ml-lg-5 order-1 order-lg-2" />}</div>
                <div className="col-md-6">
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                            {
                                product && (
                                    <>
                                        <h2 style={{ paddingTop: '10px' }} className="mt-0 font-weight-bold mb-2">{product.name}</h2>
                                        <p style={{ paddingTop: '10px' }}>{product.discription}</p>
                                        <div style={{ paddingTop: '10px' }}><b>Manufacture :</b> {product.manufacturer}</div>
                                        <div style={{ paddingTop: '10px' }}> <b>Category :</b> <span style={{ color: 'blue' }}>{product.category}</span></div>
                                        <div style={{ paddingTop: '10px' }}> <b>Unit in stock :</b> <span></span></div>
                                        <div style={{ paddingTop: '10px' }} className="d-flex align-items-center justify-content-between mt-1">
                                            <h6 className="font-weight-bold my-2">{product.price} VND</h6>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default Productdetail;