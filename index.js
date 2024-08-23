let count = 0;
let incrementDataVariable = document.getElementById('counter-effect');
let saveButtonDataShow = document.getElementById('passage-show');

function incrementData(){
    count += 1;
    incrementDataVariable.textContent = count;
}

function saveButtonFunction(){
    let counterStr = count + " - ";
    saveButtonDataShow.textContent += counterStr;
    incrementDataVariable.textContent = 0;
    count = 0;
}