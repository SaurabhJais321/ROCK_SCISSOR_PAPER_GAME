let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user_score");
const compScorepara=document.querySelector("#comp_score");
const getCompChoice=()=>{
      const options=["rock","paper","scissors"];
      const randidx=Math.floor(Math.random()*3);
      return options[randidx];
}
const drawGame=()=>{
    msg.innerText="Game draw!,Play again";
    msg.style.backgroundColor="#081b31";
}
const showwinner=(userwin,userchioce,compchoice)=>{
       if(userwin){
        userscore++;
        userScorepara.innerText=userscore;
        console.log("you win!");
        msg.innerText=`You win! your ${userchioce} beats ${compchoice}`;
        msg.style.backgroundColor="green";
       }else{
        compscore++;
        compScorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText=`You lose! ${compchoice} beats your ${userchioce}`;
        msg.style.backgroundColor="red";
       }
}
const playGame=(userchoice)=>{
    const compchoice=getCompChoice();
    if(userchoice===compchoice){
        drawGame();
    }else{
       let userwin=true;
       if(userchoice==="rock"){
         userwin=compchoice==="paper"?false:true;
       } else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
       }else{
          userwin=compchoice==="rock"?false:true;
       }
       showwinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});