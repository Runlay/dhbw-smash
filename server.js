// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    return res.json({ message: 'Tinder DHBW Web App!' });
});

router.get('/profiles', function(req, res) {
    return res.json({name:'Claire-Ann Lage',
            age:'28',
            ort:'Karlsruhe',
            studiengang:'International Management',
            link:'https://cdn.businessinsider.de/wp-content/uploads/2021/05/609e801067e41a00186220fb-1024x768.jpg',
            hobbies:'kochen, reiten'} );
});

router.get('/test', function(req, res) {
    return res.json({name:'Claire-Ann Lage',
            age:'28',
            ort:'Karlsruhe',
            studiengang:'International Management',
            link:'https://cdn.businessinsider.de/wp-content/uploads/2021/05/609e801067e41a00186220fb-1024x768.jpg',
            hobbies:'kochen, reiten'} );
});

router.get('/ranking', function(req, res) {
    return res.json([{name:'Claire-Ann Lage',
            age:'28',
            ort:'Karlsruhe',
            studiengang:'International Management',
            link:'https://cdn.businessinsider.de/wp-content/uploads/2021/05/609e801067e41a00186220fb-1024x768.jpg',
            hobbies:'kochen, reiten'},
    	    {name:'Claire-Ann Lage',
            age:'28',
            ort:'Karlsruhe',
            studiengang:'International Management',
            link:'https://cdn.businessinsider.de/wp-content/uploads/2021/05/609e801067e41a00186220fb-1024x768.jpg',
            hobbies:'kochen, reiten'},
            {name:'Claire-Ann Lage',
            age:'28',
            ort:'Karlsruhe',
            studiengang:'International Management',
            link:'https://cdn.businessinsider.de/wp-content/uploads/2021/05/609e801067e41a00186220fb-1024x768.jpg',
            hobbies:'kochen, reiten'}]);
        });

    router.get('/map', function(req, res) {
           return res.json({ 'standort':[{'karlsruhe': '1'}, {'mannheim':'2'}, {'stuttgart':'3'}, {'lörrach':'4'}] });
        });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);