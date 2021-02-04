import React from 'react';
import { PageContainer } from '../PageContainer';
import { Table } from '../Table';

const CollectionPage = () => {
  return (
    // оборачиваем страницу в дефолтный контейнер
    <PageContainer style={{ padding: 0 }}>
      <Table />
    </PageContainer>
  );
};

export default CollectionPage;
