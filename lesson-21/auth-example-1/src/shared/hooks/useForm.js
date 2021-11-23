import {useState} from "react";

const useForm = (initialState, onSubmit) => {
    const [form, setForm] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        setForm({...initialState})
    }

    const handleChange = ({target}) => {
        const {name, value} = target;
        setForm({...form, [name]: value})
    }

    return {form, handleSubmit, handleChange};
}

export default useForm;