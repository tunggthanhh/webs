var index = 1;
    function changeImage(){
        var imgs = ["./FileAnh/banner.png", "./FileAnh/banner1.png"];
        document.getElementById('img').src = imgs[index];
        index++;
        if(index==2){
        index = 0;
        }
    }
    setInterval(changeImage, 2500);