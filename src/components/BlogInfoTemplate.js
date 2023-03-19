// 우리가 만들 블로그인포의 레이아웃을 설정하는 컴포넌트. 페이지의 중앙에 그림자가 적용된 흰색 박스를 보여준다.

import React from "react";
import styled from "styled-components";

const BlogInfoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  background: white;
  margin: 0 auto;
`;

const BlogInfoTemplate = ({ children }) => {
  return <BlogInfoTemplateBlock>{children}</BlogInfoTemplateBlock>;
};

export default BlogInfoTemplate;
