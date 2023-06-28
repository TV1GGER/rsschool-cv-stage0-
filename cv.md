  > # __Dzianis Perahudau__


![Photo](https://i.ibb.co/tJbS2DV/IMG-20220824-085738999999.jpg)

### **Contacts:**

##### *Phone: +375 33 6101231*

##### *E-mail: tvigger@yandex.ru*

##### *Telegram: @tvigger*

***

### __My priorities:__ 
 Get theoretical knowledge and consolidate it in practice, constantly upgrade Soft and Hard skills.

***

### __My goals:__
 Develop in the IT field in the areas of QA-Manual (hereinafter QA-Automation) and Frontend Dev. 

***

### __Personal qualities:__

  - readiness for constant self
  - development
  - sociability
  - ability to learn quickly
  - attentiveness
  - purposefulness
  - activity
  - independence
  - logical thinking

***

### __Skills:__ 

 MS Excel/Word, Adobe Photoshop, Chrome DevTools, Jira, Bug Reporting, JavaScript, Git, VS Code, CSS, HTML5, Figma.


***

### __Code example:__ 

```javascript

import {getTimeOfDay} from './greetings.js'
import {animatedToggle9} from './settings.js'
import {getLinkToImageFlickr} from './image-from-API.js'
 
 const slideNext = document.querySelector('.slide-next');
 const slidePrev = document.querySelector('.slide-prev');
 let randomNum = getRandomNum();
 
 getTimeOfDay();


function getRandomNum(min, max) {
    const minM = Math.ceil(min);
    const maxM = Math.floor(max);
    return Math.floor(Math.random() * (maxM - minM + 1)) + minM;
    
};
getRandomNum(1, 20);



function setBg() {
    let body = document.querySelector('body');
    let img = document.createElement('img');
    const timeOfDay = getTimeOfDay();
    let bgNum = getRandomNum(1, 20).toString().padStart(2, '0');
   img.src = `https://raw.githubusercontent.com/TV1GGER/stage1-tasks/assets/images/`+`${timeOfDay}`+`/`+`${bgNum}`+`.jpg`;
   img.addEventListener('load', function loadImg(){
    body.style.backgroundImage = `url(${img.src})`;
   });

};



function getSlideNext() {   
    if(randomNum<20){
        randomNum++;
    }else if(randomNum===20){
        randomNum=1;
    };
   if((localStorage.getItem('isOnToggleApiControls') === 'false')){
        getLinkToImageFlickr();
    }else if((localStorage.getItem('isOnToggleApiControls') === 'true') || (!localStorage.getItem('isOnToggleApiControls'))){
        setBg();
    };
};

function getSlidePrev() {   
     if((randomNum<=20) || (randomNum!==1)){
        randomNum--;
    }else if(randomNum===1){
        randomNum=20;
    };
   if((localStorage.getItem('isOnToggleApiControls') === 'false')){
        getLinkToImageFlickr();
    }else if((localStorage.getItem('isOnToggleApiControls') === 'true') || (!localStorage.getItem('isOnToggleApiControls'))){
        setBg();
    };
};



slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

export {getRandomNum}
export {setBg}

```
***

### __Experience:__

- [X] "Morse code decoder" task. Skills used: JavaScript, Git, VS Code. [Link to task](https://github.com/romacher/morse-decoder). [Link to source code](https://github.com/TV1GGER/morse-decoder/blob/master/src/index.js).

- [X] "Plants" task. Skills used: JavaScript, Git, CSS, HTML5, Figma, Chrome DevTools, VS Code. [Link to task](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/plants/plants.md). [Link to deployed version](https://rolling-scopes-school.github.io/tv1gger-JSFEPRESCHOOL2022Q4/plants/).

- [X] "Momentum" task. Skills used: JavaScript, Git, CSS, HTML5, Figma, Chrome DevTools, VS Code. [Link to task](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/momentum/momentum-stage1.md). [Link to deployed version](https://tv1gger-momentum.netlify.app/).

***

### __Education/Courses:__

- [X] March 04, 2023 completed the "JS/FE Pre-School 2022Q4" RS School course ([my certificate](https://app.rs.school/certificate/hcrttvje)) 

![app.rs.school(Screenshot)](https://i.ibb.co/phsDrRZ/Screenshot-2.png)
- [X] December, 2022 completed the: "JavaScript: Perfect for Beginners", "HTML: Perfect for Beginners", "CSS: Free Online Learning for Beginners" (from https://code-basics.com) 

![code-basics.com(Screenshot)](https://i.ibb.co/sVhH6Kn/Screenshot-1.png)
- [X] Self-education through YouTube video tutorials
- [X] August 10, 2022 went to the course "QA Start" at https://edu.academiait.ru
- [X] 08/26/2022, participated in the webinar "Beginner's Guide to Careers in Tech", EPAM
- [X] 11/24/2022 successfully completed the course "Software Testing Introduction(RUS)", Svyatoslav Kulikov(EPAM)
- [X] 2021, passed simulators "Fundamentals of HTML, JS, CSS.", htmlacademy.ru 

![htmlacademy.ru(Screenshot)](https://i.ibb.co/rxvMShv/Screenshot-4.png)
- [X] 11/26/2021 completed the "Fundamentals of Software Testing" course at https://practicum.yandex.ru/. 

![practicum.yandex.ru(Screenshot)](https://i.ibb.co/sg0zx29/Screenshot-8.png)
- [X] 2007-2012 "Polotsk State University", majoring in "Modeling and computer design of radio-electronic means", qualification: engineer in radio electronics.
- [X] 2003-2007 "Novopolotsk State Polytechnic College", specializing in "Automation of technological processes and production", qualified: electrical engineer, profession: instrumentation and automation fitter.
- [X] 2002-2002 "Institute for advanced training and retraining of managers and specialists of the educational institution Polotsk State University", specialty: "PC operator-user".

***

##### *My __level of English__ (as measured by the EPAM Training Center tests)*: __B2__