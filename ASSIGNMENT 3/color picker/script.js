function applyStyles() {
    const fontSelect = document.getElementById('fontSelect').value;
    const sizeSelect = document.getElementById('sizeSelect').value;
    const colorPicker = document.getElementById('colorPicker').value;

    const paragraph = document.getElementById('paragraph');
    paragraph.style.fontFamily = fontSelect;
    paragraph.style.fontSize = sizeSelect;
    paragraph.style.color = colorPicker;
}
