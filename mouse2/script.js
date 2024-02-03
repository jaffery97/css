document.addEventListener("DOMContentLoaded", () => {
	const canvas = document.getElementById("drawingCanvas");
	const ctx = canvas.getContext("2d");
	const points = [];

	const tasks = [
		{
			description: "Draw a square",
			points: [{
				x: 100,
				y: 100
			}, {
				x: 200,
				y: 100
			}, {
				x: 200,
				y: 200
			}, {
				x: 100,
				y: 200
			}]
		},
		{
			description: "Draw a triangle",
			points: [{
				x: 300,
				y: 100
			}, {
				x: 400,
				y: 100
			}, {
				x: 350,
				y: 200
			}]
		},
        // Add more tasks as needed
    ];

	let currentTaskIndex = -1;

	function getRandomTask() {
		const index = Math.floor(Math.random() * tasks.length);
		return tasks[index];
	}

	function startNewTask() {
		points.length = 0; // Clear the points array
		currentTaskIndex = tasks.indexOf(getRandomTask());
		alert("Your task: " + tasks[currentTaskIndex].description);
	}

	startNewTask();

	canvas.width = 800;
	canvas.height = 600;

	canvas.addEventListener("mousedown", handleMouseDown);

	function handleMouseDown(event) {
		const rect = canvas.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		points.push({
			x,
			y
		});
		draw();

		if (checkMatch()) {
			alert("Congratulations! You've matched the task.");
			startNewTask();
		}
	}

	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Draw lines between points
		ctx.strokeStyle = "#ff0000";
		ctx.lineWidth = 2;
		for (let i = 0; i < points.length - 1; i++) {
			ctx.beginPath();
			ctx.moveTo(points[i].x, points[i].y);
			ctx.lineTo(points[i + 1].x, points[i + 1].y);
			ctx.stroke();
		}

		// Draw points
		ctx.fillStyle = "#ff0000";
		for (let point of points) {
			ctx.beginPath();
			ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
			ctx.fill();
		}
	}

	function checkMatch() {
		const taskPoints = tasks[currentTaskIndex].points;
		if (points.length !== taskPoints.length) {
			return false;
		}

		for (let i = 0; i < points.length; i++) {
			if (points[i].x !== taskPoints[i].x || points[i].y !== taskPoints[i].y) {
				return false;
			}
		}

		return true;
	}
});
