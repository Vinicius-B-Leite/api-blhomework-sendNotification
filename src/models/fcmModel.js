const admin = require('../firebase/admin')

async function sendMessage(tokens, title, body, imageUrl) {
    await admin.messaging().sendMulticast({
        tokens, 
        notification: {
            title,
            body,
            imageUrl
        },
    });
}


module.exports = {sendMessage}