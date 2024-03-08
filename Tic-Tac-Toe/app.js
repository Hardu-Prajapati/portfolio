let boxes = document.querySelectorAll(".box");
let winmsg=document.querySelector(".win-msg");
let msghide=document.querySelector(".new-btn");
let neww=document.querySelector(".new");
let restart=document.querySelector(".reset");
let turnO=true; // player o , player x
let count=0;

const possibilities=[
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO)
        {
            //player O
            box.innerText="O";
            turnO=false;
        }else{
                //player x
                box.innerText="X";
                turnO=true;
        }
        box.disabled=true;
        count++;
        let winn=checkwinner();

        if(count===9 &&! winn)
        {
            gamedraw();
        }
    });
});
const gamedraw=() =>{
    winmsg.innerText=`Game was draw!!,Try Again...`;
    msghide.classList.remove("hide");
    disablebox();
};
const newgame=() =>{
    turnO=true;
    count=0;
    msghide.classList.add("hide");
    enablebox();
}
const enablebox=() =>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};
const disablebox=() =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const showwinner=(winner) =>{
    winmsg.innerText = `Congratulation,The Game winner is ${winner}`;
    msghide.classList.remove("hide");
    disablebox();
};

const checkwinner=() =>{

        for(let pospattern of possibilities)
        {
            let posval1=boxes[pospattern[0]].innerText;
            let posval2=boxes[pospattern[1]].innerText;
            let posval3=boxes[pospattern[2]].innerText;

            if(posval1 != ""&&posval2 != ""&&posval3 != "")
            {
                if(posval1===posval2&&posval2===posval3)
                {
                    showwinner(posval1);
                    return true;
                }
            }
        }
};

neww.addEventListener("click",newgame);
restart.addEventListener("click",newgame);