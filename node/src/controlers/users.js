module.exports = (router) => {
    // login user
    router.post('/users/login', async (req, res) => {
        const rb = req.body;
        return res.status(200).json({ message: 'road of login' });
    });
    // create user
    router.post('/users', async (req, res) => {
        const rb = req.body;
        return res.status(200).json({ message: 'you\'re in create user root' });
    });
    // modify user
    router.patch('/users/:id', async (req, res) => {
        const rb = req.body;
        return res.status(200).json({ message: 'road of modify user' });
    });
    // delete user
    router.delete('/users/:id', async (req, res) => {
        const rb = req.body;
        return res.status(200).json({ message: 'road of delete user' });
    });
}
