//select the elements we need
const textbox = document.querySelector(".textbox");
const button = document.querySelector(".submit-btn");
const characters = document.querySelector(".characters");
const form = document.querySelector(".form");


//function to count the characters on the textarea
function countCharacters(){
    
    //creating the span element where the count will be stored
    const countNumber = document.createElement("span");

    //adding the appropiate css styling
    countNumber.classList.add("characters-typed");
    
    //event listener that takes the users input and counts it incrementally
    textbox.addEventListener("input" , function(){
        const count = textbox.value.length;
        countNumber.textContent=` ${count} / 280 characters `;

    
        if(count > 260 && count <=280){
            countNumber.classList.remove("characters-typed-over");
            countNumber.classList.add("characters-typed-almost");
            button.disabled = false;
            textbox.classList.remove("textbox-over");
            textbox.classList.add("textbox-almost");
        }else if (count > 280){
            countNumber.classList.remove("characters-typed-almost");
            countNumber.classList.add("characters-typed-over");
            button.disabled = true;
            textbox.classList.remove("textbox-almost");
            textbox.classList.add("textbox-over");
           
        }else if (count < 261){
            countNumber.classList.remove("characters-typed-over");
            countNumber.classList.remove("characters-typed-almost");
            button.disabled = false;
            textbox.classList.remove("textbox-almost");
            textbox.classList.remove("textbox-over");
            
        }
        
    })  
    
    characters.appendChild(countNumber);

    form.addEventListener("submit" ,function(event){
        const count = textbox.value.length;

        if(count>280){
        event.preventDefault();
        }

    })

}

  
countCharacters();