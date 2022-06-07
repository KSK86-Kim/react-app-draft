import s from './AnswersC.module.scss';

export const Q8 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>
        <strong>Нормативно-правові акти з охорони праці </strong> <br />
      </p>

      <p className={s.answer__paragraph}>
        <strong> Нормативно-правовий акт </strong>– це офіційний документ компетентного органу
        державної влади, яким встановлюють загальні обов’язкові правила (норми). <br />
        Законом України «Про охорону праці» визначено, що нормативно-правові акти з охорони праці
        (НПАОП)
      </p>
      <p className={s.answer__paragraph}>
        <strong> До них належать: </strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>правила,</li>
        <li className={s.answer__item}>норми,</li>
        <li className={s.answer__item}>регламенти,</li>
        <li className={s.answer__item}>стандарти,,</li>
        <li className={s.answer__item}>інструкції,</li>
        <li className={s.answer__item}>інші документи, обов’язкові для виконання</li>
      </ul>
      <p className={s.answer__paragraph}>
        Конкретні вимоги охорони праці до виробничого середовища, обладнання, устаткування, порядку
        ведення робіт, засоби захисту працівників, порядку їх навчання тощо регламентують
        відповідними нормативно-правовими актами, які розробляються згідно з законодавством про
        охорону праці і становлять нормативно-технічну базу охорони праці.
      </p>
    </>
  );
};
