import s from './AnswersC.module.scss';

export const Q3 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>
        <strong>Реактивность</strong> — способность организма определенным образом реагировать на
        внешние и внутренние раздражители.
      </p>
      <p className={s.answer__paragraph}>
        <strong>Резистентность</strong> — чувствительность организма к действию патогенных факторов:
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          активное включение оградительно-приспособительных механизмов;
        </li>
        <li className={s.answer__item}>
          пассивно-анатомо-физиологические особенности организма (строение кожи, слизистых оболочек,
          костной ткани).
        </li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Виды: </strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>первичная (связанная с наследственными факторами);</li>
        <li className={s.answer__item}>
          вторичная (приобретенная):
          <br />
          <ul className={s.answer__list}>
            <li className={s.answer__item}>
              активная (повышение стойкости к гипоксии в результате акклиматизации, к инфекциям
              после вакцинации и др.);
            </li>
            <li className={s.answer__item}>пассивная (введение в организм антител);</li>
            <li className={s.answer__item}>
              специфическая (к действию одного определенного агента);
            </li>
            <li className={s.answer__item}>неспецифическая (ко многим факторам)</li>
          </ul>
        </li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Иммунитет</strong> — невосприимчивость организма к агентам и веществам, которые
        имеют антигенные свойства
      </p>
      <p className={s.answer__paragraph}>
        <strong>Органы иммунитета:</strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>центральные — тимус (вилочковая железа, костный мозг);</li>
        <li className={s.answer__item}>
          периферические — миндалины, лимфоидные образования кишечника, периферические лимфатические
          узлы, селезенка. Рабочая клетка иммунной системы — лимфоцит.
        </li>
        <li className={s.answer__item}>Т-лимфоцит — структурная единица клеточного иммунитета;</li>
        <li className={s.answer__item}>В-лимфоцит — основная клетка гуморального иммунитета.</li>
        <li className={s.answer__item}>
          Т-лимфоциты возникают в тимусе, В-лимфоциты — в лимфоидных органах.
        </li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Виды иммунитета:</strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          врождённый — является свойством, присущим индивидуальным особенностям организма;
        </li>
        <li className={s.answer__item}>
          приобретённый — возникает при жизни организма; может быть:
        </li>
        <li className={s.answer__item}>
          естественным, который подразделяется на:
          <br />
          <ul className={s.answer__list}>
            <li className={s.answer__item}>
              активный - вырабатывается в организме после, например, перенесенного инфекционного
              заболевания;
            </li>
            <li className={s.answer__item}>
              пассивный - у новорожденного, получившего его от матери (с кровью и молоком);
            </li>
          </ul>
        </li>
        <li className={s.answer__item}>
          искусственным, который подразделяется на:
          <br />
          <ul className={s.answer__list}>
            <li className={s.answer__item}>
              активным — связан с введением в организм так называемых вакцин;
            </li>
            <li className={s.answer__item}>
              пассивным — при введении в организм сыворотки крови, содержащей в готовом виде
              иммунные вещества — антитела.
            </li>
          </ul>
        </li>
      </ul>
      <p className={s.answer__paragraph}>
        Умеренные занятия физической культурой и спортом укрепляют иммунную систему человека. В то
        же время занятия спортом высших достижений могут привести к ослаблению иммунной системы.
      </p>
    </>
  );
};
