const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const currentYear = new Date().getFullYear();
const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);

function update() {
    const diff_in_milliseconds = newYear - new Date();

    const noofDays = Math.floor((diff_in_milliseconds / 1000 / 60 / 60 / 24));
    const noofHours = Math.floor((diff_in_milliseconds / 100 / 60 / 60) % 24);
    const noofMinutes = Math.floor((diff_in_milliseconds / 1000 / 60) % 60);
    const noofSeconds = Math.floor((diff_in_milliseconds / 1000) % 60);
    const milliseconds = Math.floor((diff_in_milliseconds % 1000));

    days.innerHTML = noofDays < 10 ? "0" + noofDays : noofDays;
    hours.innerHTML = noofHours < 10 ? "0" + noofHours : noofHours;
    minutes.innerHTML = noofMinutes < 10 ? "0" + noofMinutes : noofMinutes;
    seconds.innerHTML = noofSeconds < 10 ? "0" + noofSeconds : noofSeconds;
}

setInterval(() => { update() }, 1000);