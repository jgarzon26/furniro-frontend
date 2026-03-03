import PaginationButton from "./PaginationButton";

const PaginationSection = () => {
  return (
    <section className="self-center flex flex-row items-center gap-5 mt-5 mb-20">
      <PaginationButton>Prev</PaginationButton>
      <PaginationButton active>1</PaginationButton>
      <PaginationButton>2</PaginationButton>
      <PaginationButton>3</PaginationButton>
      <PaginationButton>Next</PaginationButton>
    </section>
  );
}

export default PaginationSection;