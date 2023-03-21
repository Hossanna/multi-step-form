let defaultSetting = "off" 
const toggleSpan = document.getElementById("toggle")
const month = document.getElementById('month')
const year = document.getElementById('year')
const boxes = document.querySelectorAll(".flexxx")
const span = document.querySelectorAll(".span-yr")
var nine = document.getElementById("nine")
var twelve = document.getElementById("twelve")
var fifteen = document.getElementById("fifteen")


const toggleButton = document.createElement('toggleButton'); 
toggleButton.onclick  = function(){toggleSwitchTransformFunction()}; 
toggleSpan.appendChild(toggleButton); 

const toggleSwitchCircle = document.createElement('toggleSwitchCircle'); 
toggleButton.appendChild(toggleSwitchCircle); 

function toggleSwitchTransformFunction() { 
  if(defaultSetting == "off"){ 

    defaultSetting = "on" 
    toggleSwitchCircle.style.transform = "translateX(100%)" 
    year.style.color = "hsl(213, 96%, 18%)"
    month.style.color = "hsl(231, 11%, 63%)"
    // toggleButton.style.background = "black"


    // execute code when ON
    for (i=0; i<=boxes.length; i++){
      let monthsFree = document.createElement("span")
      monthsFree.classList.add("span-yr")
      monthsFree.innerHTML = "2 months free"
      boxes[i].appendChild(monthsFree)
    }
    nine.innerHTML = "$90/yr"
    twelve.innerHTML = "$120/yr"
    fifteen.innerHTML = "$150/yr"


  } else if(defaultSetting == "on"){ 
    defaultSetting = "off" 
    toggleSwitchCircle.style.transform = "translateX(0%)"
    month.style.color = "hsl(213, 96%, 18%)"
    year.style.color = "hsl(231, 11%, 63%)" 
    // toggleButton.style.background = "white"

    // execute code when OFF
    for (i=0; i<=boxes.length; i++){

      
      // boxes[i].removeChild(monthsFree)
      // boxes[i].removeChild(span)
      // span.remove()

      // let monthsFree = document.remove("span")
    }


  }  
}

