import useForm from "../../shared/hooks/useForm";
import {useDispatch} from "react-redux";

import { register } from "../../redux/auth/auth-operations";

import {inititalState} from "./inititalState";
import { fields } from "./fields";

const RegisterForm = ()=> {
    const dispatch = useDispatch();

    const onSubmit = (data)=> {
        dispatch(register(data));
    }

    const {form, handleChange, handleSubmit} = useForm(inititalState, onSubmit);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input onChange={handleChange} value={form.name} {...fields.name} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input onChange={handleChange} value={form.email} {...fields.email} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input onChange={handleChange} value={form.password} {...fields.password} />
            </div>
            <div>
                <button type="submit">Регистрация</button>
            </div>
        </form>
    )
}

export default RegisterForm;