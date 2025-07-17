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


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const feedController = require('./controller/feedController');

const app = express();
const PORT = 1337;

// Serve static files
app.use(express.static(path.join(__dirname, 'client/public')));

// Parse JSON bodies
app.use(bodyParser.json());

// Serve HTML views
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'client/views') });
});

app.get('/feed', (req, res) => {
    res.sendFile('feed.html', { root: path.join(__dirname, 'client/views') });
});

// API Routes for FeedItem
app.route('/api/FeedItem')
    .get(feedController.getAllFeedItem)
    .post(feedController.saveFeedItemHandler);

app.route('/api/FeedItem/:ItemId')
    .get(feedController.getFeedItem)
    .delete(feedController.deleteFeedItem)
    .patch(feedController.updateFeedItem);

// Start the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));

