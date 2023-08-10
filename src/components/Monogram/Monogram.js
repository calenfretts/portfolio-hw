import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="m18 11h-11.5v-2.6h11.5zm0 9h-7.6v-2.6h7.6zm-8.9 0l-2.6-2.6v-5.1h2.6zm13.1 0h-2.6v-2.6h2.6zm13.1-8.9h-11.5v-2.7h11.5zm-2.5 4.5h-5.1v-2.6h5.1zm-6.4 4.5h-2.6v-7.1h2.6zm13.1 0h-2.6v-2.6h2.6z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
