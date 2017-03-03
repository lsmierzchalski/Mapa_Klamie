class Country	{
  constructor(name_pl, name_en, area, meridian, map, globe) {
    this.name = name_pl;
	this.name2 = name_en;
    this.area = area;
	this.meridian = meridian;
    this.map = map;
	this.globe = globe;
  }
}

var Countries = new Array(
	new Country('Polska', 'Poland', 312685, 19, 'poland_map', 'poland_globe'),
	new Country('Niemcy', 'Germany', 357376, 10, 'germany_map', 'germany_globe'),
	new Country('USA', 'USA', 9834000, -120, 'usa_map', 'usa_globe'),
	new Country('Rosja', 'Russia', 17098242, 93, 'russia_map', 'russia_globe'),
	new Country('Kanada', 'Canada', 9984670, -111, 'canada_map', 'canada_globe'),
	new Country('Chiny', 'China', 9596960, 104, 'china_map', 'china_globe'),
	new Country('Brazylia', 'Brazil', 8515767, -54, 'brazil_map', 'brazil_globe'),
	new Country('Australia', 'Australia', 7682300, 133, 'australia_map', 'australia_globe'),
	new Country('Indie', 'India', 3287263, 79, 'india_map', 'india_globe'),
	new Country('Argentyna', 'Argentina', 2780400, -64, 'argentina_map', 'argentina_globe'),
	new Country('Kazachstan', 'Kazakhstan', 2724900, 67, 'kazakhstan_map', 'kazakhstan_globe'),
	new Country('Algieria', 'Algeria', 2381741, 3, 'algeria_map', 'algeria_globe'),
	new Country('DRK', 'DRC', 2344858, 23, 'drc_map', 'drc_globe'),
	new Country('Grenlandia', 'Greenland', 2166086, -45, 'greenland_map', 'greenland_globe'),
	new Country('Arabia Saudyjska', 'Saudi Arabia', 2149690, 46, 'arabia_map', 'arabia_globe'),
	new Country('Meksyk', 'Mexico', 1964375, -103, 'mexico_map', 'mexico_globe'),
	new Country('Indonezja', 'Indonesia', 1904569, 115, 'indonesia_map', 'indonesia_globe'),
	new Country('Sudan', 'Sudan', 1861484, 30, 'sudan_map', 'sudan_globe'),
	new Country('Libia', 'Libya', 1759540, 18, 'libya_map', 'libya_globe'),
	new Country('Iran', 'Iran', 1648195, 53, 'iran_map', 'iran_globe')
);

var country1, country1;
var wynik;
var animation_run = false;

function start_quiz()	{
	//usuwamy logo i przycisk
	var elem = document.getElementById('buttonplay');
    elem.parentNode.removeChild(elem);
	elem = document.getElementById('logo');
    elem.parentNode.removeChild(elem);
	
	generate_quiz();
	
}

function generate_quiz_2()	{
	var elem = document.getElementById('on_map');
    elem.parentNode.removeChild(elem);
	
	generate_quiz();
}

function generate_quiz()	{
	animation_run = false;
	//losujemy jakiś państwa
	country1 = Math.floor(Math.random() * Countries.length);
	
	do{
		country2 = Math.floor(Math.random() * Countries.length);
	}while(country1 == country2);
	
	//ustalenie co będzie po prawej a co po lewej na podstawie południka
	var tmp = country2;
	if(Countries[country1].meridian>Countries[country2].meridian){
		country2 = country1;
		country1 = tmp;
	}
	
	//wyswietlamy 2 przyciski z nazwami panstw
	document.getElementById("header").innerHTML = '<div class="question">Co jest większe?</div><div class="button_countries"><div class="button_country"><a class="button"onclick="check_result(1)"><span style="width:220px;height:78px;vertical-align:middle;display: table-cell;"><div id="country1">name country1</div></span></a></div><div class="button_country"><a class="button"onclick="check_result(2)"style=""><span style="width:220px;height:78px;vertical-align:middle;display: table-cell;"><div id="country2">name country2</div></span></a></div><div style="clear: both"></div></div>';

	document.getElementById("country1").innerHTML = Countries[country1].name;
	document.getElementById("country2").innerHTML = Countries[country2].name;
	
	//pokazanie państw na mapie
	var new_bg = 'url(images/maps/'+Countries[country1].map+'.png) no-repeat bottom,url(images/maps/'+Countries[country2].map+'.png) no-repeat bottom, url(images/bg/bgflatearth2.png) no-repeat bottom';
	document.getElementById("wrapper").style.background = new_bg;
	
}

function reprezentaion_number(nr)	{
	var n = "";
	var x = 0;
	var y = nr;
	if(y>=Math.pow(10,7)){
		x = Math.floor(nr/Math.pow(10, 7));
		nr-=x*Math.pow(10,7);
		n+=x;
	}
	if(y>=Math.pow(10,6)){
		x = Math.floor(nr/Math.pow(10, 6));
		nr-=x*Math.pow(10,6);
		n+=x+" , ";
	}
	if(y>=Math.pow(10,5)){
		x = Math.floor(nr/Math.pow(10, 5));
		nr-=x*Math.pow(10,5);
		n+=x;
	}
	x = Math.floor(nr/Math.pow(10, 4));
	nr-=x*Math.pow(10,4);
	n+=x;
	x = Math.floor(nr/Math.pow(10, 3));
	nr-=x*Math.pow(10,3);
	n+=x+" , ";
	x = Math.floor(nr/Math.pow(10, 2));
	nr-=x*Math.pow(10,2);
	n+=x;
	x = Math.floor(nr/Math.pow(10, 1));
	nr-=x*Math.pow(10,1);
	n+=x;
	n+=nr;
	return n;
}


var x;
var y;
var z;
function animation_area(area,opacity){
	area+=Math.floor(Math.random() * 123456)+5679;
	
	x = true;
	if(area<=Countries[country1].area)	{
		document.getElementById("area3").innerHTML = reprezentaion_number(area)+" km<sup>2</sup>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
	}else{
		document.getElementById("area3").innerHTML = reprezentaion_number(Countries[country1].area)+" km<sup>2</sup>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
		x = false;
	}
	
	y = true;
	if(area<=Countries[country2].area)	{
		document.getElementById("area4").innerHTML = reprezentaion_number(area)+" km<sup>2</sup>";
	}else{
		document.getElementById("area4").innerHTML = reprezentaion_number(Countries[country2].area)+" km<sup>2</sup>";
		y = false;
	}
	
	//animation globe
	opacity++;
	z = true;
	if(opacity<=100)	{
		document.getElementById("g1").style.opacity = opacity/100.00;
		document.getElementById("g2").style.opacity = opacity/100.00;
	}
	else z = false;
	
	if(x || y || z) setTimeout("animation_area("+area+","+opacity+")",1);
	else write_result();
}

var x;
var y;
var z;
function animation_area_2(area,opacity,area_plus){
	area+=area_plus;
	x = true;
	if(animation_run){
		if(area<=Countries[country1].area)	{
			document.getElementById("area3").innerHTML = reprezentaion_number(area)+" km<sup>2</sup>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
		}else{
			document.getElementById("area3").innerHTML = reprezentaion_number(Countries[country1].area)+" km<sup>2</sup>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
			x = false;
		}

		y = true;
		if(area<=Countries[country2].area)	{
			document.getElementById("area4").innerHTML = reprezentaion_number(area)+" km<sup>2</sup>";
		}else{
			document.getElementById("area4").innerHTML = reprezentaion_number(Countries[country2].area)+" km<sup>2</sup>";
			y = false;
		}

		//animation globe
		opacity++;
		z = true;
		if(opacity<=100)	{
			document.getElementById("g1").style.opacity = opacity/100.00;
			document.getElementById("g2").style.opacity = opacity/100.00;
		}
		else z = false;
	
	
		if(x || y || z) setTimeout("animation_area_2("+area+","+opacity+","+area_plus+")",1);
		else {
			write_result();
			animation_run = false;
		}
	}
}

function write_result(){
	document.getElementById("result").innerHTML = wynik;
}

function check_result(nr)	{
	//ustalenie czy wygrales czy nie
	var result = false;
	
	if (nr == 1)	{
		if(Countries[country1].area > Countries[country2].area) result = true;
	}
	else if( nr == 2){
		if(Countries[country2].area > Countries[country1].area) result = true;
	}
	
	//wyświetlenie wyniku
	if(result == true){
		wynik = '<span style="color: #63d13e;">dobrze</span>';
	}
	else if(result == false){
		wynik = '<span style="color: #c34f4f;">źle</span>';
	}
	
	//wyświetlanie powierzchni w fajny sposób
	document.getElementById("header").innerHTML = '<div id="areas"><div class="area"><div id="area1"></div></div><div class="area"><div id="area2"></div></div></div><div id="result"style="width:500px;text-align:center;height:96px;"> </div><div style="clear: both"></div>';
	
	document.getElementById("area1").innerHTML = Countries[country1].name+'</br><div id="area3" style="text-align: right;">0 km<sup>2</sup></div>';
	document.getElementById("area2").innerHTML = Countries[country2].name+'</br><div id="area4">0 km<sup>2</sup></div>';
	
	/*
	//wyświetlenie globów
	var new_bg = 'url(images/globes/'+Countries[country1].globe+'.png) no-repeat left bottom,url(images/globes/'+Countries[country2].globe+'.png) no-repeat right bottom,url(images/maps/'+Countries[country1].map+'.png) no-repeat center bottom,url(images/maps/'+Countries[country2].map+'.png) no-repeat center bottom, url(images/bg/bgflatearth2.png) no-repeat bottom';
	document.getElementById("wrapper").style.background = new_bg;
	
	//wyświetlenie przycisku do generowania następnego pytania
	document.getElementById("wrapper").innerHTML += '<div id="button_next"><div class="button_country"><a class="button"onclick="generate_quiz_2()"><span><div id="country1">następne pytanie ></div></span></a></div><div style="clear: both"></div></div>';
	*/
	
	// wyświtleni globów i przyciksów ale niewidocznych
	document.getElementById("wrapper").innerHTML += '<div id="on_map"><div class="globe"><div id="g1" style="opacity: 0.001;"><img src="images/globes/'+Countries[country1].globe+'.png"></div></div><div id="button_next"><div class="button_country"><a class="button"onclick="generate_quiz_2()"><span><div id="country1">następne pytanie ></div></span></a></div></div><div class="globe"><div id="g2"style="opacity: 0.001;"><img src="images/globes/'+Countries[country2].globe+'.png"></div></div><div style="clear: both"></div></div>';
	
	
	//window.onload = animation_area(0,1);
	
	//nowa animacja powierzchni
	//=============================================
	//wyznaczenie wieszej powierzchni
	// !!!!!!!!!!!!!!!!!specjalan zmienna
	var larger_area;
	if(Countries[country1].area > Countries[country2].area)	larger_area = Countries[country1].area;
	else if(Countries[country1].area <= Countries[country2].area)	larger_area = Countries[country2].area;
	var area_plus = Math.floor(larger_area/200);
	animation_run = true;
	window.onload = animation_area_2(0,1,area_plus);
	
}