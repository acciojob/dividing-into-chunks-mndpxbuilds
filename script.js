const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result = [];
	for(let i=0; i<arr.length; i++){
		if(arr[i]==n || arr[i]<n){
			result.push(arr[i]);
		}else if(arr[i]+arr[i+1]+arr[i+2]<n){
			result.push(arr[i],arr[i+1]);
		}else{
			continue;
		}
	}
	console.log(result[i]);
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
