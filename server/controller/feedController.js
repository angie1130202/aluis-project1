const FeedItems = require('../model/FeedItems');
let FeedItems1 = new FeedItems(' blue','flower','blooming');
let FeedItems2= new FeedItems('petals','and','skys');
let FeedItems3= new FeedItems('a','clam','breeze');



exports.FeedItems = [FeedItems1,FeedItems2,FeedItems3];

exports.FeedItems =(req,res)=>{
    let FeedItems = req.body
}