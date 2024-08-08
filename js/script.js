document.addEventListener('DOMContentLoaded', function() {
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }

    // Data table form
    const dataForm = document.getElementById('dataForm');
    const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    dataForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const companyName = document.getElementById('companyName').value;
        const partner = document.getElementById('partner').value;
        const progress = document.getElementById('progress').value;

        if (companyName && partner && progress) {
            const newRow = dataTable.insertRow();
            newRow.insertCell(0).innerText = companyName;
            newRow.insertCell(1).innerText = partner;
            newRow.insertCell(2).innerText = progress;
            dataForm.reset();
        }
    });
});
