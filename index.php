<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Die Staatsformen</title>
    <link rel="stylesheet" href="style.css">
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

<div id="einstellungen">
  <img src="/src/icons/x.png" alt="close"onclick="einstellungenclose()">
<h1 class="center" >Einstellungen</h1>
<h3 class="center">Stellen sie hier ein was bei "Zusatz" angezeigt werden soll</h3>

<div id="einstellungenradio">
<label>
    <input type="radio" name="optionen" value="1" id="radio" > Teilautonome Republik
</label><br>

<label>
    <input type="radio" name="optionen" value="2" id="radio"> Islamische Republik
</label><br>

<label>
    <input type="radio" name="optionen" value="3" id="radio"> 	Föderale Republik
</label><br>

<label>
    <input type="radio" name="optionen" value="4" id="radio"> Deutschland
</label><br>
</div>

<input type="button" value="aktuallisieren" onclick="update(), einstellungenclose() ,checkbox()" id="einstellungsbtn" class="button-19">

</div>1


<div id="nav-karte">

<h2>Karteneinstellungen</h2>

<div id="nav-formen" >   
<h4>Staatsformen:</h4>


<input type="radio" id="mo" name="karte" value="1" class="checkbox">   
<label for="1">Monarchie</label><br>

<input type="radio" id="re" name="karte" value="2" class="checkbox">
  <label for="2">Republik (alle Formen)</label> <br>
  
  <input type="radio" id="zusatzcb" name="karte" value="3" class="checkbox">
  <label for="3" id="zusatzlabel">Zusatz</label> <br>

 <h5 id="einstellungentext" onclick="einstellungenopen()">  Weitere Einstellungen </h5>



<script src="js.js"></script>
</body>
</html>