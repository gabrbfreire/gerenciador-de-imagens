let allData;
let allBanks = [];
let currentBank;

window.onload = function () {
  getData();
}

//Get data and create banks <a>
function getData() {
  fetch('getBanks')
    .then(response => response.json())
    .then(data => {
      allData = data;
      let banks = document.getElementById("banks");
      data.forEach((item, index) => {
        allBanks.push(item.id);
      });

      allBanks = [...new Set(allBanks)];
      banks.innerHTML = '';
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
      a.onclick = () => {
        if (allBanks.length > 0) {
          console.log(allBanks[(allBanks.length - 1)] + 1);
          allBanks.push(allBanks[(allBanks.length - 1)] + 1);
        } else {
          allBanks.push(1);
        }
        $.ajax({
          url: "addBank",
          type: "POST",
          success: function () {
            getData();
          }
        });
      };
      li.appendChild(a);
      banks.appendChild(li);
    });
};



//Create images <imgs>
function createImgs(bank) {
  fetch('getImages')
    .then(response => response.json())
    .then(data => {
      allData = data;

      let images = document.getElementById("images");
      document.getElementById('bank-input').value = bank;
      currentBank = bank;
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
    });
}

// INSERT image
$('#load-file').submit((e) => {

  var form = document.getElementById('load-file');
  var formData = new FormData(form);
  e.preventDefault();

  $.ajax({
    url: "addImage",
    data: formData,
    type: "POST",
    success: function () {
      createImgs(currentBank);
    },
    contentType: false,
    processData: false,
  });
});

// INSERT bank
$('#new-bank').on('click', () => {


});