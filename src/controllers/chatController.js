const  ChatService = require("../services/chatService");
chatService = new ChatService()

  getChat = async (req, res) => {
    if (req.session.user) {
      return res.render("chat.hbs");
    } else return  res.redirect("login");
  };

  module.exports = {getChat}