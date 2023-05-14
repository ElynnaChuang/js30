import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { data } from './data';
import { LayoutCol1 } from '@/Layouts';
import { CheckboxInput } from '@/Components/10Checkbox';
import { Title } from '@/Components';

const CheckboxPage = () => {
  const [inputData, setInputData] = useState(data);
  let lastCheckedId;

  const handleMutipleClick = e => {
    const allCheckInputs = document.querySelectorAll('input[type="checkbox"]');
    const checkedId = [];
    const { id } = e.target;
    const { checked } = e.target;
    const isPressShift = e.shiftKey;

    if (!checked) lastCheckedId = 0;
    if (checked && !isPressShift) lastCheckedId = id;
    if (checked && isPressShift) {
      let inBetween = false;
      allCheckInputs.forEach(input => {
        if (input.id === lastCheckedId || input.id === id) inBetween = !inBetween;
        if (inBetween) checkedId.push(Number(input.id));
      });
      checkedId.push(Number(id));

      setInputData(
        inputData.map(el => {
          return checkedId.includes(el.id) ? { ...el, isCheck: true } : el;
        }),
      );
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleMutipleClick);
  }, []);

  return (
    <LayoutCol1 baseClassName={styles.page}>
      <Title title='Checkbox Page' titleColor='#fff' size='m' />
      <div className={styles.items_container}>
        {inputData.map(el => (
          <CheckboxInput
            key={el.id}
            id={el.id}
            content={el.content}
            checkedStatus={el.isCheck}
          />
        ))}
      </div>
    </LayoutCol1>
  );
};

export default CheckboxPage;
