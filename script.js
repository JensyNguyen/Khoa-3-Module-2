function upDate(previewPic) {
    console.log("Mouse over triggered.");
    console.log("Image source:", previewPic.src);
    console.log("Alt text:", previewPic.alt);
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}
function unDo() {
    console.log("Mouse out triggered.");
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}
