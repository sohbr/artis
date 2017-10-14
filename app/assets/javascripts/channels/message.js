function createMessageChannel() {
  App.messages = App.cable.subscriptions.create(
    {
      channel: "MessagesChannel",
      conversation_id: parseInt($("#message_conversation_id").val())
    },
    {
      received: function(data) {
        $("#personal_messages").removeClass("hidden");
        return $("#personal_messages").append(this.renderMessage(data));
      },
      renderMessage: function(data) {
        return "<p> <b>" + data.user + ": </b>" + data.message + "</p>";
      }
    }
  );
  return App.messages;
}
