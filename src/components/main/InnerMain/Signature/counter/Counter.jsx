import { useEffect, useState } from "react";
import { animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Counter.module.css"

const CountUpOnView = ({ from = 0, to = 512, duration = 1.5 }) => {
  const [count, setCount] = useState(from);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(from, to, {
      duration,
      ease: [0.1, 0.8, 0.1, 1],
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className={styles.counttext}>
      #{count}
    </span>
  );
};

export default CountUpOnView;
