import dompurify from "dompurify";

const Comment = ({ id, body, author, authorUrl }) => {
  return (
    <div className="comment">
      <a className="comment__author" href={authorUrl}>
        {author}
      </a>
      <div className="markdown-body">
        <div dangerouslySetInnerHTML={{ __html: dompurify.sanitize(body) }} />
      </div>
    </div>
  );
};

export default Comment;
