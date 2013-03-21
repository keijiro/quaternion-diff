#pragma strict

var text = "";
var style : GUIStyle;

function OnGUI() {
	GUI.Label(Rect(0, 0, Screen.width, Screen.height), text, style);

}
