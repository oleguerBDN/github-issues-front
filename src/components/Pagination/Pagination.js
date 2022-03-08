const Pagination = ({ onClickPrevious, onClickNext, pageInfo }) => {
  return (
    <>
      <button onClick={onClickPrevious} disabled={!pageInfo.hasPreviousPage}>
        Previous
      </button>
      <button onClick={onClickNext} disabled={!pageInfo.hasNextPage}>
        Next
      </button>
    </>
  );
};

export default Pagination;
