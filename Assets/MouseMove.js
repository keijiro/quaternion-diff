#pragma strict

private var rotateFrom = Quaternion.identity;
private var startPoint = Vector3.zero;

private function GetProjectedPoint() {
	return Camera.main.ScreenToWorldPoint(Vector3(Input.mousePosition.x, Input.mousePosition.y, 9));
}

function Update() {
	if (Input.GetMouseButtonDown(0)) {
		rotateFrom = transform.localRotation;
		startPoint = GetProjectedPoint();
	} else if (Input.GetMouseButton(0)) {
		transform.localRotation = Quaternion.FromToRotation(startPoint, GetProjectedPoint()) * rotateFrom;
	}
}
