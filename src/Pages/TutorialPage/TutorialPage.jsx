import { useState, useId } from 'react';
import { Link } from 'react-router-dom';

import Couter from '../../components/Couter';
import CouterClass from '../../components/CouterClass';

import Container from '../../components/Container';
import ArticlesMassage from '../../components/ArticlesMassage';

import s from './TutorialPage.module.scss';

const TutorialPage = () => {
  const [value, setValue] = useState('супер текст!');
  const [articles, setArticles] = useState([
    {
      id: '12',
      title: 'Выжимание',
      description: '',
      chapters: [
        {
          id: 'qwe',
          name: 'Плоскостное выжимание',
          ref: 'https://www.youtube.com/watch',
          explanation: 'Супер обеснение',
          nuances: 'Ceпер нуанс',
          main: true,
          auxiliary: false,
        },
      ],
    },
  ]);

  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map(number => <li key={number.index}>{number}</li>);

  console.log(value);
  // for (let i = 0; i < 5; i++) {}
  return (
    <Container className="">
      <h1>hi, react i by!</h1>
      <input type="text" value={value} onChange={event => setValue(event.target.value)} />
      <Couter />
      <section>
        <h2 className={s.title}>Массаж туториал</h2>
        <ArticlesMassage articles={articles} />
      </section>
    </Container>
  );
};

export default TutorialPage;
