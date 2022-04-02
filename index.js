var btn = document.querySelectorAll("button");
var input = document.getElementById("input")
var result = document.getElementById("result");
var mod = document.getElementById("mod");
console.log(btn.length)

for (let i = 0; i < btn.length; i++) {
    if(i !=1 &&  i !=18  ){

        btn[i].addEventListener("click", function () {
            input.value = input.value + this.value
            console.log(input.value)
        })
    }
}

result.addEventListener("click",function(){
    input.value=eval(input.value)
    
})

mod.addEventListener("click",function(){
    input.value = Math.sqrt(input.value)
})

var ac = document.querySelector("#clear").addEventListener("click",function(){
    input.value=""
})