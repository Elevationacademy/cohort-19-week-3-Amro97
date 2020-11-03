//-------------Ex1
const push = function () {
    console.log("pushing it!")
  }
  
  const pull = function () {
    console.log("pulling it!")
  }

  const pushPull = (fname) => {
      fname()
  }
  
  pushPull(push) //should print "pushing it!"
  pushPull(pull) //should print "pulling it!"
  //-------------Ex2
  const returnTime = function (time) {
    alert('The current time is: ' + time)
  }
  const getTime = function(func){
      const time = new Date()
      func(time)
  }
  getTime(returnTime)
  //-----------Ex3
  const logData = (data) => console.log(data)
  const displayData = function (alertDataFunc, logDataFunc, data) {
      alertDataFunc(data);
      logDataFunc(data);
    };
    
    displayData(alert, logData, "I like to party")
 //-----------Ex4
  const sum = (a,b,c) => a+b+c
  {}
  console.log(sum(1,2,3))
  //----------Ex5
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia
//-----------Ex6

const commentOnWeather = (num) => "it's"+' '+ determineWeather(num)
const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"
//----------Ex7
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")