/*
const express = require('express');
const bodyParser = require('body-parser');
const feedController = require('./controller/feedController');

const app = express();
const port =1337;

// serve static files from client/public
app.use(express.static('client/public'));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes to serve HTML files
app.get('/', function(req, res){
    res.sendFile(index.html',{ root: './client/views});
});

app.get('/feed', function(req, res'){
    res.sendFile('feed.html', { root: './client/views'});
});

// API routes for feed
app.route('/api/feed')
    .get(feedController.getAllFeedItems)
    .post(feedController.saveFeedItem);

app.route(./api/feed/:id')
    .get(feedController.getFeedItem)
    .delete(feedController.deleteFeedItem)
    .patch(feedController.updateFeedItem);
.
// Start the server once
app.listen(port,() =>{
    console.log('server running at http://localhost:${port}');
});
*/


const express = require('express')
const app = express();
app.use(express.static('client/public'));

app.get('/', function(req,res){
    res.sendFile('index.html',{root: './client/views'})
})
app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})
let feedController = require('./controller/feedController');

app.route('/api/FeedItems')
    .get(feedController.getAllFeedItems)
    .post(feedController.saveFeedItems)

app.route('/api/FeedItems/:id')
    .get(feedController.getFeedItems)



app.listen(1337, () => console.log('Listening on port 1337.'))

