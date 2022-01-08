import React from 'react';

const Index = ({ global: { test } }) => {
  return (
    <div>
      Проверка: {test} : {test}
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      global: { test: 1 }
    }
  };
};

export default Index;
