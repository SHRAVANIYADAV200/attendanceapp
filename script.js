document.getElementById('attendanceForm').addEventListener('submit', function (e) {
    e.preventDefault();
    addStudent();
});

function addStudent() {
    const studentName = document.getElementById('studentName').value.trim();
    if (studentName) {
        const table = document.getElementById('attendanceTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const nameCell = newRow.insertCell(0);
        const attendanceCell = newRow.insertCell(1);
        const actionsCell = newRow.insertCell(2);

        nameCell.textContent = studentName;
        attendanceCell.innerHTML = '<button class="present">Present</button><button class="absent">Absent</button>';
        actionsCell.innerHTML = '<button class="delete">Delete</button>';

        document.getElementById('studentName').value = '';

        actionsCell.querySelector('.delete').addEventListener('click', function () {
            table.deleteRow(newRow.rowIndex - 1);
        });

        attendanceCell.querySelector('.present').addEventListener('click', function () {
            nameCell.style.color = 'green';
            nameCell.textContent += ' (Present)';
        });

        attendanceCell.querySelector('.absent').addEventListener('click', function () {
            nameCell.style.color = 'red';
            nameCell.textContent += ' (Absent)';
        });
    }
}