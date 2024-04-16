const form = document.querySelector("form");
const tableBody = document.querySelector("tbody");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name").value;
    const employeeIdInput = document.getElementById("employeeID").value;
    const departmentInput = document.getElementById("department").value;
    const experienceInput = parseFloat(document.getElementById("exp").value);
    const emailInput = document.getElementById("email").value;
    const mobileNumberInput = document.getElementById("mbl").value;

    let role;
    if (experienceInput > 5) {
        role = "Senior";
    } else if (experienceInput >= 2 && experienceInput <= 5) {
        role = "Junior";
    } else {
        role = "Fresher";
    }

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${nameInput}</td>
        <td>${employeeIdInput}</td>
        <td>${departmentInput}</td>
        <td>${experienceInput}</td>
        <td>${emailInput}</td>
        <td>${mobileNumberInput}</td>
        <td>${role}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    tableBody.append(newRow);

    const deleteButton = newRow.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function () {
        tableBody.removeChild(newRow);
    });

    form.reset();
});
