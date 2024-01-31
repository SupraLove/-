const notesEl = document.querySelector('.notes');
const addBtn = document.querySelector('.note-add')

// 1.Написать функцию createNote 
// 2.Добавить кнопку и обработчик на добавление карточки
// 3.Добавить стили
// 4.Реализовать редактивроаание

function createNote(title, text) {
  const noteEl = document.createElement ('div');
  noteEl.classList.add('note');
  noteEl.innerHTML = `
    <div class = "note-header">
      <p id = "note-title">${title}</p>
      <textarea id = "note-title-input" class = "hidden">${title}</textarea>
      <div class = "note-actions">
        <button class = "note-edit"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        <button class = "note-delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
      </div>
    </div>
    <p id = "note-text">${text}</p>
    <textarea id = "note-textarea" class = "hidden">${text}</textarea>
  `

  const editBtn = noteEl.querySelector(".note-edit");
  const deleteBtn = noteEl.querySelector(".note-delete");
  const titleEl = noteEl.querySelector("#note-title");
  const textEl = noteEl.querySelector("#note-text");
  const titleinputeEl = noteEl.querySelector("#note-title-input");
  const textinputEl = noteEl.querySelector("#note-textarea");

  editBtn.addEventListener('click', (e) => {
    titleEl.classList.toggle('hidden');
    textEl.classList.toggle('hidden');
    titleinputeEl.classList.toggle('hidden');
    textinputEl.classList.toggle('hidden');
  });

  deleteBtn.addEventListener('click', (e) => {
    noteEl.remove();
  });

  titleinputeEl.addEventListener('input', (e) => {
    titleEl.innerText = e.target.value;
  });

  textinputEl.addEventListener('input', (e) => {
    textEl.innerText = e.target.value;
  });

  return noteEl;
}
addBtn.addEventListener('click', (e) => {
  const el = createNote('Заголовок', 'Ваш текст');
  notesEl.appendChild(el);
})