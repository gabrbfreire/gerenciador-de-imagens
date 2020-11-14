fetch('getImages')
    .then(response => response.json())
    .then(data => {
        let images = document.getElementById("images");
        data.forEach((item, index) => {

            let img = document.createElement("img");
            img.src = "data:image/png;base64," + item.image;
            //images.innerHTML = "&#10006";
            images.appendChild(img);
        })
    });

fetch('getImages')
    .then(response => response.json())
    .then(data => {
        let banks = document.getElementById("banks");
        data.forEach((item, index) => {

            let li = document.createElement("li");
            li.className = 'nav-item';
            let a = document.createElement("a");
            a.className = 'nav-link text-light';
            a.href = '#';
            a.innerHTML = 'Banco ' + item.id;
            a.id = "bank-" + item.id;

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

/* fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }).then(function(response) {
    response.status     //=> number 100–599
    response.statusText //=> String
    response.headers    //=> Headers
    response.url        //=> String

    return response.text()
  }, function(error) {
    error.message //=> String
  }) */