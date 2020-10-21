import axios from 'axios';

const dashboard = async (formData) => {
    try {
        const res = await axios.get('http://localhost:8000/api/products', formData);
        return res.data;
    }
    catch (e) {
        console.log(e);
    }
};

export default dashboard;