import s from './pravoPege.module.scss';
import './pravoPege.css';
import pravo_q1 from './met/pravo_question_1.svg';
import pravo_q2 from './met/pravo_question_2.svg';
import pravo_q3 from './met/pravo_question_3.svg';
import pravo_q4 from './met/pravo_question_4.svg';
import pravo_q5 from './met/pravo_question_5.svg';

const pravoPege = () => {
  return (
    <>
      <div className={s.qwe}>
        asdasdasd
        <ul>
          <li>
            <p>1 вопрос: Право. Його сутність. Походження</p>
            <img src={pravo_q1} alt="" />
          </li>
          <li>
            <p>2 вопрос: Cистема права, система законодавства</p>
            <img src={pravo_q2} alt="" />
          </li>
          <li>
            <p>3 вопрос: Основи трудового законодавства України</p>
            <img src={pravo_q3} alt="" />
          </li>
          <li>
            <p>4 вопрос: Основи сімейного законодавства України</p>
            <img src={pravo_q4} alt="" />
          </li>
          <li>
            <p>5 вопрос: Основи кримінального законодавства України</p>
            <img src={pravo_q5} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default pravoPege;
