// Define an array of fake users
const fakeUsers = [
    "John Smith",
    "Alice Johnson",
    "Bob Brown",
    "Eva Davis",
    "David Miller",
    "Sophie Wilson",
    "Michael Moore",
    "Emma Taylor"
];

// Define an array of topics
const topics = [
    "technology",
    "travel",
    "coding",
    "food",
    "fitness",
    "books",
    "movies",
    "music"
];

// Function to get a random fake user
function getRandomUser() {
    const randomIndex = Math.floor(Math.random() * fakeUsers.length);
    return fakeUsers[randomIndex];
}

// Function to get a random topic
function getRandomTopic() {
    const randomIndex = Math.floor(Math.random() * topics.length);
    return topics[randomIndex];
}

// Function to generate a fake tweet
function generateFakeTweet(topic) {
    const fakeUser = getRandomUser();
    const fakeTweet = [
        "This is a great tweet!",
        "Just had an amazing day!",
        "Feeling inspired. #coding",
        "Coffee is my best friend. ☕",
        "Excited about the weekend!",
        "Learning something new every day.",
        "Hiking in the mountains!",
        "Coding all night long!"
    ];

    const randomTweetIndex = Math.floor(Math.random() * fakeTweet.length);
    const randomTweet = fakeTweet[randomTweetIndex];

    return `<strong>${fakeUser}</strong> (${topic}): ${randomTweet}`;
}

// Function to post a fake tweet
function postFakeTweet(topic) {
    const tweetList = document.getElementById(`tweets-list-${topic}`);
    const fakeTweet = generateFakeTweet(topic);

    // Create tweet element
    const tweetItem = document.createElement("div");
    tweetItem.className = "tweet";
    tweetItem.innerHTML = fakeTweet;

    // Prepend the tweet to the list
    tweetList.prepend(tweetItem);
}

// Function to switch between sections
function navigateToSection(sectionId) {
    const sections = document.querySelectorAll('.window');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Generate some initial fake tweets on page load for each topic
topics.forEach(topic => {
    for (let i = 0; i < 3; i++) {
        postFakeTweet(topic);
    }
});

// Set initial section to display (About Gaurav)
navigateToSection('about');

// Handle navigation clicks
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        navigateToSection(sectionId);
    });
});

// Function to post a tweet for the selected topic
function postTweet(topic) {
    const tweetInput = document.getElementById("tweet-input").value;

    if (tweetInput.trim() !== "") {
        const tweetList = document.getElementById(`tweets-list-${topic}`);
        const fakeUser = getRandomUser();

        // Create tweet element
        const tweetItem = document.createElement("div");
        tweetItem.className = "tweet";
        tweetItem.innerHTML = `<strong>${fakeUser}</strong> (${topic}): ${tweetInput}`;

        // Prepend the tweet to the list
        tweetList.prepend(tweetItem);

        // Clear the tweet input
        document.getElementById("tweet-input").value = '';
    }
    // Prevent default form submission
document.getElementById("tweet-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // Your tweet registration logic here
});

document.getElementById("tweet-form").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted"); // Check if this message appears in the console
    // Your tweet registration logic here
});


}
