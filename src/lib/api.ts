'use server';

export const fetchData = async () => {
  //? This is temporary and serves as a guide
  const tempData = await (new Promise<number[]>(
    (res) => {
      setTimeout(() => {
        res(Array.from({ length: 100 }).map((_, index) => index + 1));
      }, 3000);
    },
  ));

  return tempData;
}