//select the elements we need
const textbox = document.querySelector(".textbox");
const button = document.querySelector(".submit-btn");
const characters = document.querySelector(".characters");


//function to count the characters on the textarea
function countCharacters(){
 
    const countNumber = document.createElement("span");
    countNumber.classList.add("characters-typed");
    
    textbox.addEventListener("input" , function(){
        const count = textbox.value.length;
        countNumber.textContent=count;
        
    })  
    characters.appendChild(countNumber);
}

countCharacters()