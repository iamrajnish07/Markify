 // Sample student data with set information
 const students = [
    { id:"23030785", name:"Aashish Chaudhary", set:"N"},
    { id:"23030742", name:"Aashish Pandey", set:"N"},
    { id:"23030151", name:"Abhi Shukla", set:"N"},
    { id:"23030196", name:"Adarsh Shandilya", set:"N"},
    { id:"23030516", name:"Aditya kumar", set:"N"},
    { id:"23030776", name:"Aditya Singh Rathor", set:"N"},
    { id:"23030802", name:"Akansha Rana", set:"N"},
    { id:"23030596", name:"Akash kumar", set:"N"},
    { id:"23030193", name:"Akhtar raza", set:"N"},
    { id:"23030391", name:"Amit Kumar Vashishtha", set:"N"},
    { id:"23030770", name:"Amit kumar Verma", set:"N"},
    { id:"23030639", name:"Aniket Kumar", set:"N"},
    { id:"23120156", name:"Ansh Khurana", set:"N"},
    { id:"23030761", name:"Anupam Yadav", set:"N"},
    { id:"23030730", name:"Anurag debnath", set:"N"},
    { id:"23030424", name:"Ashish Agarwal", set:"N"},
    { id:"23030244", name:"Ashutosh Singh", set:"N"},
    { id:"23030913", name:"Avinash Singh Yadav", set:"N"},
    { id:"23030834", name:"Ayush choudhary", set:"N"},
    { id:"23030780", name:"Binay Kumar kurmi", set:"N"},
    { id:"23030773", name:"Dhirendar Yadav", set:"N"},
    { id:"23030768", name:"Dhruve Kumar", set:"N"},
    { id:"23030769", name:"Diksha Mishra", set:"N"},
    { id:"23030371", name:"Khushi Kumari", set:"N"},
    { id:"23030483", name:"Khushi saini", set:"N"},
    { id:"23030335", name:"Mahak", set:"N"},
    { id:"23030641", name:"Piyush Gupta", set:"N"},
    { id:"23030281", name:"Prashant", set:"N"},
    { id:"23030286", name:"Pravesh Pant", set:"N"},
    { id:"23030449", name:"Prince chauhan", set:"N"},
    { id:"23030735", name:"Prince Singh", set:"N"},
    { id:"23030103", name:"Priyam Kumar Singh", set:"N"},
    { id:"23030719", name:"Priyanka Rawat", set:"N"},
    { id:"23030707", name:"Priyanshu Bhargava", set:"N"},
    { id:"23030213", name:"Priyanshu Panwar", set:"N"},
    { id:"23030470", name:"Rahul sharma", set:"N"},
    { id:"23030616", name:"Rajnish Sharma", set:"N"},
    { id:"23030113", name:"Rashi Verma", set:"N"},
    { id:"23030169", name:"Rishabh Arya", set:"N"},
    { id:"23030701", name:"Ritik kumar gupta", set:"N"},
    { id:"23030582", name:"Riya Rai", set:"N"},
    { id:"23030041", name:"Rohit Kumar", set:"N"},
    { id:"23030924", name:"Roshan Kumar Chaudhary", set:"N"},
    { id:"23030469", name:"Sachin Sharma", set:"N"},
    { id:"23030653", name:"Sahil", set:"N"},
    { id:"23030025", name:"Sakshi Jain", set:"N"},
    { id:"23030557", name:"Sania Ansari", set:"N"},
    { id:"23030554", name:"Sanjeev Pandey", set:"N"},
    { id:"23030228", name:"Sanskriti Singh", set:"N"},
    { id:"23030712", name:"Sarvesh Sinha", set:"N"},
    { id:"23030686", name:"Satakshi Tyagi", set:"N"},
    { id:"23030793", name:"Sushant Kumar", set:"N"}
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
