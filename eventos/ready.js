module.exports = (client) => {
    client.user.setPresence(
        {
            status: "ONLINE",
            activity: {
                name: "Ser un astronauta",
                type: "PLAYING"
            }
        }
    );
}