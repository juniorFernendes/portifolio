
function limparTela(){
    document.getElementById("resultado").value = ""
}

function incert(num){
   
    if(num == "."){
        let x = document.getElementById("resultado").value
        let ponto = x.includes(".")
         if(ponto){

         }else{
            document.getElementById("resultado").value += num
         }
    }else{
        document.getElementById("resultado").value += num
    }
    
}

function calcula() {
    let x = document.getElementById("resultado").value
    x = eval(x)
    document.getElementById("resultado").value = x
}
