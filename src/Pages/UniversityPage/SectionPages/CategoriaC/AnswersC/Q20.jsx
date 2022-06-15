import s from './AnswersC.module.scss';

export const Q20 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>Основні заходи по запобіганню травматизму передбачені:</p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          в системі нормативно-технічної документації з безпеки праці;
        </li>
        <li className={s.answer__item}>
          в організації навчання і забезпечення працюючих безпечними засобами захисту;
        </li>
        <li className={s.answer__item}>в прогнозуванні виробничого травматизму; </li>
        <li className={s.answer__item}>
          раціональному плануванні коштів і визначенні економічної ефективності від запланованих
          заходів.
        </li>
      </ul>

      <p className={s.answer__paragraph}>
        Комплексні заходи є основою для складання розділу «охорона праці» у колективному договорі, в
        якому обумовлена сума коштів з фонду охорони праці підприємства та їх використання.
      </p>
      <p className={s.answer__paragraph}>Заходи з охорони праці поділяють на: є:</p>

      <ul className={s.answer__list}>
        <li className={s.answer__item}>організаційні;</li>
        <li className={s.answer__item}>технічні;</li>
        <li className={s.answer__item}>санітарно-гігієнічні;</li>
        <li className={s.answer__item}>медико-профілактичні.</li>
      </ul>
    </>
  );
};
