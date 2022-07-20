let file = document.getElementById("file");
let imgp = document.getElementById("imgp");
let img = document.getElementById("img");
let nameinp = document.getElementById("name");
let priceinp = document.getElementById("price");
let room = document.getElementById("roomn");
let bath = document.getElementById("bathn");
let car = document.getElementById("carn");
let roomp = document.getElementById("room");
let roomN = document.getElementById("roomn");
let bathp = document.getElementById("bath");
let bathN = document.getElementById("bathn");
let carp = document.getElementById("car");
let roomm = document.getElementById("roo");
let bathm = document.getElementById("bat");
let carm = document.getElementById("ca");
let desc = document.getElementById("disc");
let add = document.getElementById("add");

(function thefullfun() {
  imgp.onclick = () => {
    file.click();
  };
  function previewImage() {
    var filec = file.files;
    if (filec.length > 0) {
      var fileReader = new FileReader();
      fileReader.onload = function (event) {
        img.setAttribute("src", event.target.result);
        imgp.style.backgroundImage = `url("${event.target.result}")`;
        imgp.style.backgroundPosition = "center center";
      };

      fileReader.readAsDataURL(filec[0]);
    }
  }
  file.onchange = () => {
    previewImage();
  };

  function plush() {
    mokl = parseInt(room.innerHTML);
    mokl++;
    room.innerHTML = mokl;
  }

  function plusb() {
    mokl = parseInt(bath.innerHTML);
    mokl++;
    bath.innerHTML = mokl;
  }
  function plusc() {
    mokl = parseInt(car.innerHTML);
    mokl++;
    car.innerHTML = mokl;
  }

  roomp.onclick = () => {
    plush();
  };
  bathp.onclick = () => {
    plusb();
  };
  carp.onclick = () => {
    plusc();
  };

  function minh() {
    mokl = parseInt(room.innerHTML);
    mokl--;
    room.innerHTML = mokl;
  }
  function minb() {
    mokl = parseInt(bath.innerHTML);
    mokl--;
    bath.innerHTML = mokl;
  }
  function minc() {
    mokl = parseInt(car.innerHTML);
    mokl--;
    car.innerHTML = mokl;
  }

  roomm.onclick = () => {
    if (room.innerHTML == 0) {
      room.innerHTML = 0;
    } else {
      minh();
    }
  };
  bathm.onclick = () => {
    if (bath.innerHTML == 0) {
      bath.innerHTML = 0;
    } else {
      minb();
    }
  };
  carm.onclick = () => {
    if (car.innerHTML == 0) {
      car.innerHTML = 0;
    } else {
      minc();
    }
  };
})();
let arrcard;
add.onclick = (e) => {
  if (
    room.innerHTML != 0 &&
    bath.innerHTML != 0 &&
    priceinp.value >= 100 &&
    nameinp.value.trim() != ""
  ) {
    e.preventDefault();
    arrcard = [...(JSON.parse(localStorage.getItem("prod")) || [])];
    let objcard = {
      id: arrcard.length + 1,
      imgurl: img.src,
      roomnum: room.innerHTML,
      bathnum: bath.innerHTML,
      carnum: car.innerHTML,
      name: nameinp.value,
      price: priceinp.value,
      desc: desc.value,
    };
    arrcard.unshift(objcard);
    localStorage.setItem("prod", JSON.stringify(arrcard));
    window.location = "index.html";
  } else {
    e.preventDefault();
    if (room.innerHTML == 0 || bath.innerHTML == 0) {
      alert("please enter number for count rooms and baths");
    }
    if (priceinp.value < 100) {
      alert("please enter price > 99 ");
    }
    if (nameinp.value.trim() == "") {
      alert("please enter name");
    }
  }
};
