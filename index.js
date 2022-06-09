// code your solution here
const saturdayFun = function(action = 'roller-skate'){

 return (`This Saturday, I want to ${action}!`);
}
const mondayWork = function (event = 'go to the office'){

    return `This Monday, I will ${event}.`
}
const wrapAdjective = function (special ="*"){
    return function (type = 'a dedicated programmer'){
    return `You are ${special}${type}${special}!`
}
}