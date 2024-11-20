"use client"
import { useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import Link from 'next/link'
import Appbar from '../components/appbar';
import { GridBackgroundDemo } from "../components/ui/dot-background"
import App from "next/app"
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { ParallaxScrollDemo } from "./parallax-flow";



export default function Gallery() {
    return (
        <div>
            <Appbar></Appbar>
            <ParallaxScrollDemo></ParallaxScrollDemo>
        </div>
    )
}
