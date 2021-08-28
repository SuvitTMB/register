var cleararray = "";
var i = 0;
var str = "";
var sGroupReg = "Prudentital";

var firebaseConfig = {
  apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
  authDomain: "retailproject-6f4fc.firebaseapp.com",
  projectId: "retailproject-6f4fc",
  storageBucket: "retailproject-6f4fc.appspot.com",
  messagingSenderId: "653667385625",
  appId: "1:653667385625:web:a5aed08500de80839f0588",
  measurementId: "G-9SKTRHHSW9"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore().collection("CheckProfile");


$(document).ready(function () {
	//LoadData();
	ShowTeam(i);
    //LoadImg();
});



function ShowTeam(x) {
  $('#tbresult').empty();
  //$('#tbresult').DataTable().clear();
  //$('#tbresult tbody').empty();
	var xx = 0;
	if(x==null) { x=0; } else { xx = x; }
  //alert(x);
	//alert(xx);
	//LoadImg(xx);
  LoadData(xx);
}


/*
function LoadImg(x) {
  var xxx = "";
  str = "";
  $("#DisplayData").html(str);

  if (x==1) { xxx = "BBD"; } else
  if (x==2) { xxx = "RASC"; } else
  if (x==3) { xxx = "BANGPU"; } else
  if (x==4) { xxx = "OCSE"; } else
  if (x==5) { xxx = "PRODUCT"; }
  alert(xxx);

  //if (x==6) {
  //	document.getElementById('Open2').style.display='block';
  //	document.getElementById('Open1').style.display='none';
  //} else {
  //	document.getElementById('Open1').style.display='block';
  //	document.getElementById('Open2').style.display='none';
  //}

  if(x!=0) {
	  db.where('empBr','==',xxx).get().then((snapshot)=> {
	    snapshot.forEach(doc=> {
	      GetAllData(doc)
	    });
	  });  
  } else {
	  db.orderBy("PostTimeStamp", "desc").get().then((snapshot)=> {
	    snapshot.forEach(doc=> {
	      GetAllData(doc)
	    });
	  });  
  }
}



function GetAllData(doc) {
  i = i+1;
  str+='<div class="list-element" id="'+i+'">';
  str+='<div class="BoxView">';
  str+='<div style="height:96px;overflow:hidden;">'+ doc.data().linename +'</div>';
  str+='<div style="width: 100%;padding-top:5px;">;">'+ doc.data().empID +' <span>'+ doc.data().empName +'</span></div>';
  str+='</div>';
  str+='</div>';
  $("#DisplayData").html(str);
}
*/

function GotoMember() {
  location.href = "member.html";
}

/*
var str1 = "";
function ShowPictureID(n,y) {
  //ii = i+1;
  str1 += '<div>';
  str1 += '<div><img src="'+ n +'" style="max-width:290px;"></div>';
  str1 += '<div style="padding:8px; font-weight: 600; color:#0056ff;">"'+ y +'"</div>';
  str1 += '</div>';
  $("#DisplayPhoto").html(str1);
  str1 = "";
  document.getElementById("id01").style.display = "block";
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
}
*/




var table = document.querySelector('#tbresult');

function LoadData(x) {
  //$('#tbresult').empty();
  //$('#tbresult tbody').empty();
  i = 0;
  var xxx = "";
  if (x==0) { xxx = ""; } else
  if (x==1) { xxx = "BBD"; } else
  if (x==2) { xxx = "RASC"; } else
  if (x==3) { xxx = "BANGPU"; } else
  if (x==4) { xxx = "OCSE"; } else
  if (x==5) { xxx = "PRODUCT"; } else
  if (x==6) { xxx = "CHIEF"; } else
  if (x==7) { xxx = "OTHER"; }

  //$('#tbresult').dataTable().fnClearTable();
  if(x!="") {
    //alert("1");
    db.where('GroupReg','==',sGroupReg)
    .where('empBr','==',xxx)
    .orderBy("empID", "asc")
    .get().then((snapshot)=> {
  	//db.orderBy("empBr", "asc").get().then((snapshot)=> {
  	  snapshot.forEach(doc=>{
  	    showData(doc);
  	  });
  	});
  } else {
    //alert("2");
    //xxx = ".";
    db.where('GroupReg','==',sGroupReg)
    //.where('empBr','!=',xxx)
    .orderBy("empID", "asc")
    .get().then((snapshot)=> {
      snapshot.forEach(doc=>{
        showData(doc);
      });
    });    
  }


}


function showData(doc) {
	i = i+1;
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	cell1.innerHTML = i;
	cell2.innerHTML = doc.data().linename;
	cell3.innerHTML = doc.data().empID;
	cell4.innerHTML = doc.data().empName;
	cell5.innerHTML = doc.data().empBr;
	cell6.innerHTML = doc.data().empRH;
}



function export2csv() {
  LoadData();
  let data = "";
  const tableData = [];
  const rows = document.querySelectorAll("table tr");
  for (const row of rows) {
    const rowData = [];
    for (const [index, column] of row.querySelectorAll("th, td").entries()) {
      // To retain the commas in the "Description" column, we can enclose those fields in quotation marks.
      if ((index + 1) % 3 === 0) {
        rowData.push('"' + column.innerText + '"');
      } else {
        rowData.push(column.innerText);
      }
    }
    tableData.push(rowData.join(","));
  }
  data += tableData.join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([data], { type: "text/csv" }));
  a.setAttribute("download", "data.csv");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
