let chooseBtn = document.getElementById('choose'),
	receiveBtn = document.getElementById('receive'),
	heading = document.getElementsByTagName('h2')[0],
	nameInput = document.getElementsByClassName('contactform_name')[0],
	phoneInput = document.querySeletor('.contactform_phone'),
	mailInput = document.querySelectorAll('.contactform_mail')[0],
	modal = document.querySelector('.modal'),
	close = document.querySelector('.close'),
	text = document.getElementByName('message')[0];

function hover() {
	heading.textContent = 'действительно все!'
}

function out() {
 	heading.textContent = 'все включено!'
}

heading.addEventListener('click', hover);
heading.addEventListener('dblclick', function() {
 	heading.textContent = 'все включено!'
});

// receiveBtn.addEventListener('click', function() {
// 	modal.style.display = 'block'
// });

// close.addEventListener('click', function( {
// 	modal.style.display = 'none'
// }));

// nameInput.addEventListener('input', function() {
// 	text.value = 'меня зовут ' + nameInput.value + '. и я хочу спросить:';

// 	if (nameInput.value == '') {
// 		text.value = ''
// 	}
// })

