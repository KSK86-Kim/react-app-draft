import Platform from '../../../../components/Platform';
import ListQuestion from '../../../../components/ListQuestion';

import s from './CategoriaD.module.scss';

import { listQuestionCategoriaD } from '../../material/listQuestion.js';

export const CategoriaD = () => {
  return (
    <>
      <Platform mt={'40px'}>
        <h2 className={s.question__title}>Cписок экзаменационных вопросов:</h2>
        <ListQuestion body={listQuestionCategoriaD} />
      </Platform>

      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          <Platform>
            <h3 id="q-1" className={s.answer__title}>
              1 вопрос
            </h3>
            <p className={s.answer__paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis unde dolor
              cupiditate porro aperiam totam ipsum voluptatibus dolorem. Voluptate, sunt! Molestiae
              aperiam nemo debitis aliquam quia enim non porro!
            </p>
          </Platform>
        </li>
      </ul>
    </>
  );
};

export default CategoriaD;
