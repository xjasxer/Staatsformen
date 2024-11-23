<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Die Staatsformen</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
<div id="barrier"></div>

<div id="main-nav">
<center>
<h2 style="color:white;">Die Staatsformen</h2 >

<table>
<tr>
<td><img src="src/icons/welt.png" alt="" class="nav-img"></td>
<td><input type="button" value="Karteneinstellungen" class="nav-btn" onclick="einstellungenopen(), barrieron()" ></td>
</tr>


<tr>
<td><img src="src/icons/search.png" alt=""class="nav-img"></td>
<td><input type="button" value="Suchen"class="nav-btn" onclick="barrieron()"></td>
</tr>

</tr>
<td><img src="src/icons/info.png" alt=""class="nav-img"></td>
<td><input type="button" value="Informationen"class="nav-btn" onclick="info1open(), barrieron()"></td>
</tr>

<tr>
<td><img src="src/icons/customize.png" alt=""class="nav-img"></td>
<td><input type="button" value="Personalisieren"class="nav-btn" onclick="barrieron()"></td>
</tr>

<tr>
<td><img src="src/icons/help.png" alt=""class="nav-img"></td>
<td><input type="button" value="Hilfe"class="nav-btn" onclick="barrieron()"></td>
</tr>
</center>
</table>
</div>

<div class="display" id="infos-1">
  <img src="/src/icons/x.png" alt="close"onclick="closeinfo() , barrieroff()">
 <center><h2>Informationen über die Stattsformen</h2>
 <h4>Wählen sie bitte eine Staatsform aus</h4></center>
<center>
<input type="button" value="Monarchie" class="infostyle"
 data-title="Monarchie"
 data-beschreibung="Bitte wählen sie eine spezifische Form der Monarchie aus"
 data-beschreibung2=""
 data-content="1"
 id="info1"
 onclick="info1(), einstellungenclose() ">

<input type="button" value="Republik" class="infostyle"
data-title="Republik"
  data-beschreibung="Bitte wählen sie eine spezifische Form der Republik aus"
 data-beschreibung2=""
 id="info2"
 onclick="info2(), einstellungenclose() ">

<input type="button" value="Diktatur" class="infostyle"
data-title="Diktatur"
 data-beschreibung="ss"
 data-beschreibung2="ss"
 id="info3"
 onclick="info3(), einstellungenclose() ">
 <p class="copyright">icon:Flaticon.com</p>
</div>
</center>




<div id="info" class="display" >
 <img src="/src/icons/x.png" alt="Close" onclick="closeinfo(), barrieroff()"> 
  <h1 class="center"  id="info-header">hh</h1>

<div id="infonavmonarchie" style="display:none;">
<input type="button" value="Monarchie" 
tabindex="0"
            data-title-btn="Monarchie"
            data-beschreibung="1111"
            data-beschreibung2="1ww1w1w1w"
            class="navmonarchiebtn infostyle">

            <input type="button" value="Föderale Monarchie" 
            tabindex="0"
            data-title-btn="Föderale Monarchie"
            data-beschreibung="2222"
            data-beschreibung2="thzjkddsftgf"
            class="navmonarchiebtn infostyle">

            <input type="button" value="Wahlmonarchie" 
            tabindex="0"
            data-title-btn="Wahlmonarchie"
            data-beschreibung="333"
            data-beschreibung2="fefwfrg"
            class="navmonarchiebtn infostyle">

</div>
<div id="infonavrepublik" style="display:none;">

<input type="button" value="Republik"
tabindex="0" 
            data-title-btn="Republik"
            data-beschreibung="333"
            data-beschreibung2="fefwfrg"
            class="navrepublikbtn infostyle">

<input type="button" 
tabindex="0"
value="Teilautonome Republik" 
            data-title-btn="Teilautonome Republik"
            data-beschreibung="114356"
            data-beschreibung2="hfghfgfgffhgf"
            class="navrepublikbtn infostyle">

            <input type="button" value="Islamische Republik" 
            tabindex="0"
            data-title-btn="Islamische Republik"
            data-beschreibung="trhhhhh"
            data-beschreibung2="su 78635e"
            class="navrepublikbtn infostyle">

            <input type="button" value="Föderale Republik" 
            tabindex="0"
            data-title-btn="Föderale Republik"
            data-beschreibung="333"
            data-beschreibung2="fefwfrg"
            class="navrepublikbtn infostyle">

</div>
<p class="center" id="info-header-btn"></p>

  <p class="center" id="info-beschreibung">z</p>
  <p class="center" id="info-beschreibung2">z</p>
  <input type="button" value="Zurück" onclick="info1back()" class="button-19" id="infozurück">
  <p class="copyright">icon:Flaticon.com</p>
</div>




<div id="einstellungen" class="display">
  <img src="/src/icons/x.png" alt="close"onclick="einstellungenclose() ,barrieroff()">
<h1 class="center" >Karteneinstellungen</h1>
<h4 class="center">Stellen sie hier ein was Sie auf der Karte angezeigt bekommen haben möchten</h4>

<div id="einstellungenradio">


<div id="monarchieradio">
  <h3>Monarchie</h3>
<label><input type="radio" name="optionen" value="1" id="radio" > Monarchie (alle Formen) </label><br>
<label><input type="radio" name="optionen" value="2" id="radio"> Föderale Monarchie</label><br>
<label><input type="radio" name="optionen" value="3" id="radio"> 	Wahlmonarchie</label><br>
</div>

<div id="republikradio">
<h3>Republik</h3>
<label><input type="radio" name="optionen" value="100" id="radio"> Republik (alle Formen)</label><br>
<label><input type="radio" name="optionen" value="101" id="radio"> Teilautonome Republik</label><br>
<label><input type="radio" name="optionen" value="102" id="radio"> Islamische Republik</label><br>
<label><input type="radio" name="optionen" value="103" id="radio"> Föderale Republik</label><br>
</div>

<div id="sonstigeradio">
<h3>Sonstige</h3>
<label><input type="radio" name="optionen" value="200" id="radio"> Deutschland </label><br>
<label><input type="radio" name="optionen" value="200" id="radio"> Nordamerika </label><br>
<label><input type="radio" name="optionen" value="200" id="radio"> Südamerika </label><br>
<label><input type="radio" name="optionen" value="200" id="radio"> Europa </label><br>
<label><input type="radio" name="optionen" value="200" id="radio"> Afrika </label><br>
<label><input type="radio" name="optionen" value="200" id="radio"> Asien </label><br>
<label><input type="radio" name="optionen" value="200" id="radio"> Australien  </label><br>
<label><input type="radio" name="optionen" value="200" id="radio"> Antarktis  </label><br>



</div>


</div>

<input type="button" value="aktuallisieren" onclick="update(), einstellungenclose() ,checkbox() ,barrieroff()" id="einstellungsbtn" class="button-19">

</div>

<script src="js.js"></script>
</body>
</html>