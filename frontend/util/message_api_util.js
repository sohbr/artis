import axios from "axios";

// const url = "http://localhost:3000";
const url = "https://hire-artis.herokuapp.com";

export const getConversations = userId => {
  return axios({
    method: "GET",
    url: `${url}/api/users/${userId}/conversations`
  });
};

export const getConversation = (userId, conversationId) => {
  return axios({
    method: "GET",
    url: `${url}/api/users/${userId}/conversations/${conversationId}`
  });
};

export const postConversation = (userId, other_user) => {
  return axios({
    method: "POST",
    url: `${url}/api/users/${userId}/conversations`,
    data: { other_user }
  });
};

export const postMessage = (body, conversation_id, user_id) => {
  return axios({
    url: `${url}/api/personal_messages`,
    method: "POST",
    data: { body, conversation_id, user_id }
  });
};

export const getMessages = conversationId => {
  return axios({
    method: "GET",
    url: `${url}/api/conversations/${conversationId}`
  });
};
// export const getMessage = conversationId => {
//   return axios({
//     method: "GET",
//     url: `/api/conversations/${conversationId}`
//   });
// };
