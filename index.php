<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Die Staatsformen</title>
    <link rel="stylesheet" href="style.css">
    <script src="js.js"></script>
</head>
<body>
    
<div id="nav-infos">
  
<h4>Informationen über die Stattsformen</h4>

<input type="button" value="Monarchie"
 data-title="Monarchie"
 data-beschreibung="becshriebunf"
 data-beschreibung2="2222"
 id="info1"
 onclick="info1()">

<input type="button" value="Republik"
data-title="Republik"
 data-beschreibung="hduhuehudheudh"
 data-beschreibung2="duhduhu"
 id="info2"
 onclick="info2()">

<input type="button" value="Diktatur"
data-title="Diktatur"
 data-beschreibung="sssss"
 data-beschreibung2="huhuhuhuhu"
 id="info3"
 onclick="info3()">

</div>

<div id="info">
 <img src="/src/icons/x.png" alt="Close" onclick="closeinfo()"> 
  <h1 class="center"  id="info-header">hh</h1>
  <p class="center" id="info-beschreibung">z</p>
  <p class="center" id="info-beschreibung2">z</p>
  <p id="copyright">icon:Flaticon.com</p>
</div>




<div id="nav-karte">

<h2>Karteneinstellungen</h2>

<div id="nav-formen" >
<h4>Staatsformen:</h5>


<input type="checkbox" id="mo" name="1" value="1" class="checkbox">   
<label for="1">Monarchie</label><br>

<input type="checkbox" id="re" name="2" value="2" class="checkbox">
  <label for="2">Republik</label> <br>
  
  <input type="checkbox" id="dik" name="3" value="3" class="checkbox">
  <label for="3">Diktatur</label> <br>



</div>

</div>



</body>
</html>