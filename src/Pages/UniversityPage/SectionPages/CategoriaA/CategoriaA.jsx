import Platform from '../../../../components/Platform';
import ListQuestion from '../../../../components/ListQuestion';
import { listQuestionCategoriaA } from '../../material/listQuestion.js';

import s from './CategoriaA.module.scss';

import diagrams from '../../../../drawio/categoriaA';
import testSVG from '../../../../svg/pravo1.svg';

{
  /* <img src={testSVG} className={s.svg} alt="" /> */
}

export const CategoriaA = () => {
  return (
    <>
      <Platform mt={'40px'}>
        <h2 className={s.question__title}>Cписок экзаменационных вопросов:</h2>
        <ListQuestion body={listQuestionCategoriaA} />
      </Platform>

      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          <Platform>
            <h3 id="q-1" className={s.answer__title}>
              {listQuestionCategoriaA[0].question}
            </h3>
            <p className={s.answer__paragraph}></p>
          </Platform>
        </li>
      </ul>
    </>
  );
};

export default CategoriaA;
