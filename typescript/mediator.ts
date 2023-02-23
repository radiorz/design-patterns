class ChatRoom {
  static showMessage(user: User, message: string) {
    console.log(`new Date()`, new Date() + user.name + ": " + message);
  }
}
class User {
  constructor(public name: string) {}
  sendMessage(message: string) {
    ChatRoom.showMessage(this, message);
  }
}

const robert = new User("Robert");
const john = new User("John");

robert.sendMessage("Hi!John!");
john.sendMessage("Hi!robert!");
