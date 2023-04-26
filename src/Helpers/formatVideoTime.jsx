const padZero = val => {
  return val.toString().padStart(2, '0');
};

export const formatTime = sec => {
  if (Number.isNaN(sec) || !sec) return '00:00';

  const date = new Date(sec * 1000); // sec * 1000 變成毫秒，Date物件基於UTC 1970 年 1 月 1 日開始的毫秒數值來儲存時間

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  if (hours) return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  return `${padZero(minutes)}:${padZero(seconds)}`;
};
