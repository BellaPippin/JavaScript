

// Dog objects

const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Black dog in bucket."
};

const dog2 = {
    heading: "Chillin'",
    image: "images/gold-dog.jpg",
    caption: "Taking it all in",
    altTag: "Golden retriever puppy."
};

const dog3 = {
    heading: "Snowman",
    image: "images/snow-dog.jpg",
    caption: "Looking for someone to play fetch with",
    altTag: "Puppy outside with snowman."
};

const dog4 = {
    heading: "Family",
    image: "images/white-dogs.jpg",
    caption: "I love you very much",
    altTag: "Mom dog kissing puppy."
};

function chooseDog(dog) {
    if (dog == 1) {
    loadMe(dog1, 1); // don't put dog1 in quotes or it will pass a string   not the object
 }  else if (dog == 2) {
    loadMe (dog2, 2);
 }  else if (dog == 3) {
    loadMe (dog3, 3);
 }  else if (dog == 4) {
    loadMe (dog4, 4);
 }
}

function loadMe(dog, dogNum) {
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
}

function hideButton(button) {
    document.getElementById(button).style.display = 'none';
}

