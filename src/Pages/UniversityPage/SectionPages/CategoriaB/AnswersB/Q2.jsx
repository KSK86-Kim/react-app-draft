import s from './AnswersB.module.scss';

export const Q2 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>
        <strong>Здоровье</strong> — состояние полного физического, душевного и социального
        благополучия, а не только отсутствие болезней и физических дефектов.
      </p>
      <p className={s.answer__paragraph}>
        <strong>Факторы</strong>, влияющие на здоровье человека:
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>50% от образа жизни;</li>
        <li className={s.answer__item}>20% от наследственно-генетических факторов;</li>
        <li className={s.answer__item}>
          20% от климато-географических условий, состояния экологии;
        </li>
        <li className={s.answer__item}>10% — от уровня развития здравоохранения в стране.</li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Болезнь</strong> — нарушение жизнедеятельности организма, которое выражается
        функциональными и структурными изменениями, возникающими под влиянием раздражителей внешней
        и внутренней среды.
      </p>
      <p className={s.answer__paragraph}>Болезни по распространенности разделяют на:</p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          <strong>эндемические</strong> <br />
          постоянно наблюдаются на определенной территории;
        </li>
        <li className={s.answer__item}>
          <strong>эпидемические</strong>
          <br />
          имеют широкое распространение.
        </li>
      </ul>
      <p className={s.answer__paragraph}>Болезни по характеру течения бывают:</p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          <strong>острые;</strong> <br />
        </li>
        <li className={s.answer__item}>
          <strong>подострые;</strong> <br />
        </li>
        <li className={s.answer__item}>
          <strong>хронические.</strong> <br />
        </li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Симптом</strong> - это отдельное проявление болезни. Совокупность симптомов,
        связанных между собой общим механизмом развития, называется синдромом.
      </p>
      <p className={s.answer__paragraph}>Периоды болезни:</p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          <strong>скрытый;</strong> <br />
        </li>
        <li className={s.answer__item}>
          <strong>продромальный;</strong> <br />
        </li>
        <li className={s.answer__item}>
          <strong>развития болезни;</strong> <br />
        </li>
        <li className={s.answer__item}>
          <strong>исход болезни (выздоровление, летальный, хроническая форма).</strong> <br />
        </li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Этиология</strong> - причины и условия возникновения заболеваний.
      </p>
      <p className={s.answer__paragraph}>Внешние (экзогенные) причины заболеваний:</p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          <strong>механические;</strong> <br />
        </li>
        <li className={s.answer__item}>
          <strong>физические;</strong> <br />
        </li>
        <li className={s.answer__item}>
          <strong>биологические;</strong> <br />
        </li>
        <li className={s.answer__item}>
          <strong>алиментарные;</strong> <br />
        </li>
        <li className={s.answer__item}>
          <strong>психогенные;</strong> <br />
        </li>
        <li className={s.answer__item}>
          <strong>социальные.</strong> <br />
        </li>
      </ul>
      <p className={s.answer__paragraph}>Внутренние (эндогенные) причины заболеваний:</p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          <strong>наследственность (генотип);</strong> <br />
        </li>
        <li className={s.answer__item}>
          <strong>конституция (фенотип);</strong> <br />
        </li>
        <li className={s.answer__item}>
          <strong>пол, возраст;</strong> <br />
        </li>
        <li className={s.answer__item}>
          <strong>реактивность (состояние центральной нервной и иммунной систем).</strong> <br />
        </li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Патогенез</strong> — механизм возникновения и развития болезни.
      </p>
      <p className={s.answer__paragraph}>Пути распространения болезни:</p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          <strong>гуморальный;</strong> <br />
        </li>
        <li className={s.answer__item}>
          <strong>тканевой;</strong> <br />
        </li>
        <li className={s.answer__item}>
          <strong>нервно-рефлекторный.</strong> <br />
        </li>
      </ul>
    </>
  );
};
