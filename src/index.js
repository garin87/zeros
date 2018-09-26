module.exports = function getZerosCount(a) {
      
var count = 0; // counter of zeros
var div = 1; // result of division
var n = 1; // degree of

	while(div>=1){
	   count = count + Math.floor(a / Math.pow(5, n));
	   div = Math.floor(a / Math.pow(5, n));
	   n++;  
	}

	return count;
} 
