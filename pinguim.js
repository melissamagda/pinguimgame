<script language="javascript">
/*    
        @licstart  The following is the entire license notice for this page.

        Copyright (C) 2015  Carlos J. Costa

        The JavaScript code in this page is free software: you can
        redistribute it and/or modify it under the terms of the GNU
        General Public License (GNU GPL) as published by the Free Software
        Foundation, either version 3 of the License, or (at your option)
        any later version.  The code is distributed WITHOUT ANY WARRANTY;
        without even the implied warranty of MERCHANTABILITY or FITNESS
        FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

        As additional permission under GNU GPL version 3 section 7, you
        may distribute non-source (e.g., minimized or compacted) forms of
        that code without the copy of the GNU GPL normally required by
        section 4, provided you include this license notice and a URL
        through which recipients can access the Corresponding Source.   


        @licend  The above is the entire license notice
        for the JavaScript code in this page.
*/

    var MaxHeight, MaxWidth, YPos, XPos, interval1, interval2, interval3, interval4, moveTo, intervalo, s = 30, roma = 0, pontos = 0;


function init(){
	YPos = -500;
	XPos = -500;
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
	alert("Tens 30s para encontrar entrada p Roma!")
	cronometro();
}

function move(){
	if ((YPos >= 0)||(YPos <= -700)||(XPos >= 0)||(XPos >= MaxHeight)) {
	    stop();
	}
	verificaRoma();
	if (roma == 1){
		stopCronometro();
		marcarpontos(10);
		
	}
	
	
		//toMove.style.background = "url('roma.jpg')";
		
	
	
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
	document.getElementById("pos").innerHTML=toMove.style.backgroundPosition;
};
function moveBx() {
	var myclass = new Array('front-right','front-stand','front-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos--;        
	move();

};
function moveCm() {
	var myclass = new Array('back-right','back-stand','back-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos++;        
	move();
};
function moveDir() {
	var myclass = new Array('right-right','right-stand','right-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos--;        
	move();
};
function moveEsq() {
	var myclass = new Array('left-right','left-stand','left-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos++;        
	move();
};

function moveB() {
	stop(); 
	interval1 = setInterval(moveBx, 50);
};
function moveC() {
	stop();
	interval3 = setInterval(moveCm, 50);
};
function moveD() {
	stop();	
	interval2 = setInterval(moveDir, 50);
};
function moveE() {
	stop();
	interval4 = setInterval(moveEsq, 50);
};
function stop() {
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	clearInterval(interval4);
};

window.onload =init;

function Key(e) {
    if (e.keyCode===37) moveE();
    if (e.keyCode===38) moveC();
    if (e.keyCode===39) moveD();
    if (e.keyCode===40) moveB();
}

// novas funcoes

function cronometro(){
	intervalo = window.setInterval(function() {
		if(s == 0 && roma == 0){ // se nao entrou em roma e o tempo acabou : Perde
			s = 30; // conta 1 minuto
			alert("Game over");
			init();
		}
		document.getElementById("tempo").innerHTML = "Tempo: "+ s + "s";	
		s--;
	},1000);

}

function stopCronometro(){
		s = 0; // conta 1 minuto
		document.getElementById("tempo").style.display = 'none';
}

// marcar pontos

function marcarpontos(p) {
	if(pontos == 0){
	pontos = pontos+p;
	document.getElementById("score").innerHTML = "Pontos: "+pontos;
	marcou = 1;	
	}
}

// verifica roma

function verificaRoma(){
	
	if((YPos<=-275)&&(YPos>=-328)&&(XPos<=-342)&&(XPos>=-405)){
		roma = 1;
		toMove.style.background = "url('roma.jpg')";
	}
}

</script>