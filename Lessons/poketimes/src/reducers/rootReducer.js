const initState = {
  posts: [
    { id: 1, title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
    { id: 2, title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
    { id: 3, title: 'A Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' }
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => post.id !== action.id);

    return {
      ...state,
      posts: newPosts
    }
  }

  return state;
}

export default rootReducer;