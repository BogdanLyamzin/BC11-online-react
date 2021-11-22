import { useSelector, useDispatch } from "react-redux";

import FormAddBook from "../../client/FormAddBook";
import BookList from "../../client/BookList";

import { addBook, removeBook } from "../../redux/books/books-slice";
import { getAllBooks } from "../../redux/books/books-selectors";

import styles from "./BooksPage.module.scss";

const BooksPage = ()=> {
    const books = useSelector(getAllBooks);
    const dispatch = useDispatch();

    const addToBooks = (data)=> {
        const action = addBook(data);
        dispatch(action);
    }

    const removeFromBooks = (id) => {
        dispatch(removeBook(id));
    }

    return (
        <div className={styles.container}>
            <div>
                <h3>Добавить книгу</h3>
                <FormAddBook onSubmit={addToBooks} />
            </div>
            <div>
                <BookList list={books} onDelete={removeFromBooks} title="Список книг" />
            </div>
        </div>
    )
};

export default BooksPage;
