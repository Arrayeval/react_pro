export const increase = () => {
  return {
      type: "increase"
  };
};

export const decrease = () => {
  return {
      type: "decrease"
  };
};

export function get_errors(error) {
	return { type: "getError", error }
}

export function get_users(posts) {
  console.log('posts', posts)
  return { type: "getUsers", posts }
}

export function begin_get_user () {
  return  {
    type: 'beginGetPosts'
  }
}