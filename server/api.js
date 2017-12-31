import login from './methods/login';
import register from './methods/register';

const api = (req, res) => {

    const { method, ...data } = req.body;

    const timestamp = Date.now();

    if(method === "register"){
        register({...data, timestamp});
    }

    if(method === "login"){
        login({...data, timestamp});
    }
};

export default api;