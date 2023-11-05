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
        "Ready, Set, Go!",
        "I'm on the move!",
        "Wheee!",
        "Catch me if you can!",
        "Follow me!",
        "Where to next?",
        "Going places!",
        "Adios amigos!",
        "Onward and upward!",
        "I'm off!",
        "Choo choo!",
        "Into the unknown!",
        "Off to new adventures!",
        "I'm free!",
        "Over the rainbow!",
        "Ta-da!",
        "Let's dance!",
        "To infinity and beyond!",
        "Geronimo!",
        "Hold my drink!",
        "See ya later!",
        "Here I go again!",
        "Whoosh!",
        "Off like a rocket!",
        "Going, going, gone!",
        "Ciao for now!",
        "Hello, world!",
        "Zoom zoom!",
        "I'm outta here!",
        "Blast off!",
        "Just keep swimming!",
        "To the stars and back!",
        "Zippity doo dah!",
        "Bonjour!",
        "Cheers, mate!",
        "That's the way the cookie crumbles!",
        "Hasta la vista, baby!",
        "Oh là là!",
        "Away we go!",
        "Let's roll!",
        "To the moon and back!",
        "Farewell, folks!",
        "Shazam!",
        "Up, up, and away!",
        "Let's make like a banana and split!",
        "Later, alligator!",
        "To the ends of the earth!",
        "Buh-bye!"
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