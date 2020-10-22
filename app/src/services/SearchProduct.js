import axios from 'axios';

const searchProduct = async (search) => {
    try {
        const res = await axios.get('http://localhost:8000/api/products/find?name=' + search);
        return res.data;
    }
    catch (e) {
        console.log(e);
    }
};

export default searchProduct;