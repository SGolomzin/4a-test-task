import { Transition } from "react-transition-group";
import gsap from "gsap";

interface PriceTransitionProps {
	price: number;
	show: boolean;
}

export const PriceTransition = ({ price, show = true }: PriceTransitionProps) => {
	return (
		<Transition
			in={show}
			unmountOnExit
			//@ts-expect-error: Let's ignore a single compiler error like this unreachable code
			addEndListener={(_, done) => {
				if (!show) {
					gsap
						.timeline({ onComplete: done })
						.to(".price-transition",
							{ opacity: 0, height: 0, scale: 0, x: 10, y: -60, duration: 0.5, ease: "sine" }
						)
				}
			}}
		>
			<div className="price-transition">{price}₽</div>
		</Transition>
	)
}