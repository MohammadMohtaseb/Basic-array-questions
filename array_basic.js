// 1-Write a function to find the largest element in an array.
// function largest(arr){
//   let max = arr[0];
//   for(let i = 1; i < arr.length;i++){
//     if (arr[i]>max){
//       max = arr[i];
//     }
//   }
//   return max;
// }
// num = [1,60,70,30,40];
// console.log(largest(num));
// 2-Write a function to find the smallest element in an array.
  // function smallest(arr){
  //   let min = arr[0];
  //   for(let i = 0; i < arr.length; i++){
  //     if (arr[i]<min){
  //       min = arr[i];
  //     }
      
  //   }
  //   return min;
  // }
  // num = [50,90,70,40,30];
  // console.log(smallest(num));
// 3-Write a function to find the sum of all elements in an array.
  //   function sum(arr){
  //     let sum = 0;
  //     for(let i = 0 ; i < arr.length; i++){
  //     sum += arr[i];
  //   }
  //   return sum;
  // }
  // num = [1,2,3,4,10];
  // console.log(sum(num));
// 4-Write a function to find the average of all elements in an array.
    // function average(arr){
    //   let sum = 0;
    //   for(let i=0; i<arr.length; i++){
    //     sum+=arr[i];
    //   }
    //   return sum/arr.length;
    // }
    // num=[1,2,3,4,5];
    // console.log(average(num));
// 5-Write a function to find the median of all elements in an array.
    // function median(arr){
    //   let median = 0;
    //   for(let i = 0; i < arr.length; i++){
    //     median += arr[i];
      
    //   }
    //   return median/arr.length
    // }
    // num = [20,40,30,50,10];
    // console.log(median(num));
// 6-Write a function to remove all duplicates from an array.
  // function remove(arr){
  //   let x = [];
  //   for(let i = 0 ; i < arr.length; i++){
  //     if(!x.includes(arr[i])){
  //       x.push(arr[i]);
  //     }
  //   }
  //   return x;
  // }
  // num = [20,30,20,40,30,40,50,60,70,50,60,70];
  // console.log(remove(num));
// 7-Write a function to sort an array in ascending order.
    // function sort(arr){
    //   return arr.sort((a,b) => a-b);

    // }
    // num = [40,20,50,30,10,60,80,70];
    // console.log(sort(num));
// 8-Write a function to sort an array in descending order.
// function sort(arr){
//   for(let i = 0; i < arr.length; i++){
//     for(let x=0; x < arr.length; x++){
//       if(arr[i] > arr[x]){
//         let y = arr[i];
//         arr[i] = arr[x];
//         arr[x] = y;
        
//       }
//     }
    
//   }
//   return arr;
// }
// num = [50,10,20,30,60,70,100,80,90];
// console.log(sort(num));
// 9-Write a function to shuffle the elements of an array randomly.

  // function shuffle(arr){
  //   for(let i = 0; i < arr.length; i++){
  //     let x = Math.floor(Math.random() * (i+1));
  //     let y = arr[i];
  //     arr[i] = arr[x];
  //     arr[x] = y;
  //   }
  //   return arr;
  // }
  // num=[20,50,80,60,70,90];
  // console.log(shuffle(num));