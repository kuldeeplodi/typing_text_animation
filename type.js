const text=document.querySelector(".sec-text");
const textload=()=>{
    setTimeout(()=>{
        text.textContent ="Freelancer";
    },0);
    setTimeout(()=>{
        text.textContent ="Blogger";
    },4000);
    setTimeout(()=>{
        text.textContent ="Designer";
    },8000);
}
textload();
setInterval(textload,12000);