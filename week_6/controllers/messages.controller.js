function getMessages(req, res) {
    res.send('hello albertt')
}

function postMessages(req, res) {
    console.log('updating messages.....')
}


module.exports = {
    getMessages,
    postMessages
}