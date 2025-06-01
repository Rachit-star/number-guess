let btn=document.querySelector("button");
let num=Math.floor(Math.random()*100)+1;
let guess=document.querySelector("input");
let high=document.querySelector("#high");
let low=document.querySelector("#low");
let correct=document.querySelector("#correct")
let guesses=document.querySelector("#guess");

let tries=10;
let amount=document.querySelector("#nog");
btn.addEventListener("click",()=>{
    let user=parseInt(guess.value);
    

    if (isNaN(user) || user < 1 || user > 100) {
        alert("Incorrect format. Please enter a number between 1 and 100.");
        guess.value = "";
        return;
    }

    tries--;
    amount.textContent=tries;

    

    if(tries>0){
        if(user>num){
        high.style.display="inline";
        guesses.append(`${user} ,`);

        setTimeout(()=>{
            high.style.display="none"
        },1500);

        
        }else if(user<num){
        low.style.display="inline";
        guesses.append(`${user} ,`);

        setTimeout(()=>{
            low.style.display="none"
        },1500);

        }else{
        correct.style.display="inline";
        guesses.append(`${user} ,`);
        btn.disabled = true;
        guess.disabled = true;
        

        setTimeout(()=>{
            correct.style.display="none"
        },10000);
        return;

    }

    }else{
        if (tries === 0) {
        alert(`You have run out of chances. The number was ${num}`);
        btn.disabled = true;
        guess.disabled = true;
    }
    }

    guess.value = "";


    

    
})