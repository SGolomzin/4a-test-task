import styles from "@/components/Badge.module.css";
import { Transition } from "react-transition-group";
import { BadgeIcon } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export const Badge = ({ percent, show = true }: { percent: number, show: boolean }) => (
	<Transition
		in={show}
		unmountOnExit
		addEndListener={(_, done) => {
			if (!show) {
				gsap
					.timeline({ onComplete: done })
					.to(".badge", { opacity: 0, rotate: -180, scale: 0, duration: 0.5 })
			}
		}}
	>
		<div className={cn("badge", styles.badge)}>
			<BadgeIcon className="h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] text-[#FD4D35] fill-[#FD4D35]" />
			<p className="font-medium text-white">{`-${percent}%`}</p>
		</div>
	</Transition>

);
