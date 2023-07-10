document.querySelector(".hamburger").addEventListener("click", ()=>{
    document.querySelector(".hamburger").classList.toggle("nav-clicked")


    document.querySelector(".line1").classList.toggle("nav-clicked")


    document.querySelector(".line2").classList.toggle("nav-clicked")

    document.querySelector(".nav-bar").classList.toggle("open-nav")

})

let next=document.querySelector(".next")
let prev=document.querySelector(".prev")
let img=document.querySelector(".slider-icons")

        let current=1
        
        next.addEventListener("click",()=>{
            current++
            clearTimeout(time)
            update()
        })
        let time;
        update()

        function update(){
            if(current>8){
                current=1

            }

            else if(current<1){
                current=8
            }
            img.style.transform=`translateX(-${(current-1)*img.clientWidth}px)`
            time=setTimeout(()=>{
                current++
                update()
            }, 400)

        }


        












        prev.addEventListener("click",()=>{
            current--
            clearTimeout(time)
            update()
        })







let canvas = document.querySelector("canvas")
let ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

ctx.strokeStyle="#bada55"

ctx.lineJoin="round"
ctx.lineCap="round"
ctx.lineWidth=70
let isdrawing=false;
let lastX=0
let lastY=0
let hue=0
let direction=true;


function draw(e){
    if(!isdrawing) return;
    ctx.strokeStyle=`hsl(${hue}, 100%,50%)`
    ctx.beginPath();
    ctx.moveTo(lastX,lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();
    [lastX,lastY]=[e.offsetX,e.offsetY]

    hue++;
    if(hue>=360){
        hue=0
    }
}

function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

canvas.addEventListener("mousedown", (e)=>{
    isdrawing=true;
    [lastX,lastY]=[e.offsetX,e.offsetY]
})


canvas.addEventListener("mousemove", draw)
canvas.addEventListener("mouseup", ()=>{
    isdrawing=false
    clearCanvas()
})


canvas.addEventListener("mouseout", ()=>{
    isdrawing=false;
    clearCanvas()
})


window.onscroll=function(){
    let pos=document.documentElement.scrollTop;
    let calc_height=document.documentElement.scrollHeight-document.documentElement.clientHeight
    let scroll=pos*100 / calc_height
    document.querySelector(".scroll-line").style.width =scroll+ "%"
}










