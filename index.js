function saturdayFun(activity = "roller-skate"){
return(`This Saturday, I want to ${activity}!`);

}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }





mondayWork()
mondayWork("This Monday, I will work from home")

function wrapAdjective(highlight = "||"){
    return function(adj = "special"){
      return `You are ${highlight}${adj}${highlight}!`;
    }
  }

//function wrapAdjective(discribe = "special"){
   // return(`You are ${discribe}`);

//}
wrapAdjective();