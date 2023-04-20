let defaultSetting = "off" 
const toggleSpan = document.getElementById("toggle")
const month = document.getElementById('month')
const year = document.getElementById('year')
const boxes = document.querySelectorAll(".flexxx")
const hide = document.querySelectorAll(".hide")
const show = document.querySelectorAll(".show")
const monthsFree = document.querySelectorAll(".monthsFree")
const bigBoxes = document.querySelectorAll(".box")



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


    // execute code when ON
    for (i=0; i<=boxes.length; i++){
      show[i].style.display = "none"
      hide[i].style.display = "block"
      monthsFree[i].style.display ="block"
    }
    

  } else if(defaultSetting == "on"){ 
    defaultSetting = "off" 
    toggleSwitchCircle.style.transform = "translateX(0%)"
    month.style.color = "hsl(213, 96%, 18%)"
    year.style.color = "hsl(231, 11%, 63%)" 

    // execute code when OFF
    for (i=0; i<=boxes.length; i++){
      show[i].style.display = "block"
      hide[i].style.display = "none"
      monthsFree[i].style.display ="none"

    }


  }  
}


let prevOption = null

for (i=0; i<=bigBoxes.length; i++){
    bigBoxes[i].addEventListener("click", selectOption)
}


function selectOption(bigBoxes){
  bigBoxes.target.classList.add("box-toggle")

  if (prevOption !== null){
    prevOption.classList.remove("box-toggle");
  }

  prevOption = bigBoxes.target;

}
