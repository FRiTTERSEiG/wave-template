

// 3 waves - black, pink & orange

var width, height, center;
var points = 10;
var smooth = true;
var mousePos = view.center / 2;
var pathHeight = mousePos.y;

var path = new Path();
var path2 = new Path();
var path3 = new Path();

path.fillColor = 'FB393A';
path2.fillColor = 'pink';
path3.fillColor = 'orange';

initializePath(path);
initializePath(path2);
initializePath(path3);

// Pass path variable to intialise
function initializePath(p) {
	center = view.center;
	width = view.size.width;
	height = view.size.height / 2;
	p.segments = [];
	p.add(view.bounds.bottomLeft);
	for (var i = 1; i < points; i++) {
		var point = new Point(width / points * i, center.y);
		p.add(point);
	}
	p.add(view.bounds.bottomRight);
	p.fullySelected = true;
}

// Called by Paper.js on each frame
// THis is where each wave is told to move differently
function onFrame(event) {
	pathHeight += (center.y - mousePos.y - pathHeight) / 10;

	// Path
	for (var i = 1; i < points; i++) {
		var sinSeed = event.count + (i + i % 10) * 100;
		var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
		var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
		path.segments[i].point.y = yPos;
	}

	// Path 2
	for (var i = 1; i < points; i++) {
		var sinSeed = event.count + (i + i % 20) * 200;
		var sinHeight = Math.sin(sinSeed / 300) * pathHeight;
		var yPos = Math.sin(sinSeed / 200) * sinHeight + height;
		path2.segments[i].point.y = yPos;
	}

	// Path 3
	for (var i = 1; i < points; i++) {
		var sinSeed = event.count + (i + i % 5) * 50;
		var sinHeight = Math.sin(sinSeed / 100) * pathHeight;
		var yPos = Math.sin(sinSeed / 50) * sinHeight + height;
		path3.segments[i].point.y = yPos;
	}

	if (smooth)
		path.smooth({ type: 'continuous' });
		path2.smooth({ type: 'continuous' });
		path3.smooth({ type: 'continuous' });
}

function onMouseMove(event) {
	mousePos = event.point;
}

// Called by Paper.js on mouse move
function onMouseDown(event) {
	// smooth = !smooth;
	// if (!smooth) {
	// 	// If smooth has been turned off, we need to reset
	// 	// the handles of the path:
	// 	for (var i = 0, l = path.segments.length; i < l; i++) {
	// 		var segment = path.segments[i];
	// 		segment.handleIn = segment.handleOut = null;
	// 	}
	// }
}

// Called by Paper.js on resize
// Reposition the path whenever the window is resized:
function onResize(event) {
	initializePath(path);
	initializePath(path2);
	initializePath(path3);
}
