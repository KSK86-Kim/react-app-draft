import s from './AnswersC.module.scss';

export const Q12 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>
        <strong>Типовим положенням передбачені такі види навчання з питань охорони праці:</strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>навчання з питань охорони праці на підприємстві;</li>
        <li className={s.answer__item}>навчання з питань охорони праці у навчальних центрах;</li>
        <li className={s.answer__item}>нерациональное питание;</li>
        <li className={s.answer__item}>інструктажі з питань охорони праці;</li>
        <li className={s.answer__item}>навчання з питань охорони праці посадових осіб;</li>
        <li className={s.answer__item}>спеціальне навчання;</li>
        <li className={s.answer__item}>стажування;</li>
        <li className={s.answer__item}>дублювання.</li>
      </ul>
    </>
  );
};
