function lookupStudent() {
    const rollNumber = document.getElementById("rollNumber").value;
    const resultElement = document.getElementById("result");

    
    const regex = /^ES(\d{2})(\w{2})(\d{2})$/;
    const match = rollNumber.match(regex);

    if (match) {
        const yearCode = match[1]; 
        const branchCode = match[2]; 
        const yearMapping = {
            '19': 'Final Year',
            '20': 'Third Year',
            '21': 'Second Year',
            '22': 'First Year',
        };
        const branchMapping = {
            'CS': 'Computer Science Engineering',
            'EC': 'Electronics and Communication',
           
        };

        const year = yearMapping[yearCode];
        const branch = branchMapping[branchCode];

        if (year && branch) {
            resultElement.innerText = `Year of Study: ${year}, Branch: ${branch}`;
        } else {
            resultElement.innerText = "Invalid branch code.";
        }
    } else {
        resultElement.innerText = "Invalid roll number format.";
    }
}
