import * as MessageAPIUtil from "../util/message_api_util";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_CONVERSATIONS = "RECEIVE_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";

export const receiveMessages = messages => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  };
};

export const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    message
  };
};

export const receiveConversations = conversations => {
  return {
    type: RECEIVE_CONVERSATIONS,
    conversations
  };
};

export const receiveConversation = conversation => {
  return {
    type: RECEIVE_CONVERSATION,
    conversation
  };
};

export const getMessages = conversationId => dispatch => {
  MessageAPIUtil.getMessages(conversationId)
    .then(res => {
      dispatch(receiveMessages(res.data));
    })
    .catch(errors => {});
};

export const postMessage = (body, conversationId, userId) => dispatch => {
  MessageAPIUtil.postMessage(body, conversationId, userId)
    .then(res => {
      dispatch(receiveMessage(res.data, conversationId));
    })
    .catch(errors => {
      console.log("post fail");
    });
};

export const postConversation = (userId, otherUserId) => dispatch => {
  return MessageAPIUtil.postConversation(userId, otherUserId)
    .then(res => {
      dispatch(receiveConversation(res.data));
    })
    .catch(errors => {});
};

export const getConversations = userId => dispatch => {
  MessageAPIUtil.getConversations(userId)
    .then(res => {
      dispatch(receiveConversations(res.data));
    })
    .catch(errors => {});
};

export const getConversation = (userId, conversationId) => dispatch => {
  MessageAPIUtil.getConversation(userId, conversationId)
    .then(res => {
      dispatch(receiveConversation(res.data));
    })
    .catch(errors => {});
};
