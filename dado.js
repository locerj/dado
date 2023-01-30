var sorteio = function(){
var dado = Math.floor(Math.random() * 6 + 1);
switch(dado){
	case 1:
		document.getElementById("img").src = "face6.png";
		sorteioImg('img', 'face1.png');
		break;
	case 2:
		document.getElementById("img").src = "face1.png";
		sorteioImg('img', 'face2.png');
		break;
	case 3:
		document.getElementById("img").src = "face2.png";
		sorteioImg('img', 'face3.png');
		break;
	case 4:
		document.getElementById("img").src = "face3.png";
		sorteioImg('img', 'face4.png');
		break;
	case 5:
		sorteioImg('img', 'face5.png');
		break;
	case 6:
		sorteioImg('img', 'face6.png');
		break;
	default:
		console.log("erro");
		break;
}

}


function sorteioImg(objeto, novaImg){
	document.getElementById(objeto).src = novaImg;
}




