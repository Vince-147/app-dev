 // Side Bar JS
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
 
 document.addEventListener("DOMContentLoaded", function () {
     const navLinks = document.querySelectorAll(".sidebar .nav-link");
     const currentPage = window.location.pathname.split("/").pop();
 
     navLinks.forEach(link => {
         const linkPage = link.getAttribute("href");
 
         if (linkPage === currentPage) {
             link.classList.add("active");
         } else {
             link.classList.remove("active");
         }
 
         link.addEventListener("click", function () {
             navLinks.forEach(nav => nav.classList.remove("active"));
             this.classList.add("active");
         });
     });
 });
 // End of Side Bar JS

$(document).ready(function () {
    const table = $('#authorizationTable').DataTable({
        responsive: true,
        language: {
            searchPlaceholder: "Search rules..."
        },
        columnDefs: [
            { targets: 4, type: 'date' }
        ]
    });

    function filterByDate(fromDate, toDate) {
        $.fn.dataTable.ext.search = []; 

        if (fromDate || toDate) {
            $.fn.dataTable.ext.search.push(function (settings, data) {
                const rowDate = new Date(data[4]);
                const min = fromDate ? new Date(fromDate) : null;
                const max = toDate ? new Date(toDate) : null;

                if ((min && rowDate < min) || (max && rowDate > max)) {
                    return false;
                }
                return true;
            });
        }

        table.draw();
    }

    document.getElementById("applyDateFilter").addEventListener("click", function () {
        const fromDate = document.getElementById("fromDate").value;
        const toDate = document.getElementById("toDate").value;

        filterByDate(fromDate, toDate);

        bootstrap.Modal.getInstance(document.getElementById('dateFilterModal')).hide();
    });

    document.getElementById("clearDates").addEventListener("click", function () {
        document.getElementById("fromDate").value = "";
        document.getElementById("toDate").value = "";
        filterByDate();
    });

    applyTableLabels();
});
