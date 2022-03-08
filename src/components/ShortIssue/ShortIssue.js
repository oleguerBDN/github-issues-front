import styles from "./ShortIssue.module.css";

const ShortIssue = ({ id, title, author, authorUrl, onClick }) => (
  <div className={styles.issue}>
    <h2 className={styles["issue__title"]} onClick={() => onClick(id)}>
      {title}
    </h2>
    <a className={styles["issue__author"]} href={authorUrl}>
      {author}
    </a>
  </div>
);
export default ShortIssue;
