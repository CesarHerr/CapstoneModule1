const objectWorks = [
  {
    id: 'speaker1',
    title: 'James Steven',
    img: 'img/person1.svg',
    subtitle: 'Certified Mountaineering Instructor and Wilderness First Responder.',
    description2: 'As an instructor and guide for Villarrica volcano expeditions, James Steven has led countless groups to conquer the summit while sharing his passion for mountaineering and respect for nature.',
    class: '',
  },
  {
    id: 'speaker2',
    title: 'Karen Brown',
    img: 'img/person2.svg',
    subtitle: 'Certified rafting with the Chilean Ski Instructors Association.',
    description2: 'As a rafting instructor in Pucón, Chile, she enjoyed teaching and sharing her passion for white-water sports with people from all over the world, in the stunning natural surroundings of the Trancura River.',
    class: '',
  },
  {
    id: 'speaker3',
    title: 'Maria Martinez',
    img: 'img/person3.svg',
    subtitle: 'Certified Ski Instructor with the Chilean Ski Instructors Association',
    description2: "As a ski instructor in Pucón, Chile, Maria Martinez loved teaching beginners and improving advanced skiers' skills in the breathtaking landscapes of the Villarrica volcano.",
    class: 'hidden',
  },
  {
    id: 'speaker4',
    title: 'Laura Rodriguez.',
    img: 'img/person4.svg',
    subtitle: ' Certified Paragliding Instructor with the Chilean Paragliding Federation.',
    description2: ' As a paragliding instructor in Pucón, Chile, Laura Rodriguez enjoyed sharing her knowledge and experience with her students while flying over the stunning scenery of the Lake District.',
    class: 'hidden',
  },
  {
    id: 'speaker5',
    title: 'Carlos Gomez',
    img: 'img/person5.svg',
    subtitle: "Bachelor's Degree in Tourism and Hospitality Management",
    description2: "As a tour guide in Pucón, Chile, Carlos Gomez had the opportunity to showcase the region's natural beauty and cultural heritage, enriching his clients' travel experiences.",
    class: 'hidden',
  },
  {
    id: 'speaker6',
    title: 'David Lee',
    img: 'img/person6.svg',
    subtitle: 'Certified Kayaking Instructor with the American Canoe Association.',
    description2: ' As a kayaking instructor, David Lee has traveled the world teaching beginners and experts in different types of waters, from calm lakes to raging rapids.',
    class: 'hidden',
  },
];

const speakerSection = document.querySelector('.speakersCreated');
const speakersArray = [];

objectWorks.forEach((parameter, index) => {
  const createSpeaker = document.createElement('div');
  createSpeaker.classList.add('speakers__person');
  createSpeaker.innerHTML = `  
      <img src="${objectWorks[index].img}" alt="image speaker">
      <ul class="speakers__person--ul">
          <li><h3>${objectWorks[index].title}</h3></li>
          <li><p>${objectWorks[index].subtitle}</p></li>
          <li><hr></li>
          <li class="speakers__person--description">${objectWorks[index].description2}</li>
      </ul>         
    `;
  if (index > 1) {
    createSpeaker.classList.add('hidden');
  }
  speakersArray.push(createSpeaker);
});
speakerSection.append(...speakersArray);

const moreButton = document.querySelector('.more__button');
const lessButton = document.querySelector('.lessbutton');
const speakerHidden = document.querySelectorAll('.hidden');

moreButton.addEventListener('click', () => {
  speakerHidden.forEach((hide) => {
    hide.classList.toggle('hidden');
  });

  lessButton.classList.toggle('hiddenBtn');
  document.querySelector('.more__button').style.display = 'none';
});

lessButton.addEventListener('click', () => {
  speakerHidden.forEach((hide) => {
    hide.classList.toggle('hidden');
  });

  lessButton.classList.toggle('hiddenBtn');
  document.querySelector('.more__button').style.display = 'inline';
});
