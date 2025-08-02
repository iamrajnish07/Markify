 // Sample student data with set information
 const students = [
    { id: "24030901", name: "ABHISHEK KUMAR", set:"A"},
   { id: "23030838", name: "AHMAD ZAID", set:"A"},
   { id: "23030847", name: "ANAS", set:"A"},
   { id: "23030825", name: "ANIMESH KUMAR", set:"A"},
   { id: "23030861", name: "ANISHA KUMARI JHA", set:"A"},
   { id: "24030767", name: "ANUSHKA RICHA", set:"B"},
   { id: "23030906", name: "CHANDRA PRAKASH", set:"A"},
   { id: "23030896", name: "GOPAL KUMAR JHA", set:"A"},
   { id: "23030860", name: "HARSH CHAUBEY", set:"A"},
   { id: "23030901", name: "JIWAN BOGATI", set:"A"},
   { id: "23030827", name: "KHUSHI CHAUHAN", set:"A"},
   { id: "23030235", name: "KRITIKA SINGH", set:"A"},
   { id: "23030566", name: "MEGHA", set:"A"},
   { id: "23030170", name: "NANDINI BHARDWAJ", set:"A"},
   { id: "23030910", name: "NISHAN KHARAL", set:"A"},
   { id: "23030506", name: "NISHANT KUMAR SINGH", set:"A"},
   { id: "23030436", name: "NITIN KUMAR", set:"A"},
   { id: "23030155", name: "PALAK ASTWAL", set:"A"},
   { id: "23030590", name: "PANKAJ SINGH YADAV", set:"A"},
   { id: "23030376", name: "PAWAN KUMAR", set:"A"},
   { id: "23030837", name: "PIYUSH CHAUHAN", set:"A"},
   { id: "23030641", name: "PIYUSH GUPTA", set:"A"},
   { id: "23030748", name: "PIYUSH MISHRA", set:"A"},
   { id: "23030862", name: "POOJA KUMARI YADAV", set:"A"},
   { id: "23030115", name: "PRAGYA NAMDEV", set:"A"},
   { id: "23030337", name: "PRAJWAL KUMAR", set:"A"},
   { id: "23030632", name: "PRANJAL RAJ", set:"A"},
   { id: "23030281", name: "PRASHANT", set:"A"},
   { id: "23030091", name: "PRASHANT KUMAR", set:"A"},
   { id: "24030965", name: "PRATIK KUMAR", set:"B"},
   { id: "23030538", name: "PRAVEEN KUMAR", set:"A"},
   { id: "23030634", name: "PRAVEEN KUMAR SAHU", set:"A"},
   { id: "23030286", name: "PRAVESH PANT", set:"A"},
   { id: "23030383", name: "PREM KISHAN", set:"A"},
   { id: "23030449", name: "PRINCE CHAUHAN", set:"A"},
   { id: "23030735", name: "PRINCE SINGH", set:"A"},
   { id: "23030103", name: "PRIYAM KUMAR SINGH", set:"A"},
   { id: "23030719", name: "PRIYANKA RAWAT", set:"A"},
   { id: "23030707", name: "PRIYANSHU BHARGAVA", set:"B"},
   { id: "23030213", name: "PRIYANSHU PANWAR", set:"B"},
   { id: "23030163", name: "RAGHAV SRIVASTAVA", set:"B"},
   { id: "23030470", name: "RAHUL SHARMA", set:"B"},
   { id: "23030283", name: "RAHUL KUMAR GUPTA", set:"B"},
   { id: "23030616", name: "RAJNISH SHARMA", set:"B"},
   { id: "23030113", name: "RASHI VERMA", set:"B"},
   { id: "23030750", name: "RAUSHAN KUMAR", set:"B"},
   { id: "23030169", name: "RISHABH ARYA", set:"B"},
   { id: "23030651", name: "RITESH PANDEY", set:"B"},
   { id: "23030316", name: "RITESH VERMA", set:"B"},
   { id: "23030701", name: "RITIK KUMAR", set:"B"},
   { id: "23030582", name: "RIYA RAI", set:"B"},
   { id: "23030402", name: "ROHIT CHOUDHARY", set:"B"},
   { id: "23030041", name: "ROHIT KUMAR", set:"B"},
   { id: "23030924", name: "ROSHAN CHAUDHARY", set:"B"},
   { id: "23030469", name: "SACHIN SHARMA", set:"B"},
   { id: "23030903", name: "SAGAR GAUTAM", set:"B"},
   { id: "23030653", name: "SAHIL", set:"B"},
   { id: "23030025", name: "SAKSHI JAIN", set:"B"},
   { id: "23030602", name: "SAMBHAV KUMAR", set:"B"},
   { id: "23030011", name: "SAMIR HUSSAIN", set:"B"},
   { id: "23030557", name: "SANIA ANSARI", set:"B"},
   { id: "23030554", name: "SANJEEV PANDEY", set:"B"},
   { id: "23030228", name: "SANSKRITI SINGH", set:"B"},
   { id: "23030631", name: "SAQUIB HASAN", set:"B"},
   { id: "23030435", name: "SARTHAK SAINI", set:"B"},
   { id: "23030712", name: "SARVESH SUDHANSHU", set:"B"},
   { id: "23030154", name: "SAURABH KUMAR", set:"B"},
   { id: "23030904", name: "SHISIR SHAHI", set:"B"},
   { id: "23030793", name: "SUSHANT KUMAR", set:"B"},
   { id: "23030902", name: "VINIKA SAUD", set:"B"}
];

const studentTable = document.getElementById("studentTable");
const selectedTable = document.getElementById("selectedTable");

// Populate the main table with student data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function populateTable(filter = "all") {
    studentTable.innerHTML = ""; // Clear existing rows
    students.forEach((student, index) => {
        if (filter === "all" || student.set === filter) {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td><input type="checkbox" class="rowCheckbox form-check-input" onchange="updateSelectedTable(this, ${index})"></td>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.id}</td>
            `;
            row.addEventListener("click", (e) => {
                if (e.target.tagName !== "INPUT") {
                    const checkbox = row.querySelector(".rowCheckbox");
                    checkbox.checked = !checkbox.checked;
                    updateSelectedTable(checkbox, index);
                }
            });

            studentTable.appendChild(row);
        }
    });
    restoreSelection();
}

// Restore selected rows from localStorage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function restoreSelection() {
    const savedSelections = JSON.parse(localStorage.getItem("selectedStudents")) || [];
    const checkboxes = document.querySelectorAll(".rowCheckbox");

    savedSelections.forEach(index => {
        checkboxes[index].checked = true;
        updateSelectedTable(checkboxes[index], index, false);
    });
}

// Save selected rows to localStorage
function saveSelection() {
    const selectedIndexes = Array.from(document.querySelectorAll(".rowCheckbox"))
        .map((checkbox, index) => checkbox.checked ? index : null)
        .filter(index => index !== null);

    localStorage.setItem("selectedStudents", JSON.stringify(selectedIndexes));
}

// Update the selected table when a checkbox is clicked
function updateSelectedTable(checkbox, index, save = true) {
    const student = students[index];
    const selectedRows = Array.from(selectedTable.children);

    if (checkbox.checked) {
        // Check if the student is already in the selected table
        const alreadyExists = selectedRows.some(row => row.querySelector("td:nth-child(3)").textContent === student.id);

        if (!alreadyExists) {
            // Add the selected row to the selected table
            const row = document.createElement("tr");
            row.setAttribute("data-index", index);

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.id}</td>
            `;

            selectedTable.appendChild(row);
        }
    } else {
        // Remove the deselected row from the selected table
        const rowToRemove = selectedRows.find(row => row.getAttribute("data-index") == index);
        if (rowToRemove) {
            selectedTable.removeChild(rowToRemove);
        }
    }

    if (save) {
        saveSelection();
    }
}

// Toggle Select All functionality
function toggleSelectAll(selectAllCheckbox) {
    const checkboxes = document.querySelectorAll(".rowCheckbox");
    checkboxes.forEach((checkbox, index) => {
        checkbox.checked = selectAllCheckbox.checked;
        updateSelectedTable(checkbox, index);
    });
}

// Filter students by set
function filterBySet() {
    const filter = document.getElementById("setFilter").value;
    populateTable(filter);
}

// Download the selected student table as an image
function downloadTableAsImage() {
    const table = document.getElementById("selectedStudentTable");
    html2canvas(table).then(canvas => {
        const link = document.createElement("a");
        link.download = "absent-students.jpg";
        link.href = canvas.toDataURL("image/jpeg");
        link.click();
    });
}

// Clear the selected student table
function clearSelectedTable() {
    selectedTable.innerHTML = "";
    const checkboxes = document.querySelectorAll(".rowCheckbox");
    checkboxes.forEach(checkbox => (checkbox.checked = false));
    saveSelection();
}

// Initialize the table on page load
populateTable();

