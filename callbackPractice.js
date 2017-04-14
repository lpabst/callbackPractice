/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   
and what you should write is the sayHi function that makes the code above work, 
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
*/


// 1. Write a function called first that returns the first item of the array using a callback function

//My first ah-ha moment was when I reaized that both functions are interweaved,
//and pass each other arguments in a way.  first takes in 'func' as an argument,
//does some stuff, then ends up passing 'func' an argument of it's own (arr[0]).
  function first(arr, func){
    func(arr[0]);
  }

  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



// 2. Write a function called last which returns the last item of the array using a callback function.

//'last' takes in an array and a function. It then passes that function an argument,
//which in this case is the last item of the array. When invoked, the array is 'names' 
//and the function is an anonymous function that recieves the argument (last item in
//the array names) and uses it in the console.log command.
  function last(arr, func){
    func(arr[arr.length-1]);
  }

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});



// 3. Write a function called multiply that multiplies two numbers using a callback function.

//Multiply takes in two numbers and an anonymous function.  It multiplies the two
//numbers together, then passes the result (var 'ans') back to the function as an
//argument.  When invoked, the two numbers are declared to be '4' and '3', and the
//anonymous function console.logs the answer.
  function multiply(num, num2, func){
    var ans = num*num2;
     func(ans);
  }


multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})



// 4. Write a function called contains that checks if a name exists in an array. 
// If it does, return true using the callback, if not return false.

//Contains takes in an array, a string, and an anon function.  It creates a
//variable called 'ind', and sets it equal to the indexOf the string inside
//the array.  If the string exists, 'ind' will be set equal to the index.
//If it doesn't exist inside the array, then 'ind' will be set to equal -1.
//Using this, we can create an if statement that evaluates 'ind'. If it is 
//greater than or equal to zero, then the string is somewhere inside the array.
//'Contains' needs to pass the anon func a result of 'true' or 'false'.  So,
//if 'ind' is greater than or equal to zero, the string IS inside the array,
// so we save the result 'true' to variable 'res'.  If not, we save the result
//'false' to the variable 'res'.  We then pass res (the result) into the anon
//function as its argument.  The anon function takes this argument, and uses
//console.log to display the result. 
  function contains(arr, str, func){

    var ind = arr.indexOf(str);

    if (ind >= 0){
      res = true;
    }else{
      res = false;
    }

    func(res);

  }

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});



// 5. Write a function called uniq that takes the names array and removes all duplicates and returns 
// the callback function with the array of unique names.

//Uniq takes in an array and an anon function. Then we create a new, empty array named
//newArr.  We loop through the original array, and for each item, we check if it is 
//already included in the newArr.  If not, we add it (push). If so, we don't do anything,
//which takes us to the next iteration of the loop, which moves on to the next item
//in the array.  So if an item is duplicated, it won't add it a second time. By the 
//end, we have 'newArr' full of unique values, with no duplicates.  We pass 'newArr' to
//the anonymous function as its argument, and it displays it using console.log.
    function uniq(arr, func){

      var newArr = [];

      for (i = 0; i < arr.length; i ++){

        if (!newArr.includes(arr[i])){
          newArr.push(arr[i]);
        }

      }

      func(newArr);

    }

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});


// 6. Write a function called each that takes in an array of names. For each item, use a callback 
// function to return the indices and item.

//'Each' takes in an array and an anonymous function. Here's the cool part.  It loops 
//through the array, one item at a time. It stores the item's index in the variable 
//'index', and it stores the item's value in the variable 'itm'.  It passes these values
//to the anonymous function as arguments, the anonymous function dispays them using
//console.log, and then it moves on to the next iteration of the for loop.  It moves
//on to the next item, stores its index and value again, invokes the anonymous function,
//then moves on again. It does this for every item in the array. By the end, we have
//console.log displaying each item in the array's index and corresponding value. 
    function each(arr, func){

      for (i = 0; i < arr.length; i ++){
        var itm = arr[i];
        var index = i;
        func(itm, index);
      }


    } 

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});



// 7. Write a function called getUserById that looks at the array of user objects (users) and searches for a user by ID 
// and returns that user.

//'getUserById' takes in an array, a string, and an anonymous function.  It loops 
//through every single index in the array, each of which is an object.  It looks
//to see if the object (arr[i]) has an 'id' of 'str'.  If so, it saves 'arr[i]' to
//the variable 'user'.  It then passes the anon function the argument of 'user', 
//which equates to 'arr[i]'.  The anon function uses this to evaluate 'user.email'
//and user.name and user.address.  This equates to arr[i].email, arr[i].name, and
//arr[i].address.  the array (arr) ends up being 'users' when 'getUserById' is 
//invoked, and the 'str' it is checking against ends up being '16t'. So it finds
//the object inside the array 'users' that has an id of '16t', then saves its index
//(arr[i]) to user, for the function to use over and over again (i ends up being
//2, so it saves like - user = users[2]).  So it finds users[2].name, users[2].email,
//and users[2].address, and displays them with console.log.
  function getUserById(arr, str, func){

    for (var i in arr){
      if (arr[i].id === str){
        var user = arr[i];
      }
    }

    func(user);

  }

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});