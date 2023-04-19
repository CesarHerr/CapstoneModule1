const objectWorks = [
  {
    id: 'speaker1',
    title: 'Name 1',      
    img: '#',      
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit at a cursus.',
    description2: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit at a cursus.',
    class: ''
  },
  {
    id: 'speaker1',
    title: 'Name 1',      
    img: '#',      
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit at a cursus.',
    description2: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit at a cursus.',
    class: ''
  },
  {
    id: 'speaker1',
    title: 'Name 1',      
    img: '#',      
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit at a cursus.',
    description2: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit at a cursus.',
    class: 'hidden'
  },
  {
    id: 'speaker1',
    title: 'Name 1',      
    img: '#',      
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit at a cursus.',
    description2: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit at a cursus.',
    class: 'hidden'
  },
  {
    id: 'speaker1',
    title: 'Name 1',      
    img: '#',      
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit at a cursus.',
    description2: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit at a cursus.',
    class: 'hidden'
  },
  {
    id: 'speaker1',
    title: 'Name 1',      
    img: '#',      
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit at a cursus.',
    description2: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit at a cursus.',
    class: 'hidden'
  },  
]

const speakerSection = document.querySelector('.speakersCreated');
let speakersArray = [];

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
    if(index > 1){
      createSpeaker.classList.add('hidden');
    }   
  speakersArray.push(createSpeaker);  
});
speakerSection.append(...speakersArray)

const moreButton = document.querySelector('.morebutton');
const partnerHidden = document.querySelector('.partner');
const footerHidden = document.querySelector('.footer');
moreButton.addEventListener('click', () => {
  for(let i = 2; i < speakersArray.length; i++){
    const speakerHidden = document.querySelector('.hidden');
    speakerHidden.classList.toggle('hidden')
  }
  partnerHidden.classList.toggle('hidden');
  footerHidden.classList.toggle('hidden');
  document.querySelector('.morebutton').style.display = 'none';
});


