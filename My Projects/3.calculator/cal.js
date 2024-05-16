
let input = document.getElementById('ib')
let buttons = document.querySelectorAll('button')
let output =  ' '
let a = Array.from(buttons)
a.forEach(button => {
        button.addEventListener('click',(e)=>{
            if(e.target.innerHTML == '='){
                if (output==' '){
                    output=eval(input.value)
                }
                else{
                output = eval(output)
                }
                input.value = output
            }
            else if(e.target.innerHTML=='AC'){
                output = ' '
                input.value = output
            }
            else if(e.target.innerHTML == 'DEL'){
                output = output.substring(0,output.length-1)
                input.value = output
            }
            else {
                output = output+e.target.innerHTML
                input.value = output
            }
        })  
})

