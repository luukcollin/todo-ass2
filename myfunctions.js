let checkedBoxes = [];
let uncheckedBoxes = [];
function addCheckbox(){
    const divWrapper = document.createElement('div');
    divWrapper.classList.add('my-checkbox')
    const input = document.createElement('input');
    const label = document.createElement('label');

    label.textContent = document.getElementById("add-input").value;
    input.type = "checkbox";
    input.onchange = function(event) {
        console.log(event)
        input.checked ? console.warn("checked!") : console.log("unchecked!") 

        scanInputElements();
        updateStats();
    }

    divWrapper.append(input);
    divWrapper.append(label);

    document.body.append(divWrapper);
    scanInputElements();
    updateStats();
} 
function scanInputElements(){
    const elems = document.querySelectorAll('.my-checkbox');
    const checkBoxElems = Array.from(elems);
    uncheckedBoxes = checkBoxElems.filter(elem => !isChecked(elem));
    checkedBoxes = checkBoxElems.filter(elem => isChecked(elem));

    checkedBoxes.forEach(elem => addElemToList('list-2', elem));
    uncheckedBoxes.forEach(elem => addElemToList('list-1', elem));
}
function updateStats(){
    const stats = document.getElementById('stats');
    while(stats.hasChildNodes()){
        stats.firstChild.remove();
    }
    const pChecked= document.createElement('p');
    const pUnchecked= document.createElement('p');
    pChecked.innerText = "Aantal checked: " + checkedBoxes.length;
    pUnchecked.innerText =  "Aantal unchecked: " + uncheckedBoxes.length;
    stats.append(pChecked);
    stats.append(pUnchecked);
}

function isChecked(divWrapper){
   return extractCheckboxValueFromDivWrapper(divWrapper).checked;
}

function extractCheckboxValueFromDivWrapper(htmlElem){
    return htmlElem.querySelectorAll('input')[0];
}

function addElemToList(listId, elem){
    const list = document.getElementById(listId);
    list.append(elem);
}