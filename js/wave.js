

var width, height, center;
var points = 10;
var smooth = true;

var mousePos = view.center / 2;
var pathHeight = mousePos.y;

var path = new Path();
var path2 = new Path();
var path3 = new Path();

path.fillColor = 'black';
path2.fillColor = 'pink';
path3.fillColor = 'orange';

initializePath(path);
initializePath(path2);
initializePath(path3);

function initializePath(p) {
	center = view.center;
	width = view.size.width;

	p.fullySelected = true;
}

function onFrame(event) {
	pathHeight += (center.y - mousePos.y - pathHeight) / 10;
	path2.segments[i].point.y = yPos;
}

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

function onMouseDown(event) {
	// smooth = !smooth;
	// if (!smooth) {
	}
}

function onResize(event) {
	initializePath(path);
	initializePath(path2);
	initializePath(path3);
}
