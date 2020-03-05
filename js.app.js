const form = document.querySelector('#form');
const content = document.querySelector('#content');

const age = prompt('How old are you?');
if(age >= 20){
    content.style.display = 'block';
    const name = prompt('What is your name?');
    document.querySelector('.message').innerHTML = "Welcome " + name + "to our yogas world";
document.querySelector('#enter').className = 'granted';

}
else {

    content.style.display = 'none';
    document.querySelector('.message').innerHTML = 'Sorry,you are not old enough.';
    document.querySelector('#enter').className = 'denied';
}