import s from './AnswersC.module.scss';

export const Q29 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>
        <strong>Различают четыре основных вида гибели в воде: </strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          Первичное, истинное, или «мокрое» утопление (75 - 95% всех несчастных случаев в воде).
          Когда истощаются кислородные резервы организма, развивается двигательная гипоксия,
          плавающий начинает тонуть
        </li>
        <li className={s.answer__item}>
          Асфиксическое, или «сухое» утопление (15 - 20% всех случаев утопления). Происходит без
          аспирации воды (вода в лёгкие не попадает) из-за рефлекторного спазма мышц гортани.
          Человек погибает при явлениях механической асфиксии (ларингоспазма). Причиной является
          холодовой шок (ледяная вода), охлаждение организма (гипотермия). Происходит спазм сосудов,
          ишемия мозга, рефлекторная остановка сердца.
        </li>
        <li className={s.answer__item}>
          Вторичное утопление - бывает при травматическом шоке, который может развиться при ударе о
          воду животом, наружными половыми органами, а также при ударе головой о дно бассейна или
          водоёма в недостаточно глубоком месте.
        </li>
        <li className={s.answer__item}>
          Смерть в воде — может наступить в результате острой ишемии миокарда. Раздражение кожи
          холодной водой вызывает рефлекторный спазм сосудов сердца (чаще у пожилых), в результате
          чего может развиться инфаркт миокарда.
        </li>
      </ul>
      <p className={s.answer__paragraph}>
        <strong>Неотложная помощь: </strong> <br />
        Если извлечённый из воды в сознании
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>его надо успокоить,</li>
        <li className={s.answer__item}>снять мокрую одежду,</li>
        <li className={s.answer__item}>согреть,</li>
        <li className={s.answer__item}>переодеть в j сухую одежду,</li>
        <li className={s.answer__item}>укутать,</li>
        <li className={s.answer__item}>напоить тёплым чаем,</li>
        <li className={s.answer__item}>
          доставить в стационар (так как одним из осложнений утопления является пневмония.)
        </li>
      </ul>
      <p className={s.answer__paragraph}>
        При отсутствии дыхания и сердцебиения, т. е. наступлении клинической смерти, приступают к
        реанимации:
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          проверить проходимость верхних дыхательных путей, | очистить рот и нос от инородных тел
          (тина, песок и т. д.);
        </li>
        <li className={s.answer__item}>
          ) удалить воду из верхних дыхательных путей. Для этого спасатель кладёт пострадавшего
          грудью на бедро своей согнутой в колене правой ноги, надавливая на спину пострадавшего
          левой рукой (в течение не более 20-30 сек.);
        </li>
        <li className={s.answer__item}>
          искусственное дыхание и непрямой массаж сердца по обычной методике.
        </li>
      </ul>
    </>
  );
};