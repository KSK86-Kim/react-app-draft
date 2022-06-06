import { Link, useMatch } from 'react-router-dom';
import s from './CustomLink.module.scss';

const CustomLink = ({ children, to, upStyle, ...props }) => {
  const match = useMatch({ path: to, end: to.length === 1 });
  const linkClasses = [s.link];
  if (upStyle) {
    if (typeof upStyle === 'string') {
      linkClasses.push(upStyle);
    }
  }
  if (match) {
    linkClasses.push(s.link__active);
  }

  return (
    <Link to={to} {...props} className={linkClasses.join(' ')}>
      {/* {match ? '>>' : ''} */}
      {children}
    </Link>
  );
};

export { CustomLink };

// import { Link, useMatch } from 'react-router-dom';
// import s from './CustomLink.module.scss';

// const CustomLink = ({ children, to, ...props }) => {
//   const match = useMatch(to);
//   const setActive = () => (match ? 'link-avtive' : 'red');
//   return (
//     <Link to={to} {...props} className={match ? [s.link1] : null}>
//       {match ? '>>' : ''}
//       {children}
//     </Link>
//   );
// };

// export { CustomLink };
