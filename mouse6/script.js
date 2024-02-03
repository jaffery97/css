const sentences = [
  ['I', 'adore', '😄'],
  ['The', 'sun', 'is', 'bright'],
  ['Coding', 'brings', 'joy', '💻'],
  ['This', 'is', 'a', 'wholesome', 'moment'],
  ['Engage', 'and', 'enjoy', 'life', 'to', 'its', 'fullest'],
  ['Digital', 'technology', 'involves', 'email', 'websites', 'and', 'communication'],
  ['JavaScript', 'is', 'widely', 'used', 'for', 'web', 'enjoyment'],
  ['CSS', 'provides', 'styling', 'for', 'web', 'pages'],
  ['HTML', 'is', 'used', 'to', 'structure', 'digital', 'content'],
  ['Life', 'requires', 'wisdom', 'experience', 'and', 'laughter'],
  ['Mobile', 'devices', 'are', 'commonly', 'used', 'for', 'communication'],
  ['Joyful', 'design', 'ensures', 'websites', 'spread', 'happiness'],
  ['Laughter', 'is', 'a', 'natural', 'medicine'],
  ['Digital', 'communication', 'like', 'email', 'simplifies', 'connection'],
  ['Senior', 'life', 'is', 'full', 'of', 'wisdom', 'experience', 'and', 'laughter'],
  ['Mindfulness', 'enables', 'joyful', 'living'],
  ['Healthy', 'eating', 'is', 'key', 'to', 'vitality'],
  ['Nature', 'enables', 'relaxation', 'and', 'rejuvenation'],
  ['Music', 'is', 'known', 'for', 'its', 'uplifting', 'effect'],
  ['Friendship', 'is', 'a', 'treasure', 'in', 'every', 'season'],
  ['Kindness', 'allows', 'different', 'souls', 'to', 'connect']
];

//
//const sentences = [
//  ['I', 'adore', '🍦'],
//  ['The', 'sun', 'is', 'glowing'],
//  ['Coding', 'is', 'hilarious', '💻'],
//  ['This', 'is', 'a', 'delightful', 'paragraph'],
//  ['Drag', 'and', 'drop', 'phrases', 'to', 'compose', 'sentences'],
//  ['Web', 'development', 'involves', 'HTML', 'CSS', 'and', 'JavaScript'],
//  ['JavaScript', 'is', 'widely', 'used', 'for', 'web', 'development'],
//  ['CSS', 'provides', 'styling', 'for', 'HTML', 'elements'],
//  ['HTML', 'is', 'used', 'to', 'structure', 'web', 'pages'],
//  ['Coding', 'requires', 'logical', 'thinking', 'and', 'problem-solving'],
//  ['Mobile', 'apps', 'are', 'commonly', 'developed', 'using', 'React Native'],
//  ['Responsive', 'design', 'ensures', 'websites', 'look', 'good', 'on', 'all', 'devices'],
//  ['OpenAI', 'developed', 'GPT-3', 'for', 'advanced', 'natural', 'language', 'processing'],
//  ['Machine', 'learning', 'is', 'used', 'to', 'make', 'predictions', 'based', 'on', 'data'],
//  ['CSS', 'frameworks', 'like', 'Bootstrap', 'simplify', 'web', 'design'],
//  ['Java', 'is', 'a', 'versatile', 'programming', 'language'],
//  ['Node.js', 'enables', 'JavaScript', 'to', 'be', 'run', 'server-side'],
//  ['Python', 'is', 'known', 'for', 'its', 'clean', 'syntax', 'and', 'readability'],
//  ['Git', 'is', 'a', 'version', 'control', 'system', 'used', 'in', 'software', 'development'],
//  ['APIs', 'allow', 'different', 'software', 'applications', 'to', 'communicate']
//  // Add more sentences as needed
//];

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
	}
}

function generateWords() {
	const container = document.getElementById('container');
	const targetSentenceElement = document.getElementById('targetSentence');

	// Select a random sentence
	const randomIndex = Math.floor(Math.random() * sentences.length);
	const sentence = sentences[randomIndex];

	// Display the target sentence
	//targetSentenceElement.textContent = `Match the sentence: ${sentence.join(' ')}`;


	container.innerHTML = '';

	const shuffledWords = [].concat.apply([], sentences); // Flatten the array
	shuffle(shuffledWords);


	//
	//	for (const word of shuffledWords) {
	//		const wordElement = document.createElement('div');
	//		wordElement.className = 'word';
	//		wordElement.draggable = true;
	//		wordElement.textContent = word;
	//		wordElement.id = `word-${word}`;
	//		wordElement.ondragstart = drag;
	//		container.appendChild(wordElement);
	//	}

	//	 Display the words of the selected sentence for the user to match

	for (const word of sentence) {
		const wordElement = document.createElement('div');
		wordElement.className = 'word';
		wordElement.draggable = true;
		wordElement.textContent = word;
		wordElement.id = `word-${word}`;
		wordElement.ondragstart = drag;
		container.appendChild(wordElement);
	}
}

function allowDrop(event) {
	event.preventDefault();
}

function drag(event) {
	const draggedElement = event.target;
	event.dataTransfer.setData('text', draggedElement.id);
}

function drop(event) {
	event.preventDefault();
	const data = event.dataTransfer.getData('text');
	const draggableElement = document.getElementById(data);
	const dropzone = event.target;

	if (dropzone.classList.contains('dropzone')) {
		dropzone.appendChild(draggableElement);
	}

	checkSentence();
}

function checkSentence() {
	const dropzone = document.getElementById('dropzone');
	const wordElements = dropzone.querySelectorAll('.word');
	const droppedWords = Array.from(wordElements).map(element => element.textContent.trim());
	const droppedSentence = droppedWords.join(' ');

	for (const sentence of sentences) {
		const joinedSentence = sentence.join(' ');
		if (droppedSentence === joinedSentence) {
			//alert('Congratulations!It matches!');
			document.getElementById("show").style.display = "block"
			playSuccessSound();
			changeDropzoneColor();
			generateWords(); // Reset and generate new words
			break;
		}
	}
}

function playSuccessSound() {
	const sound = new Howl({
		src: ['s.mp3'] // Replace with the path to your success sound file
	});

	sound.play();
}

function changeDropzoneColor() {
	const dropzone = document.getElementById('dropzone');
	dropzone.classList.add('match'); // Add a class to change the dropzone color
	setTimeout(() => {
		dropzone.classList.remove('match'); // Remove the class after a delay
	}, 1000); // Adjust the delay (in milliseconds) as needed
}

// Initial setup
generateWords();


// Add the refresh function
function refreshGame() {
	generateWords(); // Reset and generate new words
	const dropzone = document.getElementById('dropzone');
	dropzone.innerHTML = ''; // Clear the dropzone
	document.getElementById("show").style.display = "none"
}

// Initial setup
generateWords();
