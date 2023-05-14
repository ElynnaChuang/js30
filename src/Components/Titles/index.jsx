import styles from './styles.module.scss';

const Title = ({ title, subtitle, titleColor, titleClassName, size }) => {
  let titleSize = styles.title_L;
  if (size === 'm') titleSize = styles.title_M;
  if (size === 's') titleSize = styles.title_S;

  return (
    <div className={`${styles.title_container} ${titleClassName}`}>
      <h1 className={titleSize} style={{ color: titleColor }}>
        {title}
      </h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export { Title };
