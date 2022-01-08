import React from 'react';

const Index = ({ global: { test } }) => {
  return (
    <div>
      <div className="button">Текст</div>
      <div className="has-background-danger"> Здесь могла быть ваша реклама</div>
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
