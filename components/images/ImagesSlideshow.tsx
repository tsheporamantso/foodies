"use client";

import { useEffect, useState } from "react";
import classes from "./image-slideshow.module.css";
import { nanoid } from "nanoid";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";
import Image from "next/image";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger", id: nanoid() },
  { image: curryImg, alt: "A delicious, spicy curry", id: nanoid() },
  { image: dumplingsImg, alt: "Steamed dumplings", id: nanoid() },
  { image: macncheeseImg, alt: "Mac and cheese", id: nanoid() },
  { image: pizzaImg, alt: "A delicious pizza", id: nanoid() },
  { image: schnitzelImg, alt: "A delicious schnitzel", id: nanoid() },
  { image: tomatoSaladImg, alt: "A delicious tomato salad", id: nanoid() },
];

const ImagesSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex: number): number => {
        return prevIndex < images.length - 1 ? prevIndex + 1 : 0;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map(({ image, id, alt }, index) => {
        return (
          <Image
            key={id}
            src={image}
            alt={alt}
            className={index === currentImageIndex ? classes.active : ""}
          />
        );
      })}
    </div>
  );
};

export default ImagesSlideshow;
