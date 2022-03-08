import dompurify from "dompurify";
import styles from "./Comment.module.css";

const Comment = ({ id, body, author, authorUrl }) => {
  return (
    <div className={styles.comment}>
      <a className={styles["comment__author"]} href={authorUrl}>
        {author}
      </a>
      <div className={"markdown-body " + styles["comment__body"]}>
        <div dangerouslySetInnerHTML={{ __html: dompurify.sanitize(body) }} />
      </div>
    </div>
  );
};

export default Comment;
