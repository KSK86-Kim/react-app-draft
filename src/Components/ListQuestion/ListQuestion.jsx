import s from './ListQuestion.module.scss';

const ListQuestion = ({ body, children }) => {
  return (
    <>
      <ol className={s.list}>
        {body.map((item, index) => (
          <li key={index} className={s.item}>
            <a href={`#${item.id}`} className={s.link}>
              {item.question}
            </a>
          </li>
        ))}
        {children}
      </ol>
    </>
  );
};

export default ListQuestion;
