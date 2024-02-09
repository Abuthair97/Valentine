const answers = [
    "Are you sure?",
    "Are you really sure??",
    "Are you really really sure???",
    "Think again?",
    "Don't believe in second chances?",
    "Why are you being so cold?",
    "Maybe we can talk about it?",
    "I am not going to ask again!",
    "Ok now this is hurting my feelings!",
    "You are now just being mean!",
    "Why are you doing this to me?",
    "Please give me a chance!",
    "I am begging you to stop!",
    "Ok, Lets just start over.."
]

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;

no_button.addEventListener('click',()=>{
    let banner = document.getElementById("banner");
    banner.src='./assets/no.gif'
    change();
    let total = answers.length;
    // no_button.style.position="absolute"
    if(i <total-1){
        no_button.innerHTML=answers[i];
        i++;
    }
    else if(i === total-1){
        alert(answers[i]);
        i=0;
        no_button.innerHTML="NO";
        no_button.style.left="0px";
        no_button.style.top="0px";


    }

});
yes_button.addEventListener('click', () => {
    document.querySelector(".heading").style.display = "none";
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "./assets/yes.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}
function change()
{
    let i = Math.floor(Math.random()*500)+1;
    let j = Math.floor(Math.random()*500)+1;
     no_button.style.left = i+"px";
     no_button.style.top = j+"px";



}