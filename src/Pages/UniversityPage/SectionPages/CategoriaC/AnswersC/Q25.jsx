import s from './AnswersC.module.scss';

export const Q25 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>
        <strong>электробезпека</strong> це система організаційних і технічних заходів та засобів,
        які гарантують захист людей від шкідливої і небезпечної дії електричного струму, електричної
        дуги, електромагнітного поля і статичної електрики.
      </p>

      <p className={s.answer__paragraph}>
        Виділяють системи засобів і заходів забезпечення електробезпеки:
      </p>

      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          система технічних засобів і заходів; <br />
          <ul className={s.answer__list}>
            <li className={s.answer__item}>застосування малих напруг;</li>
            <li className={s.answer__item}>
              ізоляція струмоведучих частин (робоча, додаткова, посилена, подвійна);
            </li>
            <li className={s.answer__item}>
              забезпечення недосяжності неізольованих струмоведучих частин;
            </li>
            <li className={s.answer__item}>захисне заземлення;</li>
            <li className={s.answer__item}>занулення, захисне відключення;</li>
            <li className={s.answer__item}>вирівнювання потенціалів;</li>
            <li className={s.answer__item}>електричне розділення мереж;</li>
            <li className={s.answer__item}>компенсація струмів замикання на землю;</li>
            <li className={s.answer__item}>огороджувальні улаштування;</li>
            <li className={s.answer__item}>
              <li className={s.answer__item}>огороджувальні улаштування;</li>
            </li>
            <li className={s.answer__item}>блокування; </li>
            <li className={s.answer__item}> знаки безпеки;</li>
            <li className={s.answer__item}>засоби захисту і запобіжні пристосування</li>
          </ul>
        </li>
        <li className={s.answer__item}>
          система організаційно-технічних заходів і засобів. <br />
          <ul className={s.answer__list}>
            <li className={s.answer__item}>
              призначення осіб, відповідальних за організацію і виконання робіт;
            </li>
            <li className={s.answer__item}>
              документальне оформлення завдання на проведення робіт (наряд, розпорядження із записом
              у відповідний журнал, у порядку тривалої експлуатації з наступним записом у визначений
              журнал);
            </li>
            <li className={s.answer__item}>допуск до проведення робіт;</li>
            <li className={s.answer__item}>нагляд за працюючими під час виконання робіт;</li>
            <li className={s.answer__item}>
              оформлення в наряді та оперативному журналі перерв у роботі, переведень на інші робочі
              місця і закінчення робіт;
            </li>
            <li className={s.answer__item}>
              забезпечення своєчасного навчання і перевірку знань працівників з питань
              електробезпеки.
            </li>
          </ul>
        </li>
        <li className={s.answer__item}>
          система електрозахисних засобів; <br />
          це технічні вироби, що не є конструктивними елементами електроустановок і використовуються
          при виконанні робіт в електроустановках з метою запобігання електротравм. За призначенням
          електрозахисні засоби умовно поділяють на ізолювальні (ізолювальні штанги, кліщі,
          накладки, діелектричні рукавички тощо), огороджувальні (огородження, щитки, ширми,
          плакати) та запобіжні (окуляри, каски, запобіжні пояси, рукавиці для захисту рук).
          Ізолювальні електрозахисті засоби поділяються на основні й додаткові.
          <p>
            Основні ізолювальні електрозахисті засоби розраховані на напругу установки і при
            дотриманні вимог безпеки щодо користування ними забезпечують захист працівників.
          </p>
          <p>
            Додаткові електрозахисті засоби навіть при дотриманні функціонального їх призначення не
            забезпечують надійного захисту працюючих і застосовуються одночасно з основними для
            підвищення рівня безпеки. У разі застосування основних електрозахисних засобів достатньо
            використовувати один додатковий засіб. При захисті працівників від напруги кроку досить
            використовувати діелектричне взуття без застосування основних засобів.
          </p>
          <p>
            Також в електроустановках повинні застосуватися такі засоби індивідуального захисту:
          </p>
          <ul className={s.answer__list}>
            <li className={s.answer__item}>Захисні каски – для захисту голови;</li>
            <li className={s.answer__item}>
              Захисні окуляри і щитки – для захисту очей і обличчя;
            </li>
            <li className={s.answer__item}>
              Протигази і респіратори – для захисту органів дихання;
            </li>
            <li className={s.answer__item}>Рукавиці – для захисту рук;</li>
            <li className={s.answer__item}>Запобіжні пояси та страху вальні канати.</li>
          </ul>
          <p>
            Для захисту працівників при виконанні робіт в умовах електричного поля, параметри якого
            перевищують допустимі, застосовуються індивідуальні екранувальні комплекти одягу та
            екранувальні пристрої.
          </p>
        </li>
      </ul>
    </>
  );
};
