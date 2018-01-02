const model = {

    generateAccessToken(client, user, scope){
        return "";
    },

    getAccessToken: (client, user, scope) => {
        return "";
    },

    getAuthorizationCode: (clientId, clientSecret) => {
        return {
            id: "1",
            redirectUris: [""],
            grants: [""]
        };
    },

    getUser: (username, password) => {
        return {
            name: "Niall"
        }
    },

    saveToken: (token, client, user) => {
        return {
            accessToken: token.access_token,
            accessTokenExpiresAt: token.accessTokenExpiresAt,
            refreshToken: token.refreshToken,
            refreshTokenExpiresAt: token.refreshTokenExpiresAt,
            scope: token.scope,
            client: {id: client.id},
            user: {id: user.id}
        };
    },

    validateScope : (user, client, scope) => {
        return scope;
    },

    getRefreshToken: (refreshToken) => {
        return {
            refreshToken: {
                refresh_token: ""
            },
            refreshTokenExpiresAt: {
                expires_at: ""
            },
            scope: token.scope,
            client: client, // with 'id' property
            user: user
        };
    },

    getClient: (clientId, clientSecret, callback) => {
        return {
            id: clientId,
            redirectUris: [""],
            grants: [""]
        };
    },

    revokeToken: (token) => {
        return true;
    }
};

export default model;