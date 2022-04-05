// BASE SETUP
// =============================================================================
var cors = require('cors');

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express

app.use(cors());

var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 8080; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router


// temp data
const data = [{
    id:"1",
    name: 'Claire-Ann Lage',
    age: '28',
    ort: 'Karlsruhe',
    beruf: 'Dozentin DHBW Karlsruhe',
    studiengang: 'International Management',
    link: 'https://c6oxm85c.cloudimg.io/width/700/png-lossless.fgaussian0.foil1/https://az617363.vo.msecnd.net/imgmodels/models/MD10002949/r1-07980-00136be87ce8b78f472bf44518b096612dcd.jpg',
    hobbies: 'kochen, reiten',
    standort: 'Karlsruhe',
    clicked: '5'
    },
    {
        id:"2",
    name: 'Hella Kot',
    age: '36',
    ort: 'Pforzheim',
    beruf: 'IT-Security Consultant',
    studiengang: 'Wirtschaftsinformatik Software Engineering/Data Science',
    link: 'https://1.bp.blogspot.com/-NGcQZkEKqmE/Xp8V_afb-cI/AAAAAAAACas/XQ07iFaIQwMIeX6phjYT9o4obdxDqlUUgCLcBGAsYHQ/s1600/Elena%2B101.jpeg',
    hobbies: 'hacken, chatten',
    standort: 'Karlsruhe',
    clicked: '10'
    },
    {
        id:"3",
    name: 'Rainer Deutschmann',
    age: '45',
    ort: 'Stuttgart',
    beruf: 'Germanist',
    studiengang: 'Germanistik',
    link: 'https://mytie.info/wp-content/uploads/2019/05/frisuren-fur-manner-ab-50-jahren-20-besten-ideen-trendfrisuren-herren-frisuren-ab-50-jahre-2019-mogen-of-frisuren-fur-manner-ab-50-jahren.jpg',
    hobbies: 'lesen',
    standort: 'Stuttgart',
    clicked: '2'
    },
    {
        id:"4",
    name: 'Sergey Fehrlich',
    age: '56',
    ort: 'Lörrach',
    beruf: 'IT-Security Consultant Russischer Inlandsgeheimdienst',
    studiengang: 'International Management',
    link: 'https://www.bremer-dachdecker.de/images/aktuell/2018_tuedel_3.jpg',
    hobbies: 'hacken',
    standort: 'Lörrach',
    clicked: '0'
    },
    {
        id:"5",
    name: 'Hans-Jürgen Höpfner',
    age: '50',
    ort: 'Ispringen',
    beruf: 'Braumeister',
    studiengang: 'Food Management',
    link: 'https://archzine.net/wp-content/uploads/2015/11/Johnny-Depp-Brille-Kleidung-Hut-hipster-style.jpg',
    hobbies: 'brauen, golfen',
    standort: 'Stuttgart',
    clicked: '6'
    },
    {
        id:"6",
    name: 'Klaus Uhr',
    age: '40',
    ort: 'Mannheim',
    beruf: 'Sekretariat DHBW Mannheim',
    studiengang: 'Wirtschaftsingenieurwesen',
    link: 'https://archzine.net/wp-content/uploads/2015/11/Ryan-Gosling-schwarze-Jacke-symoatisches-Modell-hornbrille.jpg',
    hobbies: 'gamen',
    standort: 'Mannheim',
    clicked: '7'
    },
    {
        id:"7",
    name: 'Jürgen Jochen',
    age: '25',
    ort: 'Ulm',
    beruf: 'Buchhalter',
    studiengang: 'International Business',
    link: 'https://archzine.net/wp-content/uploads/2015/11/Junge-Jeans-blauer-Pullover-Halstuch-nerd-brille-schwarze-Rahmen.jpg',
    hobbies: 'kassierer im verein, lotto spielen',
    standort: 'Ulm',
    clicked: '1'
    },
    {
        id:"8",
    name: 'Franz Ohse',
    age: '30',
    ort: 'Straßburg',
    beruf: 'Dozent DHBW Karlsruhe',
    studiengang: 'BWL Digital Business Management',
    link: 'https://archzine.net/wp-content/uploads/2015/11/Hipster-Brille-schlichtes-Modell-h%C3%BCbscher-Mann.jpg',
    hobbies: 'backen, surfen',
    standort: 'Lörrach',
    clicked: '5'
    },
    {
        id:"9",
    name: 'Jana Türlich',
    age: '29',
    ort: 'Villingen',
    beruf: 'Dozentin DHBW Villingen-Schwenningen',
    studiengang: 'International Management',
    link: 'https://archzine.net/wp-content/uploads/2015/11/sympatisches-M%C3%A4dchen-Hipster-Look-hornbrille-runde-Form.jpg',
    hobbies: 'schwimmen, schießverein, bmx',
    standort: 'Villingen-Schwenningen',
    clicked: '3'
    }
    ]


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    return res.json({ message: 'Tinder DHBW Web App!' });
});
// return random profile 
let prevIndex, newIndex = 0;
router.get('/profiles', function(req, res) {
    do {
     newIndex = Math.floor(Math.random() * data.length);
    }
    while (newIndex == prevIndex);

    prevIndex = newIndex;

    return res.json(data[newIndex]);
});

router.get('/ranking', function(req, res) {
    console.log("Sortierte Ausgabe der Daten");
    return res.json(data.sort(sortByProperty("clicked")));
    });
    
function sortByProperty(property){ 
    return function(a,b){ 
        if(a[property] < b[property]) 
            return 1; 
        else if(a[property] > b[property]) 
            return -1; 
        return 0; 
    } 
};
// 
// [
//     {
//         name:'Claire-Ann Lage',
//         age:'28',
//         ort:'Karlsruhe',
//         studiengang:'International Management',
//         link:'https://c6oxm85c.cloudimg.io/width/700/png-lossless.fgaussian0.foil1/https://az617363.vo.msecnd.net/imgmodels/models/MD10002949/r1-07980-00136be87ce8b78f472bf44518b096612dcd.jpg',
//         hobbies:'kochen, reiten'
//     },
//     {
//         name:'Claire-Ann Lage',
//         age:'28',
//         ort:'Karlsruhe',
//         studiengang:'International Management',
//         link:'https://c6oxm85c.cloudimg.io/width/700/png-lossless.fgaussian0.foil1/https://az617363.vo.msecnd.net/imgmodels/models/MD10002949/r1-07980-00136be87ce8b78f472bf44518b096612dcd.jpg',
//         hobbies:'kochen, reiten'
//     },
//     {   
//         name:'Claire-Ann Lage',
//         age:'28',
//         ort:'Karlsruhe',
//         studiengang:'International Management',
//         link:'https://c6oxm85c.cloudimg.io/width/700/png-lossless.fgaussian0.foil1/https://az617363.vo.msecnd.net/imgmodels/models/MD10002949/r1-07980-00136be87ce8b78f472bf44518b096612dcd.jpg',
//         hobbies:'kochen, reiten'
//     }
// ]
router.get('/map', function(req, res) {
let clicks = [0, 0, 0, 0, 0, 0, 0]; //KA, MA, ST, LÖ, MO, VI, UL
    data.forEach(element => {
        if (element.standort == 'Karlsruhe') {
            clicks[0]++;
        } else if (element.standort == 'Mannheim') {
            clicks[1]++;
        } else if (element.standort == 'Stuttgart') {
            clicks[2]++;
        } else if (element.standort == 'Lörrach') {
            clicks[3]++;
        } else if (element.standort == 'Mosbach') {
            clicks[4]++;
        } else if (element.standort == 'Villingen-Schwenningen') {
            clicks[5]++;
        } else if (element.standort == 'Ulm') {
            clicks[6]++;
        }
    });
    return res.json( [{ 'karlsruhe': clicks[0] }, { 'mannheim': clicks[1] }, { 'stuttgart': clicks[2] }, { 'lörrach': clicks[3] }, { 'mosbach': clicks[4] }, { 'villingen-schwenningen': clicks[5] }, { 'ulm': clicks[6] }] );
});

router.put('/updateProfile', async(req, res) => {
    console.log(req.query);
    let index = req.query.id;
    let counter = 0;
    while (data[counter].id != index) {
    counter++;
    }
    console.log("Vor Profiländerung", data[counter]);
    data[counter].clicked++;
    console.log("Nach Profiländerung", data[counter]);
    
    res.send("PUT request success");
    });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);