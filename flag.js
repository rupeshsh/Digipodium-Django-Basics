const wheel = document.querySelector(".wheel");
 
for (let i =1; i <= 24; i++){
  let spoke = document.createElement('span');
  spoke.classList.add("spoke");
  spoke.style.rotate = `${i*15}deg`;
  wheel.appendChild(spoke)
}