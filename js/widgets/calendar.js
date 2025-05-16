export function calendar() {
  manipulate();
  displayCal();
}

// "CONST" Function to generate the calendar
const manipulate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = document.querySelector(".calendar-dates");
  const currdate = document.querySelector(".calendar-current-date");
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  // Get the first day of the month
  let dayone = new Date(year, month, 1).getDay();

  // Get the last date of the month
  let lastdate = new Date(year, month + 1, 0).getDate();

  // Get the day of the last date of the month
  let dayend = new Date(year, month, lastdate).getDay();

  // Get the last date of the previous month
  let monthlastdate = new Date(year, month, 0).getDate();

  // Variable to store the generated calendar HTML
  let lit = "";

  // Loop to add the last dates of the previous month
  for (let i = dayone; i > 0; i--) {
    lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
  }

  // Loop to add the dates of the current month
  for (let i = 1; i <= lastdate; i++) {
    // Check if the current date is today
    let isToday =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";
    lit += `<li class="${isToday}">${i}</li>`;
  }

  // Loop to add the first dates of the next month
  for (let i = dayend; i < 6; i++) {
    lit += `<li class="inactive">${i - dayend + 1}</li>`;
  }

  // Update the text of the current date element
  // with the formatted current month and year
  currdate.innerText = `${months[month]} ${year}`;

  // update the HTML of the dates element
  // with the generated calendar
  day.innerHTML = lit;
};

manipulate();

function displayCal() {
  let height = document.getElementById("calendar-container").clientHeight;
  let width = document.getElementById("calendar-container").clientWidth;
  let h_display = document.getElementById("height");

  h_display.innerHTML = `${height}px, ${width}px`;
}
