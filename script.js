const list = document.querySelector('#list');
const input = document.querySelector('#input-field');
const btnAdd = document.querySelector('#btn-add');

btnAdd.addEventListener("click", () => {
    if (input.value !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('list-item');
        const taskName = document.createElement('p');
        taskName.textContent = input.value;
        const btnDone = document.createElement('button');
        btnDone.classList.add('btn-done');
        btnDone.textContent = '✓';
        btnDone.addEventListener("click", () => {
            list.removeChild(listItem);
        });

        listItem.appendChild(btnDone);
        listItem.appendChild(taskName);

        list.appendChild(listItem);
        input.value = '';
        input.focus();
    } else
        input.placeholder = 'Enter task name here';
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        btnAdd.click();
    }
});