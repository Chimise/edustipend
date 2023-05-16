const matchAll = (req, res) => {
    res.status(404).json({
        message: `This route '${req.path}' does not exist`
    })
}

module.exports = matchAll;