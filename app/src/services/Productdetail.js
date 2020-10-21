import axios from 'axios';

const getProduct = async (productId) => {
    try {
        const res = await axios.get('http://localhost:8000/api/products/' + productId);
        return res.data;
    }
    catch (e) {
        console.log(e);
    }
};

export default getProduct;