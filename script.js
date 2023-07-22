var selectedRow = "";

// add alert
function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".alert-notif");
  const main = document.querySelector(".main");
  container.appendChild(div, main);

  setTimeout(() => document.querySelector(".alert").remove, 2000);
}

// clear All fields
function clearFields() {
  const firstName = document.querySelector("#firstName").value = "";
  const lastName = document.querySelector("#lastName").value = "";
  const rollNo = document.querySelector("#rollNo").value = "";
}

clearFields()

// add data
document.querySelector("#student-form").addEventListener("submit", (e) => {
  e.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let rollNo = document.getElementById("rollNo").value;

  // validate
   if (firstName == "" || lastName == "" || rollNo == "") {
     showAlert("please insert text", "danger");
   } else {
     if (selectedRow == "") {
       const list = document.querySelector("#student-list");
       const row = document.createElement("tr");

       row.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${rollNo}</td>
                <td>
                 <a href="#" class="btn btn-warning btn-sm edit">edit</a>
                            <a href="#" class="btn btn-danger btn-sm delete">
                                delete
                            </a>
                </td>         
            `;
       list.appendChild(row);
       selectedRow == "";
       showAlert("data addedd", "success")
     
     }else {
        selectedRow.children[0].textContent = firstName
        selectedRow.children[1].textContent = lastName
        selectedRow.children[2].textContent = rollNo
        showAlert("data edited", "info");
     }
       clearFields();
   }

});

// edit
document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target
    if(target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement
        document.querySelector("#firstName").value = selectedRow.children[0].textContent
        document.querySelector("#lastName").value = selectedRow.children[1].textContent
        document.querySelector("#rollNo").value = selectedRow.children[2].textContent;
    }
})

// delete data
document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showAlert("Data deleted successfully", "danger");
  }
});
