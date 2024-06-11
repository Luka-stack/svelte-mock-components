import { cubicOut } from 'svelte/easing';
import { styleToString } from '@melt-ui/svelte/internal/helpers';

type FlyAndScaleOptions = {
	y: number;
	start: number;
	duration?: number;
};

export function flyAndScale(node: HTMLElement, options: FlyAndScaleOptions) {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	return {
		delay: 0,
		easing: cubicOut,
		duration: options.duration || 150,
		css: (t: number) => {
			const y = scaleConversion(t, [0, 1], [options.y, 0]);
			const scale = scaleConversion(t, [0, 1], [options.start, 1]);

			return styleToString({
				transform: `${transform} translate3d(0, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		}
	};
}

function scaleConversion(tick: number, scaleA: [number, number], scaleB: [number, number]): number {
	const [minA, maxA] = scaleA;
	const [minB, maxB] = scaleB;

	const percentage = (tick - minA) / (maxA - minA);
	return percentage * (maxB - minB) + minB;
}
