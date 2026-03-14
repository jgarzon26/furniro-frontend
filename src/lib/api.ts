type ShopProps = {
  currentItems: number[];
  totalPages: number;
  count: number;
}

export const fetchData = async (currentPage: number, itemsPerPage: number) => {
  //? This is temporary and serves as a guide
  const tempData = await (new Promise<ShopProps>(
    (res) => {
      setTimeout(() => {
        const data = Array.from({ length: 100 }).map((_, index) => index + 1);
        const totalPages = Math.ceil(data.length / itemsPerPage);
        //* In backend, we should use database limit
        const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
        res({
          currentItems,
          totalPages,
          count: data.length,
        });
      }, 3000);
    },
  ));

  return tempData;
}