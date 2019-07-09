const axios = require('axios');
const {
  setIntervalAsync,
  clearIntervalAsync
} = require('set-interval-async/dynamic');

let prevData = null;
let currentData = null;
setIntervalAsync(
  ()=>axios.get('https://www.cricbuzz.com/match-api/livematches.json').
     then(result=>{
         currentData = result.data.matches['20282'].score.batting.score;
         if(prevData!=currentData){
             prevData = currentData;
             console.log(prevData);
         }
     }),
  5000
);