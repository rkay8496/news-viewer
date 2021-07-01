import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewPage = ({ match }) => {
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = match.params.category || 'all';

  return (
    <>
      <Categories></Categories>
      <NewsList category={category}></NewsList>
    </>
  );
};

export default NewPage;
