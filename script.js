//your JS code here. If required.
document.addEventListener("DOMContentLoaded",function() {

	let output= document.getElementById("output");
	let p1 = new Promise((resolve)=>{
		setTimeout(()=>{resolve([1,2,3,4])},3000);
	}).then((arr)=>{
		
		arr= arr.filter((item)=>item%2==0);
		return new Promise((resolve)=>{
			setTimeout(()=>{
			output.textContent=arr.join(",");	
			resolve(arr)
		},1000);
		});
		
	}).then((arr)=>{
		
		arr = arr.map((item)=>item*2);
		return new Promise((resolve)=>{
			setTimeout(()=>{
			output.textContent=arr.join(",");	
			resolve(arr)
		},1000);	
		});
		
	});
	
	
});

