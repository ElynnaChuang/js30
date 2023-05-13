import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { data } from './data';
import { CenterCol1Layout } from '@/layouts';
import { CheckboxInput } from '@/components/10Checkbox';
import { Title } from '@/components';

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
    <CenterCol1Layout baseClassName={styles.page}>
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
    </CenterCol1Layout>
  );
};

export default CheckboxPage;
