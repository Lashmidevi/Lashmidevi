function changeBorderWidth() {
    const table = document.getElementById("dynamicTable");
    const borderWidth = document.getElementById("borderWidth").value;
    table.style.border = `${borderWidth}px solid black`;
}

function changeBackgroundColor() {
    const table = document.getElementById("dynamicTable");
    const bgColor = document.getElementById("bgColor").value;
    table.style.backgroundColor = bgColor;
}

function changeTextColor() {
    const table = document.getElementById("dynamicTable");
    const textColor = document.getElementById("textColor").value;
    const cells = table.getElementsByTagName("td");
    for (let cell of cells) {
        cell.style.color = textColor;
    }
}

function changeTextAlignment() {
    const table = document.getElementById("dynamicTable");
    const textAlign = document.getElementById("textAlign").value;
    const cells = table.getElementsByTagName("td");
    for (let cell of cells) {
        cell.style.textAlign = textAlign;
    }
}
