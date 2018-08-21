window.addEventListener('load' , init) ;


inputWord = document.querySelector('#word-input');
currentWord = document.querySelector('#current-word');
myTime = document.querySelector('#time');
myScore = document.querySelector('#score');
myBestScore = document.querySelector('#bestScore');
message = document.querySelector('#message');
seconds = document.querySelector('#seconds');

//buttons
easyButton = document.querySelector('#easy') ;
mediumButton = document.querySelector('#medium') ;
hardButton = document.querySelector('#Hard') ;

Time = 5 ;
let displaytime =Time , score=0 , bestScore=0, isPlaying;
seconds.innerHTML=Time ;
seconds.style.color= '#0FE417'
const words=[
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
]


function init(){
    showWordTime(words);
    inputWord.addEventListener('input' , startMatch ) ;
    setInterval(countDown , 1000);
    setInterval(checkStatus , 500) ;
}

function showWordTime(words){
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randomIndex];
    myTime.innerHTML = displaytime ;
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

//buttons 
function buttonEasy(){
    Time=5 ;
    seconds.style.color= '#0FE417'
    reset();
}

function buttonMedium(){
    Time=3 ;
    seconds.style.color= '#9AAF3C'

    reset();
}

function buttonHard(){
    Time=2;
    seconds.style.color='#FF0000'
    reset();
}

function reset(){
    
    displaytime =Time
    seconds.innerHTML =Time ;
    inputWord.value = '' ;
    message.innerHTML = '' ;
    score=0 , bestScore ;
    myScore.innerHTML = score ;
    myBestScore.innerHTML = bestScore ;
}