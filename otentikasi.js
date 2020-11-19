

 function login(){
  username = document.querySelector("#username");
  password = document.querySelector("#password");
  // const btnSubmit = document.querySelector("#submit-btn");
  if (username.value == "" || password.value == "") {
    alert("Username / Password Tidak Boleh Kosong");
    return false;
  }
  else if (password.length < 6) {
    alert("Password Kurang dari 6");
    return false;
  }
  else if (username.value == "mia" && password.value == "123456") {
    window.location = "succes.html";
    return false;
  }else{
    alert("Username / Password anda salah");
  }

  
};

function kirim() {
  pesan = document.getElementById("pesan").value;
  document.getElementById("chatting").innerHTML = pesan+'\n';
  
  return false;
}

function kurs() {

  k = document.getElementById("kurs").value;

  if (k == 1) {
    input = document.getElementById("nilai").value;
    nilai = 9915;
    hitung = nilai * input;
    document.getElementById("rupiah").value = hitung;
  }else if (k == 2) {
    input = document.getElementById("nilai").value;
    nilai = 13472;
    hitung = nilai * input;
    document.getElementById("rupiah").value = hitung;
  }else if (k == 3) {
    input = document.getElementById("nilai").value;
    nilai = 874;
    hitung = nilai * input;
    document.getElementById("rupiah").value = hitung;
  }else if (k == 4) {
    input = document.getElementById("nilai").value;
    nilai = 120;
    hitung = nilai * input;
    document.getElementById("rupiah").value = hitung;
  }else if (k == 5) {
    input = document.getElementById("nilai").value;
    nilai = 15888;
    hitung = nilai * input;
    document.getElementById("rupiah").value = hitung;
  }else if (k == 6) {
    input = document.getElementById("nilai").value;
    nilai = 3592;
    hitung = nilai * input;
    document.getElementById("rupiah").value = hitung;
  }
}
  function displayImage(elem) {
    var image = document.getElementById("imgPicker");
    image.src = elem.value; 
}
