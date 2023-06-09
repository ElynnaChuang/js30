import { useEffect, useRef, useState } from 'react';
import { LayoutCol1 } from '@/Layouts';
import { Select, Title, RangeInput } from '@/Components';
import styles from './styles.module.scss';

const synth = window.speechSynthesis;

// synth.onvoiceschanged not work in safari
const getVoiceData = () => {
  return new Promise(resolve => {
    const timer = setInterval(() => {
      if (synth.getVoices().length !== 0) {
        resolve(synth.getVoices());
        clearInterval(timer);
      }
    }, 100);
  });
};

const WordToSpeechPage = () => {
  const textRef = useRef(null);
  const [options, setOptions] = useState([]);
  const [voice, setVoice] = useState(null);
  const [params, setParams] = useState({ rate: 1, pitch: 1 });
  const [isSpeak, setIsSpeak] = useState(false);

  const msg = new SpeechSynthesisUtterance();
  msg.onend = () => setIsSpeak(false);

  const speak = () => {
    if (!textRef.current.value) return;

    msg.text = textRef.current.value;
    msg.voice = voice;
    msg.rate = params.rate;
    msg.pitch = params.pitch;

    setIsSpeak(true);
    synth.speak(msg);
  };

  const stopSpeak = () => {
    synth.cancel();
    setIsSpeak(false);
  };

  const handleChangeVoice = value => {
    if (!options.length) return;

    synth.cancel();
    setIsSpeak(false);
    setVoice(options.find(option => option.name === value));
  };

  useEffect(() => {
    const setVoiceOptions = async () => {
      const originData = await getVoiceData();
      const finalData = originData
        .filter(el => !el.name.toLowerCase().includes('google'))
        .map((el, i) => {
          el.key = i;
          el.value = el.name;
          el.optionName = `${el.name} ${el.lang}`;
          return el;
        });

      setOptions(finalData);
    };

    setVoiceOptions();
  }, []);

  return (
    <LayoutCol1 baseClassName={styles.page}>
      <div className={styles.card}>
        <Title title='Word to Speech' titleClassName={styles.card_header} size='s' />
        <div className={styles.card_body}>
          <Select
            name='voice'
            options={options}
            selectClass={styles.select}
            onChange={handleChangeVoice}
          />
          <div className={styles.ranges}>
            <RangeInput
              min={0.1}
              max={3}
              step={0.1}
              initialValue={params.rate}
              label='Rate'
              name='rate'
              isDisabled={isSpeak}
              handleCgange={value => setParams(prev => ({ ...prev, rate: value }))}
            />
            <RangeInput
              min={0}
              max={2}
              step={0.1}
              initialValue={params.pitch}
              label='Pitch'
              name='pitch'
              isDisabled={isSpeak}
              handleCgange={value => setParams(prev => ({ ...prev, pitch: value }))}
            />
          </div>
          <div className={styles.buttons}>
            <button disabled={!options.length || !isSpeak} onClick={stopSpeak}>
              Stop
            </button>
            <button disabled={!options.length || isSpeak} onClick={speak}>
              Speak
            </button>
          </div>
          <Textarea
            textRef={textRef}
            name='text'
            initialValue='Hello'
            isDisabled={isSpeak}
          />
        </div>
      </div>
    </LayoutCol1>
  );
};

export default WordToSpeechPage;

const Textarea = ({ textRef, name, rows, initialValue, onChange, isDisabled }) => {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const handleOnChange = e => {
    setCurrentValue(e.target.value);
    onChange?.(e.target.value);
  };
  return (
    <textarea
      ref={textRef}
      name={name}
      rows={rows}
      className={styles.textarea}
      value={currentValue}
      onChange={handleOnChange}
      disabled={isDisabled}
    />
  );
};
