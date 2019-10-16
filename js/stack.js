
function store(){
    let number = document.getElementById("num");

    localStorage.setItem("num", number.value); 
}    

/*let init_top = 9;

for(i=0; i<init_top ;i++){
    let top_num =document.getElementById("topnum");
    setItem("topnum", i);

}*/

// Stack class 
class Stack {
	// Array is used to implement stack 
	constructor() 
	{ 
		this.items = []; 
	} 
} 

// push function 
function push(number) 
{ 
	// push element into the items 
	this.items.push(number); 
} 

// pop function 
pop() 
{ 
	// return top most element in the stack 
	// and removes it from the stack 
	// Underflow if stack is empty 
	if (this.items.length == 0) 
		return "Underflow"; 
	return this.items.pop(); 
} 


// peek function 
peek() 
{ 
	// return the top most element from the stack 
	// but does'nt delete it. 
	return this.items[this.items.length - 1]; 
} 
