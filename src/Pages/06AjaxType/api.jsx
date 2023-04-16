const dataUrl =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

export const getData = async () => {
  let dataArray = [];
  try {
    const res = await fetch(dataUrl);
    const data = await res.json();
    dataArray = data.map((el, i) => ({ id: i, ...el }));
  } catch (err) {
    return dataArray;
  }
  return dataArray;
};
