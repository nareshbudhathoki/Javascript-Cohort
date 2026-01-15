//promises

//https://api.freeapi.app/api/v1/public/quotes

function renderPromise(obj){
    obj.data.data.forEach((element, index) => {
    const li = document.createElement("li");
    li.innerText = element.content;
    items.append(li);
    });

}

const items = document.getElementById("items")
fetch('https://api.freeapi.app/api/v1/public/quotes')
.then((response)=>response.json())
.then(renderPromise) //here we passed the callback function as reference and it will pass obj as parametere interenally to the reference function above and which is the clean code approach
.catch((err)=>{"promise rejected"})
.finally(()=>{console.log("promise setteled")});

