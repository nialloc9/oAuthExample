import login from './methods/login';
import register from './methods/register';

const api = (req, res) => {

    const { method } = req.body;

    if(method === "register"){
        register({ req, res });
    }

    if(method === "login"){
        login({ req, res });
    }
};

export default api;