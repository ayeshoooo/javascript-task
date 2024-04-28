
// Given an integer array nums, find a subarray that has the largest
// product, and return the product

const num = [2,7,11,15];
const pro = num[0]+num[1];
const result = [0,1]


if(pro==9){
    alert(result)
}
else{
    alert('no result')
}

// Write a JavaScript program to display the reading status (i.e. display
//     book name, author name and reading status) of the following books


var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++)  {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      alert("Already read " + book);
    } else
    {
    alert("You still need to read " + book);
    }
   }

  
  



// Reverse each word in a given input string


function reverseString(){
    return str
}
function reverseString(str){
    return(str==='')? "": reverseString(str.substr(1)) +str.charAt(0);
}
const display = document.getElementById("display")
function render(func){
    display.deskContent = func;
}

render(reverseString('Welcome to this javascript guid!'))

// Question # 05:
// Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
// You can return the answer in any order





function amountTocoins(amount, coins) {
   
    if (amount === 0) {
     
      return [];
    } else {
     
      if (amount >= coins[0]) {
       
        left = (amount - coins[0]);
        
       
        return [coins[0]].concat(amountTocoins(left, coins));
      } else {
        
        coins.shift();
        return amountTocoins(amount, coins);
      }
    }
  }
  prompt(amountTocoins(46, [25, 10, 5, 2, 1]));


//   Question # 01: Given an integer array nums, find a subarray that has the largest
//   product, and return the product



  function maxSubarrayProduct(arr, n)
{
    
    let result = arr[0];
 
    for (let i = 0; i < n; i++) 
    {
        let mul = arr[i];
        
        for (let j = i + 1; j < n; j++) 
        {
           
            result = Math.max(result, mul);
            mul *= arr[j];
        }
       
        result = Math.max(result, mul);
    }
    return result;
}
 

 
    let arr = [2,3,-2,4 ];
    let n = arr.length;
    document.write("Maximum Sub array product is "
        + maxSubarrayProduct(arr, n));
     