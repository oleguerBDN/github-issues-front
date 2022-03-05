const ShortIssue = ({ id, title, author, authorUrl, onClick }) => (
  <div className="issue">
    <h2 className="issue__title" onClick={() => onClick(id)}>
      {title}
    </h2>
    <a className="issue__author" href={authorUrl}>
      {author}
    </a>
  </div>
);
export default ShortIssue;
