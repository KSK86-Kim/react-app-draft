import s from './AnswersB.module.scss';

export const Q30 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>
        <strong>Инвалидность </strong> (от лат. - invalidus — бессильный, немощный) - стойкое
        нарушение (снижение или потеря) общей или профессиональной трудоспособности вследствие
        заболевания или травмы. Понятие инвалидности есть одновременно медицинским, социальным и
        юридическим, поскольку связано с состоянием здоровья человека и его трудовой деятельностью.
      </p>
      <p className={s.answer__paragraph}>
        Мировая статистика с сожалением свидетельствует, что каждый десятый житель нашей планеты
        является инвалидом. В настоящее время в Украине насчитывается более 2 млн. инвалидов (около
        6% населения). Половина из них — инвалиды I и II групп, которые неспособны самостоятельно
        обеспечить собственное существование, так как не могут работать.
      </p>
      <p className={s.answer__paragraph}>
        <strong>Категории инвалидов:</strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          физические недостатки (с поражением опорно­ двигательного аппарата);
        </li>
        <li className={s.answer__item}>нарушение интеллекта и психические заболевания;</li>
        <li className={s.answer__item}>нарушение слуха (глухие и слабослышащие);</li>
        <li className={s.answer__item}>нарушение зрения (слепые и слабовидящие);</li>
        <li className={s.answer__item}>нарушение работы внутренних органов.</li>
      </ul>

      <p className={s.answer__paragraph}>
        <strong>Группы инвалидности: </strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          <strong>I группа</strong> <br />
          полная потеря трудоспособности, невозможность самообслуживания;
        </li>
        <li className={s.answer__item}>
          <strong>II группа</strong>
          <br />
          потеря трудоспособности в производственных условиях, но способность к самообслуживанию и
          работе в быту;
        </li>
        <li className={s.answer__item}>
          <strong>III группа</strong>
          <br />
          работа в облегченных условиях.
        </li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Особенности тренировок спортсменов - инвалидов:</strong> <br />
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          <strong>I группа</strong> <br />
          полная потеря трудоспособности, невозможность самообслуживания;
        </li>
        <li className={s.answer__item}>снижение интенсивности и продолжительности занятий;</li>
        <li className={s.answer__item}>
          дифференциация методов восстановления физической работоспособности с учетом физических
          нагрузок, характера и продолжительности заболевания, времени получения травмы;
        </li>
        <li className={s.answer__item}>увеличение интервалов между тренировками.</li>
      </ul>
    </>
  );
};