const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
	const json = { name: 'ngyil', cool: true };

	//response should be send only once, else header already send error will show
  	//res.send('Hey! It works! cool right');

  	//console log will not come on the firebug,
  	// instead on the terminal where server is running
  	//console.log( json );

  	//json response header and data
  	//res.json( json );

  	//to get query params use req.query
  	//res.json( req.query );

  	// to render template
  	res.render('hello', {
  		name: req.query.name,
  		age: req.query.age
  	})
});

router.get('/reverse/:subject', (req, res) => {
	const reverse = [...req.params.subject].reverse().join('');
	res.send(reverse);
})

module.exports = router;
