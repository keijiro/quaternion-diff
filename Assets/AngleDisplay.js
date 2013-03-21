#pragma strict

var referenceTransform : Transform;
var style : GUIStyle;

function OnGUI() {
	var angle = Quaternion.Angle(referenceTransform.localRotation, transform.localRotation);
	GUI.Label(Rect(0, 0, Screen.width, Screen.height), "Angle = " + angle, style);
}
