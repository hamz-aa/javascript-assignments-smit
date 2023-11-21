const inpName = document.querySelector("#name");
const inpClass = document.querySelector("#class");

const submitBtn = document.querySelector(".submit");
const tbody = document.querySelector("tbody");

const viewData = document.querySelector(".view-data");
const viewForm = document.querySelector(".view-form");

const form = document.querySelector(".form");
const data = document.querySelector(".data");

let index = 0;

function submitHandler(flag, i) {
  if (flag) {
    let ind = document.querySelectorAll(".index");

    ind.forEach((currIndex) => {
      if (currIndex.textContent == i) {
        let userName = currIndex.nextSibling;
        let userClass = userName.nextSibling;

        userName.textContent = inpName.value;
        userClass.textContent = inpClass.value;
      }
    });

    form.style.display = "none";
    data.style.display = "block";
    viewForm.style.display = "block";

    submitBtn.setAttribute("onclick", `submitHandler(${true}, ${-1})`);

    return;
  }

  let row = document.createElement("tr");
  let tdIndex = document.createElement("td");
  let tdName = document.createElement("td");
  let tdClass = document.createElement("td");
  let tdBtn = document.createElement("td");

  let btnEdit = document.createElement("button");
  let btnDelete = document.createElement("button");

  btnEdit.classList.add("btn", "btnEdit");
  btnDelete.classList.add("btn", "btnDelete");

  tdIndex.classList.add("index");

  btnEdit.setAttribute("onclick", `editHandler(${index})`);
  btnDelete.setAttribute("onclick", `deleteHandler(${index})`);

  btnEdit.textContent = "Edit";
  btnDelete.textContent = "Delete";

  if (inpName.value.trim().length === 0 || inpClass.value.trim().length === 0)
    return;

  tdIndex.textContent = index;
  tdName.textContent = inpName.value;
  tdClass.textContent = inpClass.value;

  inpName.value = "";
  inpClass.value = "";

  index++;

  tdBtn.appendChild(btnEdit);
  tdBtn.appendChild(btnDelete);

  row.appendChild(tdIndex);
  row.appendChild(tdName);
  row.appendChild(tdClass);
  row.appendChild(tdBtn);

  tbody.appendChild(row);
}

viewData.addEventListener("click", () => {
  form.style.display = "none";
  data.style.display = "block";
  viewData.style.display = "none";
  viewForm.style.display = "block";
});

viewForm.addEventListener("click", () => {
  form.style.display = "block";
  data.style.display = "none";
  viewData.style.display = "block";
  viewForm.style.display = "none";
});

function editHandler(index) {
  form.style.display = "block";
  data.style.display = "none";
  viewData.style.display = "none";
  viewForm.style.display = "none";

  submitBtn.setAttribute("onclick", `submitHandler(${true}, ${index})`);
}

function deleteHandler(index) {
  let ind = document.querySelectorAll(".index");
  ind.forEach((currIndex) => {
    if (currIndex.textContent == index) {
      let row = currIndex.parentNode;
      row.remove();
    }
  });
}
