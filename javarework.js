let startDate, endDate;
    let selectedCarPrice = 0;
    const calendarContainer = document.getElementById('calendarContainer');
    const showDatesElement = document.getElementById('show');
    const totalPriceElement = document.getElementById('totalPrice');
    const carPrices = {
        'golf5': 25,
        'toyota': 25,
        'A3': 30,
        'A4': 45,
        'golf+': 30,
        'golf6': 30
    };
    
    function toggleCalendar() {
        calendarContainer.style.display = calendarContainer.style.display === 'block' ? 'none' : 'block';
    }
    
    function updateTotalPrice() {
        const rentalDays = calculateRentalDays();
        const cascoSelection = document.getElementById('siguracion').value;
        const crossBorder = document.getElementById('shteti').value;
        const additionalDrivers = parseInt(document.getElementById('additionalDrivers').value, 10);
        const pickupLocation = document.getElementById('location').value;
        let cascoCost = 0;
        let borderCost = 0;
        let additionalDriverCost = 0;
        let locationCost = 0;
    
        if (cascoSelection === '80') {
            cascoCost = 10;
        } else if (cascoSelection === '100') {
            cascoCost = 20;
        }

        if (crossBorder === 'yes') {
            borderCost = 50;
        }

        if (additionalDrivers > 1) {
            additionalDriverCost = (additionalDrivers - 1) * 3 * rentalDays;
        }

        if (pickupLocation === 'Tirana') {
            locationCost = 40;
        } else if (pickupLocation === 'Saranda') {
            locationCost = 200;
        }
    
        let totalPrice = 0;
        if (rentalDays > 0) {
            let extraCharge = isJulyOrAugust(startDate, endDate) ? 20 : 0;
            totalPrice = rentalDays * (selectedCarPrice + cascoCost + extraCharge) + borderCost + additionalDriverCost + locationCost;
        }
        
        totalPriceElement.textContent = `${totalPrice} €`;
        return totalPrice;
    }

    function calculateRentalDays() {
        if (startDate && endDate) {
            const diffTime = Math.abs(endDate - startDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays + 1; // Include both start and end date
        }
        return 0;
    }

    function isJulyOrAugust(start, end) {
        const july = 6; // Month index for July
        const august = 7; // Month index for August

        const isStartInJulyOrAugust = start.getMonth() === july || start.getMonth() === august;
        const isEndInJulyOrAugust = end.getMonth() === july || end.getMonth() === august;

        return isStartInJulyOrAugust || isEndInJulyOrAugust;
    }

    function updateCarPrices() {
        const extraCharge = isJulyOrAugust(startDate, endDate) ? 20 : 0;

        for (let car in carPrices) {
            const priceElement = document.getElementById(`${car}Price`);
            const basePrice = carPrices[car];
            const newPrice = basePrice + extraCharge;
            priceElement.innerHTML = `Price: <strong>${newPrice}</strong> €`;
        }
    }
    function Enter(event){
        if(event.key === 'Enter'){
            closepop();
        }
    }
              
    
    document.addEventListener('DOMContentLoaded', function() {
        const today = new Date();
        let currentMonth = today.getMonth();
        let currentYear = today.getFullYear();
    
        const calendar = document.getElementById('calendar');
        const currentMonthElement = document.getElementById('currentMonth');
        const prevMonthElement = document.getElementById('prevMonth');
        const nextMonthElement = document.getElementById('nextMonth');
    
        function renderCalendar() {
            calendar.innerHTML = '';
            currentMonthElement.textContent = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' });
    
            const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
            const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
            for (let i = 0; i < firstDayOfMonth; i++) {
                calendar.appendChild(document.createElement('div'));
            }
    
            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement('div');
                dayElement.textContent = day;
                dayElement.onclick = () => selectDate(new Date(currentYear, currentMonth, day));
                calendar.appendChild(dayElement);
            }
        }
    
        function selectDate(date) {
            if (!startDate) {
                startDate = date;
                showDatesElement.textContent = `${startDate.toLocaleDateString()}`;
            } else if (!endDate) {
                endDate = date;
                showDatesElement.textContent += ` - ${endDate.toLocaleDateString()}`;
                calendarContainer.style.display = 'none';
                updateCarPrices(); // Update car prices when end date is selected
                updateTotalPrice(); // Update total price after selecting the end date
            } else {
                startDate = date;
                endDate = null;
                showDatesElement.textContent = `${startDate.toLocaleDateString()}`;
            }
        }
    
        prevMonthElement.onclick = () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar();
        };
    
        nextMonthElement.onclick = () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar();
        };
    
        renderCalendar();
    });
    
    function change(){
       document.getElementById('popup').classList.add('spost');
       document.getElementById('popup1').classList.add('duku');
       updateTotalPrice(); // Update total price when changing to the next step
    }
    
    function sendEmail() {
           const emerInput = document.getElementById('emri');
            const mbiemerInput = document.getElementById('mbiemri');
            const emailiInput = document.getElementById('emaili');
            const notesInput = document.getElementById('notes');
            const showDatesInput = document.getElementById('show');
            const siguracion = document.getElementById('siguracion').value;
            const shteti = document.getElementById('shteti').value;
            const additionalDrivers = document.getElementById('additionalDrivers').value;
            const selectedCar = document.getElementById('selectedCar').value;
            const pickupLocation = document.getElementById('location').value;
        
            const time1 = document.querySelector('.cal1:nth-child(1)').value;
            const time2 = document.querySelector('.cal1:nth-child(2)').value;
        
            const emri = emerInput.value;
            const mbiemri = mbiemerInput.value;
            const emaili = emailiInput.value;
            const notes = notesInput.value;
            const selectedDates = showDatesInput.textContent;
            const totalPrice = updateTotalPrice();
        
            const text = document.querySelector('.close');
            if(text.innerHTML === 'Send email'){
                text.innerHTML = 'Thanks'
            } else{
                text.innerHTML = 'Send email'
                text.classList.remove('plus')
            }
        
                
            emailjs.init("N6ErUOxpRCQ6rHaao");
        
            var emailData = {
                to_email: "rentacartiranaairport1@gmail.com",
                from_name: emri + " " + mbiemri,
                message: "Emaili i porositesit nga: " + emaili +
                ".     " + "Notes: " + notes + ".        " + selectedDates + " " + time1 + " - " + time2 +
                "     Siguracioni: " + siguracion + "   " +  "Jasht shteti : " + shteti +
                 ".   Numri i Shoferave: " + additionalDrivers + ".    Lloji makines: " + selectedCar +".  Vendi:" + pickupLocation + ".    Cmimi Total: " + totalPrice + "€"
            };
        
            emailjs.send("service_pr32msp", "template_m9f5r4q", emailData)
            .then(function (response) {
                alert("Email sent successfully!", response);
            }, function (error){
                alert("Error while sending the email!", error);
            })
        }
    
 
    function showDiv(carPriceId) {
        // Set the selected car price in the global variable
        selectedCarPrice = carPrices[carPriceId];
        document.getElementById('selectedCar').value = carPriceId;

        // Update the total price
        updateTotalPrice();

        // Display "Selected" only for the selected car element
        const carElements = document.getElementsByClassName('cmimi');
        for (let i = 0; i < carElements.length; i++) {
            if (carElements[i].id === carPriceId + 'Price') {
                carElements[i].innerHTML = `Price: <strong>${carPrices[carPriceId]}</strong> € - Selected`;
            } else {
                carElements[i].innerHTML = `Price: <strong>${carPrices[carElements[i].id.replace('Price', '')]}</strong> €`;
            }
        }
    }

    function scrollToSection(sectionClass) {
    document.querySelector('.' + sectionClass).scrollIntoView({ behavior: 'smooth' });
    }


