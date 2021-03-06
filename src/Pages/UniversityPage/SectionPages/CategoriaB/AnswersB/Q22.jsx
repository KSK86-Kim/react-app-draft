import s from './AnswersB.module.scss';

export const Q22 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>
        <strong>Травма </strong> (от греч. — рана, телесное повреждение) — нарушение целостности и
        функции тканей и органов вследствие внешнего влияния. Открытые травмы — травмы, при которых
        нарушена целостность кожных покровов: раны, ожоги, отморожения, переломы. Закрытые травмы —
        механические травмы, которые не сопровождаются нарушением целостности наружных покровов
        тела: ушибы, повреждения связок, вывихи, закрытые переломы, сдавления.
      </p>
      <p className={s.answer__paragraph}>
        Все раны считаются первично инфицированными, т. е. загрязненными микроорганизмами,
        попадающими в рану в момент ранения с поверхности кожи и ранящего предмета.
      </p>
      <p className={s.answer__paragraph}>
        <strong>Первая медицинская помощь при ранениях:</strong> <br />
        остановить кровотечение и с целью предупреждения инфекционных осложнений произвести
        последовательно первичную обработкураны:
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          обильно промыть непроникающие раны 3 % раствором перекиси водорода или другим
          антисептическим раствором, что обеспечивает механическое удаление микроорганизмов и
          оказывает бактерицидный и кровоостанавливающий эффект;
        </li>
        <li className={s.answer__item}>
          кожу вокруг раны обработать 3-5 % спиртовым раствором йода (в случае аллергии на йод -
          раствором бриллиантовой зелени);
        </li>
        <li className={s.answer__item}>наложить стерильную повязку на рану.</li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Первая помощь при наружном кровотечении: </strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          при наружном капиллярном и умеренном венозном кровотечении (кровотечении из поверхностных
          вен) на рану следует наложить тугую асептическую повязку, сверху холод и придать, по
          возможности, возвышенное положение конечности. В случае локализации повреждения на
          туловище этот способ остановки кровотечения является единственным;
        </li>
        <li className={s.answer__item}>
          при артериальном кровотечении следует немедленно приступить к остановке кровотечения, не
          теряя ни минуты.
        </li>
      </ul>
      <p className={s.answer__paragraph}>
        Вначале с целью прекращения притока крови к месту повреждения прижимают артерию пальцем к
        подлежащей кости, не снимая одежды. Прижать сосуд можно также кулаком или краем ладони.
      </p>
      <p className={s.answer__paragraph}>
        Фиксируя пальцем, приносящую кровь артерию, накладывают стандартный жгут или закрутку,
        соблюдая следующие правила:
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          жгут накладывают выше места повреждения артерии, но как можно ближе к ране;
        </li>
        <li className={s.answer__item}>под жгут на кожу подкладывают слой расправленной ткани;</li>
        <li className={s.answer__item}>
          под последний виток жгута помещают записку с указанием времени наложения жгута так, чтобы
          было видно написанное без снятия жгута;
        </li>
        <li className={s.answer__item}>
          в случае посинения и отека конечности при неправильном наложении жгута следует немедленно
          заново наложить его;
        </li>
        <li className={s.answer__item}>
          ввиду опасности омертвения конечности при наложении жгута, больного следует как можно
          быстрее доставить в хирургическое отделение;
        </li>
        <li className={s.answer__item}>
          жгут необходимо периодически расслаблять на 3-5 мин (летом через каждый час, зимой через
          каждые 30 мин), предварительно прижимая артерию выше раны пальцем;
        </li>
        <li className={s.answer__item}>
          использование жгута противопоказано детям до 5 лет, а также истощенным людям;
        </li>
        <li className={s.answer__item}>место наложения жгута желательно не закрывать одеждой;</li>
        <li className={s.answer__item}>
          нельзя накладывать жгут в средней трети плеча из-за опасности атрофии плечевого нерва.
        </li>
      </ul>
      <p className={s.answer__paragraph}>
        Первая медицинская помощь больному с внутренним кровотечением:
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>обеспечить покой;</li>
        <li className={s.answer__item}>наложить холод на место повреждения;</li>
        <li className={s.answer__item}> обеспечить срочную госпитализацию.</li>
      </ul>
      <p className={s.answer__paragraph}>Первая медицинская помощь при травматическом шоке:</p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>провести временную остановку кровотечения;</li>
        <li className={s.answer__item}>дать пострадавшему обезболивающие средства;</li>
        <li className={s.answer__item}>бережно наложить на травмы повязки;</li>
        <li className={s.answer__item}>
          произвести транспортную иммобилизацию, придав неподвижность поврежденной части тела;
        </li>
        <li className={s.answer__item}>
          напоить тонизирующими напитками при остановленном кровотечении;
        </li>
        <li className={s.answer__item}>согреть больного</li>
      </ul>
    </>
  );
};
