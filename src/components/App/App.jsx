import {
  Container,
  Header,
  SearchForm,
  Section,
} from 'components';
import Todos from 'components/Todos/Todos';

export const App = () => {

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm/>
          <Todos/>
        </Container>
      </Section>
    </>
  );
};

