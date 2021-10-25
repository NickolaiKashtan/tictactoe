const area = document.getElementById("area");
let move = 0;

const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-window-wrapper');
const overlay = document.getElementById('overlay');
const button = document.getElementById('btn-close');

area.addEventListener('click', e => {
    if (e.target.className == "box"){
        move%2 === 0 ? e.target.innerHTML = "X" : e.target.innerHTML= "0";
        move++;
        
        check();
    }
});

const check = () => {
    const boxes = document.getElementsByClassName("box");
    
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]



    for(i = 0; i < arr.length; i++) {
        if(
            boxes[arr[i][0]].innerHTML == "X" && boxes[arr[i][1]].innerHTML == "X" && boxes[arr[i][2]].innerHTML == "X"
            )
        {
            let result = "Крестики";
            prepareResult(result);

        } else if (
            boxes[arr[i][0]].innerHTML === "0" && boxes[arr[i][1]].innerHTML === "0" && boxes[arr[i][2]].innerHTML === "0"
            )
        {
            let result = "Нолики"
            prepareResult(result);
        }
        
        
    }

}



function prepareResult(winner) {
        contentWrapper.innerHTML = `Победили ${winner}`;
        modalResult.style.display = "block"; 

}


function close() {
    modalResult.style.display = "none";
    location.reload();
}

overlay.addEventListener("click", close);
button.addEventListener("click", close);


