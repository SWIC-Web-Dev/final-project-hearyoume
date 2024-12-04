import Button from "../button.js";

export default function BookRow({ title, author, genre, cost }) {
  return `
    <tr class="border-b">
      <td class="p-2">${title}</td>
      <td class="p-2">${author}</td>
      <td class="p-2">${genre}</td>
      <td class="p-2">${cost}</td>
      <td>${Button({ text: "Delete", additionalClasses: "bg-red-500 rounded text-white px-2 py-1" })}</td>
    </tr>
  `;
}
