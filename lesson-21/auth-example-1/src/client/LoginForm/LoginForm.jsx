import {useDispatch} from "react-redux";

import useForm from "../../shared/hooks/useForm";
import { login } from "../../redux/auth/auth-operations";

import {inititalState} from "./inititalState";
import {fields} from "./fields";

const LoginForm = ()=> {
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(login(data));
    }
    const {form, handleChange, handleSubmit} = useForm(inititalState, onSubmit);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Email</label>
                <input onChange={handleChange} value={form.email} {...fields.email} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input onChange={handleChange} value={form.password} {...fields.password} />
            </div>
            <div>
                <button type="submit">Вход</button>
            </div>
        </form>
    )
}

export default LoginForm;