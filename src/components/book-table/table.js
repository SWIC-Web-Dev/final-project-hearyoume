import BookRow from "./book-row.js";

export default function BookTable(books) {
  return `
    <table class="w-full mt-4 border-collapse border">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-2 text-left">Title</th>
          <th class="p-2 text-left">Author</th>
          <th class="p-2 text-left">Genre</th>
          <th class="p-2 text-left">Cost</th>
        </tr>
      </thead>
      <tbody>
        ${books.map((book) => BookRow(book)).join("")}
      </tbody>
    </table>
  `;
}
