import Platform from '../../../../components/Platform';
import ListQuestion from '../../../../components/ListQuestion';

import s from './CategoriaA.module.scss';

import { listQuestionCategoriaA } from '../../material/listQuestion.js';

import {
  Q1,
  Q2,
  Q3,
  Q4,
  Q5,
  Q6,
  Q7,
  Q8,
  Q9,
  Q10,
  Q11,
  Q12,
  Q13,
  Q14,
  Q15,
  Q16,
  Q17,
  Q18,
  Q19,
  Q20,
  Q21,
  Q22,
  Q23,
  Q24,
  Q25,
  Q26,
  Q27,
  Q28,
  Q29,
  Q30,
} from './AnswersA';

export const CategoriaA = () => {
  return (
    <>
      <Platform mt={'40px'}>
        <h2 className={s.question__title}>Cписок экзаменационных вопросов:</h2>
        <ListQuestion body={listQuestionCategoriaA} />
      </Platform>

      <ul className={s.answers__list}>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-1" className={s.answers__title}>
              {listQuestionCategoriaA[0].question}
            </h3>
            <Q1 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-2" className={s.answers__title}>
              {listQuestionCategoriaA[1].question}
            </h3>
            <Q2 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-3" className={s.answers__title}>
              {listQuestionCategoriaA[2].question}
            </h3>
            <Q3 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-4" className={s.answers__title}>
              {listQuestionCategoriaA[3].question}
            </h3>
            <Q4 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-5" className={s.answers__title}>
              {listQuestionCategoriaA[4].question}
            </h3>
            <Q5 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-6" className={s.answers__title}>
              {listQuestionCategoriaA[5].question}
            </h3>
            <Q6 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-7" className={s.answers__title}>
              {listQuestionCategoriaA[6].question}
            </h3>
            <Q7 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-8" className={s.answers__title}>
              {listQuestionCategoriaA[7].question}
            </h3>
            <Q8 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-9" className={s.answers__title}>
              {listQuestionCategoriaA[8].question}
            </h3>
            <Q9 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-10" className={s.answers__title}>
              {listQuestionCategoriaA[9].question}
            </h3>
            <Q10 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-11" className={s.answers__title}>
              {listQuestionCategoriaA[10].question}
            </h3>
            <Q11 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-12" className={s.answers__title}>
              {listQuestionCategoriaA[11].question}
            </h3>
            <Q12 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-13" className={s.answers__title}>
              {listQuestionCategoriaA[12].question}
            </h3>
            <Q13 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-14" className={s.answers__title}>
              {listQuestionCategoriaA[13].question}
            </h3>
            <Q14 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-15" className={s.answers__title}>
              {listQuestionCategoriaA[14].question}
            </h3>
            <Q15 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-16" className={s.answers__title}>
              {listQuestionCategoriaA[15].question}
            </h3>
            <Q16 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-17" className={s.answers__title}>
              {listQuestionCategoriaA[16].question}
            </h3>
            <Q17 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-18" className={s.answers__title}>
              {listQuestionCategoriaA[17].question}
            </h3>
            <Q18 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-19" className={s.answers__title}>
              {listQuestionCategoriaA[18].question}
            </h3>
            <Q19 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-20" className={s.answers__title}>
              {listQuestionCategoriaA[19].question}
            </h3>
            <Q20 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-21" className={s.answers__title}>
              {listQuestionCategoriaA[20].question}
            </h3>
            <Q21 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-22" className={s.answers__title}>
              {listQuestionCategoriaA[21].question}
            </h3>
            <Q22 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-23" className={s.answers__title}>
              {listQuestionCategoriaA[22].question}
            </h3>
            <Q23 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-24" className={s.answers__title}>
              {listQuestionCategoriaA[23].question}
            </h3>
            <Q24 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-25" className={s.answers__title}>
              {listQuestionCategoriaA[24].question}
            </h3>
            <Q25 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-26" className={s.answers__title}>
              {listQuestionCategoriaA[25].question}
            </h3>
            <Q26 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-27" className={s.answers__title}>
              {listQuestionCategoriaA[26].question}
            </h3>
            <Q27 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-28" className={s.answers__title}>
              {listQuestionCategoriaA[27].question}
            </h3>
            <Q28 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-29" className={s.answers__title}>
              {listQuestionCategoriaA[28].question}
            </h3>
            <Q29 />
          </Platform>
        </li>
        <li className={s.answers__item}>
          <Platform>
            <h3 id="q-30" className={s.answers__title}>
              {listQuestionCategoriaA[29].question}
            </h3>
            <Q30 />
          </Platform>
        </li>
      </ul>
    </>
  );
};

export default CategoriaA;
