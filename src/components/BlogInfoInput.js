import React from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const BlogInfoInputBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputBlock = styled.input`
  width: 400px;
  height: 25px;
`;
const TextareaBlock = styled.textarea`
  width: 400px;
`;
const ButtonBlock = styled.div`
  position: relative;
  padding-bottom: 100px;
`;
const AddButton = styled.button`
  background: #eb6124;

  cursor: pointer;
  width: 60px;
  height: 35px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  position: absolute;
  left: 12px;
  top: 5px;
  color: white;

  border-radius: 5px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

const BlogInfoInput = ({ blogInfo, handleBlogInfo, handleClick }) => {
  return (
    <>
      <BlogInfoInputBlock>
        <InputBlock
          name="title"
          type="text"
          placeholder="Title"
          value={blogInfo.title}
          onChange={handleBlogInfo}
        />
        <TextareaBlock
          name="content"
          cols="30"
          rows="10"
          placeholder="Content"
          value={blogInfo.content}
          onChange={handleBlogInfo}
        />
      </BlogInfoInputBlock>
      <ButtonBlock>
        <AddButton onClick={handleClick}>
          <MdAdd />
        </AddButton>
      </ButtonBlock>
    </>
  );
};

export default BlogInfoInput;
