export const getToken = ({auth}) => auth.token;

export const isUserLogin = ({auth}) => {
    const {user, token} = auth;
    if(user.name && user.email && token) {
        return true;
    }
    return false;
}