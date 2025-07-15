function createFeedItem(title, body, linkUrl, imageUrl) {
  return {
    title: title,
    body: body,
    linkUrl: linkUrl,
    imageUrl: imageUrl
  };
}
const currentStories = [
    { 
        title: "flower take over!!",
        body: "flowers have been seen on campus",
        linkUrl: "https://www.marist.edu/news/campus-reopens",
        imageUrl:"https://i.pinimg.com/236x/b9/6c/98/b96c98fafef51c7581f71691ce3cc0a7.jpg"
    },
    {
        title: "petal & sky",
        body: " a calm breeze carrys the scent of blossoms across campus",
        linkUrl: "https://www.marist.edu/news/alumni-nasa",
        imageUrl:" https://dk2dv4ezy246u.cloudfront.net/widgets/sSQJoN1q6TkM_large.jpg"
    },
    {
        title: "blooming campus",
        body: "blue flowers are blooming all over campus",
        linkUrl: "https://www.marist.edu/events/career-fair",
        imageUrl: "https://i.pinimg.com/236x/f2/c5/15/f2c515877d380347d41ecba5046d6261.jpg"
    }
];

function displayItem(feedItem) {
  const newsfeed = document.getElementById("newsfeed");
  if (newsfeed) {
    newsfeed.innerHTML += `
      <div class="feed-item" style="display: flex; align-items: flex-start; gap: 15px; margin-bottom: 20px;">
        <img src="${feedItem.imageUrl}" alt="${feedItem.title}" style="width: 90px; height: auto;">
        <div>
          <h3>${feedItem.title}</h3>
          <p>${feedItem.body}</p>
          <a href="${feedItem.linkUrl}" target="_blank">Read more</a>
        </div>
      </div>
      <hr>
    `;
  }
}
document.addEventListener('DOMContentLoaded', function() {
  currentStories.forEach(displayItem);
  console.log(1)
  const portalButton = document.getElementById("portal_button");
  if (portalButton) {
    portalButton.addEventListener("click", function () {
      goToLocation("http://my.marist.edu");
    });
  }
});
