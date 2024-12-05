export default (() => {
  let state = { books: [] };
  const listeners = [];

  return {
    getState() {
      return state;
    },
    setState(newState) {
      state = newState;
      listeners.forEach((listener) => listener(state));
    },
    subscribe(listener) {
      listeners.push(listener);
    },
    addBook({ title, author, genre, cost }) {
      const newBooks = [
        ...state.books,
        {
          title,
          author,
          genre,
          cost,
        },
      ];
      this.setState({ books: newBooks });
    },
    deleteBook(bookId) {
      const newBooks = state.books.filter((book) => book.id !== bookId);
      this.setState({ books: newBooks });
    },
  };
})();
