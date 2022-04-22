var elInput = document.querySelector("#add-value");
var elBtn = document.querySelector(".btn");
var elOut = document.querySelector(".out");




elBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  let inpVal = elInput.value.trim();

  let celsius = inpVal;
  let fahrenheiht = (inpVal * (9/5)) + 32;
  let kelvin = (inpVal * 273)/273 + 273;


  var newUL = document.createElement("ul");
  
  var newLiCel = document.createElement("li");
  var newLiFah = document.createElement("li");
  var newLiKel = document.createElement("li");

  newLiCel.textContent = `celcius: ${celsius}°C`;
  newLiFah.textContent = `fahrenheiht: ${fahrenheiht.toFixed(2)}°F`;
  newLiKel.textContent = `kelvin: ${kelvin}°K`;
  
  newUL.append(newLiCel, newLiFah, newLiKel);

  elOut.appendChild(newUL);

  elOut.style.padding = "5px";
  newUL.style.paddingLeft = "16px";
  elOut.style.height = "130px";
  elOut.style.overflow = "auto";

})