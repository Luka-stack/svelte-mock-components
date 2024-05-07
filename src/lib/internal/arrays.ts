export function arraysAreEqual<T extends Array<unknown>>(arrA: T, arrB: T): boolean {
	if (arrA.length !== arrB.length) {
		return false;
	}

	for (let i = 0; i < arrA.length; i++) {
		if (arrA[i] !== arrB[i]) {
			return false;
		}
	}

	return true;
}
