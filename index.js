function chalja(){
     setTimeout(loader,3000);
     //higher order function: wh
}
const loader= ()=>{
    document.querySelector('#mainweb').style.display = "block";
    document.querySelector('#imgs').style.display = "none";
}