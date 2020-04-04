let db = {
  users: [
    {
      userId: "test",
      email: "new@gmail.com",
      handle: "user",
      createdAt: "2019-03-1ST10:59:52.798Z",
      imageUrl: "image/dasdasdasd/asdasdasd",
      bio: "Hello, my name is user, nice to meet you",
      website: "https://user.com",
      location: "London, UK"
    }
  ],
  screams: [
    {
      userHandle: "user",
      body: "this is scream body",
      createdAt: "2019-07-20T12:00:11.812Z",
      likeCount: 5,
      commentCount: 2
    }
  ]
};

const userDetails = {
  credentials: {
    userId: "123",
    email: "user@gmail.com",
    handle: "user",
    createdAt: "2019-03-15T10:59:52.798Z",
    imageUrl: "image/dsadfasdfasdf/asdfasdfasdf",
    bio: "Hello, my name is user, nie to meet you",
    website: "https://user.com",
    location: "London, UK"
  },
  likes: [
    {
      userHandle: "user",
      screamId: "asdasdasdasd"
    },
    {
      userHandle: "user",
      screamId: "asdfasdfasdf"
    }
  ]
};
