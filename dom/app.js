const button = document.getElementById("theme-button");

function changeTheme(color){
  document.body.style.backgroundColor = color;
}

button.addEventListener('click', ()=>{
  const currentColor = document.body.style.backgroundColor;
  if(!currentColor || currentColor ==="white"){
    changeTheme("black");
    button.innerText = "Light Mode";
  }else{
    changeTheme("white");
    button.innerText = "Dark Mode";
  }
})