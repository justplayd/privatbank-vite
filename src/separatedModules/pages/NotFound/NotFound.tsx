import styles from './NotFound.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={styles.notfound}>
      <div className={styles.notfound__box}>
        <div className={styles.notfound__code}>404</div>

        <div className={styles.notfound__line}></div>

        <div className={styles.notfound__text}>
          <div className={styles.notfound__title}>Something went wrong</div>
          <div className={styles.notfound__descr}>
            Please check your connection and <a href={'/'}>Try again</a>
          </div>
        </div>
      </div>
    </div>
  );
};
