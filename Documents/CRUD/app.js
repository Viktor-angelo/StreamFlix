let listOfTask = [];
let index = 0;

// CREATE (CRIAR)
function saveD() {
    let loading = document.getElementById("loading");
    let enter = document.getElementById("enter").value;
    let error = document.getElementById("erroEditar2");

    loading.style.display = "block"

    if (enter.trim() === "") {
        error.style.display = "block";
        loading.style.display = "none";
        return;
    }

    error.style.display = "none";

    let enterObj = {
        id: index,
        texto: enter
    };

    index++;

    listOfTask.push(enterObj);

    show();

    loading.style.display = "none";

    document.getElementById("enter").value = "";
}

// READ (MOSTRAR)
function show() {
    let loading = document.getElementById("loading");

    let ul = document.getElementById("result");
    let html = "";

     if (listOfTask.length === 0) {
        loading.style.display = "block";
    } else {
        loading.style.display = "none";
    }

    

    listOfTask.forEach(element => {

        console.log(element);

        html += `
<li class="item">
    <span class="texto">${element.texto}</span>
    <div class="botoes">
        <button onclick="edit(${element.id})">Editar</button>
        <button onclick="deleteTask(${element.id})">Deletar</button>
    </div>
</li>`;
    });

    ul.innerHTML = html;
}

// UPDATE (EDITAR)
function edit(id) {
    let result = listOfTask.find(obj => obj.id === id);

    if (!result) return;

    let html = `
<div class="edit-container">
    <input
        type="text"
        id="textEdit"
        value="${result.texto}">
    <button
        type="button"
        onclick="editData(${id})">
        Salvar
    </button>
</div>
<span id="erroEditar" class="erro">This field is required!</span>
`;

    let divEdit = document.getElementById("edit");
    divEdit.style.display = "block";
    divEdit.innerHTML = html;
}

function editData(id) {
    let textEdit = document.getElementById("textEdit").value;
    let error = document.getElementById("erroEditar");

    if (textEdit.trim() === "") {
        error.style.display = "block";
        return;
    }

    error.style.display = "none";

    let result = listOfTask.find(obj => obj.id === id);

    result.texto = textEdit;

    show();

    let divEdit = document.getElementById("edit");
    divEdit.innerHTML = "";
}

// DELETE (DELETAR)
function deleteTask(id) {
    let newList = listOfTask.filter(obj => obj.id !== id);
    listOfTask = newList;

    show();
}