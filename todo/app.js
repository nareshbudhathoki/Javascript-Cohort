
let ul = document.getElementById("ulId");
let btn = document.getElementById("add");


function handleBtn(){
let input = document.getElementById('task');
  if (input.value.trim() === "") {
    return; // stop if empty
  }
let li = document.createElement("li")
let del = document.createElement("button");
del.innerText = "X";
del.addEventListener('click', handleDel);
li.innerText = input.value;
li.appendChild(del);
ul.appendChild(li);
input.value = "";

}

function handleDel(e){
e.target.parentElement.remove();
}
btn.addEventListener('click', handleBtn);


