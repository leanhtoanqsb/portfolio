import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "styles/projects/Webtoon.module.scss";
import {debounce} from "lodash";

export default function Webtoon() {
  const images = [
    { id: 1, src: "/images/webtoon/banner-1.png", alt: "banner1" },
    { id: 2, src: "/images/webtoon/banner-2.png", alt: "banner2" },
    { id: 3, src: "/images/webtoon/banner-3.png", alt: "banner3" },
    { id: 4, src: "/images/webtoon/banner-4.png", alt: "banner4" },
    { id: 5, src: "/images/webtoon/banner-5.png", alt: "banner5" },
  ];
  const DELAY = 3000;
  const [width, setWidth] = useState(0);

  const [index, setIndex] = useState([1, 0]);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => {
        return [
          prevIndex[0] === images.length ? 1 : prevIndex[0] + 1,
          prevIndex[0],
        ];
      });
    }, DELAY);
  }, [index, images.length]);
  /*  */
  const mainBannerSlideshow = images.map((image) => {
    return (
      <div
        key={image.id}
        className={styles.banner_big_inner}
        style={{
          opacity: image.id === index[0] ? 1 : 0,
        }}
      >
        <Image
          className={styles.image}
          src={image.src}
          alt={image.alt}
          width={828}
          height={453}
        />
      </div>
    );
  });

  return (
    <>
      <div className={styles.root}>
        <div className={styles.ratio} />
        <div className={styles.slideshow}>
          <nav className={styles.webtoon_nav}>
            <div className={styles.logo_container}>
              <Image
                className={styles.logo}
                src="/images/webtoon/logo.png"
                layout='fill'
                objectFit='contain'
              />
            </div>
          </nav>
          <div className={styles.main_banner_wrap}>
            <div className={styles.main_banner_inner}>
              {mainBannerSlideshow}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
