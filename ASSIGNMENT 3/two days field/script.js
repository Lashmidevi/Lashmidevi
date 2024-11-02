document.getElementById("calculateBtn").addEventListener("click", calculateDays);

function calculateDays() {
    const startDateInput = document.getElementById("startDate").value;
    const endDateInput = document.getElementById("endDate").value;

    if (!startDateInput || !endDateInput) {
        document.getElementById("result").innerText = "Please select both dates.";
        return;
    }

    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);

    if (startDate > endDate) {
        document.getElementById("result").innerText = "Start date must be before end date.";
        return;
    }

    const timeDifference = endDate - startDate;
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    document.getElementById("result").innerText = `Number of days: ${daysDifference}`;
}
