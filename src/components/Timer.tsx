"use client";

import styles from "./Timer.module.css"
import { cn } from "@/lib/utils";

import React, { useRef, useEffect, useState } from "react";
import { useDiscountStore } from "@/store/store.ts";

import gsap from "gsap";

interface TimerProps {
	duration: number;
	warningDuration: number;
}

export const Timer = ({ duration, warningDuration }: TimerProps) => {
	const [timer, setTimer] = useState(duration);
	const [isCompleted, setIsCompleted] = useState(false);
	const warning = timer <= warningDuration;

	const { setDiscount } = useDiscountStore();

	const tlRef = useRef<GSAPTween | null>(null);

	// GSAP animations
	useEffect(() => {
		if (warning && !isCompleted) {
			// Start or continue the animation
			tlRef.current = gsap.to(".timer--warning", {
				repeat: -1,
				opacity: 0.5,
				scale: 1.1,
				duration: 0.5,
				yoyo: true,
				ease: "power3.in"
			});
		}

		return () => {
			if (tlRef.current) {
				tlRef.current.kill();
			}
		};
	}, [warning, isCompleted]);

	useEffect(() => {
		if (timer <= 0) {
			setIsCompleted(true);
			setDiscount(false);
			return;
		}

		const interval = setInterval(() => setTimer((prev) => --prev), 1000)

		return () => clearInterval(interval);
	}, [timer, setDiscount, setIsCompleted]);

	const minutes = Math.trunc(timer / 60),
				seconds = Math.trunc(timer % 60);

	return (
		<div className={cn(styles.timer,
				"timer text-[#01B9C5] gap-x-3 lg:gap-x-2",
				{ "timer--warning will-change-transform text-[#FD4D35]": warning },
		)}>
			<div className="contents timer--clock leading-none text-[40px]/none lg:text-6xl/none">
				<span className={styles.timer__minutes}>
					{minutes < 10 ? "0" + minutes : String(minutes)}
				</span>
				<span className={styles.timer__seconds}>
					{seconds < 10 ? "0" + seconds : String(seconds)}
				</span>
			</div>
			<span className={cn("text-lg lg:text-xl font-bold", styles.timer__separator)}>:</span>
			<div className="contents text-sm leading-none lg:text-base">
				<p className={styles["timer__minutes-label"]}>минут</p>
				<p className={styles["timer__seconds-label"]}>секунд</p>
			</div>
		</div>
	)
}