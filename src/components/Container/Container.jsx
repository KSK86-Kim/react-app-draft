import s from './Container.module.scss';

const Container = ({ children, obStyle }) => {
  let styleContainer;
  const containerClasses = [s.container];
  if (obStyle) {
    if (typeof obStyle === 'string') {
      if (obStyle === 'flex-j-s') {
        containerClasses.push(s.flex_j_s);
      } else if (obStyle === 'test') {
        console.log('test');
      } else {
        containerClasses.push(obStyle);
      }
    }
    if (typeof obStyle === 'object') {
      styleContainer = obStyle;
    } else {
      console.log(`Not valid props: ${obStyle} - ${typeof obStyle}`);
    }
  }

  return (
    <div className={containerClasses.join(' ')} style={styleContainer}>
      {children}
    </div>
  );
};

export default Container;
