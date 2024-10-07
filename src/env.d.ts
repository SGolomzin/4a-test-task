/// <reference path="../.astro/types.d.ts" />
interface Window {
	gsap: typeof import("gsap").gsap;
	ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
}