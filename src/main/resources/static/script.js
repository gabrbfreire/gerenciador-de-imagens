$.ajax({
    type: "GET",
    url: "getImage",
    data: {id: 1},
    success: function (data) {
        console.log(data.image)
        let img = document.createElement("img");

        img.src = "data:image/png;base64," + data.image;
        document.body.appendChild(img);
    }
})
