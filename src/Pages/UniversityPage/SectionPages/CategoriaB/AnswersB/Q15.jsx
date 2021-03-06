import s from './AnswersB.module.scss';

export const Q15 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>
        Реакция на физическое перенапряжение системы пищеварения может быть представлена двумя
        синдромами
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>диспептическим</li>
        <li className={s.answer__item}>
          определение и оценка функционального состояния организма спортсменов, их тренированности;
        </li>
        <li className={s.answer__item}>печеночным болевым.</li>
      </ul>

      <p className={s.answer__paragraph}>
        Диспептический синдром проявляется рвотой (как правило, кислым желудочным содержимым или
        желчью) во время или сразу после однократной, обычно длительной нагрузки, превышающей
        функциональные возможности организма спортсмена.
      </p>
      <p className={s.answer__paragraph}>
        Печеночный болевой синдром представляет собой патологическое состояние, основным симптомом
        которого являются острые боли в правом подреберье (иногда левом или обоих подреберьях),
        непосредственно во время выполнения физических нагрузок. Наиболее типично появление подобной
        боли в области печени во время бега на длинные и марафонские дистанции, лыжных гонок,
        велогонок и других видов спортивной деятельности, связанных с выполнением длительных и
        интенсивных физических нагрузок.
      </p>
      <p className={s.answer__paragraph}>
        Частота этого синдрома у спортсменов отчетливо увеличивается с возрастом, спортивным стажем
        и повышением уровня мастерства. У высококвалифицированных атлетов, имеющих значительный стаж
        занятий спортом, печеночный болевой синдром наблюдается почти в 5 раз чаще, чем у
        спортсменов III разряда.
      </p>
      <p className={s.answer__paragraph}>
        <strong>Причины возникновения печеночного болевого синдрома:</strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          гемодинамические: увеличение объема печени за счет ухудшения оттока крови или уменьшение
          объема печени в результате выхода депонированной в ней крови в сосудистое русло;
        </li>
        <li className={s.answer__item}>
          холестатические, т. е. связанные с застоем желчи в результате дискинезии желчевыводящих
          путей.
        </li>
        <li className={s.answer__item}>
          изучение заболеваний и травм, которые возникают при нерациональных занятиях, разработка
          методов диагностики, профилактики, лечения и реабилитации;
        </li>
      </ul>

      <p className={s.answer__paragraph}>
        Для купирования острого приступа, спортсмен должен прервать нагрузку, что, как правило,
        приводит к исчезновению болей. Если этого оказывается недостаточно, рекомендуется ритмичное
        глубокое дыхание, самомассаж или массаж области печени.
      </p>

      <p className={s.answer__paragraph}>
        Физическое перенапряжение мочевыделительной системы выражается протеинурическим и
        гематурическим синдромами — появлением в моче белка и эритроцитов. Традиционно принято
        считать, что при исчезновении подобных изменений через 12-24 ч после нагрузки они могут быть
        расценены как физиологические. Если же они удерживаются дольше, то речь идет о синдроме
        хронического перенапряжения почек.
      </p>
    </>
  );
};
