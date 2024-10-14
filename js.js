  function info1() {
var button = document.getElementById('info1')

document.getElementById('info-header').textContent = button.getAttribute("data-title")
document.getElementById('info-beschreibung').textContent = button.getAttribute("data-beschreibung")
document.getElementById('info-beschreibung2').textContent = button.getAttribute("data-beschreibung2")
document.getElementById('info').style.display = "block";
  }
   
  function info2() {
    var button = document.getElementById('info2')
    
    document.getElementById('info-header').textContent = button.getAttribute("data-title")
    document.getElementById('info-beschreibung').textContent = button.getAttribute("data-beschreibung")
    document.getElementById('info-beschreibung2').textContent = button.getAttribute("data-beschreibung2")
    document.getElementById('info').style.display = "block";
      }
      function info3() {
        var button = document.getElementById('info3')
        
        document.getElementById('info-header').textContent = button.getAttribute("data-title")
        document.getElementById('info-beschreibung').textContent = button.getAttribute("data-beschreibung")
        document.getElementById('info-beschreibung2').textContent = button.getAttribute("data-beschreibung2")
        document.getElementById('info').style.display = "block";
          }

  function closeinfo() {
   document.getElementById('info').style.display = "none"
  }


var checkbox = document.getElementsByClassName("checkbox")
checkbox.addEventListener("change", checkbox())
  function checkbox() {
var a = document.getElementById('mo')
var b = document.getElementById('re')
var c = document.getElementById('dik')


if (a.checked ) {
  document.body.style.backgroundImage = url('/src/img/aa.jpeg')
}
 }