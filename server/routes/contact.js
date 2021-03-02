let express = require('express');
let router = express.Router();

let contactController = require('..controllers/contact');

/*GET CONTACT US PAGE. */
router.get('/', contractController.displayContactPage);

/*POST FROM CONTACT US PAGE. */
router.post('/', contactContoller.processContactInformation);

moduleexports = router