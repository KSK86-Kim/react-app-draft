import s from './AnswersB.module.scss';

export const Q4 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>
        <strong>Воспалительный процесс</strong>— это эволюционно выработанная, преимущественно
        защитная реакция организма на повреждение.
      </p>
      <p className={s.answer__paragraph}>
        <strong>Этиологические факторы воспаления:</strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          экзогенные (внешние) — микроорганизмы (бактерии, вирусы, грибы), животные организмы
          (гельминты, насекомые), химические и физические факторы, механические раздражители
          (травма, давление, инородные тела и др.);
        </li>
        <li className={s.answer__item}>
          эндогенные (внутренние) - реакция на опухоль, желчные или мочевые камни, образовавшийся в
          сосудах тромб и др
        </li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Патогенетические стадии воспалительного процесса:</strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          альтерация - повреждение ткани в результате влияния этиологического фактора;
        </li>
        <li className={s.answer__item}>
          экссудация - выход жидкой части крови из сосудов в воспалительную ткань, миграция
          клеточных элементов крови;
        </li>
        <li className={s.answer__item}>пролиферация — размножение тканевых элементов.</li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Местные признаки воспаления:</strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>припухлость,</li>
        <li className={s.answer__item}>покраснение,</li>
        <li className={s.answer__item}>жар,</li>
        <li className={s.answer__item}>боль,</li>
        <li className={s.answer__item}>нарушение функции пораженного органа.</li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Общие признаки воспаления:</strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>повышение температуры тела,</li>
        <li className={s.answer__item}>головная боль,</li>
        <li className={s.answer__item}>общая слабость,</li>
        <li className={s.answer__item}>сердечно-сосудистые нарушения и др.</li>
      </ul>

      <p className={s.answer__paragraph}>
        <strong>Лихорадка</strong> — типовой патологический процесс в ответ на действие патогенного
        раздражителя, проявляеющийся повышением температуры тела, изменением обменных процессов в
        организме и формированием комплекса иммунных реакций.
      </p>
      <p className={s.answer__paragraph}>
        <strong>Стадии развития лихорадки:</strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>подъём температуры;</li>
        <li className={s.answer__item}>поддержание повышенной температуры;</li>
        <li className={s.answer__item}>
          падение температуры: <br />
          <ul className={s.answer__list}>
            <li className={s.answer__item}>постепенное (литическое),</li>
            <li className={s.answer__item}>быстрое (критическое).</li>
          </ul>
        </li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Защитно-приспособительное значение лихорадки:</strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          стимулирует выработку антител, сенсебилизированных Т-лимфоцитов;
        </li>
        <li className={s.answer__item}>
          повышает противомикробное действие ферментов и активность фагоцитоза;
        </li>
        <li className={s.answer__item}>
          стимулирует выработку белков острой фазы воспаления, разнообразных противомикробных
          биологически активных веществ (интерферон, лизоцим и др.).
        </li>
      </ul>
    </>
  );
};
