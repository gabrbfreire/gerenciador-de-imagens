let allData;
let allBanks = [];
let currentBank;


//Get data and create banks anchors
fetch('getImages')
  .then(response => response.json())
  .then(data => {
    allData = data;
    let images = document.getElementById("images");
    data.forEach((item, index) => {
      allBanks.push(item.bank);
    });

    allBanks = [...new Set(allBanks)];

    allBanks.forEach((item, index) => {
      let li = document.createElement("li");
      li.className = 'nav-item';
      let a = document.createElement("a");
      a.className = 'nav-link text-light';
      a.href = '#';
      a.innerHTML = 'Banco ' + item;
      a.id = "bank-" + item;

      a.addEventListener('click', () => {
        createImgs(item);
      });

      li.appendChild(a);
      banks.appendChild(li);
    });

    let li = document.createElement("li");
    li.className = 'nav-item';
    let a = document.createElement("a");
    a.className = 'nav-link text-light';
    a.href = '#';
    a.innerHTML = 'Novo Banco';
    a.id = 'new-bank';
    li.appendChild(a);
    banks.appendChild(li);
  });



//Create images imgs
function createImgs(bank) {
  console.log(allData);
  document.getElementById('bank-input').value = bank;
  currentBank = bank;
  console.log(bank);
  images.innerHTML = '';

  allData.forEach((item, index) => {
    if (item.bank == bank) {
      //create imgs
      let img = document.createElement("img");
      img.src = "data:image/png;base64," + item.image;
      //images.innerHTML = "&#10006";
      images.appendChild(img);
    }
  });
}

/* const image = document.getElementById('image');
const cropper = new Cropper(image, {
  aspectRatio: 16 / 9,
  crop(event) {
    console.log(event.detail.x);
    console.log(event.detail.y);
    console.log(event.detail.width);
    console.log(event.detail.height);
    console.log(event.detail.rotate);
    console.log(event.detail.scaleX);
    console.log(event.detail.scaleY);
  },
}); */

document.getElementById('load-file').onsubmit(() => {
  let parameters = 'file=' + document.getElementById('file-input').value + '&' + 'bank=' + document.getElementById('bank-input').value;

  fetch(url, {
    method: "POST",
    body: parameters,
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }).then(function (response) {
    response.status     //=> number 100–599
    response.statusText //=> String
    response.headers    //=> Headers
    response.url        //=> String

    return response.text()
  }, function (error) {
    error.message //=> String
  });
})

