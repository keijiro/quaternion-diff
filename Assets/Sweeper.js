#pragma strict

var transform1 : Transform;
var transform2 : Transform;
var ratio = 0.0;

function Update() {
	transform.localRotation =
		Quaternion.Slerp(transform1.localRotation, transform2.localRotation, ratio);
}
