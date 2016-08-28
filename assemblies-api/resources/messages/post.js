console.log('MESSAGE CREATED', this);
var text = this.text;
var senderId = this.senderId;
var recipientId = this.recipientId;
var createdAt = this.createdAt;

dpd.users.get({ id: recipientId })
.then(function(user){
    dpd.users.get({ id: senderId })
    .then(function(currentUser){
      console.log('SENDER', user.firstName, currentUser.firstName);
      dpd.notifications.post({
        type: 'Message',
        participants: [{userId: recipientId, seen: false}],
        message: 'New message from ' + currentUser.firstName,
        createdAt: new Date().valueOf(),
        data: {
            user: currentUser
        }
      })  
    })
})

dpd.conversations.get({
    $or: [
        {user1Id: senderId, user2Id: recipientId},
        {user2Id: senderId, user1Id: recipientId}
    ]
})
.then(function(data){
    console.log('DATA', data);
    if (data.length) {
        dpd.conversations.put(data[0].id, {
            lastMessageText: text,
            lastMessageDate: createdAt
        });
    } else {
        dpd.conversations.post({
            user1Id: senderId,
            user2Id: recipientId,
            lastMessageText: text,
            lastMessageDate: createdAt
        });
    }
});