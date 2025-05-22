// Get the root div
const parent = document.getElementById("root"),
    textarea = document.createElement("textarea"), // user input
    button = document.createElement("button"), //submit userinput
    resultDiv = document.createElement("div"); //displays results

textarea.placeholder = "Enter text: " //text label
button.textContent = "Submit"; //button label

parent.appendChild(textarea);
parent.appendChild(button);
parent.appendChild(resultDiv);

//Count top 5 most frequent words
function freqCount(text) {
    let words = text.trim().split(/\s+/);
    let freq = {};
    for (let i = 0; i < words.length; i++) {
        let w = words[i].toLowerCase(); //LowerCase
        if (freq[w]) {
            freq[w] = freq[w] + 1;
        } else {
            freq[w] = 1;
        }
    }
 return freq;  
}

function topFiveWords(freqObj) {
    let entries = Object.entries(freqObj); //make into an array
    entries.sort(function(a, b) { //alphabeticial sorting
        if (b[1] !== a[1]) {
            return b[1] - a[1]; //counts highest to lowerst
        } else {
            return a[0].localeCompare(b[0]);
            }
  }); //function argument and statement closed
return entries.slice(0, 5);
}
//table with 2 columns
function renderTable(arr) {
    let html = "<table border='1'>";
    html += "<tr><th>word_name</th><th>word_frequency</th></tr>";
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i][0];
        let count = arr[i][1];
        html += "<tr><td>" + word + "</td><td>" + count + "</td></tr>";
  }
    html += "</table>";
     return html;
}

button.addEventListener("click", function() {
    let input = textarea.value;
    if (input.trim() == "") {
        resultDiv.textContent = "Please enter text: ";
        return;
    }
    let freq = freqCount(input);
    console.log(freq);
    let top5 = topFiveWords(freq);
    resultDiv.innerHTML = renderTable (top5);
});

