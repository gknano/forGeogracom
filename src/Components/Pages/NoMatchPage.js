import { PageContainer } from '../PageContainer';

const NoMatchPage = () => {
  return (
    // оборачиваем страницу в дефолтный контейнер
    <PageContainer>
      <h3>404 - Not found</h3>
    </PageContainer>
  );
};

export default NoMatchPage;
