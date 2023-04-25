import { useEffect, useState } from 'react';
import { Key } from '@/Components/index';
import {
  clap,
  hihat,
  kick,
  openhat,
  boom,
  ride,
  snare,
  tom,
  tink,
} from '@/Assets/01Sounds';
import styles from './styles.module.scss';

const keys = [
  { keyNum: 65, keyName: 'a', soundTag: 'clap' },
  { keyNum: 83, keyName: 's', soundTag: 'hihat' },
  { keyNum: 68, keyName: 'd', soundTag: 'kick' },
  { keyNum: 70, keyName: 'f', soundTag: 'openhat' },
  { keyNum: 71, keyName: 'g', soundTag: 'boom' },
  { keyNum: 72, keyName: 'h', soundTag: 'ride' },
  { keyNum: 74, keyName: 'j', soundTag: 'snare' },
  { keyNum: 75, keyName: 'k', soundTag: 'tom' },
  { keyNum: 76, keyName: 'l', soundTag: 'tink' },
];

const sounds = {
  a: new Audio(clap),
  s: new Audio(hihat),
  d: new Audio(kick),
  f: new Audio(openhat),
  g: new Audio(boom),
  h: new Audio(ride),
  j: new Audio(snare),
  k: new Audio(tom),
  l: new Audio(tink),
};

export const DrumPage = () => {
  const [currentKey, setCurrentKey] = useState('');

  const handlePlaySound = key => {
    if (!sounds[key]) return;
    sounds[key].currentTime = 0;
    sounds[key].play();
  };

  useEffect(() => {
    window.addEventListener('keydown', e => {
      const locationArr = window.location.pathname.split('/');
      const url = locationArr[locationArr.length - 1];

      // 避免在其他頁面觸發
      if (url === '01') {
        handlePlaySound(e.key);
        setCurrentKey(e.key);
        setTimeout(() => setCurrentKey(''), 100);
      }
    });
  }, []);

  return (
    <section className={styles.page}>
      <div className={styles.backdrop} />
      <div className={styles.container}>
        <h1 className={styles.caption}>
          Press your keyboard or tap the keys on the screen!
        </h1>
        <div className={styles.keys}>
          {keys.map(({ keyNum, keyName, soundTag }) => (
            <Key
              key={keyNum}
              keyName={keyName}
              soundTag={soundTag}
              onClick={() => handlePlaySound(keyName)}
              currentKey={currentKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
