window.addEventListener('load' , init) ;

const getSelector = element => document.querySelector(`#${element}`);
const {inputWord, currentWord, myTime, myScore, myBestScore, message, seconds} = {
    inputWord: getSelector('inputWord'),
    currentWord: getSelector('currentWord'),
    myTime: getSelector('myTime'),
    myScore: getSelector('myScore'),
    myBestScore: getSelector('myBestScore'),
    message: getSelector('message'),
    seconds: getSelector('seconds')
}


const Time = 5;
let displaytime = Time, score=0, bestScore=0, isPlaying;
const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];


function* generateWords(arr = words){
    while (true) yield arr[Math.floor(Math.random() * arr.length)];
}

const genWords = generateWords(words);

function init(){
    seconds.innerHTML= Time;
    seconds.style.color= '#0FE417';
    showWordTime(words);
    inputWord.addEventListener('input' , startMatch ) ;
    setInterval(countDown , 1000);
    setInterval(checkStatus , 500) ;
}

function showWordTime(words){
    currentWord.innerHTML = genWords.next().value;
    myTime.innerHTML = displaytime;
}

function countDown(){
    displaytime > 0 ? displaytime-- : isPlaying =false ;
    myTime.innerHTML = displaytime ;
}

function checkStatus(){
    if(!isPlaying && displaytime === 0){
        message.innerHTML = 'Game Over!!!' ;
        message.style.color = 'red' ;
        myScore.innerHTML = 0 ;
        score = 0;
        inputWord.value='' ;
    }
}

function startMatch(){
    if(message.innerHTML === 'Game Over!!!'){
        message.innerHTML = '' ;
        
        isPlaying = true ;
        displaytime = Time ;
    }
    if(matchWords()){
        isPlaying = true ;
        displaytime= Time ;
        showWordTime(words) ;
        inputWord.value = '' ;
        score++ ;
        bestScore=Math.max(score , bestScore) ;
    }

    myScore.innerHTML = score ;
    myBestScore.innerHTML = bestScore ;
}

function matchWords(){

    if(inputWord.value === currentWord.innerHTML){
        message.innerHTML='Correct!!!' ;
        message.style.color = 'green' ;
        return true ;
    }

    else{
        message.innerHTML = '' ;
        isPlaying =true;
        return false ;
    }
}

function reset(Time, color){
    seconds.style.color = color;
    displaytime = Time;
    seconds.innerHTML = Time;
    inputWord.value = '' ;
    message.innerHTML = '' ;
    score=0 , bestScore ;
    myScore.innerHTML = score ;
    myBestScore.innerHTML = bestScore ;
}
