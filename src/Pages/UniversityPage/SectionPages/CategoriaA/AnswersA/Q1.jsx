import s from './AnswersA.module.scss';

export const Q1 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>
        <strong>Специфічні:</strong>
      </p>

      <ul className={s.answer__list}>
        <li className={s.answer__item}>Спрямованість на максимально-можливі досягнення;</li>
        <li className={s.answer__item}>Поглиблена спеціалізація та індивідуалізація;</li>
        <li className={s.answer__item}>Безперервність тренувального процесу;</li>
        <li className={s.answer__item}>Єдність загальної та спеціальної підготовки спортсмена;</li>
        <li className={s.answer__item}>Хвилеподібність динаміки навантажень;</li>
        <li className={s.answer__item}>Циклічність тренувального процесу;</li>
        <li className={s.answer__item}>
          Єдність поступовості та граничного збільшення тренувальних навантажень;
        </li>
        <li className={s.answer__item}>
          Єдність та взаємозв’язок структури змагальної діяльності і структури підготовленості;
        </li>
        <li className={s.answer__item}>
          Єдність і взаємозв’язок тренувального процесу і змагальної діяльності з поза змагальними
          чинниками;
        </li>
        <li className={s.answer__item}>
          Взаємообумовленість ефективності тренувального процесу і профілактика спортивного
          травматизму.
        </li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Дидактичні:</strong>
      </p>

      <ul className={s.answer__list}>
        <li className={s.answer__item}>Доцільності і практичності.</li>
        <li className={s.answer__item}>Готовності.</li>
        <li className={s.answer__item}>Керованості та підконтрольності.</li>
        <li className={s.answer__item}>Позитивної мотивації.</li>
        <li className={s.answer__item}>Систематичності. </li>
        <li className={s.answer__item}>Смислової і перцептивної «наочності».</li>
        <li className={s.answer__item}>Планомірності і поступовості.</li>
        <li className={s.answer__item}>Методичного динамізму і прогресування.</li>
        <li className={s.answer__item}>Функціональної надлишковості та надійності.</li>
        <li className={s.answer__item}>Міцності та пластичності.</li>
      </ul>
      {/* <a href="https://evnuir.vnu.edu.ua/bitstream/123456789/20009/1/teoriia_sportu.pdf">Джерело</a> */}
    </>
  );
};
