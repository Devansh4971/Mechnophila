"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

// Type for the images array (array of strings)
const images: string[] = [
    "/inauguration/1.jpg",
    "/inauguration/2.jpg",
    "/inauguration/3.jpg",
    "/inauguration/4.jpg",
    "/kyd/1.jpg",
    "/kyd/2.jpg",
    "/kyd/3.jpg",
    "/kyd/4.jpg",
    "/kyd/5.jpg",
    "/kyd/6.jpg",
    "/kyd/7.jpg",
    "/kyd/8.jpg",
];

export function ParallaxScrollDemo() {
    return <ParallaxScroll images={images} />;
}
