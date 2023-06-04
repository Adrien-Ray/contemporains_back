module.exports = (router) => {
    router.post('/users', async (req, res) => {
        const rb = req.body;
        return res.status(200).json({ message: 'you\'re in create user root' });
    });
}
