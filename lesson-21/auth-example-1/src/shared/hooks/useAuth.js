import {useSelector} from "react-redux";

import { isUserLogin } from "../../redux/auth/auth-selectors";

const useAuth = ()=> {
    const result = useSelector(isUserLogin);
    return result;
}

export default useAuth;