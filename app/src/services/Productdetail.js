import axios from 'axios';

export const getProduct = async (productId) => {
    try {
        const res = await axios.get('http://localhost:8000/api/products/' + productId);
        return res.data;
    }
    catch (e) {
        console.log(e);
    }
};

export const addComment = async (productId, data) => {
    try {
        const res = await axios.put('http://localhost:8000/api/products/' + productId + '/review', data);
        return res.data;
    }
    catch (e) {
        console.log(e);
    }
};
