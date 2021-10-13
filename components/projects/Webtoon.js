import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "styles/projects/Webtoon.module.scss";
import {debounce} from "lodash";

export default function Webtoon() {
  const images = [
    { id: 1, src: "/images/webtoon/banner-1.png" },
    { id: 2, src: "/images/webtoon/banner-2.png" },
    { id: 3, src: "/images/webtoon/banner-3.png" },
    { id: 4, src: "/images/webtoon/banner-4.png" },
    { id: 5, src: "/images/webtoon/banner-5.png" },
  ];
  const DELAY = 3000;
  const [width, setWidth] = useState(0);

  let bannerRef = useRef(null);

  useEffect(() => {
    const formatWidth = debounce(() => {
      if (bannerRef.current != null ) {
        let sourceNode = bannerRef.current.getBoundingClientRect();
        let sourceWidth = sourceNode.width
        setWidth(sourceWidth)
      }
    }, 100)
    window.addEventListener('resize', formatWidth);
    formatWidth();
    return (() => window.removeEventListener('resize', formatWidth)
    )
  },[]);

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
          width={828}
          height={453}
        />
      </div>
    );
  });

  return (
    <>
      <nav
        style={{
          background: "black",
          height: width/15,
          paddingLeft: width/100,
        }}
        className={styles.webtoon_nav}
      >
        <div
          className={styles.logo}
          style={{
            background: "black",
            width: width/15,
            height: width/15,
          }}
        >
          <Image
            src="/images/webtoon/logo.png"
            width={width/15}
            height={width/15}
          />
        </div>
      </nav>
      <div
        ref={bannerRef}
        className={styles.main_banner_wrap}
        style={{
          height: width/1.7,
        }}
      >
        <div
          className={styles.main_banner_inner}
        >
          {mainBannerSlideshow}
        </div>
      </div>
    </>
  );
}
