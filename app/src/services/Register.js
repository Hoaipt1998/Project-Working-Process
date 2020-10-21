import axios from 'axios';

const register = async (formData) => {
    try {
        const res = await axios.post('http://localhost:8000/api/signup', formData);
        return res.data;
    }
    catch (e) {
        console.log(e);
    }
};

export default register;