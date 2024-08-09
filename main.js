let text = document.getElementById("text");
let addButton = document.getElementById("add-btn");
let content = document.getElementById("content");

addButton.addEventListener("click", () => {
  if (text.value == "") {
    text.placeholder = "Can't be empty";
    setTimeout(() => {
      text.placeholder = "Add note";
    }, 1000);
  } else {
    addNote();
    text.value = "";
    addDataToLS();
  }
});

function addNote() {
  content.innerHTML += `<div class="content-box ">
  <i class="checked bi bi bi-circle"></i>
  <p>${text.value}</p>
  <i class="close bi bi-x"></i>
</div>`;
}

//Important
//Add Function after defining new things like (New Html)
content.addEventListener("click", function (e) {
  if (e.target.classList.contains("close")) {
    e.target.parentElement.remove();
    addDataToLS();
  }
  if (e.target.classList.contains("checked")) {
    e.target.parentElement.classList.add("done");
    e.target.setAttribute("class", "checked bi bi-check-circle-fill");
    addDataToLS();
  }
});

function addDataToLS() {
  localStorage.setItem("data", content.innerHTML);
}

function showSavedInfo() {
  content.innerHTML = localStorage.getItem("data");
}
showSavedInfo();
