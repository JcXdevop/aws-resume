//javascript code
const ctr = document.querySelector(".hitnumbs");
async function updtCtr (){
    let lbdIN = await fetch("https://rke6n7igffryfyesrpibuccb7i0zfpuu.lambda-url.us-east-1.on.aws/");
    let lbddat = await lbdIN.json();
    ctr.innerHTML = ` Hits: ${lbddat}`;
}
updtCtr();