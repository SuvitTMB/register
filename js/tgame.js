var cleararray = "";
var EndGame = 0;
var RoundNumber = 0;
var getNumberStart = 0;
var ScorePoint = 0;
var LogGame = "";
var textmessage = "";
var ScoreExtraGame = 2;
var textDisplayPoint = "";
var RoundNumberRandom = 0;
var CheckPoint = 0;
var intromessage = '<div class="text-score">เลือกตัวเลข 1-10 ตัวต่อไปว่าจะ น้อยกว่า | เท่ากับ | มากกว่า</div>';
var intwarning = '<div class="text-warning">คำเตือน<br>หากคุณออกจากหน้านี้ก่อนการตอบคำถามจะสิ้นสุด<br>คุณจะได้ 0 คะแนน และไม่สามารถเข่งขันเกมส์นี้ในวันนี้ได้อีก</div>';


$(document).ready(function () {
    document.getElementById("id04").style.display = "block";
	$("#Displayintromessage").html(intromessage);
	$("#DisplayWarning").html(intwarning);
	//BoxNumber();
	StartNumber();
});



function FalseGame() {
	$("#DisplayWarning").html(cleararray);
	$("#DisplayMessage").val(cleararray);
	$("#DisplayMessage").html(cleararray);
	$("#Displayintromessage").val(cleararray);
	$("#Displayintromessage").html(cleararray);
	$("#DisplayLastScore").val(cleararray);
	textDisplayPoint = "<img src='./img/false.jpg' style='max-width: 120px; margin-bottom: 20px;'><div class='text-false'>คุณทายผลตัวเลขผิด</div>คุณทำคะแนนในเกมส์นี้ได้ = <b>"+ ScorePoint +" คะแนน</b><br>คอยลุ้นรางวัลของคุณน้า";
	$("#DisplayLastScore").html(textDisplayPoint);
    document.getElementById("id01").style.display = "block";
}



function TrueGame() {
	EndGame = 1;
	$("#DisplayWarning").html(cleararray);
	$("#Displayintromessage").val(cleararray);
	$("#Displayintromessage").html(cleararray);
	DisplayRound();
	if(CheckPoint==3) { ScorePoint = ScorePoint+2; }
	textmessage="เกมส์จบลงแล้ว";
	$("#DisplayMessage").val(cleararray);
	//$("#DisplayMessage").html(cleararray);
	$("#DisplayMessage").html(textDisplayPoint);
	$("#DisplayEndScore").val(cleararray);
	textDisplayPoint = "<img src='./img/ok.jpg' style='max-width: 120px; margin-bottom: 20px;'><div class='text-false'>สรุปผลคะแนนการแข่งขันของคุณในรอบนี้</div>คุณทำคะแนนในเกมส์นี้ได้ = <b>"+ ScorePoint +" คะแนน</b><br>คอยลุ้นรางวัลของคุณน้า";
	$("#DisplayEndScore").html(textDisplayPoint);
    document.getElementById("id02").style.display = "block";
}


function ExtraGame() {
	$("#Displayintromessage").val(cleararray);
	$("#Displayintromessage").html(cleararray);
	ScorePoint = ScorePoint + ScoreExtraGame;
	$("#DisplayExtraPoint").val(cleararray);
	var textExtraPoint = "<img src='./img/true.jpg' style='max-width: 120px; margin-bottom: 20px;'><div class='text-false'>คุณทายผลตัวเลขเหมือนกันได้ถูกต้อง</div>ยินดีด้วย คุณทำ Extra Point สำเร็จ<br>คุณได้รับคะแนนพิเศษเพิ่ม 3 คะแนน<br>และสามารถเก็บคะแนนได้<br>จนกว่าเกมส์จะจบ";
	$("#DisplayExtraPoint").html(textExtraPoint);
    document.getElementById("id03").style.display = "block";
}


function CloseAll() {
	document.getElementById('id01').style.display='none';
	document.getElementById('id02').style.display='none';
	document.getElementById('id03').style.display='none';
	document.getElementById('id04').style.display='none';
}


function StartNumber() {
	RoundNumber = RoundNumber+1;
	getNumberStart = Math.floor((Math.random() * 10) + 1);
	LogGame = LogGame + " | Start " + getNumberStart; 
	textmessage = "เริ่มการแข่งขันของคุณ";
	var str = "";
	var str0 = "";
	$("#DisplayNumber").val(cleararray);
	str+='<div class="gameNumber">'+getNumberStart+'</div>';
	$("#DisplayNumber").html(str);
	str0+='<div class="col-sm-3 game2-box"><div class="game-a1">'+ getNumberStart +'</div><div class="game-a2">เริ่มเกมส์</div></div>';
	$("#DisplayNumber0").html(str0);
	$("#DisplayMessage").html(textmessage);
	DisplayRound();
}



function DisplayRound() {
	//if(RoundNumber>3) { alert(RoundNumber); EndGame=1; EndGame(); }
	//alert("Display Round : "+RoundNumber);
	$("#DisplayRound").val(cleararray);
	var str = "";
	if(EndGame==0) {
		str+='<div style="width:54%;margin:auto;">';
		str+='<div class="col-sm-4 game2-box1" onclick="SendNumber('+RoundNumber+','+ getNumberStart +',1)"><div class="game-a3"><</div><div class="game-a4">น้อยกว่า</div></div>';
		str+='<div class="col-sm-4 game2-box1" onclick="SendNumber('+RoundNumber+','+ getNumberStart +',2)"><div class="game-a3">=</div><div class="game-a4">เท่ากับ</div></div>';
		str+='<div class="col-sm-4 game2-box1" onclick="SendNumber('+RoundNumber+','+ getNumberStart +',3)"><div class="game-a3">></div><div class="game-a4">มากกว่า</div></div>';
		str+='</div>';
	} else {
		str+='<center><div class="btn-t1" style="margin-top:10px;" onclick="LinkMainPage()">กลับไปที่เมนูหลัก</div>';
		str+='<div class="btn-t1" style="margin-top:25px;" onclick="LinkNewGame()">เล่นอีกครั้ง</div></center>';
	}
	$("#DisplayRound").html(str);

}



function SendNumber(r,s,n) {
	$("#DisplayScore").val(cleararray);
	$("#DisplayMessage").val(cleararray);
	RandomNumber();
	//alert(getNumberStart+"---"+RoundNumberRandom);
	var str = "";
	var str0 = "";
	var ntext = "";
	if(n==1) { ntext = "น้อยกว่า"; } else
	if(n==2) { ntext = "เท่ากับ"; } else
	if(n==3) { ntext = "มากกว่า"; } 
	LogGame = LogGame + " | " + ntext + " " + RoundNumberRandom; 
	//alert(LogGame);
	if(n==1) { 
		if(RoundNumberRandom<getNumberStart) { textmessage="คุณเลือกได้ถูกต้อง" ; ScorePoint = ScorePoint+1; CheckPoint = CheckPoint+1; }
		else { textmessage="คุณตอบข้อนี้ผิด"; EndGame=1; FalseGame(); }
	}
	if(n==2) { 
		if(RoundNumberRandom==getNumberStart) { textmessage="คุณเลือกได้ถูกต้อง" ; ScorePoint = ScorePoint+1; ExtraGame(); CheckPoint = CheckPoint+1; } 
		else { textmessage="คุณตอบข้อนี้ผิด"; EndGame=1; FalseGame(); }
	} 
	if(n==3) { 
		if(RoundNumberRandom>getNumberStart) { textmessage="คุณเลือกได้ถูกต้อง" ; ScorePoint = ScorePoint+1; CheckPoint = CheckPoint+1; } 
		else { textmessage="คุณตอบข้อนี้ผิด"; EndGame=1; FalseGame(); }
	}
	getNumberStart = RoundNumberRandom;
	$("#DisplayNumber").val(cleararray);
	str+='<div class="gameNumber">'+getNumberStart+'</div>';
	$("#DisplayNumber").html(str);

	RoundNumber = RoundNumber+1;
	$("#DisplayScore").html(ScorePoint);
	DisplayRound();
}


  
    
function RandomNumber() {
	RoundNumberRandom = Math.floor((Math.random() * 10) + 1);		
}
    
   
/*
function BoxNumber() {
	var str="";
	str+='<div class="col-sm-3 game2-boxs"><div class="game-a5">?</div>';
	$("#DisplayScore").html(ScorePoint);
	$("#DisplayNumber1").html(str);
	$("#DisplayNumber2").html(str);
	$("#DisplayNumber3").html(str);
}
*/

function LinkMainPage(){
	window.location.href='introgame.html';
}


function LinkNewGame(){
	window.location.href='tgame.html';
}
