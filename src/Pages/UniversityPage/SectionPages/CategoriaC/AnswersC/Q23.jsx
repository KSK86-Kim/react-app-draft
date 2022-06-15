import s from './AnswersC.module.scss';

export const Q23 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>
        Стан освітлення виробничих приміщень відіграє важливу роль і для попередження виробничого
        травматизму. Багато нещасних випадків на виробництві стається через погане освітлення.
        Втрати від цього становлять досить значні суми, а, головне, людина може загинути або стати
        інвалідом.
      </p>

      <p className={s.answer__paragraph}>
        Раціональне освітлення повинно відповідати таким умовам:
      </p>

      <ul className={s.answer__list}>
        <li className={s.answer__item}>бути достатнім (відповідним нормі);</li>
        <li className={s.answer__item}>рівномірним;</li>
        <li className={s.answer__item}>не утворювати тіней на робочій поверхні; </li>
        <li className={s.answer__item}>не засліплювати працюючого;</li>
        <li className={s.answer__item}>
          напрямок світлового потоку повинен відповідати зручному виконанню роботи.
        </li>
      </ul>

      <p className={s.answer__paragraph}>
        Це сприяє підтримці високого рівня працездатності, зберігає здоров`я людини та зменшує
        травматизм.
      </p>

      <p className={s.answer__paragraph}>
        Залежно від джерела світла виробниче освітлення може бути трьох видів:
      </p>

      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          Природне <br />
          це пряме або відбите світло сонця (небосхилу), що освітлює приміщення через світлові
          прорізи в зовнішніх огороджувальних конструкціях.
        </li>
        <li className={s.answer__item}>
          Штучне <br />
          здійснюється штучними джерелами світла (лампами розжарювання або газорозрядними) і
          призначене для освітлення приміщень у темні години доби, або таких приміщень, які не мають
          природного освітлення.
        </li>
        <li className={s.answer__item}>
          Сполучене (суміщене) <br />
          одночасне поєднання природного і штучного освітлення.
        </li>
      </ul>
    </>
  );
};
