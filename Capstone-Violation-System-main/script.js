const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");
const closeBtn = document.getElementById("closeSidebar");

function toggleSidebar() {
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle("show");
    } else {
        sidebar.classList.toggle("collapsed");
    }
}

function handleResize() {
    if (window.innerWidth <= 768) {
        // Mobile view
        sidebar.classList.remove("collapsed");
        closeBtn.style.display = sidebar.classList.contains("show") ? "block" : "none";
    } else {
        // Desktop view
        sidebar.classList.remove("show");
        closeBtn.style.display = "none";
    }
}

toggleBtn.addEventListener("click", toggleSidebar);
closeBtn.addEventListener("click", function() {
    sidebar.classList.remove("show");
});

window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);

document.getElementById("searchInput").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll("#violationTable tr");

    rows.forEach(row => {
        let name = row.cells[1].textContent.toLowerCase();
        let email = row.cells[2].textContent.toLowerCase();
        if (name.includes(filter) || email.includes(filter)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});

document.getElementById("statusFilter").addEventListener("change", function () {
    let filter = this.value;
    let rows = document.querySelectorAll("#violationTable tr");

    rows.forEach(row => {
        let status = row.cells[4].textContent;
        if (filter === "All" || status === filter) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});
function makeTableResponsive() {
    if (window.innerWidth <= 768) {
        // Add data-labels to each cell
        const headers = Array.from(document.querySelectorAll('table thead th')).map(th => th.textContent);
        document.querySelectorAll('table tbody tr').forEach(row => {
            Array.from(row.cells).forEach((cell, i) => {
                cell.setAttribute('data-label', headers[i]);
            });
        });
    }
}

// Call this on load and resize
window.addEventListener('load', makeTableResponsive);
window.addEventListener('resize', makeTableResponsive);

document.getElementById("searchInput").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll("#violationTable tr");

    rows.forEach(row => {
        let name = row.cells[1].textContent.toLowerCase();
        let email = row.cells[2].textContent.toLowerCase();
        if (name.includes(filter) || email.includes(filter)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});

document.getElementById("statusFilter").addEventListener("change", function () {
    let filter = this.value;
    let rows = document.querySelectorAll("#violationTable tr");

    rows.forEach(row => {
        let status = row.cells[4].textContent;
        if (filter === "All" || status === filter) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});