// local review data
const reviews = [
  {
    id: 1,
    name: 'Samuel Peters',
    job: 'Digital Marketer',
    img: 'person-2.jpg',
    text: "Well formulated with ideal design. comes handy and fresh. really the best product ive purchased for the year. i also hope others will find it useful as i did. I must give it as 5 star rating, because it really wort it",
  },
  {
    id: 2,
    name: 'Angelina Eliah',
    job: 'Software Developer',
    img: 'person-3.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'Roseline Dankea',
    job: 'intern',
    img: 'person-4.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'Usain Miracle',
    job: 'Data Analyst',
    img: 'person-5.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// select items
const reviewImg = document.getElementById('reviewer-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const review = document.getElementById('reviews');

const prevBtn = document.querySelector('.left-direction');
const nextBtn = document.querySelector('.right-direction');
const randomBtn = document.querySelector('.random-btn');

// set starting items
let currentItem = 0;

// load initail item
window.addEventListener('DOMContentLoaded', function () {
  showPerson();
});

// show person function
function showPerson() {
  const item = reviews[currentItem];
  reviewImg.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  review.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function() {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show prev person

prevBtn.addEventListener('click', function() {
  currentItem --;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// set-up the random button

randomBtn.addEventListener('click', function() {
   
   currentItem = Math.round(Math.random()*4);
   showPerson();
});
