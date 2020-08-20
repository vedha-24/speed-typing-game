window.addEventListener('load',init);

const levels={
	easy:5,
	medium:3,
	hard:2
}
const currntlevel=levels.easy;


let time=currntlevel;
let score=0;
let isPlaying;




const words=[
'river',
'camera',
'education',
'family',
'generation',
'hospital',
'important',
'issue',
'knowledge',
'leader',
'magazine',
'notice',
'reason',
'recognize',
'service',
'technology',
'violence',
'weapon',
'young',
'zoo'
];


function init(){

document.querySelector('#sp1').innerHTML=currntlevel;
	showWord(words);
	document.querySelector('#input1').addEventListener('input',start);
	setInterval(countdown,1000);
	setInterval(check,50);
	over();
}
function start(){
if(matchwords()){
isPlaying=true;
time=currntlevel+1;
showWord(words);
document.querySelector('#input1').value='';
score++;
}

document.querySelector('#scr').innerHTML=score;
}

function matchwords(){
	if(document.querySelector('#input1').value===document.querySelector('#chng').innerHTML){
document.querySelector('#msg').innerHTML='Correct :)';
return true;
	}
	else{
		document.querySelector('#msg').innerHTML='';
return false;
	}
}
function showWord(words){
	const randIndex=Math.floor(Math.random()*words.length);
	document.querySelector('#chng').innerHTML = words[randIndex];
}
function countdown()
{
	if(time>0)
	{
		time--;
	}else if(time===0){
		isPlaying=false;
	}
	document.querySelector('#time').innerHTML=time;
}
function check(){
	if (!isPlaying && time==0) {
		document.querySelector('#msg').innerHTML='Game Over!!!';
		

	}
}
function over(){
if(check()){
	document.querySelector('#input1').innerHTML.style.border='1px solid red';
}
}