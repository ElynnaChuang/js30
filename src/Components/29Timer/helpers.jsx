function secToMin(secLeft) {
  const min = Math.floor(secLeft / 60);
  const sec = secLeft % 60;
  return { min, sec };
}

function padStart(num) {
  return num >= 10 ? `${num}` : `0${num}`;
}

export { secToMin, padStart };
