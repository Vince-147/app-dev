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

  // Calendar JS
 document.addEventListener("DOMContentLoaded", function () {
    const monthYear = document.getElementById("monthYear");
    const calendarDates = document.getElementById("calendarDates");

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // 🗓️ Example scheduled sessions
    // Key format: "YYYY-MM-DD"
    const scheduledSessions = {
        "2025-10-11": "Session with Student A (10:00 AM)",
        "2025-10-15": "Follow-up Counseling Session",
        "2025-10-21": "Group Therapy Session"
    };

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    monthYear.textContent = `${months[month]} ${year}`;

    

    // Fill initial empty slots
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        calendarDates.appendChild(emptyDiv);
    }

    // Fill dates
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement("div");
        day.textContent = i;

        const currentDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

        // Highlight today
        if (i === date.getDate() && year === date.getFullYear() && month === date.getMonth()) {
            day.classList.add("today");
        }

        // 🟢 Highlight and add tooltip for scheduled days
        if (scheduledSessions[currentDate]) {
            day.classList.add("scheduled");
            day.setAttribute("data-tooltip", scheduledSessions[currentDate]);
        }

        calendarDates.appendChild(day);
    }
});


 // End of Calendar JS
  
 //Notification JS
 function dismissNotification(button) {
         const card = button.closest('.notification-card');
         card.style.transition = 'opacity 0.3s ease';
         card.style.opacity = '0';
         setTimeout(() => card.remove(), 300);
     }