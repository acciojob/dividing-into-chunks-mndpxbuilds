const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let sum = 0;
	let current = [];
	let result =[];
	for(let i=0; i<arr.length; i++){
		if(sum+arr[i]<=n){
		current.push(arr[i]);
		sum+=arr[i];
		}
		else{
			result.push(current);
			current = [arr[i]];
			sum = arr[i];
		}
		
	}
	result.push(current);
		return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
