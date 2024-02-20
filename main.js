const input_01 = document.getElementById('input_01');
const box_01 = document.getElementById('box_01');
let tamanho = 'a';

function mostraNaTela() {
    alert(input_01.value);
}

function mudaCorDeFundo() {
    let value = input_01.value;
    let fundo = document.body;

    if(value === "Yellow" || value === "yellow" || value === "amarelo" || value === "Amarelo") {
        fundo.style.background = "yellow";
    } else if(value === "Blue" || value === "blue" || value === "azul" || value === "Azul"){
        fundo.style.background = "blue";
    } else if(value === "Vermelho" || value === "vermelho" || value === "red" || value === "Red"){
        fundo.style.background = "red";
    } else if(value === "Green" || value === "green" || value === "verde" || value === "Verde"){
        fundo.style.background = "green";
    } else if(value === "Orange" || value === "orange" || value === "laranja" || value === "Laranja"){
        fundo.style.background = "orange";
    } else if(value === "Brown" || value === "brown" || value === "Marrom" || value === "marrom"){
        fundo.style.background = "brown";
    } else if(value === "Purple" || value === "purple" || value === "roxo" || value === "Roxo"){
        fundo.style.background = "purple";
    } else if(value === "Pink" || value === "pink" || value === "Rosa" || value === "rosa"){
        fundo.style.background = "pink";
    } else if(value === "black" || value === "Black" || value === "Preto" || value === "preto"){
        fundo.style.background = "black";
    } else if(value === "white" || value === "White" || value === "branco" || value === "Branco"){
        fundo.style.background = "white";
    } else if(value === "Gray" || value === "gray" || value === "cinza" || value === "Cinza"){
        fundo.style.background = "gray";
    } else if(value === "colorido" || value === "Colorido" || value === "rainbow" || value === "Rainbow"){
        fundo.style.background = "linear-gradient(90deg,rgba(255, 0, 0, 1) 0%,rgba(255, 154, 0, 1) 10%,rgba(208, 222, 33, 1) 20%,rgba(79, 220, 74, 1) 30%,rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%,rgba(95, 21, 242, 1) 70%,rgba(186, 12, 248, 1) 80%,rgba(251, 7, 217, 1) 90%,rgba(255, 0, 0, 1) 100%)";
    } else {
        fundo.style.background = "white";
    }

    
}

function mudaCorCaixa() {
    let value = input_01.value;
    let caixa = document.getElementById("box_01");

    if(value === "Yellow" || value === "yellow" || value === "amarelo" || value === "Amarelo") {
        caixa.style.background = "yellow";
    } else if(value === "Blue" || value === "blue" || value === "azul" || value === "Azul"){
        caixa.style.background = "blue";
    } else if(value === "Vermelho" || value === "vermelho" || value === "red" || value === "Red"){
        caixa.style.background = "red";
    } else if(value === "Green" || value === "green" || value === "verde" || value === "Verde"){
        caixa.style.background = "green";
    } else if(value === "Orange" || value === "orange" || value === "laranja" || value === "Laranja"){
        caixa.style.background = "orange";
    } else if(value === "Brown" || value === "brown" || value === "Marrom" || value === "marrom"){
        caixa.style.background = "brown";
    } else if(value === "Purple" || value === "purple" || value === "roxo" || value === "Roxo"){
        caixa.style.background = "purple";
    } else if(value === "Pink" || value === "pink" || value === "Rosa" || value === "rosa"){
        caixa.style.background = "pink";
    } else if(value === "black" || value === "Black" || value === "Preto" || value === "preto"){
        caixa.style.background = "black";
    } else if(value === "white" || value === "White" || value === "branco" || value === "Branco"){
        caixa.style.background = "white";
    } else if(value === "Gray" || value === "gray" || value === "cinza" || value === "Cinza"){
        caixa.style.background = "gray";
    } else if(value === "default" || value === "Default" || value === "padrao" || value === "Padrao"){
        caixa.style.background = "#94acbe";
    } else if(value === "colorido" || value === "Colorido" || value === "rainbow" || value === "Rainbow"){
        caixa.style.background = "linear-gradient(90deg,rgba(255, 0, 0, 1) 0%,rgba(255, 154, 0, 1) 10%,rgba(208, 222, 33, 1) 20%,rgba(79, 220, 74, 1) 30%,rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%,rgba(95, 21, 242, 1) 70%,rgba(186, 12, 248, 1) 80%,rgba(251, 7, 217, 1) 90%,rgba(255, 0, 0, 1) 100%)";
    } else {
        caixa.style.backgroundColor = "white";
    }
}

function apagaTextoBox() {
    input_01.value = "";
}

function adicionaPalavraRandom() {
    const palavras = ['abacaxi', 'penumbra','salgado','chocalho','Brasil','penteado','mosaico','torta','culpa','eixo','pobre','segunda-feira','bateria','sonegar','imposto','paracetamol','correria','colorido','funil','bexiga'];
    let randomNum = Math.floor(Math.random() * palavras.length);
    let isColorido = palavras[randomNum] === 'colorido';
    let fundo = document.body;

    input_01.value += palavras[randomNum];

    if(isColorido) {
        fundo.style.background = "linear-gradient(90deg,rgba(255, 0, 0, 1) 0%,rgba(255, 154, 0, 1) 10%,rgba(208, 222, 33, 1) 20%,rgba(79, 220, 74, 1) 30%,rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%,rgba(95, 21, 242, 1) 70%,rgba(186, 12, 248, 1) 80%,rgba(251, 7, 217, 1) 90%,rgba(255, 0, 0, 1) 100%)";
    }
}

function mudaTamanhoBox(tamanho) {
    
    switch(tamanho) {
        case 'grande':
            box_01.classList.remove('normal');
            box_01.classList.remove('pequeno');
            box_01.classList.add('grande');
            box_01.style.transition = "2s";
            setInterval(() => {
                box_01.style.transition = "0s";
            }, 2000);
        break;
        case 'normal':
            box_01.classList.remove('pequeno');
            box_01.classList.remove('grande');
            box_01.classList.add('normal');
            box_01.style.transition = "2s";
            setInterval(() => {
                box_01.style.transition = "0s";
            }, 2000);
        break;
        case 'pequeno':
            box_01.classList.remove('grande');
            box_01.classList.remove('normal');
            box_01.classList.add('pequeno');
            box_01.style.transition = "2s";
            setInterval(() => {
                box_01.style.transition = "0s";
            }, 2000);
        break;
        default:

    }

}

dragElement(document.getElementById('mydiv'));
dragElement(box_01);

function dragElement(elmnt) {
  elmnt.style.transition = '0s';
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "drag")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "drag").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}