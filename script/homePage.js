// An array of objects containing the HBCU colleges, with their name, image of their seal 
//  and link to wikipedia
const hbcuObjectsArray = [
  {
    name: 'Howard University',
    image: 'Howard_University_seal.svg.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Howard_University.html'
  },
  {
    name: 'Jackson State University',
    image: 'Jackson_State_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Jackson_State_University.html'
  },
  {
    name: 'Johnson C. Smith University',
    image: 'JCSU_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Johnson_C._Smith_University.html'
  },
  {
    name: 'Kentucky State',
    image: 'Kentucky_State_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Kentucky_State_University.html'
  },
  {
    name: 'Langston University',
    image: 'Langston_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Langston_University.html'
  },
  {
    name: 'North Carolina Agricultural & Technological University',
    image: 'Logo_NCAT_w158.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/North_Carolina_Agricultural_and_Technical_State_University.html'
  },
  {
    name: 'Miles College',
    image: 'MilesSeal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Miles_College.html'
  },
  {
    name: 'Prairie View A&M University',
    image: 'Prairie_View_A&M_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Prairie_View_A%26M_University.html'
  },
  {
    name: 'Savannah State University',
    image: 'Savannah_State_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Savannah_State_University.html'
  },
  {
    name: 'Southern University',
    image: 'Southern_University_seal.svg.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Southern_University.html'
  },
  {
    name: 'Tennesse State University',
    image: 'Tennesseestateuniversityseal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Tennessee_State_University.html'
  },
  {
    name: 'Texas Southern University',
    image: 'Texas_Southern_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Texas_Southern_University.html'
  },

  {
    name: 'Tougaloo College',
    image: 'Tougalooseal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Tougaloo_College.html'
  },
  {
    name: 'Tuskegee University',
    image: 'Tuskegee_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Tuskegee_University.html'
  },
  {
    name: 'Virginia State University',
    image: 'VSU_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Virginia_State_University.html'
  },
  {
    name: 'West Virginia State University',
    image: 'West_Virginia_State_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/West_Virginia_State_University.html'
  },
  {
    name: 'Albany State University',
    image: 'Albany_State_University_Academic_Seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Albany_State_University.html'
  },
  {
    name: 'Alcorn State University',
    image: 'Alcorn-state-uni.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Alcorn_State_University.html'
  },
  {
    name: 'Bethune-Cookman University',
    image: 'Bethune-CookmanSeal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Bethune%E2%80%93Cookman_University.html'
  },
  {
    name: 'Clark Atlanta University',
    image: 'Causeal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Clark_Atlanta_University.html'
  },
  {
    name: 'Central State University',
    image: 'Central_State_University_Presidential_Seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Central_State_University.html'
  },
  {
    name: 'Claflin University',
    image: 'Claflin_University_Seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Claflin_University.html'
  },
  {
    name: 'Delaware State University',
    image: 'Delaware_State_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Delaware_State_University.html'
  },
  {
    name: 'Florida A&M University',
    image: 'Florida_A&M_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Florida_A%26M_University.html'
  },
  {
    name: 'Grambling State University',
    image: 'Grambling_State_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Grambling_State_University.html'
  },
  {
    name: 'Hampton University',
    image: 'Hampton_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Hampton_University.html'
  },
  {
    name: 'Howard University',
    image: 'Howard_University_seal.svg.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Howard_University.html'
  },
  {
    name: 'Jackson State University',
    image: 'Jackson_State_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Jackson_State_University.html'
  },
  {
    name: 'Johnson C. Smith University',
    image: 'JCSU_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Johnson_C._Smith_University.html'
  },
  // Duplicates needed to make the Banner on the home page rotate the entire screen
  {
    name: 'Kentucky State',
    image: 'Kentucky_State_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Kentucky_State_University.html'
  },
  {
    name: 'Langston University',
    image: 'Langston_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Langston_University.html'
  },
  {
    name: 'North Carolina Agricultural & Technological University',
    image: 'Logo_NCAT_w158.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/North_Carolina_Agricultural_and_Technical_State_University.html'
  },
  {
    name: 'Miles College',
    image: 'MilesSeal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Miles_College.html'
  },
  {
    name: 'Prairie View A&M University',
    image: 'Prairie_View_A&M_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Prairie_View_A%26M_University.html'
  },
  {
    name: 'Savannah State University',
    image: 'Savannah_State_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Savannah_State_University.html'
  },
  {
    name: 'Southern University',
    image: 'Southern_University_seal.svg.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Southern_University.html'
  },
  {
    name: 'Tennesse State University',
    image: 'Tennesseestateuniversityseal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Tennessee_State_University.html'
  },
  {
    name: 'Texas Southern University',
    image: 'Texas_Southern_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Texas_Southern_University.html'
  },

  {
    name: 'Tougaloo College',
    image: 'Tougalooseal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Tougaloo_College.html'
  },
  {
    name: 'Tuskegee University',
    image: 'Tuskegee_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Tuskegee_University.html'
  },
  {
    name: 'Virginia State University',
    image: 'VSU_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Virginia_State_University.html'
  },
  {
    name: 'West Virginia State University',
    image: 'West_Virginia_State_University_seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/West_Virginia_State_University.html'
  },
  {
    name: 'Albany State University',
    image: 'Albany_State_University_Academic_Seal.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Albany_State_University.html'
  },
  {
    name: 'Alcorn State University',
    image: 'Alcorn-state-uni.png',
    link: 'https://wikipedia.tlm.cloud/viewer#wikipedia_en_computer_2017-04/A/Alcorn_State_University.html'
  },
];

// The div where the HBCU seals will be displayed
const collegeAffliates = document.querySelector('.collegeAffliates');

// map through the HBCU array to create an image for each element and provide a click for the link
hbcuObjectsArray.map((el) => {
  // create a new anchor tag element for the link
  const collegeLink = document.createElement('a');
  // provide the objects link for the href
  collegeLink.href = `${el.link}`;
  // create a new image element
  let newImg = document.createElement('img');
  // set the attribute to the element
  newImg.setAttribute('src', `../HBCUS/${el.image}`);
  // give the element the class name of hbcuImg to add styling
  newImg.classList.add('hbcuImg');
  // append the the images to the anchor tag 
  collegeLink.append(newImg);
  // append the anchor tag to the display div
  collegeAffliates.append(collegeLink);

});
// Graduation Section
const quote = document.getElementById('quote');
const gradName = document.getElementById('gradName');
const gradImg = document.getElementById('gradImg');
;
const graduates = [
  {
    name: 'Gregory James',
    img: 'studentGraduation.jpg',
    quote: 'Thanks to the Sunkissed Foundation Scholarship fund I was able to make it through college. I really enjoy all the support they have given me!'
  },
  {
    name: 'Katrina Jones',
    img: 'alabamaGrad.jpg',
    quote: 'I really feel connected to a larger community because of the Sunkissed Foundation. I now want to reach back and help others.'
  },
  {
    name: 'Darnell Whitaker',
    img: 'anotherGrad.jpg',
    quote: 'Sunkissed foundation changed my life. Shout out to all of the people who continuously support them.'
  },
  {
    name: 'Camille Thorton',
    img: 'girlGraduation.jpg',
    quote: "I was the first person in my family to go to college. I wouldn't have done it alone, thanks to all who work for the Sunkissed Foundation."
  }
];

let count = 0;
rotateGrad()

function showGraduate(obj) {
  quote.textContent = obj.quote;
  gradName.textContent = obj.name;
  gradImg.src = `../images/graduationImgs/${obj.img}`;
  gradImg.alt = `graduate ${obj.name}`;
  gradImg.style.boxShadow = '7px 9px 20px 0px #3b3930';
}

function rotateGrad() {
  showGraduate(graduates[count]);
  count++
}

setInterval(() => {
  rotateGrad()
  if (count === graduates.length) {
    count = 0;
  }
}, 4000);



