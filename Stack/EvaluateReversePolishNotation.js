const polish = (arr) =>{
    let stack = new Array()
    
    for(let e of arr){
        if(e.match(/[0-9]/)) {
            stack.push(parseInt(e))
        }
        else{
            console.log(stack)
            let b = stack.pop()
            let a = stack.pop()
            console.log(a,b)
            let c;
            if(e == '+')  c = a + b
            else if(e == '-')  c = a - b
            else if(e == '*')  c = a * b
            else c = a/b
            
            stack.push(parseInt(c))
        }
    }
    return stack.pop()
    
}

console.log(polish(['2','1','+','3','*']))