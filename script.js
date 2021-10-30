const addButton = document.querySelector("#add");
const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add();

  const htmlData = `
  <div class="operation">
  <button class="edit"><i class="fas fa-edit"></i></button>
  <button class="delete"><i class="far fa-trash-alt"></i></button>
</div>
<div class="main">
  <textarea class=""></textarea>
</div>
  `;
  note.insertAdjacentHTML("afterbegin", htmlData);
  document.body.appendChild(note);
};

addButton.addEventListener("click", addNewNote);
