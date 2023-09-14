// Get the "Launch Sites" button element
const launchButton = document.getElementById("launch-button");

// Add a click event listener to the "Launch Sites" button
launchButton.addEventListener("click", () => {
    // Get the selected stock from the dropdown

    var checkedBNK = document.querySelector('#banks :checked');
    var checkedOTH = document.querySelector('#others :checked');
    var selectedOption;
    
    if(checkedBNK.label !== "b n k"){
        selectedOption = checkedBNK.value;
    }
    else if(checkedOTH.label !== "o t h"){
        selectedOption = checkedOTH.value;
    }
    console.log(selectedOption);

    if (selectedOption) {
        const checkboxes = document.querySelectorAll('.checkboxes input[type="checkbox"]:checked');
        checkboxes.forEach((checkbox) => {
            if (checkbox.value === "TVT") {
                // window.open(`https://www.screener.in/company//${selectedOption}`);
                selectedOption = selectedOption === "M%26M" ? "M_M" : selectedOption;
                window.open(`https://in.tradingview.com/symbols/NSE-` + selectedOption + `/technicals/`);
            }
            if (checkbox.value === "GS") {
                window.open(`https://www.google.com/search?q=${selectedOption.toLowerCase()}+share+price`);
            }
            if (checkbox.value === "TVS") {
                selectedOption = selectedOption === "M%26M" ? "M_M" : selectedOption;
                window.open(`https://in.tradingview.com/chart/Eydc2P8y/?symbol=NSE%3A` + selectedOption);
            }
            if (checkbox.value === "SC") {
                window.open(`https://www.screener.in/company/` + selectedOption + `/consolidated/`);
            }
        });
    }
});
