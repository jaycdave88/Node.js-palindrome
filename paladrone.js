console.log("Please enter some text!!")
var sys = require("sys");
var stdin = process.openStdin();
stdin.addListener("data", function(user_inputed_word){
	var user_string = user_inputed_word.toString().substring(0,user_inputed_word.length-1);
	var user_string_paladrone = user_string.split('').reverse().join('');
		if(user_string === user_string_paladrone){
			console.log(user_string_paladrone + " is a palindrome!")
		}else{
			console.log("Sorry!! Looks like " + user_string + " is not a palindrome.")
		};
});

