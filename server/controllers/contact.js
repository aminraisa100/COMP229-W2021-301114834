/* GET contact us page */

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact',
    {

    });
};

/*POST from contact us page */
module.exports.processContactInformation = (req, res, next) => {
    contact.firstName = req.body.fname;
    res.redirect('/home');
};