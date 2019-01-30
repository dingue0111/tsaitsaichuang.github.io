var user =prompt ("paper,scissors,stone?");
var computer =Math.random();

if (computer<=0.33){
    computer ="paper";
}
else if(computer<=0.66){
    computer ="scissors";
}
else{
    computer = "stone";
} 

alert("computer is "+computer);

function f(user,computer){
if (user == computer){
    return "it's a tie";
}
else if(user =="scissors"){
        if(computer == "paper"){
            return"user wins";
        }
        else if (computer == "stone"){
            return"user loses";
        }
}
else if(user =="paper"){
        if(computer == "stone"){
            return"user wins";
        }
        else if(computer == "scissors"){
            return"user loses";
        }
}
else if(user =="stone"){
        if(computer == "scissors"){
            return"user wins";
        }
        else if (computer == "paper"){
            return"user loses";
        }
}
}

alert(f(user,computer));

