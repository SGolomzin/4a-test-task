import { Transition } from "react-transition-group";
import { BadgeIcon } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLProps<HTMLDivElement> {
	percent: number;
	show: boolean;
}

export const Badge = ({ percent, show = true, className }: BadgeProps) => (
	<Transition
		in={show}
		unmountOnExit
		// @ts-expect-error: Let's ignore a single compiler error like this unreachable code
		addEndListener={(_, done) => {
			if (!show) {
				gsap
					.timeline({ onComplete: done })
					.to(".badge", { opacity: 0, rotate: -180, scale: 0, duration: 0.7 })
			}
		}}
	>
		<div className={cn("badge", className)}>
				<BadgeIcon className="absolute h-full w-full text-[#FD4D35] fill-[#FD4D35] top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4" />
				<p className="absolute text-white top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">{`-${percent}%`}</p>
		</div>
	</Transition>

);
