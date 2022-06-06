import s from './AnswersB.module.scss';

export const Q20 = () => {
  return (
    <>
      <p className={s.answer__paragraph}>
        Проверка на половую принадлежность потребовалась для спортсменок в начале 1960-х годов,
        когда появились предположения о том, что мужчины и возможно «гермафродиты» участвовали в
        женских спортивных соревнованиях. Хотя не было серьезных доказательств, подтверждающих
        данные обвинения, МОК и другие международные спортивные организации начали применять
        процедуру контроля на половую принадлежность.
      </p>
      <p className={s.answer__paragraph}>
        Вначале группа врачей женщин проводила физический осмотр спортсменок. В связи с тем, что это
        вызывало значительные сложности, спортсменки и официальные лица быстро перешли на метод Барр
        (мазок из полости рта, соскоб щечного эпителия), который может отличить ХХ-хроматин
        (генетических женщин) от ХУ-хроматина (генетических мужчин). Однако, генетики доказали, иго
        целый ряд генетических дефектов в синтезе гормонов или в опознавании может привести к ХУ
        анатомически и физиологически женскую особь. Наклеить этим женщинам ярлык «мужчина» означало
        нанести им непоправимый ущерб.
      </p>
      <p className={s.answer__paragraph}>
        В 1991 году Международная любительская легкоатлетическая федерация (ИААФ) отказалась от
        теста X- хроматина (мазок из полости рта). В 1992 году Медицинский комитет ИААФ
        рекомендовал.
      </p>
      <p className={s.answer__paragraph}>
        <strong>Утвердил решение, которое заключалось в следующем : </strong>
      </p>
      <ul className={s.answer__list}>
        <li className={s.answer__item}>
          Настоятельно рекомендуется общая проверка здоровья, но она больше не обязательна.
        </li>
        <li className={s.answer__item}>
          Визуальный осмотр половых органов во время забора пробы мочи у женщин на пункте
          допинг-контроля - это достаточный метод для определения, является ли спортсменка мужчиной
          или женщиной. Риск для мужчин быть обнаруженным во время процедуры допинг-контроля
          является достаточным препятствием для того, чтобы мужчины не участвовали в женских
          соревнованиях.
        </li>
        <li className={s.answer__item}>
          Медицинский делегат на международных соревнованиях имеет право провести дополнительный
          осмотр, если возникает сомнение по поводу пола спортсменки.
        </li>
      </ul>
    </>
  );
};
