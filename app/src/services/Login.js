import axios from 'axios';

const login = async (formData) => {
    try {
        const res = await axios.post('http://localhost:8000/api/signin', formData);
        return res.data;
    }
    catch (e) {
        console.log(e);
    }
};

export default login;