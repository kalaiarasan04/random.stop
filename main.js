
let user=parseInt(prompt("Enter a number"));

let n=10;

let ans=function(){
	
	let ran=Math.floor(Math.random()*n);
	
	document.write(ran);
	
	if(user==ran){
		
		clearInterval(set);
		
		document.write("Good Work");
		
	}
	
}
let set=setInterval(ans,1000)

	