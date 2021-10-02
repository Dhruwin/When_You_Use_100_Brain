var img_src = 'http://res.cloudinary.com/newz/image/upload/v1512115218/2_zurlhc.png';

window.onload = function() {
    var c = document.getElementsByTagName("canvas")[0];
    var ctx = c.getContext("2d");
    c.width = 320;
    c.height = 230;
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
    }
    img.src = img_src;
};