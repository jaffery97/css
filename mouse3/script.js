   const target = document.getElementById('target');
   const result = document.getElementById('result');
   const time = document.getElementById('time');
   const clicksCount = document.getElementById('clicks');
   const cpsDisplay = document.getElementById('cps');
   let clicks = 0;
   let startTime;
   let endTime;
   let intervals = 0;

   function startTimer() {
   	startTime = new Date().getTime();
   }

   function endTimer() {
   	endTime = new Date().getTime();
   	const timeTaken = (endTime - startTime) / 1000; // Convert milliseconds to seconds
   	time.textContent = timeTaken;
   	clicks++;
   	clicksCount.textContent = clicks;
   	const seconds = timeTaken;
   	const cps = clicks / seconds;
   	cpsDisplay.textContent = cps.toFixed(2);
   	result.style.display = 'block';
   	if (clicks % 5 === 0) {
   		moveTarget();
   		intervals++;
   	}
   }
   target.addEventListener('click', () => {
   	endTimer();
   });
   target.addEventListener('mouseover', () => {
   	startTimer();
   });

   function moveTarget() {
   	const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
   	const randomY = Math.floor(Math.random() * (window.innerHeight - 100));
   	const funnyQuotes = [
	  "Ready, Set!"
	  , "Wheee!"
	  , "Catch me!"
	  , "Follow me!"
	  , "Where to?"
	  , "Going places!"
	  , "Adios amigos!"
	  , "Onward upward!"
	  , "I'm off!"
	  , "Choo choo!"
	  , "Into unknown!"
	  , "Off adventures!"
	  , "I'm free!"
	  , "Over rainbow!"
	  , "Ta-da!"
	  , "Let's dance!"
	  , "Infinity beyond!"
	  , "Geronimo!"
	  , "Hold drink!"
	  , "See later!"
	  , "Here go!"
	  , "Whoosh!"
	  , "Like rocket!"
	  , "Going, gone!"
	  , "Ciao now!"
	  , "Hello world!"
	  , "Zoom zoom!"
	  , "Outta here!"
	  , "Blast off!"
	  , "Just swimming!"
	  , "Stars back!"
	  , "Zippity dah!"
	  , "Bonjour!"
	  , "Cheers, mate!"
	  , "That's way!"
	  , "Hasta baby!"
	  , "Oh là!"
	  , "Away go!"
	  , "Let's roll!"
	  , "Moon back!"
	  , "Farewell folks!"
	  , "Shazam!"
	  , "Up away!"
	  , "Make banana!"
	  , "Later alligator!"
	  , "Ends earth!"
	  , "Buh-bye!"
	];
   	const randomQuote = funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)];
   	target.textContent = randomQuote;
   	target.style.left = `${randomX}px`;
   	target.style.top = `${randomY}px`;
   }
   // Disable right-click
   document.addEventListener('contextmenu', function (e) {
   	e.preventDefault();
   });
   // Disable text selection
   document.addEventListener('selectstart', function (e) {
   	e.preventDefault();
   });