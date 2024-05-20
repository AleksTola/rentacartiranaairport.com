document.addEventListener("DOMContentLoaded", function() {
    const calendarContainer = document.querySelector(".calendar-container");
    const currentMonthElement = document.getElementById("currentMonth");
    const calendarElement = document.getElementById("calendar");
    const prevMonthButton = document.getElementById("prevMonth");
    const nextMonthButton = document.getElementById("nextMonth");
    const showDatesElement = document.querySelector(".show");
    const borderElement = document.querySelector(".border");

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear().toString().slice(-2);
    let currentMonth = currentDate.getMonth();
    let selectedDates = []; 

    function datat() {
        var calendar = document.querySelector('.calendar-container');
        if (calendar.style.display === 'none') {
            selectedDates = [];
            showDatesElement.textContent = "Dates"; 
            calendar.style.display = 'block';
        } else {
            calendar.style.display = 'none';
        }
    }

    function generateCalendar(year, month) {
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();
        const firstDayOfWeek = firstDayOfMonth.getDay();

        currentMonthElement.textContent = `${monthNames[month]} ${year}`;

        let date = 1;
        let html = "<div class='day-header'>Sun</div>";
        html += "<div class='day-header'>Mon</div>";
        html += "<div class='day-header'>Tue</div>";
        html += "<div class='day-header'>Wed</div>";
        html += "<div class='day-header'>Thu</div>";
        html += "<div class='day-header'>Fri</div>";
        html += "<div class='day-header'>Sat</div>";

        for (let i = 0; i < 42; i++) {
            if (i < firstDayOfWeek || date > daysInMonth) {
                html += `<div class="days"></div>`;
            } else {
                const dateString = `${date}-${month + 1}-${year}`; 
                const isSelected = selectedDates.includes(dateString) ? "selected" : "";
                html += `<div class="days clickable ${isSelected}" data-date="${dateString}">${date}</div>`;
                date++;
            }
        }

        calendarElement.innerHTML = html;

        // Add click event listeners to clickable days
        const clickableDays = document.querySelectorAll('.clickable');
        clickableDays.forEach(day => {
            day.addEventListener('click', function() {
                const dateString = this.dataset.date;

                // Toggle selection of the day
                if (selectedDates.includes(dateString)) {
                    selectedDates = selectedDates.filter(date => date !== dateString);
                    this.classList.remove('selected');
                } else {
                    if (selectedDates.length < 2) { // Limit selection to 2 days
                        selectedDates.push(dateString);
                        this.classList.add('selected');
                    } else {
                        alert("You can only select up to 2 days.");
                        return; // Stop further execution
                    }
                }

                // Show selected dates in the showDatesElement
                if (selectedDates.length > 0) {
                    const formattedDates = selectedDates.map(date => {
                        const [day, month, year] = date.split('-');
                        return `${day}/${month}/${year}`;
                    });
                    showDatesElement.textContent = formattedDates.join(" - ");
                    borderElement.style.display = 'block';
                } else {
                    showDatesElement.textContent = "Dates";
                    borderElement.style.display = 'none';
                }

                // Close the calendar after selecting two dates
                if (selectedDates.length === 2) {
                    calendarContainer.style.display = 'none';
                }
            });
        });
    }

    // Attach event listener to toggle calendar visibility
    const calendarToggle = document.querySelector('.cal');
    calendarToggle.addEventListener('click', datat);

    generateCalendar(currentYear, currentMonth);

    prevMonthButton.addEventListener("click", function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentYear, currentMonth);
    });

    nextMonthButton.addEventListener("click", function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentYear, currentMonth);
    });
});



  function back() {
    const img = document.querySelector('.inf .flex-mak img');
    const infot = document.querySelector('.inf .infot');
    if (img.src.includes('golf7')) {
        img.src = "/projekt1 img/audia4.jfif";
        infot.innerHTML = `
        <li>Audi A4 Automatic <strong class="leku">50 €</strong></li>
        <li>Audi A4 + Full Casco <strong class="leku">80 €</strong></li>`;
    } else if (img.src.includes('toyota')) {
        img.src = "/projekt1 img/golf7.jfif";
        infot.innerHTML = `
        <li>Wolkswagen Golf Mk6 Automatic <strong class="leku">30 €</strong></li>
        <li>Wolkswagen Golf Mk6 + Full Casco <strong class="leku">60 €</strong></li>`;
    } else if (img.src.includes('golf+')) {
        img.src = "/projekt1 img/toyota.jfif";
        infot.innerHTML = `
        <li>Toyota Auris Manual <strong class="leku">25 €</strong></li>
        <li>Toyota Auris + Full casco <strong class="leku">50 €</strong></li>`;
    } else if (img.src.includes('audia3')) {
        img.src = "/projekt1 img/golf+.jpg";
        infot.innerHTML = `
        <li>Wolkswagen Golf Plus Automatic <strong class="leku">30 €</strong></li>
        <li>Wolkswagen Golf Plus + Full Casco <strong class="leku">60 €</strong></li>`;
    } else if (img.src.includes('golf5')) {
        img.src = "/projekt1 img/audia3.jfif";
        infot.innerHTML = `
        <li>Audi A3 Automatic <strong class="leku">30 €</strong></li>
        <li>Audi A3 + Full Casco <strong class="leku">60 €</strong></li>`;
    } else if (img.src.includes('audia4')) {
        img.src = "/projekt1 img/golf5.jfif";
        infot.innerHTML = `
        <li>Wolkswagen Golf Mk5 Manual <strong class="leku">25 €</strong></li>
        <li>Wolkswagen Golf Mk5 + Full Casco <strong class="leku">50 €</strong></li>`;
    }
}

function next(){
  const img = document.querySelector('.inf .flex-mak img');
  const infot = document.querySelector('.inf .infot');
  if (img.src.includes('golf7')){
img.src = "/projekt1 img/toyota.jfif";
infot.innerHTML = `
  <li>Toyota Auris Manual <strong class="leku">25 €</strong></li>
  <li>Toyota Auris + Full casco <strong class="leku">50 €</strong></li>`;
} else if (img.src.includes('toyota')) {
img.src = "/projekt1 img/golf+.jpg";
infot.innerHTML = `
  <li>Wolkswagen Golf Plus Automatic <strong class="leku">30 €</strong></li>
  <li>Wolkswagen Golf Plus + Full Casco <strong class="leku">60 €</strong></li>`;
} else if (img.src.includes('golf+')) {
img.src = "/projekt1 img/audia3.jfif";
infot.innerHTML = `
  <li>Audi A3 Automatic <strong class="leku">30 €</strong></li>
  <li>Audi A3 + Full Casco <strong class="leku">60 €</strong></li>`;
} else if (img.src.includes('audia3')) {
img.src = "/projekt1 img/golf5.jfif";
infot.innerHTML = `
  <li>Wolkswagen Golf Mk5 Manual <strong class="leku">25 €</strong></li>
  <li>Wolkswagen Golf Mk5 + Full Casco <strong class="leku">50 €</strong></li>`;
} else if (img.src.includes('golf5')) {
img.src = "/projekt1 img/audia4.jfif";
infot.innerHTML = `
  <li>Audi A4 Automatic <strong class="leku">50 €</strong></li>
  <li>Audi A4 + Full Casco <strong class="leku">80 €</strong></li>`;
} else if (img.src.includes('audia4')) {
img.src = "/projekt1 img/golf7.jfif";
infot.innerHTML = `
  <li>Wolkswagen Golf Mk6 Automatic <strong class="leku">30 €</strong></li>
  <li>Wolkswagen Golf Mk6 + Full Casco <strong class="leku">60 €</strong></li>`;
}
};
function showDiv() {
    var popup = document.getElementById("popup");
    var overlay = document.getElementById("overlay");
    popup.classList.add("show");
    
    if (popup.classList.add("show"));
}

function cars(){
    window.open('cars.html', '_self')
}

function Enter(event){
    if(event.key === 'Enter'){
        closepop();
    }
}
function closepop(){
    const emerInput = document.getElementById('emri');
    const mbiemerInput = document.getElementById('mbiemri');
    const emailiInput = document.getElementById('emaili');
    const notesInput = document.getElementById('notes');
    const showDatesInput = document.getElementById('show');

    const time1 = document.querySelector('.cal1:nth-child(1)').value;
    const time2 = document.querySelector('.cal1:nth-child(2)').value;

    const emri = emerInput.value;
    const mbiemri = mbiemerInput.value;
    const emaili = emailiInput.value;
    const notes = notesInput.value;
    const selectedDates = showDatesInput.textContent;

    const text = document.querySelector('.close');
    const content = document.querySelector('.popup')

    if(text.innerHTML === 'Send email'){
        text.innerHTML = 'Thanks'
        text.classList.add('plus')
    } else{
        text.innerHTML = 'Send email'
        text.classList.remove('plus')
    }

    if(text.innerHTML == 'Thanks'){
        popup.classList.add('bye')
    } else if(text.innerHTML == 'Send email'){
        popup.classList.remove('bye')
    }

    emailjs.init("N6ErUOxpRCQ6rHaao");
    var emailData = {
        to_email: "rentacartiranaairport1@gmail.com",
        from_name: emri + " " + mbiemri,
        message: "Emaili i porositesit nga: " + emaili +
         ".     " + "Notes: " + notes + ".        " + selectedDates + " " + time1 + " - " + time2

    };

    emailjs.send("service_pr32msp","template_m9f5r4q", emailData)
    .then(function (response) {
        alert("Email sent successfuly!", response);
    }, function (error){
        alert("Error while sending the email!", error);
    })
}


