// GO!
// Task 1
var boxButton = document.querySelector('.answer-box');
var button = document.createElement('button');
button = boxButton.appendChild(button);
button.textContent = 'hide now'

button.addEventListener('click', function () {
	var nav = document.querySelector('.nav-menu');
	nav.classList.toggle('nav-menu-hidden');
	if (button.textContent === 'hide now') {
		button.textContent = 'show now';
	} else {
		button.textContent = 'hide now';
	}
	
});

// Task 2
var input = document.querySelector('#add-guest input');
var ul = document.querySelector('#add-guest ul')

input.addEventListener('keyup', function(e) {
	if(e.keyCode === 13) {
		var li = document.createElement('li');
		li.textContent = input.value;
		li.className = "guest";
		ul.appendChild(li);
		input.value = '';
	}
})

// Task 3
var inputBonus = document.querySelector('#add-guest-bonus input');
var ulBonus = document.querySelector('#add-guest-bonus ul')

function removeFromDom(el) {
	el.parentElement.removeChild(el);
}

inputBonus.addEventListener('keyup', function(e) {
	if (e.keyCode === 13) {
		var li = document.createElement('li');
		var button = document.createElement('button');
		button.textContent = 'x';
		li.textContent = inputBonus.value;
		li.className = "guest";
		li.appendChild(button);
		ulBonus.appendChild(li);
		inputBonus.value = '';
		button.addEventListener('click', function() {
			removeFromDom(li);
		})

	}
})