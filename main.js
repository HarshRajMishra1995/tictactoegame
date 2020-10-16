var sign="x";
document.getElementById("Result").innerHTML="";
function main(x)
{
    var y=document.getElementById("cell"+x);
  //  console.log(y);
    if(y.innerText=="")
    {
        y.innerText=sign;   
        winner();
        checksign();
        if(sign=="x")
        {
            document.getElementById("player").innerHTML="player 1 turns";
        }
        else
        {
            document.getElementById("player").innerHTML="player 2 turns";
        }
       
    }
}
function checksign()
{
    if(sign=="x")
    {
        
        sign="0";
    }
    else{
        
        sign="x";
    }
}
 function getbox(no)
 {
     return document.getElementById("cell"+no).innerHTML;
 }

 function checkmove(a,b,c,move)
 {
    if(getbox(a)==move && getbox(b)==move && getbox(c)==move)
    {
        return true;
    }
    else
    {
        return false;
    }
 }

 function winner()
 {
     if(checkmove(1,2,3,sign)||checkmove(4,5,6,sign)||checkmove(7,8,9,sign)
     ||checkmove(1,5,9,sign)||checkmove(1,4,7,sign)||checkmove(2,5,8,sign)||
       checkmove(3,6,9,sign)||checkmove(7,5,3,sign))
     {
         if(sign=="x")
         {
            document.getElementById("Result").innerHTML="Player 1 is winner.";
            document.getElementById("player").innerHTML="Lets Play Again.";
         }
         else
         {
           document.getElementById("Result").innerHTML="Player 2 is winner.";
           document.getElementById("player").innerHTML="Lets Play Again.";
         }
       for(let i=1;i<=9;i++)
       {
           document.getElementById("cell"+i).innerHTML="";
       }
       
       throw "game end";

     }
     else
     {
         if(getbox(1)!=""&& getbox(2)!=""&& getbox(3)!=""&&
         getbox(4)!=""&& getbox(5)!=""&& getbox(6)!=""&&
         getbox(7)!=""&& getbox(8)!=""&& getbox(9)!="")
         {
             document.getElementById("Result").innerHTML="It is Tie.!!!"
         }
     }
     
     
 }

