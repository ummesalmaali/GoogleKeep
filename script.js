const addButton = document.querySelector("#add");

const updateLocalStorageData = () => {
  const textAreaData = document.querySelectorAll("textarea");
  const notes = [];

  textAreaData.forEach((curElem) => {
    return notes.push(curElem.value);
  });
  console.log(notes);
  localStorage.setItem("notes", JSON.stringify(notes));
};

const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData = `
  <div class="operation">
  <button class="edit"><i class="fas fa-edit"></i></button>
  <button class="delete"><i class="far fa-trash-alt"></i></button>
</div>
<div class="main ${text ? "" : "hidden"}"></div>
<textarea class="${text ? "hidden" : ""}"></textarea>
`;
  note.insertAdjacentHTML("afterbegin", htmlData);

  //   getting the references
  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");
  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLocalStorageData();
  });

  //   //   toggle using  the edit button
  //   textArea.value = text;
  mainDiv.innerHTML = text;
  editBtn.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("change", (event) => {
    const value = event.target.value;
    mainDiv.innerHTML = value;
    updateLocalStorageData();
  });

  document.body.appendChild(note);
};

// getting data back from localstorage
const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addButton.addEventListener("click", () => addNewNote());
