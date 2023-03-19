import { useEffect, useState } from "react";
import BlogInfoInput from "./components/BlogInfoInput";
import BlogInfoItem from "./components/BlogInfoItem";

function App() {
  const [blogInfo, setBlogInfo] = useState({ title: "", content: "" });
  const [blogInfoList, setBlogInfoList] = useState([]);

  const handleBlogInfo = (e) => {
    // console.log(e.target.name);
    blogInfo[e.target.name] = e.target.value;
    // console.log(blogInfo);
    setBlogInfo({ ...blogInfo });
    // 객체는 주소값을 가지고잇지 않기 때문에 밑에 return문이 실행되지 않는다. 새 객체를 넣어야 리렌더링이 된다! 원시형은 주소값이 없기 때문에 스프레드연산자 쓰면 안됨.
  };

  // ID 생성하기
  const newID = function () {
    return Math.random().toString(36).substr(2, 16);
  };

  // 등록 버튼
  const handleClick = () => {
    const data = {
      id: newID(),
      title: blogInfo.title,
      content: blogInfo.content,
    };
    // console.log(data);
    setBlogInfoList([data, ...blogInfoList]);
    setBlogInfo({ title: "", content: "" }); // Reset blogInfo to initial values.
  };

  // 삭제 버튼
  const handleDelete = (id) => {
    const x = blogInfoList.filter((blogInfo) => blogInfo.id !== id);
    console.log(x);
    setBlogInfoList(x);
  };

  useEffect(() => {
    console.log(blogInfoList);
  }, [blogInfoList]);
  // console.log("--------");
  // console.log(blogInfoList);

  return (
    <>
      <BlogInfoInput
        blogInfo={blogInfo}
        handleBlogInfo={handleBlogInfo}
        handleClick={handleClick}
      />

      {blogInfoList?.map((value) => {
        return (
          <>
            <BlogInfoItem value={value} handleDelete={handleDelete} />
          </>
        );
      })}
    </>
  );
}

export default App;
