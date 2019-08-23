var answers = ['It is certain','It is decidedly so','Without a doubt',
  'Yes - definitely','You may rely on it','As I see it, yes','Most likely',
  'Outlook good','Yes','Signs point to yes','Reply hazy, try again',
  'Ask again later','Better not tell you now','Cannot predict now',
  'Concentrate and ask again','My reply is no','My sources say no',
  'Outlook not so good','Very doubtful'];
var answer = answers[Math.floor(Math.random()*answers.length)];
var question = document.querySelector('.text-box');
var response = document.querySelector('.response-text');
var eightPic = document.querySelector('.eight-ball')
var questionButton = document.querySelector('.answer-button');

questionButton.addEventListener('click', showMessage);

function showMessage() {
  response.innerText = `"${question}? - ${answer}"`;
  if (response.style.display === 'none') {
    response.style.display = 'block';
    eightPic.style.display = 'none';
  }
