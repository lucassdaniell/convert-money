function clickButton(){
    const input1 = Math.ceil(document.querySelector(".input-1").value)
    const input2 = Math.floor(document.querySelector(".input-2").value)


    if(input1 >= input2){
        alert("O valor minimo tem que ser menor que o valor maximo")
    } else {
        const result = Math.floor(Math.random() * (input2 - input1 + 1)) + input1;

        alert(result)
    }

   
    

    
}