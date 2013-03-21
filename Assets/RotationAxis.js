#pragma strict

var referenceTransform : Transform;

function Update() {
	var q = referenceTransform.localRotation;
	transform.localRotation = Quaternion.FromToRotation(Vector3.forward, Vector3(q.x, q.y, q.z).normalized);

}