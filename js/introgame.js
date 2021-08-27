var sGroupReg = "Prudentital";
var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });


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
var db = firebase.firestore().collection("GameScore");


$(document).ready(function () {
  document.getElementById("pictureUrl").src = sessionStorage.getItem("LinePicture");
  document.getElementById("displayName").append(sessionStorage.getItem("LineName"));
  CheckLogin();
});


function CheckLogin() {
  //alert(sessionStorage.getItem("LineID"));
  //alert(sessionStorage.getItem("EmpRH"));
  db.where('LineID','==',sessionStorage.getItem("LineID")).get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      //aCheck = 1;
      //alert(doc.data().YourScore);
      sessionStorage.setItem("ShowYourScore", doc.data().YourScore);
      //Eid = doc.id;
    });
      OpenPage();
  });
}



function OpenPage() {
  //alert(aCheck);
  //alert(sessionStorage.getItem("ShowYourScore"));
  document.getElementById('loading').style.display = 'none';
  if(sessionStorage.getItem("ShowYourScore")!=null) {
    document.getElementById("DisplayScore").append(sessionStorage.getItem("ShowYourScore"));
    document.getElementById('CheckScore').style.display = 'none';
    document.getElementById('ShowScore').style.display = 'block';
  } else {
    document.getElementById('CheckScore').style.display = 'block';
    document.getElementById('ShowScore').style.display = 'none';
  }
}



