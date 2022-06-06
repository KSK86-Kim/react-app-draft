import s from './AnswersB.module.scss';

export const Q5 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>
        <strong>Эмбол </strong>(греч.: клин, затычка) — циркулирующий в крови субстрат, который не
        встречается в нормальных условиях и способен послужить причиной закупорки кровеносного
        сосуда.
      </p>
      <p className={s.answer__paragraph}>
        <strong>Разновидности эмболов:</strong> бактериальные, воздушные, газовые, жировые,
        клеточные (тканевые) и др.
      </p>
      <p className={s.answer__paragraph}>
        <strong>Тромб</strong> (греч.: сгусток крови) — сгусток крови в просвете кровеносного сосуда
        или полости сердца, который образовался при жизни.
      </p>
      <p className={s.answer__paragraph}>
        <strong>Тромбоз</strong> - нарушение местного кровообращения вследствие образования тромба,
        который приводит к затруднению или полному прекращению тока крови.
      </p>
      <p className={s.answer__paragraph}>
        <strong>Условия, которые приводят к тромбозу:</strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>изменения сосудистой стенки;</li>
        <li className={s.answer__item}>замедление и неправильный ток крови;</li>
        <li className={s.answer__item}>изменения качеств крови, повышение ее свертываемости.</li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Ишемия</strong> (местная анемия) - недостаточное кровоснабжение участка ткани или
        органа вследствие уменьшения или полного прекращения притока артериальной крови.
      </p>
      <p className={s.answer__paragraph}>
        <strong>Этиология ишемии:</strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>спазм (сужение) сосудов;</li>
        <li className={s.answer__item}>сдавление органом или тканью;</li>
        <li className={s.answer__item}>обтурация (закупорка) просвета сосудов.</li>
      </ul>

      <p className={s.answer__paragraph}>
        <strong>Клиника ишемии:</strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>чувство онемения,</li>
        <li className={s.answer__item}>боль,</li>
        <li className={s.answer__item}>арушение функции в ишемизированном органе.</li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Инфаркт</strong> — омертвение (некроз) участка органа или ткани вследствие нарушения
        кровоснабжения органа или ткани.
      </p>
      <p className={s.answer__paragraph}>
        <strong>Этиология инфаркта:</strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>органическое сужение артерий;</li>
        <li className={s.answer__item}>продолжительный спазм сосуда;</li>
        <li className={s.answer__item}>тромбоз или эмболия артерии;</li>
        <li className={s.answer__item}>
          функциональное напряжение органа в условиях его недостаточного кровоснабжения.
        </li>
      </ul>
    </>
  );
};
