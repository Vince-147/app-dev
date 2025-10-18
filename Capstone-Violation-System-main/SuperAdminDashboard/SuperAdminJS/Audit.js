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
    $('#auditTable').DataTable({
        responsive: true,
        language: {
            searchPlaceholder: "Search rules..."
        }
    });
});

//name ng id or name ng button
$('#printTable').click(function () {
    // Clone the DataTable and remove the Actions column
    let clonedTable = $('#auditTable').clone(); // dito mo lagay yung name ng table na target mo

    // Remove the last column (Actions)
    clonedTable.find('tr').each(function () {
        $(this).find('th:last-child, td:last-child').remove();
    });

    // Remove all DataTable classes and IDs for clean print
    clonedTable.removeClass().removeAttr('id');
    clonedTable.find('*').removeClass();

    // Define CSS for print
    let styles = `
        <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h2 { text-align: center; margin-bottom: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #000; padding: 8px; font-size: 12px; text-align: left; }
            th { background-color: #f2f2f2; }
        </style>
    `;

    // Open new window for print
    let printWindow = window.open('', '', 'width=1000,height=700');
    printWindow.document.write('<html><head><title>Print Audit Logs</title>' + styles + '</head><body>');
    printWindow.document.write('<h2>Audit Logs</h2>');
    printWindow.document.write(clonedTable.prop('outerHTML'));
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
});