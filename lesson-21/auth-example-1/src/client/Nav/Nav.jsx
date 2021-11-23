import {Link, NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
// import {useSelector} from "react-redux";

// import { isUserLogin } from "../../redux/auth/auth-selectors";
import useAuth from "../../shared/hooks/useAuth";
import { logout } from "../../redux/auth/auth-operations";

import styles from "./Nav.module.scss";

import { registerMenu, userMenu, items } from "./items";

const Nav = ()=> {
    // const isLogin = useSelector(isUserLogin)
    const dispatch = useDispatch();
    const isLogin = useAuth();

    const handleLogout = () => dispatch(logout());

    // const elements = items.filter(({isLoginShow}) => isLoginShow === isLogin);

    // const content = elements.map(({id, to, text}) => <li key={id}>
    //         <NavLink to={to} className={styles.link} activeClassName={styles.active}>
    //             {text}
    //         </NavLink>
    //     </li>);
    const elements = isLogin ? userMenu : registerMenu;

    const content = elements.map(({id, to, text}) => <li key={id}>
            <NavLink to={to} className={styles.link} activeClassName={styles.active}>
                {text}
            </NavLink>
        </li>);

    return (
        <nav className={styles.nav}>
            <Link to="/">
                Logo
            </Link>
            <ul className={styles.menu}>
             {content}
            </ul>
            <div>
                {isLogin && <button onClick={handleLogout} className={styles.logout}>Выход</button>}
            </div>
           
        </nav>
    )
}

export default Nav;