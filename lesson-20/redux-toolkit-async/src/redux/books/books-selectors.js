export const getAllBooks = ({books}) => books.items;

export const getFavoriteBooks = ({books}) => {
    const favoriteBooks = books.items.filter(({favorite}) =>
        favorite);
    return favoriteBooks;
}