import { APP_SET, REGISTER } from '../constants/app';

const initialState = {
    view: REGISTER
};

/**
 * @param state
 * @param type
 * @param payload
 * @returns {*}
 */
const app = (state = initialState, { type, payload }) => {
    switch (type) {
        case APP_SET:
            return {
                ...state,
                ...payload,
            };

        default:
            return state;
    }
};

export default app;