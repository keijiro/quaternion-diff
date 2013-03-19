#pragma strict

var transform1 : Transform;
var transform2 : Transform;

private var diff = 0.0;

function Update() {
	diff = Quaternion.Dot(transform1.localRotation, transform2.localRotation);
}

function OnGUI() {
	GUI.Label(Rect(0, 0, Screen.width, Screen.height), "diff = " + (diff * 100.0) + "%");
}
