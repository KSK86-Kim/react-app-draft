import s from './AnswersC.module.scss';

export const Q17 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>
        <strong>Технічні причини</strong>, котрі можна охарактеризувати як причини, що залежать від
        рівня організації праці на виробництві.
      </p>
      <p className={s.answer__paragraph}>До них можна віднести:</p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>недосконалий технологічний процес;</li>
        <li className={s.answer__item}>конструктивні недоліки обладнання;</li>
        <li className={s.answer__item}>інструментів та пристосувань</li>
        <li className={s.answer__item}>недостатня механізація важких робіт;</li>
        <li className={s.answer__item}>недосконале огородження;</li>
        <li className={s.answer__item}>ідсутність спеціальних захисних засобів;</li>
        <li className={s.answer__item}>засобів сигналізації та блокувань;</li>
        <li className={s.answer__item}>недостатня міцність та надійність машин;</li>
        <li className={s.answer__item}>шкідливі властивості оброблюваного матеріалу;</li>
        <li className={s.answer__item}>тощо.</li>
      </ul>

      <p className={s.answer__paragraph}>
        Ці причини інколи називають конструктивними або інженерними.
      </p>
      <p className={s.answer__paragraph}>
        <strong>Організаційні причини</strong>,що повністю залежать від рівня організації праці на
        виробництві.
      </p>
      <p className={s.answer__paragraph}>До них можна віднести:</p>

      <ul className={s.answer__list}>
        <li className={s.answer__item}>незадовільний стан території;</li>
        <li className={s.answer__item}>проїздів;</li>
        <li className={s.answer__item}>проходів</li>
        <li className={s.answer__item}>порушення правил експлуатації обладнання;</li>
        <li className={s.answer__item}>транспортних засобів;</li>
        <li className={s.answer__item}>порушення технологічного регламенту;</li>
        <li className={s.answer__item}>порушення правил і норм при транспортуванні;</li>
        <li className={s.answer__item}>складанні і зберіганні матеріалів і деталей;</li>
        <li className={s.answer__item}>
          порушення норм і правил при плановому технічному обслуговуванні та ремонті обладнання;
        </li>
        <li className={s.answer__item}>
          недоліки при навчанні робітників безпечним методам праці;
        </li>
        <li className={s.answer__item}>недостатній технічний нагляд за небезпечними роботами;</li>
        <li className={s.answer__item}>використання машин;</li>
        <li className={s.answer__item}>механізмів і інструменту не за призначенням;</li>
        <li className={s.answer__item}>відсутність або незадовільне огородження робочої зони;</li>
        <li className={s.answer__item}>
          відсутність або невикористання засобів індивідуального захисту.
        </li>
      </ul>

      <p className={s.answer__paragraph}>
        <strong>Санітарно-гігієнічні причини</strong>
      </p>
      <p className={s.answer__paragraph}>До них можна віднести:</p>

      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          перевищення (відносно) запиленості та загазованості повітря робочої зони;
        </li>
        <li className={s.answer__item}>відсутність або недостатнє природне освітлення;</li>
        <li className={s.answer__item}>підвищену пульсацію світлового потоку;</li>
        <li className={s.answer__item}>підвищений рівень шуму та вібрації;</li>
        <li className={s.answer__item}>
          інфразвукових та ультразвукових коливань на робочому місці;
        </li>
        <li className={s.answer__item}>
          підвищений рівень ультразвукової та інфрачервоної радіації
        </li>
      </ul>
    </>
  );
};
