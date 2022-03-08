import dompurify from "dompurify";
import styles from "./Issue.module.css";

const Issue = ({ title, body, state, author, authorUrl }) => (
  <div className={styles.issue}>
    <h2 className={styles["issue__title"]}>{title}</h2>
    <span
      className={
        state === "OPEN"
          ? styles["issue__state--open"]
          : styles["issue__state--closed"]
      }
    >
      {state}
    </span>
    <a className={styles["issue__author"]} href={authorUrl}>
      {author}
    </a>
    <div className={"markdown-body " + styles["issue__body"]}>
      <div dangerouslySetInnerHTML={{ __html: dompurify.sanitize(body) }} />
    </div>
  </div>
);

export default Issue;
