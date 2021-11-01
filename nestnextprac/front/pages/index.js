import React from "react";
import Link from "next/link";
import Head from "next/head";
import AppLayout from "../components/Applayout";
import CalendarView from "../components/CalendarView";
import PostCard from "../components/PostCards";

const dummy = {
  isLoggedIn: true,
  mainPosts: [
    {
      avatarName: "Lim",
      postTitle: "about Flower",
      postDate: "November 1 2021",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
      typography:
        "A flower is the reproductive part of flowering plants. Flowers are also called the bloom or blossom of a plant. Flowers have petals.Inside the part of the flower that has petals are the parts which produce pollen and seeds.",
      paragraph1:
        "A flower is the reproductive part of flowering plants. Flowers arealso called the bloom or blossom of a plant. Flowers have petals. Inside the part of the flower that has petals are the parts whichproduce pollen and seeds.",
      paragraph2:
        "In all plants, a flower is usually its most colourful part. We say the plant 'flowers', 'is flowering' or 'is in flower' when thiscolourful part begins to grow bigger and open out. There are many different kinds of flowers in different areas in the world. Even in the coldest places, for example the Arctic, flowers can grow during a few months.",
      paragraph3:
        "Flowers may grow separately on the plant, or they may grow together in an inflorescence.",
    },
    {
      avatarName: "Lim",
      postTitle: "about Flower",
      postDate: "November 1 2021",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
      typography:
        "A flower is the reproductive part of flowering plants. Flowers are also called the bloom or blossom of a plant. Flowers have petals.Inside the part of the flower that has petals are the parts which produce pollen and seeds.",
      paragraph1:
        "A flower is the reproductive part of flowering plants. Flowers arealso called the bloom or blossom of a plant. Flowers have petals. Inside the part of the flower that has petals are the parts whichproduce pollen and seeds.",
      paragraph2:
        "In all plants, a flower is usually its most colourful part. We say the plant 'flowers', 'is flowering' or 'is in flower' when thiscolourful part begins to grow bigger and open out. There are many different kinds of flowers in different areas in the world. Even in the coldest places, for example the Arctic, flowers can grow during a few months.",
      paragraph3:
        "Flowers may grow separately on the plant, or they may grow together in an inflorescence.",
    },
  ],
};

const Home = () => {
  return (
    <>
      {dummy.isLoggedIn ? (
        dummy.mainPosts.map((p) => {
          console.log(dummy);
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
