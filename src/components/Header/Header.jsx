import Media from 'react-media';

import Container from '../Container';
import { HomePage, UniversityPage } from '../../routes';
import { CustomLink } from '../CustomLink';

import menuSvg from '../../svg/menu.svg';
import logo from '../../svg/logo.svg';

import s from './Header.module.scss';

const Header = ({ children }) => {
  return (
    <>
      <header className={s.header}>
        <Container obStyle={s.container}>
          <img className="logout" alt="logo" src={logo} />
          <Media
            queries={{
              medium: '(min-width: 700px)',
            }}
          >
            {matches => (
              <>
                {matches.medium && (
                  <nav>
                    <ul className={s.nav__list}>
                      <li className={s.nav__item}>
                        <CustomLink to={HomePage.path} upStyle={s.nav__link}>
                          Home
                        </CustomLink>
                      </li>
                      <li className={s.nav__item}>
                        <CustomLink to={UniversityPage.path} upStyle={s.nav__link}>
                          University
                        </CustomLink>
                      </li>
                    </ul>
                  </nav>
                )}
              </>
            )}
          </Media>

          <svg className={s.menu}>
            <use xlinkHref={`${menuSvg}#icon-menu`} />
          </svg>

          {children}
        </Container>
      </header>
      <article className={s.hero}>
        <Container obStyle={s.hero__container}>
          <h1 className={s.hero__title}>Заглушка</h1>
        </Container>
      </article>
    </>
  );
};

export default Header;

// <CustomLink to={HomePage.path}>Home</CustomLink>
// <CustomLink to={UniversityPage.path}>University</CustomLink>
