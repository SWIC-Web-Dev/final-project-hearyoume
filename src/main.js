import BookTable from "./components/book-table/table";
import BookForm from "./components/form";
import initialBooks from "./db";
import state from "./state";

const app = document.querySelector("#app");

state.setState({ books: initialBooks });

function render() {
  const { books } = state.getState();

  app.innerHTML = `
    ${BookForm()}
    ${BookTable(books)}
  `;
}

state.subscribe(render);
render();

document.addEventListener("click", (event) => {
  const row = event.target.closest("tr");
  if (row) {
    state.deleteBook(row.dataset.book);
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "bookForm") {
    event.preventDefault();
    const form = event.target;

    state.addBook({
      title: form.title.value,
      author: form.author.value,
      genre: form.genre.value,
      cost: form.cost.value,
    });

    form.reset();
  }
});
