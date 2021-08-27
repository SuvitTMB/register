  var sLineID = "Ua6b6bf745bd9bfd01a180de1a05c23b3";
  var sLineName = "Website";
  var sLinePicture = "https://profile.line-scdn.net/0hoLlg-mNNMGNRHiaTpMdPNG1bPg4mMDYrKX8qVnIYOgYpe3QwbCp2AXVKaVN_fnMzOC16V3NMagF8";
  var sEmpID = "08400";
  var sEmpBr = "OCSE";
  var sEmpName = "สุวิทย์ ชัยรุ่งปัญญา";
  
  sessionStorage.clear();
  sessionStorage.setItem("LineLogin", sEmpID);
  sessionStorage.setItem("LineID", sLineID);
  sessionStorage.setItem("LineName", sLineName);
  sessionStorage.setItem("LinePicture", sLinePicture);
  sessionStorage.setItem("EmpName", sEmpName);
  sessionStorage.setItem("EmpID", sEmpID);
  sessionStorage.setItem("EmpBR", sEmpBr);
  


/*
  async function main() {
    await liff.init({ liffId: "1655966947-m8nNr7OQ" });
    document.getElementById("isLoggedIn").append(liff.isLoggedIn());
    if(liff.isLoggedIn()) {
      getUserProfile();
    } else {
      liff.login();
    }
  }
  main()


  async function getUserProfile() {
    const profile = await liff.getProfile();
    sessionStorage.setItem("LineLogin", profile.userId);
    sessionStorage.setItem("LineID", profile.userId);
    sessionStorage.setItem("LineName", profile.displayName);
    sessionStorage.setItem("LinePicture", profile.pictureUrl);
  }


  function openWindow() {
    liff.openWindow({
      url: "https://line.me",
      external: true     
    })
  }
*/





// Creating questionss and answers
//*****************************************************************************
/*
$(document).ready(function () {
  main();
});


async function main() {
  await liff.init({ liffId: "1655966947-RLMQZVjk" });
  document.getElementById("isLoggedIn").append(liff.isLoggedIn());
  if(liff.isLoggedIn()) {
    getUserProfile();
  } else {
    liff.login();
  }
}


async function getUserProfile() {
  const profile = await liff.getProfile();
  //document.getElementById("userId").append(profile.userId);
  sessionStorage.setItem("LineID", profile.userId);
  sessionStorage.setItem("LineName", profile.displayName);
  sessionStorage.setItem("LinePicture", profile.pictureUrl);
  alert(profile.userId);
}


function openWindow() {
  liff.openWindow({
    url: "https://line.me",
    external: true     
  })
}
*/

