const inputBtn = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    // clear the input text box 
    inputEl.value = "";
    renderLeads();
});

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href='#'>" + myLeads[i] + "</a></li>";
        listItems += `
        <li>
        <a target='_blank' href='${myLeads[i]}'>${myLeads}</a>
        </li>
        `;
    }
    ulEl.innerHTML = listItems;
}