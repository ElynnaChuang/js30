import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './styles.module.scss';

export const Example = ({ title, info, subInfo, code }) => {
  return (
    <div className={styles.example}>
      <h4>{title}</h4>
      {info && <p>{info}</p>}
      {subInfo && <p>{subInfo}</p>}
      <SyntaxHighlighter language='jsx' style={oneLight} wrapLines showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
