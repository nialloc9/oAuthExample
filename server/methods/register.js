import OAuth, { Request, Response, AccessDeniedError } from 'oauth2-server';
import registerModel from '../models/model';

const register = ({ req, res }) => {
    let request = new Request(req);
    let response = new Response(res);

    const oAuth = new OAuth({
        model: registerModel
    });

    oAuth.authenticate(request, response)
        .then((token) => {
            // The request was successfully authenticated.
        })
        .catch((err) => {
            // The request failed authentication.
        });

    oAuth.authorize(request, response)
        .then((code) => {
            // The resource owner granted the access request.
        })
        .catch((err) => {
            if (err instanceof AccessDeniedError) {
                // The resource owner denied the access request.
            } else {
                // Access was not granted due to some other error condition.
            }
        });

    oAuth.token(request, response)
        .then((token) => {
            // The resource owner granted the access request.
        })
        .catch((err) => {
            // The request was invalid or not authorized.
        });
};

export default register;