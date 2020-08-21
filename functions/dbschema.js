let db = {
  users: [
    {
      userId: '2324fdd2d',
      email: 'user@mail.com',
      handle: 'user',
      createdAt: 'date',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/psyhub-68f74.appspot.com/o/479114879032.jpeg?alt=media',
      fullName: 'user fullname',
      bio: 'user bio',
      website: 'https://user.com',
      location: 'LA, California'
    }
  ],
  posts: [
    {
      userHandle: 'user',
      body: 'post caption',
      createdAt: 'date that post created',
      likeCount: 'number of likes from post',
      commentCount: 'number of comments from post'
    }
  ],
  comments: [
    {
      userHandle: 'user',
      postId: 'dae32r2d',
      body: 'cool post bro!',
      createdAt: 'date'
    }
  ]
};

const userDetails = {
  // For redux state
  credentials: {
    userId: '2324fdd2d',
    email: 'user@mail.com',
    handle: 'user',
    createdAt: 'date',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/psyhub-68f74.appspot.com/o/479114879032.jpeg?alt=media',
    fullName: 'user fullname',
    bio: 'user bio',
    website: 'https://user.com',
    location: 'LA, California'
  },
  likes: [
    {
      userHandle: 'user',
      postId: '243efeg3'
    },
    {
      userHandle: 'user',
      postId: '2efgdds3'
    }
  ]
};
