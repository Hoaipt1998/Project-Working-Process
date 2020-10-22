import React, { useState, useEffect } from 'react';
import { getProduct, addComment } from '../../services/Productdetail';

const Productdetail = ({ match
}) => {

    const [product, setProduct] = useState({});
    const [comment, setComment] = useState("");
    const [nameUser, setNameUser] = useState("");

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
                <div className="col-md-6">{product.imageUrl && <img src={`data:image/jpg;base64,${_arrayBufferToBase64(product.imageUrl.data)}`} alt="product_image" width="90%" height={300} className="ml-lg-5 my-lg-5 order-1 order-lg-2 border" />}</div>
                <div className="col-md-6 my-lg-5">
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                            {
                                product && (
                                    <>
                                        <h2 style={{ paddingTop: '10px' }} className="mt-0 font-weight-bold mb-2">{product.name}</h2>
                                        <p style={{ paddingTop: '10px' }}>{product.discription}</p>
                                        <div style={{ paddingTop: '10px' }}><b>Manufacture :</b> {product.manufacturer}</div>
                                        <div style={{ paddingTop: '10px' }}> <b>Category :</b> <span style={{ color: 'blue' }}>{product.category}</span></div>
                                <div style={{ paddingTop: '10px' }}> <b>Unit in stock :</b> <span>{product.quantity}</span></div>
                                        <div style={{ paddingTop: '10px' }} className="d-flex align-items-center justify-content-between mt-1">
                                            <h4 className="font-weight-bold my-2" style={{ color: 'red' }}>{product.price} $</h4>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="row container">
                
                <div className="col-12" >
                    <form  onSubmit={async (e) => {
                        e.preventDefault();

                        const date = Date.now();

                        const result = await addComment(product._id, { name: nameUser, comment, date });


                        alert(result && "Upload successs");
                    }} className="border  p-4" >
                        <h1 className="row justify-content-center">Comment</h1>
                        <div className="form-group">
                            <h5 className="">Name :</h5>
                            <input type="text" class="form-control"  placeholder="Name" aria-label="Recipient's username" aria-describedby="button-addon2"
                                name="nameUser" value={nameUser} onChange={(e) => setNameUser(e.target.value)} />
                        </div>
                        <h5 className="">Comment :</h5>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Comment" aria-label="Recipient's username" aria-describedby="button-addon2"
                                name="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                            <div class="input-group-append">
                                <button   class="btn btn-warning" type="submit" id="button-addon2" >Comment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <h4 className="container row justify-content-center mt-4 ">PRODUCT ASSESSMENT</h4>
            {product.reviews && product.reviews.map(review => (
                <div className="row mt-3">
                    <div className="container " style={{backgroundColor:"#007bff",opacity:0.7, borderRadius:8, display:"inline"}} key={review._id}>
                        <h5 style={{fontSize:16, color:'black'}}>Name: {review.name}</h5>
                        <p className="pl-5">{review.comment}</p>
                    </div>
                </div>
            ))}
        </div>

    );


};

export default Productdetail;