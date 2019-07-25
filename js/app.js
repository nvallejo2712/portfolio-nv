/*texto del modal*/
/*
let textoModalCont=document.getElementById("modal-text");
let par=document.createElement("p");
par.setAttribute("id","parr-modal")
let titulo=document.createElement("h1");
titulo.setAttribute("id","titulo-modal")
textoModalCont.appendChild(titulo);
textoModalCont.appendChild(par);


let tituloModal=document.getElementById("titulo-modal");
let parrModal=document.getElementById("parr-modal");

*/
function abrir(a){
    document.getElementById("modal-container").style.display="flex";
    document.getElementById("modal-img").setAttribute("src","img/page"+a+".png")

    switch(a){
        case 1:
            tituloModal.innerHTML="titulo1"
            parrModal.innerHTML="parrafo1"
            break;

        case 2:
            tituloModal.innerHTML="titulo2"
            parrModal.innerHTML="parrafo2"
            break;
        case 3:
            tituloModal.innerHTML="titulo3"
            parrModal.innerHTML="parrafo3"
            break;
        case 4:
            tituloModal.innerHTML="titulo4"
            parrModal.innerHTML="parrafo4"
            break;
        case 5:
            tituloModal.innerHTML="titulo5"
            parrModal.innerHTML="parrafo5"
            break;
        case 6:
            tituloModal.innerHTML="titulo6"
            parrModal.innerHTML="parrafo6"
            break;
        case 7:
            tituloModal.innerHTML="titulo7"
            parrModal.innerHTML="parrafo7"
            break;
        case 8:
            tituloModal.innerHTML="titulo8"
            parrModal.innerHTML="parrafo8"
            break;    
    }



}

function cerrar(){
    document.getElementById("modal-container").style.display="none";
    
}



/*btn up*/

function irArriba(){
    window.scrollTo(0, 0);
}
  