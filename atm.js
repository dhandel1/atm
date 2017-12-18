$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});

//this will allow the user to make deposits to the checking account

$('#checking .deposit').on('click', function(){
    var deposit = inputChecking.val()
    checkingBalance += deposit
    checkingDisplay.text(checkingBalance)
  
});

//this will allow the user to make a deposit to the savings account

$('#savings .deposit').on('click', function(){
    var deposit = inputSavings.val()
    savingsBalance += deposit
    savingsDisplay.text(savingsBalance)
  
});

//this will allow the user to make withdraws from the checking account

$('#checking .withdraw').on('click', function(){
    var withdraw = inputChecking.val()
    if(checkingBalance >= withdraw){
        checkingBalance -= withdraw
        checkingDisplay.text(checkingBalance)
    } else{
        alert('not enough funds')
    }
    
  
});

//this will allow the user to make withdraws from the savings account

$('#savings .withdraw').on('click', function(){
    var withdraw = inputSavings.val()
    if(savingsBalance >= withdraw){
        savingsBalance -= withdraw
        savingsDisplay.text(savingsBalance)
    } else{
        alert('not enough funds')
    }
  
});

var inputChecking = $('#inputChecking')
var inputSavings = $('#inputSavings')
var checkingDisplay = $('#checking .balance')
var savingsDisplay = $('#savings .balance')
var savingsBalance = 0
var checkingBalance = 0


