// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker` ********Done**********
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Answer: Counter 1 employs a closure to encapsulate a counter variable and a function counter(). In this case you have a bundle of code that can not be touched
 * from outside its scope. The let count variable is scoped to the counterMaker() so nothing can reasign its value which if happend would break the counter() function. 
 * Counter two involves a count variable that is globally scoped followed by a callback function which employs the count variable. The big problem with this
 * example is that the count variable value could be reasigned and manipulated by other functions. If the count variable was changed then the counter2() would not
 * work correctly. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Answer: Counter1 employs a closure to encapsulate the counter(). You can see that a closure is employed by seeing that there is a function nested within
 * another function. This is a sign that there is a closure being employed. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * Answer: Counter 1 would be a preferable modle in most cases because the data it contains is protected. The count variable can not be reasigned so the the return
 * value when this function is called will not be damaged. Counter 2 might be preferable if you wanted the counter2() callback function to be interacted with by 
 * multiple higherorder functions or if the value stored in the count variable was needed by other functions or variables. Overall Counter1 is better code. 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() **** Done *****

Write a function called `inning` that generates a random number of points that a team scored in an inning. 
This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() * (2 - 0 + 1) + 0); // This trick to get a random number that is inclusive on both the min and max is from mdn
}                                                     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number 
of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning,numberOfInnings){ // returns the final game score for Home and Away
  let counterHome = 0;
  let counterAway = 0;
  let finalScoreRecord = {Home:0, Away:0};

    for(let i = 0; i < numberOfInnings; i++){
      counterHome = counterHome + inning;
      finalScoreRecord.Home = finalScoreRecord.Home + counterHome;
      console.log(counterHome);
    }

    for(let i = 0; i < numberOfInnings; i++){
      counterAway = counterAway + inning;
      finalScoreRecord.Away = finalScoreRecord.Away + counterAway;
      console.log(counterAway);
    }
    //console.log(scoreboard(counterAway,counterHome,i+1));
    
  
  return finalScoreRecord;
}

console.log(finalScore(inning(), 4))

/* Task 4: *****************done*******

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */




function gettingInningScore(){
  let inningScore = {Home: 0, Away:0}

  inningScore.Home = inning();
  inningScore.Away = inning();

  return inningScore;
}

function scoreboard(numberOfInnings) {  // scoreboard results for each inning
  
  let totalScoreHome = 0;
  let totalScoreAway = 0;
  
  for (let i = 1; i < numberOfInnings + 1; i++) {

    let scoreHomeInning = gettingInningScore().Home;
    let scoreAwayInning = gettingInningScore().Away;

    totalScoreHome = totalScoreHome + scoreHomeInning;
    totalScoreAway = totalScoreAway + scoreAwayInning;

    if(i === 1){
      console.log(`${i}st inning: ${scoreAwayInning} - ${scoreHomeInning}`);
    } else if (i === 2){
      console.log(`${i}nd inning: ${scoreAwayInning} - ${scoreHomeInning}`);
    } else if(i === 3){
      console.log(`${i}rd inning: ${scoreAwayInning} - ${scoreHomeInning}`);
    } else {
      console.log(`${i}th inning: ${scoreAwayInning} - ${scoreHomeInning}`);
    }
  
}

return `Final Score: ${totalScoreAway} - ${totalScoreHome}`

}


console.log(scoreboard(4));
