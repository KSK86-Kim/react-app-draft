import s from './AnswersC.module.scss';

export const Q16 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>
        <strong>Проводиться з працівниками на робочому місці або в кабінеті охорони праці:</strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          при введенні в дію нових або переглянутих нормативно-правових актів з охорони праці, а
          також при внесенні змін та доповнень до них;
        </li>
        <li className={s.answer__item}>
          при зміні технологічного процесу, або модернізації устаткування, приладів та інструментів,
          вихідної сировини, матеріалів та інших факторів, що впливають на стан охорони праці;
        </li>
        <li className={s.answer__item}>
          при порушеннях працівниками вимог нормативно-правових актів з охорони праці, що призвели
          до травм, аварій, пожеж тощо;
        </li>
        <li className={s.answer__item}>
          при перерві в роботі виконавця робіт більш ніж на 30 календарних днів — для робіт з
          підвищеною небезпекою, а для решти робіт — понад 60 днів.
        </li>
      </ul>

      <p className={s.answer__paragraph}>
        Позаплановий інструктаж з учнями, студентами, курсантами, слухачами проводиться під час
        проведення трудового і професійного навчання при порушеннях ними вимог нормативно — правових
        актів з охорони праці, що можуть призвести або призвели до травм, аварій, пожеж тощо.
      </p>
      <p className={s.answer__paragraph}>
        Позаплановий інструктаж може проводитись індивідуально з окремим працівником або з групою
        працівників одного фаху. Обсяг і зміст позапланового інструктажу визначаються в кожному
        окремому випадку залежно від причин і обставин, що спричинили потребу його проведення.
      </p>
    </>
  );
};
