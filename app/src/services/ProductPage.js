import axios from 'axios';

const productpage = async (formData) => {
    try {
        const res = await axios.post('http://localhost:8000/api/products', formData);
        return res.data;
    }
    catch (e) {
        console.log(e);
    }
};

export default productpage;
