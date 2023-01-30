
var sorteio = function(){
var dado = Math.floor(Math.random() * 6 + 1);
console.log(dado)
switch(dado){
	case 1:
		sorteioImg('img', 'face1.png');
		break;
	case 2:
		sorteioImg('img', 'face2.png');
		break;
	case 3:
		sorteioImg('img', 'face3.png');
		break;
	case 4:
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
