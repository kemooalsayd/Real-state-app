let pro = document.getElementById("root-p");
if (JSON.parse(localStorage.getItem("prod"))) {
  (function productsui() {
    let ui = JSON.parse(localStorage.getItem("prod"));
    let uid = ui.map((item) => {
      return `
            <div class="card" id="${item.id}">
            <div class="img">
            <img id="imgre" src="${item.imgurl}" />
            </div>
            <div>
              <div id="n-p">
                <span >name:<span>${item.name}</span></span
                ><span >price:<span>${item.price}</span>$</span>
              </div>
              <div id="feu">
                <div>
                  <span><i class="fa-solid fa-bed"></i></span
                  ><span id="num-r-r">${item.roomnum}</span><span>room</span>
                </div>
                <div>
                  <span><i class="fa-solid fa-bath"></i></span
                  ><span id="num-r-b">${item.bathnum}</span><span>bath</span>
                  </div>
                  <div>
                  <span><i class="fa-solid fa-car"></i></span
                  ><span id="num-r-p">${item.carnum}</span><span>parking</span>
                  </div>
                  </div>
                  <button class="more" onclick="more(this)">more <i class="fa-solid fa-angle-down"></i></button
              ><button onclick="update(${item.id})" >update</button>
              <button onclick="delet(${item.id})">delete</button>
              <p id="desr" class="desr">
                ${item.desc || "no descreption"}
                </p>
                </div>
                </div>
                `;
    });
    pro.innerHTML +=
      uid.join("") ||
      `<div class="noitem">no prodacts you can add new when click this button under page</div>`;
  })();
} else {
  pro.innerHTML = `<div class="noitem">no prodacts you can add new when click this button under page</div>`;
}

function update(id) {
  window.location = "edeit.html";
  localStorage.setItem("upd", id);
}

function more(t) {
  t.onclick = (c) => {
    if (c.path[1].children[5].classList.contains("open")) {
      c.path[1].children[2].innerHTML = `more <i class="fa-solid fa-angle-down"></i>`;
    } else {
      c.path[1].children[2].innerHTML = `more <i class="fa-solid fa-angle-up"></i>`;
    }
    c.path[1].children[5].classList.toggle("open");
  };
  t.click();
}
let idubd = JSON.parse(localStorage.getItem("del"));
let alld = JSON.parse(localStorage.getItem("prod"));
let getd = alld.find((i) => i.id === idubd);

function delet(d) {
  localStorage.setItem("del", d);
  alld.splice(alld.indexOf(getd), 1);
  localStorage.setItem("prod", JSON.stringify(alld));
  window.location.reload();
}
