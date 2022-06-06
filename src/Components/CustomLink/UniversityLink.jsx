import { Link, useMatch } from 'react-router-dom';
import s from './UniversityLink.module.scss';
import { UniversityPage } from '../../routes';

const UniversityLink = ({ children, to, upStyle, ...props }) => {
  const match = useMatch(`${UniversityPage.path_org}${to}`);

  const linkClasses = [s.link];
  const itemClasses = [s.item];

  if (match) {
    linkClasses.push(s.link__active);
    itemClasses.push(s.item__active);
  }

  return (
    <li className={itemClasses.join(' ')}>
      <Link to={to} {...props} className={linkClasses.join(' ')}>
        {children}
      </Link>
    </li>
  );
};

export { UniversityLink };
