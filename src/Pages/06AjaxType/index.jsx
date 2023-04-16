import { useEffect, useState } from 'react';
import { ListItem } from 'Components';
import styles from './styles.module.scss';
import { getData } from './api';

export const AjaxTypePage = () => {
  const [baseData, setBaseData] = useState([]);
  const [result, setResult] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const getSearchResult = word => {
    if (!word.length) return [];
    const regex = new RegExp(word, 'gi');
    const searchResult = baseData.filter(
      el => el.city.match(regex) || el.state.match(regex),
    );
    return searchResult;
  };

  const handleChange = async value => {
    const data = getSearchResult(value);
    setInputValue(value);
    setResult([...data]);
  };

  useEffect(() => {
    const getBaseData = async () => {
      const data = await getData();
      setBaseData(data);
    };
    getBaseData();
  }, []);

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles.title}>Filter for a city or a state</h2>
        <form className={styles.search_form}>
          <input
            type='text'
            className={styles.search}
            placeholder='Enter City or State'
            onChange={e => handleChange(e.target.value)}
          />
          <List result={result} inputValue={inputValue} />
        </form>
      </div>
    </section>
  );
};

const List = ({ result, inputValue }) => {
  const highlightWords = (hlWord, words) => {
    const regex = new RegExp(hlWord, 'gi');
    const isMatch = words.match(regex);
    if (!isMatch) return [words];

    const [hlWords] = isMatch;
    const wordsArr = words.split(regex);
    wordsArr.splice(1, 0, hlWords);
    return wordsArr; // ['', 'Bos', 'ton'] hightlight word is always in index 1
  };

  return (
    <ul className={styles.suggestions}>
      {!result.length ? (
        <ListItem status='noresult' />
      ) : (
        result.map(el => (
          <ListItem
            key={el.id}
            id={el.id}
            textArr01={highlightWords(inputValue, el.city)}
            textArr02={highlightWords(inputValue, el.state)}
            subText={el.population}
          />
        ))
      )}
    </ul>
  );
};
