import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles.module.scss';

const languages = [
  { value: 'en-US', name: 'English(US)' },
  { value: 'zh-CN', name: '中文' },
  { value: 'ja', name: '日本語' },
];

const SpeechRecognitionPage = () => {
  const allWords = useRef([]);
  const scrollDivRef = useRef(null);
  const [transcript, setTranscript] = useState([]);
  const [recordStatus, setRecordStatus] = useState(false);
  const [startSpeak, setStartSpeak] = useState(false);
  const [language, setLanguage] = useState(languages[0].value);
  const {
    resetTranscript,
    listening,
    finalTranscript,
    interimTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    console.error(
      'Your browser does not support speech recognition software! Try Chrome desktop, maybe?',
    );
    return (
      <p>
        Your browser does not support speech recognition software! Try Chrome desktop,
        maybe?
      </p>
    );
  }

  const handleStart = () => {
    setRecordStatus(true);
    SpeechRecognition.startListening({ continuous: true, language });
  };
  const handleStop = () => {
    setRecordStatus(false);
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    setTranscript([]);
    resetTranscript();
    setStartSpeak(false);
  };

  const handleCopy = () => console.log(transcript);

  useEffect(() => {
    if (interimTranscript || finalTranscript) {
      setStartSpeak(true);
    }

    if (interimTranscript) {
      allWords.current.push(interimTranscript);
      const { scrollHeight } = scrollDivRef.current;

      scrollDivRef.current.scrollTop = scrollHeight;
    }

    if (!interimTranscript) {
      const finalIndex = allWords.current.length - 1;
      const finalText = allWords.current?.[finalIndex];
      setTranscript(prev => [...prev, { id: uuidv4(), text: finalText }]);
      allWords.current = [];
    }
  }, [interimTranscript]);

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.controls}>
          <div className={styles.controls_status}>
            <p>
              Microphone<span>{listening ? 'on' : 'off'}</span>
            </p>
            <p>
              Language
              <Select
                onChange={setLanguage}
                isDisable={recordStatus}
                options={languages}
              />
            </p>
          </div>
          <div className={styles.controls_buttons}>
            <Button
              btnStyle='default_btn'
              text='Start'
              isActive={recordStatus}
              onClick={handleStart}
            />
            <Button
              btnStyle='default_btn'
              text='Stop'
              isActive={!recordStatus}
              onClick={handleStop}
            />
            <Button btnStyle='success_btn' text='Copy' onClick={handleCopy} />
            <Button btnStyle='danger_btn' text='Reset' onClick={handleReset} />
          </div>
        </div>
        <div className={styles.words_container} ref={scrollDivRef}>
          <div className={styles.words}>
            {startSpeak ? (
              <>
                {transcript.map(({ id, text }) => {
                  return <p key={id}>{text}</p>;
                })}

                <p key={uuidv4()}>{interimTranscript}</p>
              </>
            ) : (
              <p className={styles.default_text}>尚無內容</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeechRecognitionPage;

const Button = ({ text, btnStyle, isActive, onClick }) => {
  const className = `${styles[btnStyle]} ${isActive ? styles.active : ''}`;

  return (
    <button className={className} type='button' onClick={() => onClick?.()}>
      {text}
    </button>
  );
};

const Select = ({ onChange, isDisable, options }) => {
  return (
    <select
      name='language'
      id='language'
      className={styles.select}
      onChange={e => onChange?.(e.target.value)}
      disabled={isDisable}
    >
      {options.map(({ value, name }) => (
        <option value={value} key={value}>
          {name}
        </option>
      ))}
    </select>
  );
};
