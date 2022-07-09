import ChapterMassage from '../ChapterMassage';

import s from './ArticlesMassage.module.scss';

const ArticlesMassage = ({ articles }) => {
  // console.log(articles);
  return (
    <>
      {articles.map(item => (
        <div key={item.id} className={s.wrapper}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {/* {console.log(item.chapters)} */}
          <ul>
            <ChapterMassage chapters={item.chapters} />
          </ul>
        </div>
      ))}
    </>
  );
};

export default ArticlesMassage;
