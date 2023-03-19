import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";

const BlogInfoItemBlock = styled.div`
  width: 600px;
  padding: 10px;
  margin-top: 60px;
  border: 1px solid black;
  border-radius: 10px;
`;
const Delete = styled.div`
  display: flex;
  color: #dee2e6;
  color: #ff6b6b;
  font-size: 24px;
  cursor: pointer;
  margin-top: 5px;
`;

const BlogInfoItem = ({ value, handleDelete }) => {
  return (
    <>
      <BlogInfoItemBlock>
        <div>Title: {value?.title}</div>
        <div>Content: {value?.content}</div>
        <Delete
          onClick={() => {
            handleDelete(value.id);
          }}
        >
          <MdDelete />
        </Delete>
      </BlogInfoItemBlock>
    </>
  );
};

export default BlogInfoItem;
