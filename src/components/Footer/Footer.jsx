import Container from '../Container';

const Footer = ({ children }) => {
  return (
    <footer>
      <Container>
        <h1>Заглушка</h1>
        {children}
      </Container>
    </footer>
  );
};

export default Footer;
