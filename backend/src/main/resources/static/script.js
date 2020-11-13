// $.ajax({
//     type: "GET",
//     url: "getImage",
//     data: {id: 1},
//     success: function (data) {
//         console.log(data.image)
//         let img = document.createElement("img");
//
//         img.src = "data:image/png;base64," + data.image;
//         document.body.appendChild(img);
//     }
// })

$.ajax({
    type: "GET",
    url: "getImages",
    success: function (data) {
        console.log(data)
        data.forEach((item, index)=>{
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = "data:image/png;base64," + item.image;
            div.innerHTML = "&#10006";
            div.appendChild(img);
            document.body.appendChild(div);
        })
    }
})
