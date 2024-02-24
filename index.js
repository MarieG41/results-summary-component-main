let reaction = document.querySelector('.one');
let memory = document.querySelector('.two');
let verbal = document.querySelector('.three');
let visual = document.querySelector('.four');


callFunctions();

function callFunctions() {
    reactionData();
    memoryData();
    verbalData();
    visualData();
}

function reactionData() {
    fetch("data.json")
    .then(response => response.json())
    .then(response => {
        //console.log(response[0].score);
        res = response[0].score;
        reaction.textContent = res;
    });
}

function memoryData() {
    fetch("data.json")
    .then(response => response.json())
    .then(response => {
        //console.log(response[0].score);
        res = response[1].score;
        memory.textContent = res;
    });
}

function verbalData() {
    fetch("data.json")
    .then(response => response.json())
    .then(response => {
        //console.log(response[0].score);
        res = response[2].score;
        verbal.textContent = res;
    });
}

function visualData() {
    fetch("data.json")
    .then(response => response.json())
    .then(response => {
        //console.log(response[0].score);
        res = response[3].score;
        visual.textContent = res;
    });
}