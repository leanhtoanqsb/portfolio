import { useState, useEffect } from 'react'
import { debounce } from 'lodash'

export default function useRect() {
  const [width, setWidth] = useState(0);

  const bannerRef = {current: null};
  const setRef = function setRef(node) {bannerRef.current = node}

  const format = debounce((node) => {
    if (node != null ) {
      let sourceNode = node.getBoundingClientRect();
      let sourceWidth = sourceNode.width
      setWidth(() => sourceWidth)
    }
  }, 100)

  useEffect(() => {
    if (bannerRef.current != null ) {
      bannerRef.current.addEventListener('resize', format(bannerRef.current));
      return (() => bannerRef.current.removeEventListener('resize', format(bannerRef.current))
      )
    }
  },[bannerRef.current]);

  return [width, setRef];
}
