var express = require('express');
var router = express.Router();

// CSWDConf API version 1.0

var books =[
    {
        "id": 1,
        "authors": ["David Flanagan"], 
        "title": "JavaScript:The Definitive Guide, 7th Edition", 
        "description": "JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You'll find illuminating and engaging example code throughout. This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level.",
        "publisher": "O'Reilly", 
        "year": "2020",
        "isbn": "978-1491952023",
        "category": "JavaScript",
        "ratings": [5,4],
        "reviews" : [
            {"username":"anon1", "review": "Great book, very comprehensive"},
            {"username":"anon2", "review": "Tells you everything you need to know about JavaScript"},
        ],
        "url": "https://pixhost.icu/avaxhome/0b/2e/00782e0b.jpg"
    },
    {
        "id": 2,
        "authors": ["David Herron"], 
        "title": "Node.js Web Development, 5th Edition", 
        "description": "Build scalable web applications using Node.js, Express.js, and the latest ECMAScript techniques, along with deploying applications with AWS and Docker with this updated fifth edition.",
        "publisher": "Packt Publishing", 
        "year": "2020",
        "isbn": "978-1838987572",
        "category": "Full-stack",
        "ratings": [2,3,3,4,5,2,3,3,2,4,4,5,4,3,5,4,2],
        "reviews" : [
            {"username":"anon", "review": "Very useful and up to date"},
        ],
        "url":"https://covers.vitalbook.com/vbid/9781838983253/width/200"
    },
    {
        "id": 3,
        "authors": ["Eve Porcello", "Alex Banks"], 
        "title": "Learning React: Modern Patterns for Developing React Apps", 
        "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional programming is necessary.",
        "publisher": "O'Reilly", 
        "year": "2020",
        "isbn": "978-1492051725",
        "category": "React",
        "ratings": [3,5,4,4,2,4,4,4,5,5,1,2,4,3],
        "reviews" : [
            {"username":"anon1", "review": "I read this cover to cover, it was amazing"},
            {"username":"anon2", "review": "Really good book for modern React developers"},
            {"username":"anon3", "review": "Upea kirja, erittäin kattava"}
        ],
        "url": "https://i.ebayimg.com/images/g/XMkAAOSwmaBe69PU/s-l640.jpg"
    },
    {
        "id": 4,
        "authors": ["Aristeidis Bampakos", "Pablo Deeleman"], 
        "title": "Learning Angular: A no-nonsense beginner's guide to building web applications with Angular 10 and TypeScript", 
        "description": "Angular, loved by millions of web developers around the world, continues to be one of the top JavaScript frameworks thanks to its regular updates and new features that enable fast, cross-platform, and secure frontend web development. With Angular, you can achieve high performance using the latest web techniques and extensive integration with web tools and integrated development environments (IDEs). Updated to Angular 10, this third edition of the Learning Angular book covers new features and modern web development practices to address the current frontend web development landscape. ",
        "publisher": "Packt Publishing", 
        "year": "2020",
        "isbn": "978-1492051725",
        "category": "Angular",
        "ratings": [4,4,4,3,3,3,5,5,2,1,1,4,5,4,3,3,3,3,3,3],
        "reviews" : [
            {"username":"anon", "review": "Diz tudo o que você precisa saber sobre Angular"}
        ],
        "url":"https://kbimages1-a.akamaihd.net/Images/bfc5a5ea-fe8f-487a-8250-d4800d1211be/300/200/85/false/null.jpg?scaleup=true&width=614&maxheight=614&method=scale"
    },
    {
        "id": 5,
        "authors": ["Sebastian Grebe"], 
        "title": "Hands-On Full-Stack Web Development with GraphQL and React", 
        "description": "React, one of the most widely used JavaScript frameworks, allows developers to build fast and scalable front end applications for any use case. GraphQL is the modern way of querying an API. It represents an alternative to REST and is the next evolution in web development. Combining these two revolutionary technologies will give you a future-proof and scalable stack you can start building your business around.",
        "publisher": "Packt Publishing", 
        "year": "2019",
        "isbn": "978-1789134520",
        "category": "Full-stack",
        "ratings": [4,5,5,5,3,2,4,5,4,4,4,3,3,5,4,4,3,1],
        "reviews" : [],
        "url":"https://static.packt-cdn.com/products/9781838555054/cover/smaller"
    },
    {
        "id": 6,
        "authors": ["Marc Garreau", "Will Faurot"], 
        "title": "Redux in Action", 
        "description": "With Redux in Action, you'll discover how to integrate Redux into your React application and development environment, write custom middleware, and optimize for performance.",
        "publisher": "Manning", 
        "year": "2018",
        "isbn": "978-1617294976",
        "category": "React",
        "ratings": [4,2,4,5,2,3,3,3,5,2,2,4,5,4,3,4,4,4,2],
        "reviews" : [
            {"username":"anon1", "review": "This book is the best thing ever in the entire world"},
            {"username":"anon2", "review": "Ag innse dhut a h-uile dad a dh ’fheumas tu a bhith agad mu JavaScript"},
        ],
        "url":"https://drek4537l1klr.cloudfront.net/garreau/Figures/cover.jpg"
    },
    {
        "id": 7,
        "authors": ["Kyle Simpson"], 
        "title": "You Don't Know JS: ES6 & Beyond", 
        "description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the You Don’t Know JS series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
        "publisher": "O'Reilly", 
        "year": "2016",
        "isbn": "978-1491904244",
        "category": "JavaScript",
        "ratings": [5,2,2,2,2,3,1,1,1,3,4,2,5,1,2,2,2],
        "reviews" : [
            {"username":"anon1", "review": "This is good but getting a bit out of date"},
            {"username":"anon2", "review": "Braw!"}
        ],
        "url":"https://static.charlieharvey.org.uk/graphics/reviews/you-dont-know-es6.jpg"
    },
    {
        "id": 8,
        "authors": ["Salvatore Loreto", "Simon Pietro Romano"], 
        "title": "Real-Time Communication with WebRTC: Peer-to-Peer in the Browser", 
        "description": "Deliver rich audio and video real-time communication and peer-to-peer data exchange right in the browser, without the need for proprietary plug-ins. This concise hands-on guide shows you how to use the emerging Web Real-Time Communication (WebRTC) technology to build a browser-to-browser application, piece by piece.",
        "publisher": "O'Reilly", 
        "year": "2014",
        "isbn": "978-1449371876",
        "category": "Real-time",
        "ratings": [5,5,5,3,3,3,5,5,5,3,3,3,5,5,3,3,3,3,5],
        "reviews" : [
            {"username":"anon1", "review": "Quite old now but still a really useful guide to an important technology"},
            {"username":"anon2", "review": "Makes a complex technology clear and understandable"},
            {"username":"anon3", "review": "Fac universa artes patet quod facile intellegi."}
        ],
        "url":"https://i5.walmartimages.com/asr/0039a766-0e1b-40de-98ee-82e95e223faf_1.3d6ed81b9e9d349d9092d12a5301d256.jpeg"
    },
    {
        "id": 9,
        "authors": ["Andrew Lombardi"], 
        "title": "WebSocket", 
        "description": "Until recently, creating desktop-like applications in the browser meant using inefficient Ajax or Comet technologies to communicate with the server. With this practical guide, you’ll learn how to use WebSocket, a protocol that enables the client and server to communicate with each other on a single connection simultaneously. No more asynchronous communication or long polling!.",
        "publisher": "O'Reilly", 
        "year": "2015",
        "isbn": "978-1449369279",
        "category": "Real-time",
        "ratings": [2,2,2,4,2,4,2,4,2,4,4,4,4,4,4,4,2,4],
        "reviews" : [
            {"username":"anon", "review": "Quite good"},
        ],
        "url":"https://d33wubrfki0l68.cloudfront.net/ca1425c0e055e8ce6dd1bce9dd3876c6f78e3b4c/92d12/images/websocket-book-comp.png"
    },
    {
        "id": 10,
        "authors": ["Frank Zammemetti"], 
        "title": "Modern Full-Stack Development: Using TypeScript, React, Node.js, Webpack, and Docker", 
        "description": "React is one of the most popular web development tools available today, and Node.js is extremely popular for server-side development.  The fact that both utilize JavaScript is a big selling point, but as developers use the language more, they begin to recognize the shortcomings, and that’s where TypeScript comes in and why it’s gaining in popularity quickly.  Add Webpack and Docker to the mix, and you’ve got a potent full development stack on which to build applications.",
        "publisher": "Apress", 
        "year": "2020",
        "isbn": "978-1484257371",
        "category": "Full-stack",
        "ratings": [],
        "reviews" : [
            {"username":"anon1", "review": "Very up to date and covers a lot of ground"},
            {"username":"anon2", "review": "Comprehensive, but could be more clearly written"},
        ],
        "url":"https://1.bp.blogspot.com/-sktImyR8bB0/Xz_GsTNJ7SI/AAAAAAAAIhY/K6bDTRcEz2c7DceqwUQrloHewkBYHdreACLcBGAsYHQ/s400/touchmaster_1598014999730.jpeg"
    },
    {
        "id": 11,
        "authors": ["Daniel Bugl"], 
        "title": "Learn React Hooks: Build and refactor modern React.js applications using Hooks", 
        "description": "React Hooks revolutionize how you manage state and effects in your web applications. They enable you to build simple and concise React.js applications, along with helping you avoid using wrapper components in your applications, making it easy to refactor code.",
        "publisher": "Packt Publishing", 
        "year": "2019",
        "isbn": "978-1838641443",
        "category": "React",
        "ratings": [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
        "reviews" : [
            {"username":"anon1", "review": "Really interesting and well written"},
            {"username":"anon2", "review": "I didn't get the point of this at all, I prefer to use Redux"},
            {"username":"anon3", "review": "Worth reading"}
        ],
        "url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572255444l/48611191._SX318_.jpg"
    },
    {
        "id": 12,
        "authors": ["Matt Frisbie"], 
        "title": "Professional JavaScript for Web Developers", 
        "description": "Professional JavaScript for Web Developers is the essential guide to next-level JavaScript development. Written for intermediate-to-advanced programmers, this book jumps right into the technical details to help you clean up your code and become a more sophisticated JavaScript developer. From JavaScript-specific object-oriented programming and inheritance, to combining JavaScript with HTML and other markup languages, expert instruction walks you through the fundamentals and beyond.",
        "publisher": "Wrox", 
        "year": "2019",
        "isbn": "978-1119366447",
        "category": "JavaScript",
        "ratings": [4,3,3,4,2,3,5,4,3,2,1,2,3,4,5,3,3,3],
        "reviews" : [
            {"username":"anon1", "review": "Comprehensive, a really good guide to modern JavaScript"},
            {"username":"anon2", "review": "I didn't get the point of this at all, I prefer to use Redux"},
            {"username":"anon3", "review": "Worth reading"}
        ],
        "url":"http://ecx.images-amazon.com/images/I/51bRhyVTVGL._SX218_BO1,204,203,200_QL40_.jpg"
    },
    {
        "id": 13,
        "authors": ["Eve Porcello", "Alex Banks"], 
        "title": "Learning GraphQL: Declarative Data Fetching for Modern Web Apps", 
        "description": "GraphQL, a data query language that provides an alternative to REST and ad-hoc webservice architectures, is the most revolutionary technology for data fetching since Ajax. Just as React has changed the way web developers approach UI, GraphQL will change the way web developers work with data over HTTP.",
        "publisher": "O'Reilly", 
        "year": "2018",
        "isbn": "978-1492030713",
        "category": "Full-stack",
        "ratings": [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5],
        "reviews" : [
            {"username":"anon", "review": "GraphQL is a really interesting technology for APIs and this book explains it very well"},
        ],
        "url":"http://dubos.ru/wp-content/uploads/2019/01/learning-graphql-declarative-data-fetching.jpg"
    },
    {
        "id": 14,
        "authors": ["Shama Hoque"], 
        "title": "Full-Stack React Projects: Learn MERN stack development by building modern web apps using MongoDB, Express, React, and Node.js", 
        "description": "Facebook's React combined with industry-tested, server-side technologies, such as Node, Express, and MongoDB, enables you to develop and deploy robust real-world full-stack web apps. This updated second edition focuses on the latest versions and conventions of the technologies in this stack, along with their new features such as Hooks in React and async/await in JavaScript. The book also explores advanced topics such as implementing real-time bidding, a web-based classroom app, and data visualization in an expense tracking app.",
        "publisher": "Packt Publishing", 
        "year": "2020",
        "isbn": "978-1839215414",
        "category": "Full-stack",
        "ratings": [4,4,4,4,4,4,4,4,4,4,4,4,4,1,5],
        "reviews" : [
            {"username":"anon1", "review": "This is probably the worst £20 I've spent since, well . . . maybe ever. The book doesn't give any background on actually learning core concepts of any of the development stack. There's no explanation given of classes/methods commonly used in React. It gives no background on what any of the NodeJS server components are doing, what's actually happening under the hood with Webpack, etc."},
            {"username":"anon2", "review": "This is a great book! "}
        ],
        "url":"https://i5.walmartimages.com/asr/d802f596-9ed1-485c-a73e-eee9e674e208.bcf34593f017dff2b2dfa496599d9315.jpeg"
    },
    {
        "id": 15,
        "authors": ["Martine Dowden", "Michael Dowden"], 
        "title": "Architecting CSS: The Programmer’s Guide to Effective Style Sheets", 
        "description": "​Leverage various CSS features in combination with popular architectures in order to bring your style sheets back under your control. While CSS is the primary technology used for building beautiful web user interfaces, the style sheet files themselves are often quite ugly; left chaotic and unstructured through lack of a consistent architectural approach. By addressing the structure of your style sheets in the same way that you do with code, see how it is possible to create style rules that are clean and easy to read. Dig deep into CSS fundamentals and learn how to use the available selectors to build powerful rules.",
        "publisher": "Apress", 
        "year": "2020",
        "isbn": "978-1484257494",
        "category": "CSS",
        "ratings": [4,3,2,4,4,4,3,5,4,2,3,5,5,4,3,3,4,5,5,5,3],
        "reviews" : [
            {"username":"anon1", "review": "ਹੁਸ਼ਿਆਰ"},
            {"username":"anon2", "review": "Блестящий"},
            {"username":"anon3", "review": "شاندار"},
            {"username":"anon4", "review": "훌륭한"}
        ],
        "url":"https://booksrun.com/image-loader/350/https:__m.media-amazon.com_images_I_41BGtwa2bfL.jpg"
    },
    {
        "id": 16,
        "authors": ["Andrew Hoffman"], 
        "title": "Web Application Security: Exploitation and Countermeasures for Modern Web Applications", 
        "description": "​While many resources for network and IT security are available, detailed knowledge regarding modern web application security has been lacking-until now. This practical guide provides both offensive and defensive security concepts that software engineers can easily learn and apply. Andrew Hoffman, a senior security engineer at Salesforce, introduces three pillars of web application security: recon, offense, and defense. You'll learn methods for effectively researching and analyzing modern web applications-including those you don't have direct access to. You'll also learn how to break into web applications using the latest hacking techniques. Finally, you'll learn how to develop mitigations for use in your own web applications to protect against hackers.",
        "publisher": "O'Reilly", 
        "year": "2020",
        "isbn": "978-1492053118",
        "category": "Security",
        "ratings": [5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,2,1],
        "reviews" : [
            {"username":"anon1", "review": "Very detailed and informative"},
            {"username":"anon2", "review": "I didn't undestand a word of this"},
        ],
        "url":"https://all-ebook.info/uploads/posts/2020-03/1583311613_1492053112.jpg"
    },
    {
        "id": 17,
        "authors": ["Eric Meyer", "Estelle Weyl"], 
        "title": "CSS: The Definitive Guide: Visual Presentation for the Web", 
        "description": "​If you're a web designer or app developer interested in sophisticated page styling, improved accessibility, and saving time and effort, this book is for you. This revised edition provides a comprehensive guide to CSS implementation, along with a thorough review of the latest CSS specifications. CSS is a constantly evolving language for describing the presentation of web content on screen, printers, speech synthesizers, screen readers, and chat windows. It is used by all browsers on all screen sizes on all types of IoT devices, including phones, computers, video games, televisions, watches, kiosks, and auto consoles. ",
        "publisher": "O'Reilly", 
        "year": "2020",
        "isbn": "978-1449393199",
        "category": "CSS",
        "ratings": [1,2,5,4,3,4,5,4,3,4,5,4,3,4,5,4,3,4],
        "reviews" : [
            {"username":"anon", "review": "A classic book and, indeed, a definitive guide"}
        ],
        "url":"https://coderprog.com/wp-content/cover/css-definitive-guide-4th.jpg"
    },
    {
        "id": 18,
        "authors": ["Prabrath Siriwardena"], 
        "title": "Advanced API Security: OAuth 2.0 and Beyond", 
        "description": "Security must be an integral part of any development project. This book shares best practices in designing APIs for rock-solid security. API security has evolved since the first edition of this book, and the growth of standards has been exponential. OAuth 2.0 is the most widely adopted framework that is used as the foundation for standards, and this book shows you how to apply OAuth 2.0 to your own situation in order to secure and protect your enterprise APIs from exploitation and attack.",
        "publisher": "Apress", 
        "year": "2019",
        "isbn": "978-1484220498",
        "category": "Security",
        "ratings": [4,4,4,3,3,3,2,2,2,1,1,1,1,1,1,1,2,2,3,5,5,5,5,5,],
        "reviews" : [],
        "url":"https://images-na.ssl-images-amazon.com/images/I/41BZkaJD8qL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
    }
]

var users = [
    {"username":"anon", "password": "anon"}
]

var interests = []

var history = [
    {"username":"anon", "bookId":1, "date": new Date().toUTCString()}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// ENDPOINTS

/* GET all details of all books */
router.get('/books', function(req, res) { 
    books.length==0 ? res.status(404): res.status(200);
    res.send(books);
})

/* GET distinct categories for books */
router.get('/books/categories', function(req, res) { 
    var categories = []
    books.forEach(x => categories.push(x.category));
    categories = categories.filter((v, i, a) => a.indexOf(v) === i);
    categories.length==0 ? res.status(404): res.status(200);
    res.send(categories);
  })
  
/* GET book by id */
router.get('/books/:id', function(req, res) { 
    var selectedbooks = books.filter(function(book) {
      return book.id == req.params["id"];
    });
    selectedbooks.length==0 ? res.status(404): res.status(200);
    res.send(selectedbooks[0]);
})

/* GET books by search term in description or title (TBD) */
router.get('/books/search/:term', function(req, res) { 
  var selectedbooks = books.filter(function(book) {
    var result = (book.description.toLowerCase().search(req.params["term"].toLowerCase())>=0) || 
        (book.title.toLowerCase().search(req.params["term"].toLowerCase())>=0);
    return result;
  });
  res.status(200);
  res.send(selectedbooks);
})

/* GET books by category */
router.get('/books/category/:term', function(req, res) { 
    var selectedbooks = books.filter(function(book) {
      return book.category.toLowerCase().search(req.params["term"].toLowerCase())>=0;
    });
    res.status(200);
    res.send(selectedbooks);
  })

/* GET books by author */
router.get('/books/authors/:term', function(req, res) { 
  var selectedbooks = books.filter(function(book) {
    return book.authors.find(el => el.toLowerCase().search(req.params["term"].toLowerCase())>=0);
  });
  res.status(200);
  res.send(selectedbooks);
})

/* GET add rating for book by id */
router.get('/books/rate/:id/:rating', function(req, res) { 
  var id = req.params["id"];
  var rating = Number(req.params["rating"]);
  var book = books.find(x => x.id == id);
  book.ratings.push(rating);
  res.status(202);
  res.send(book);
})

/* POST new review for book by id */
/* body should be of the form {"username":"anon", "review":"Great book"}  */
router.post('/books/review/:id', function(req, res) { 
  var id = req.params["id"];
  var book = books.find(x => x.id == id);
  var newreview = req.body;
  book.reviews.push(newreview);     
  res.status(202);
  res.send(book);
})

/* GET history by user */
router.get('/history/:user', function(req, res) { 
  res.status(200);
  var selectedreads = history.filter(function(read) {
    return read.username == req.params["user"];
  });
  selectedreads.length==0 ? res.status(404): res.status(200);
  res.send(selectedreads);
})

/* POST new read to history by user */
/* body should be of the form {"user":"anon", "book":2, "date":"2020-11-10T13:54:39.040Z"} */
router.post('/history/', function(req, res) { 
    var newread = req.body;
    history.push(newread);     
    res.status(202);
    res.send(newread);
  })

/* GET interests by user */
router.get('/interests/:user', function(req, res) { 
    var selectedinterests = interests.filter(function(topic) {
        return topic.username == req.params["user"];
    });
    selectedinterests.length==0 ? res.status(404): res.status(200);
    res.send(selectedinterests);
})

router.get('/recommendations/:username', function(req, res) {
    var username = req.params["username"];
    var userInterests = interests.filter(function(topic) {
        return topic.username == username;
    });
    var userHistory = history.filter(function(h) {
        return h.username == username;
    });

    //get books where matches user interests
    var relatedBooks = [];
    for(var i = 0; i < userInterests.length; ++i) {
        for(var j = 0; j < books.length; ++j) {
            if(books[j].category == userInterests[i].interest) {
                relatedBooks.push(books[j])
            }
        }
    }

    //get books where matches user history
    let historyBooks = [];
    userHistory.forEach(x => {
        let y = books.filter(function(book) {
            return book.id == x.bookId;
        })
        historyBooks.push(y[0]);
    });
    
    //snippet from https://stackoverflow.com/questions/21987909/how-to-get-the-difference-between-two-arrays-of-objects-in-javascript
    //get recomendations by differentiate 2 arrays
    var recommendations = relatedBooks.filter(comparer(historyBooks));

    res.send(recommendations);
})

//snippet from https://stackoverflow.com/questions/21987909/how-to-get-the-difference-between-two-arrays-of-objects-in-javascript
//compares 2 arrays of objects because js is dumb and doesnt compare objects using value
function comparer(otherArray){
    return function(current){
      return otherArray.filter(function(other){
        return other.id == current.id
      }).length == 0;
    }
  }


/* POST new interest by user */
/* body should be of the form {"user":"anon", "topic":"JavaScript"} */
router.post('/interests/', function(req, res) { 
    var newinterest = req.body;
    interests.push(newinterest);     
    res.status(202);
    res.send(newinterest);
})

/* POST login by user */
/* body should be of the form {"username":"anon", "password":"pass123"} */
router.post('/login/', function(req, res) {
    var user = users.filter(function(u) {
        return u.username == req.body.username;
    });

    if(user[0].password == req.body.password) {
        res.send(user[0]);
    } 
    else {
        res.status(401);
    }
})

/* POST register by user */
/* body should be of the form {"username":"anon", "password":"pass123"} */
router.post('/register/', function(req, res) {
    var user = req.body;

    //check if user already exists in array
    let checkUser = users.filter(u => {
        return u.username == user.username;
    });

    if(checkUser.length > 0) {
        res.status(400);
        res.send(user);
    } else {
        users.push(user);
        res.status(202);
        res.send(user);
    }
})

module.exports = router;
