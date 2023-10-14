const riddles=[
{ques:"What has to be broken before you can use it?" ,
ans: "An egg"
},
{ques:"What is always in front of you but can’t be seen?" ,
ans: "The future"
},

{ques:"I’m tall when I’m young, and I’m short when I’m old. What am I?" ,
ans: " A candle"
},
{ques:"What is full of holes but still holds water?" ,
ans: " A sponge"
},
{ques:" I have branches, but no fruit, trunk or leaves. What am I?" ,
ans: "A bank"
},
{ques:"The more of this there is, the less you see. What is it?" ,
ans: "Darkness"
},
{ques:"What has lots of eyes, but can’t see?" ,
ans: "A potato"
},
{ques:"What can you hold in your left hand but not in your right?" ,
ans: " Your right elbow"
},
{ques:"What is black when it’s clean and white when it’s dirty?" ,
ans: "A chalkboard"
},
{ques:"What can travel all around the world without leaving its corner?" ,
ans: "A stamp"
},
{ques:"Where does today come before yesterday?" ,
ans: "The dictionary"
},
];
let button=document.querySelector(".ask");
let text=document.querySelector(".text");

var i=0;

button.addEventListener("click",function(){
  switch(button.innerHTML){
    case("Ask a riddle"):{display1();
                           break;}
    case("Ask another riddle"):{display1();
                                   break;}
    case("See Answer"):{display2();
                         break;}
  }
});


function display1(){
    
    text.innerHTML=riddles[i].ques;
    button.innerHTML="See Answer";
    button.style.backgroundColor="orange";
}
function display2(){
    
  
      text.innerHTML=riddles[i].ans;
      button.innerHTML="Ask another riddle"; 
      button.style.backgroundColor="#e9ec1a";
      i++; 
}



