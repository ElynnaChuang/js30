import 'regenerator-runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSnackbar } from 'notistack';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles.module.scss';
import { Button, Select } from './component';
import { LayoutCol1 } from '@/Layouts';

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
  const { enqueueSnackbar } = useSnackbar();
  const {
    resetTranscript,
    listening,
    finalTranscript,
    interimTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
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

  const handleCopy = () => {
    const allText = transcript.map(el => el.text).join('\n');
    navigator.clipboard.writeText(allText);
    enqueueSnackbar('Copied!', {
      className: styles.snack,
      autoHideDuration: 2000,
      anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
      variant: 'success',
    });
  };

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
      const finalText = allWords.current[finalIndex];
      if (!finalText) return;

      setTranscript(prev => [...prev, { id: uuidv4(), text: finalText }]);
      allWords.current = [];
    }
  }, [interimTranscript]);

  return (
    <LayoutCol1 baseClassName={styles.page}>
      <div className={styles.controls}>
        <div className={styles.controls_status}>
          <p>
            Microphone<span>{listening ? 'on' : 'off'}</span>
          </p>
          <p>
            Language
            <Select onChange={setLanguage} isDisable={recordStatus} options={languages} />
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
    </LayoutCol1>
  );
};

export default SpeechRecognitionPage;
