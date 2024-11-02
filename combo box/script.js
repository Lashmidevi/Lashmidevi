document.getElementById("addItemBtn").addEventListener("click", function() {
    const newItem = document.getElementById("newItem").value;
    if (newItem) {
        const comboBox = document.getElementById("comboBox");
        const option = document.createElement("option");
        option.text = newItem;
        comboBox.add(option);
        document.getElementById("newItem").value = ''; 
    } else {
        alert("Please enter an item.");
    }
});

document.getElementById("removeItemBtn").addEventListener("click", function() {
    const comboBox = document.getElementById("comboBox");
    const selectedIndex = comboBox.selectedIndex;
    if (selectedIndex !== -1) {
        comboBox.remove(selectedIndex);
    } else {
        alert("Please select an item to remove.");
    }
});

document.getElementById("comboBox").addEventListener("change", function() {
    const comboBox = document.getElementById("comboBox");
    const selectedItem = comboBox.options[comboBox.selectedIndex]?.text;
    document.getElementById("selectedItemDisplay").innerText = selectedItem || 'None selected';
});
