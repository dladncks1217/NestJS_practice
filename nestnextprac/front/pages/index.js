import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CalendarView from "../components/CalendarView";
import PostCard from "../components/PostCards";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <>
      {isLoggedIn ? (
        mainPosts.map((p) => {
          return (
            <PostCard
              avatarName={p.avatarName}
              postTitle={p.postTitle}
              postDate={p.postDate}
              postImage={p.postImage}
              typography={p.typography}
              paragraph1={p.paragraph1}
              paragraph2={p.paragraph2}
              paragraph3={p.paragraph3}
            />
          );
        })
      ) : (
        <CalendarView />
      )}
    </>
  );
};

export default Home;
