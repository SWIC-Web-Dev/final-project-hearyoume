import Button from "./button";
import Input from "./input";

export default function BookForm() {
  const formFields = [
    { id: "title", placeholder: "Book title" },
    { id: "author", placeholder: "Author" },
    { id: "genre", placeholder: "Genre" },
    { id: "cost", placeholder: "Cost" },
  ];

  return `
    <div class="max-w-4xl mx-auto p-4">
      <form id="bookForm" class="space-y-4 mb-8">
        ${formFields
          .map((field) =>
            Input({
              ...field,
              additionalClasses: "mb-2",
            }),
          )
          .join("")}
        ${Button({
          type: "submit",
          additionalClasses:
            "w-full bg-sky-800 text-white px-4 py-2 hover:bg-sky-700",
          text: "Add Book",
        })}
      </form>
    </div>
  `;
}
