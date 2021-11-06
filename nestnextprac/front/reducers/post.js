export const initialState = {
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

export const ADD_POST = "ADD_POST";
export const ADD_DUMMY = "ADD_DUMMY";

export const addPost = {
  type: ADD_POST,
};

const addDummy = {
  type: ADD_DUMMY,
  isLoggedIn: true,
  mainPosts: {
    avatarName: "Lim",
    postTitle: "about Flower",
    postDate: "November 1 2021",
    postImage:
      "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
    typography: "asdfasdfasdf",
    paragraph1: "asdfasfdasdfasfa",
    paragraph2: "asdfasdfasdf",
    paragraph3: "asdfasdfasdfadsfsadfasd",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
