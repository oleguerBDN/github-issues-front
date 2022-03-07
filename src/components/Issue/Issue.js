import dompurify from "dompurify";

const Issue = ({ title, body, state, author, authorUrl }) => (
  <div className="issue">
    <h2 className="issue__title">{title}</h2>
    <span className="issue__state">{state}</span>
    <a className="issue__author" href={authorUrl}>
      {author}
    </a>
    <div className="markdown-body">
      <div dangerouslySetInnerHTML={{ __html: dompurify.sanitize(body) }} />
    </div>
  </div>
);

export default Issue;
