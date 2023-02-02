function draw() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let date = new Date(Date.now() - 1000 * 60 * 10)
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ap = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    let mergeTime = `${hours} ${minutes} pm`
    let img = new Image();
    img.addEventListener("load", ()=>{
      ctx.drawImage(img,0,0);
      
      ctx.fillStyle = "#78abf8";
      ctx.filter = "blur(1.2px)"
      ctx.font = 'lighter 36px Arial';
      ctx.textAlign = "right"
      ctx.fillText(mergeTime, 905, 1045);
      
      
    });
    img.src = "mykey.png";
  }