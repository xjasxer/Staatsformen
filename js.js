  function info1() {
var button = document.getElementById('info1')

document.getElementById('info-header').textContent = button.getAttribute("data-title")
document.getElementById('info-beschreibung').textContent = button.getAttribute("data-beschreibung")
document.getElementById('info-beschreibung2').textContent = button.getAttribute("data-beschreibung2")
document.getElementById('info').style.display = "block";
  }
   
  function closeinfo() {
   document.getElementById('info').style.display = "none"
  }
