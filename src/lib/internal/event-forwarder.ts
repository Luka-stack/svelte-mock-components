export function eventForwarder<E extends HTMLElement, F extends (arg?: Event) => void>(
	node: E,
	props: Record<string, F>
) {
	const listeners: Array<[string, F]> = Object.entries(props)
		.filter(([key]) => key.startsWith('on-'))
		.map(([key, callback]) => {
			const event = key.substring(3);
			node.addEventListener(event, callback);

			return [event, callback];
		});

	return {
		destroy() {
			listeners.forEach(([event, listener]) => {
				node.removeEventListener(event, listener);
			});
		}
	};
}
