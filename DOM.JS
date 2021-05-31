let container=document.createElement("div")
container.setAttribute("class","class1")
document.querySelector("body").appendChild(container)


let imgcontainer=document.createElement("div")
imgcontainer.setAttribute("class","imagecls")
document.querySelector("body").appendChild(imgcontainer)
container.appendChild(imgcontainer);

let image=document.createElement("img")
image.setAttribute("src","./image/ElonMusk.jpg")
document.querySelector("body").appendChild(image)
imgcontainer.appendChild(image);

let whiteline=document.createElement("div")
whiteline.setAttribute("class","clswhite")
document.querySelector("body").appendChild(whiteline)
container.appendChild(whiteline);

let personname=document.createElement("div")
personname.setAttribute("class","pername")
let h1tag=document.createElement("h1")
h1tag.innerHTML="Elon-Musk";
personname.appendChild(h1tag);
whiteline.appendChild(personname)

let linetop=document.createElement("div")
linetop.setAttribute("class","linehr")
let hrline=document.createElement("p")
hrline.innerText="N.Damen Avenue, Chicago 99999 |999-999-9999  |hello@kickresume.com |WWW.kickresume.com ";
linetop.appendChild(hrline);
container.appendChild(linetop)

//profile:
let profilesec=document.createElement("div")
profilesec.setAttribute("class","profilesec")

let iconsec=document.createElement("i")
iconsec.setAttribute("class","fas fa-user-circle")
profilesec.appendChild(iconsec)

let headtag=document.createElement("h3")
headtag.setAttribute("class","headtag")
headtag.innerHTML="profile";
profilesec.appendChild(headtag);

let para=document.createElement("p")
para.setAttribute("class","para")
para.innerHTML=" Innovative optimized solution seeker.Excited  to be at the deployment  phase of my new career as a web deveoper.I am ambitious,adventurous,assidous,animated,and an aliteration advocate.";
profilesec.appendChild(para);

container.appendChild(profilesec);


//skills:
let skillset=document.createElement("div")
skillset.setAttribute("class","skillset")

let skillset2=document.createElement("div")
skillset2.setAttribute("class","skillset2")
skillset.appendChild(skillset2);


let iconskill=document.createElement("i")
iconskill.setAttribute("class","fas fa-book-reader")
profilesec.appendChild(iconskill)

let headtag1=document.createElement("h3")
headtag1.setAttribute("class","headtag1")
headtag1.innerHTML="Skills";
skillset.appendChild(headtag1);

let headtags2=document.createElement("h4")
headtags2.setAttribute("class","headtags2")
headtags2.innerHTML="Technical Skills";
skillset.appendChild(headtags2);

container.appendChild(skillset);


//technical skill lists:
let techbox=document.createElement("div")
techbox.setAttribute("class","techbox")
skillset.appendChild(techbox);

var technicalskillnameslist =["Javascript","HTML","CSS","React","Redux","MangoDB","Deployment"]

technicalskillnameslist.forEach((value,i)=>{
      let technicalskillnames=document.createElement("p");
      technicalskillnames.innerHTML=value;
      techbox.appendChild(technicalskillnames);
});
//range:
let range=document.createElement("div");
range.setAttribute("class","range");
let range1=document.createElement("div");
range1.setAttribute("class","range1");

let technicalskillrangevalue=[85,75,90,80,95,85,100];

technicalskillrangevalue.forEach((value,i)=>{
      let technicalskillrange=document.createElement("input");
      technicalskillrange.setAttribute("class","range1");
      technicalskillrange.setAttribute("type","range");
      technicalskillrange.disabled=true;
      technicalskillrange.setAttribute("value",value);
      range.appendChild(technicalskillrange);
});
range.appendChild(range1);   
techbox.appendChild(range);


//Additional skills:
let addsk=document.createElement("div")
addsk.setAttribute("class","addsk")
techbox.appendChild(addsk)

let headtags2x=document.createElement("h4")
headtags2x.setAttribute("class","headtags2x")
headtags2x.innerHTML="Additional Skills";
addsk.appendChild(headtags2x);

container.appendChild(skillset);

//Additional skills -list:
let techboxx=document.createElement("div")
techboxx.setAttribute("class","techboxx")

   
var technicalskillnameslistx =["Project Management","Requirement","Business developement","React","Redux"]

technicalskillnameslistx.forEach((value,i)=>{
      let technicalskillnamesx=document.createElement("p");
      technicalskillnamesx.innerHTML=value;
      addsk.appendChild(technicalskillnamesx);
});
//range:
let rangex=document.createElement("div");
rangex.setAttribute("class","rangex");
let rangexx=document.createElement("div");
rangexx.setAttribute("class","rangexx");

let technicalskillrangevaluex=[80,70,90,75,65];

technicalskillrangevaluex.forEach((value,i)=>{
      let technicalskillrangex=document.createElement("input");
      technicalskillrangex.setAttribute("class","rangex1");
      technicalskillrangex.setAttribute("type","range");
      technicalskillrangex.disabled=true;
      technicalskillrangex.setAttribute("value",value);
      rangexx.appendChild(technicalskillrangex);
});
rangex.appendChild(rangexx);   
techboxx.appendChild(rangex);
addsk.appendChild(techboxx);

//Working experience:
let workex=document.createElement("div");
workex.setAttribute("class","workex");

let workex2=document.createElement("div");
workex2.setAttribute("class","workex2");
workex.appendChild(workex2);


let workexicon=document.createElement("i");
workexicon.setAttribute("class","fas fa-briefcase");
workex2.appendChild(workexicon);

let workexhead=document.createElement("h3");
workexhead.setAttribute("class","workexhead");
workexhead.innerHTML="Work Experience";
workex2.appendChild(workexhead);

let workexhead2=document.createElement("h4");
workexhead2.setAttribute("class","workexhead2");
workexhead2.innerHTML="Event Manager";
workex2.appendChild(workexhead2);

let workexspan=document.createElement("span");
workexspan.innerHTML="03/2014 - 02/2017 <br/> C3 Presents,Washington DC  ";
workexspan.setAttribute("class","workspan");
workex2.appendChild(workexspan);

workex.appendChild(workex2);
addsk.appendChild(workex);  //!


//workExperience lists:
let ullist=document.createElement("ul");
ullist.setAttribute("class","ullist");

let lilist=document.createElement("li");
lilist.setAttribute("class","lilist");
lilist.innerHTML="Lead and execute all phases of event planning and production spaning commite recuirement, training, vender relationship and on-site facilization."
ullist.appendChild(lilist);

let lilist2=document.createElement("li");
lilist2.setAttribute("class","lilist");
lilist2.innerHTML="Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the state department summit on the Middle East and the companiest largest civic event to date ,the United State of Women."

let lilist3=document.createElement("li");
lilist3.setAttribute("class","lilist");
lilist3.innerHTML=" Exercise fiscal control over budget creation, tracking and reporting.collaborarte with Emoloyees at all organization levels to advanced cohensive operations."

ullist.appendChild(lilist2);
ullist.appendChild(lilist3);
workex.appendChild(ullist);


//Working experience-x:
let rightbox=document.createElement("div");
rightbox.setAttribute("class","rightbox");

let rightbox2=document.createElement("div");
rightbox2.setAttribute("class","rightbox2");

let rightboxicon=document.createElement("i");
rightboxicon.setAttribute("class","fas fa-briefcase");


let rightboxhead=document.createElement("h3");
rightboxhead.setAttribute("class","rightboxhead");
rightboxhead.innerHTML="Work Experience";


let rightboxhead2=document.createElement("h4");
rightboxhead2.setAttribute("class","rightboxhead2");
rightboxhead2.innerHTML="Communication Realtions- Manager";
rightbox2.appendChild(rightboxhead2);

let rightboxspan=document.createElement("span");
rightboxspan.innerHTML="03/2014 - 02/2017 <br/> C3 Presents,Washington DC  ";
rightboxspan.setAttribute("class","rightboxspan");
rightbox2.appendChild(rightboxspan);

rightbox2.appendChild(rightboxhead);
rightbox2.appendChild(rightboxicon);
rightbox.appendChild(rightbox2);
workex.appendChild(rightbox); //! 

//workExperience lists -x:
let ullistx=document.createElement("ul");
ullistx.setAttribute("class","ullistx");

let lilistx=document.createElement("li");
lilistx.setAttribute("class","lilist");
lilistx.innerHTML=" Arranging presentation and pitch deck "


let lilist2x=document.createElement("li");
lilist2x.setAttribute("class","lilist");
lilist2x.innerHTML="Designing a PR plan and estsblishment important focus points "

let lilist3x=document.createElement("li");
lilist3x.setAttribute("class","lilist");
lilist3x.innerHTML="Designing,creation and managing content across multiple communication platforms."

let lilist4x=document.createElement("li");
lilist4x.setAttribute("class","lilist");
lilist4x.innerHTML=" Building relationships with key media players."

ullistx.appendChild(lilist4x);
ullistx.appendChild(lilist3x);
ullistx.appendChild(lilist2x);
ullistx.appendChild(lilistx);
rightbox.appendChild(ullistx); //!

//Education:
let rbox=document.createElement("div");
rbox.setAttribute("class","rbox");

let rbox2=document.createElement("div");
rbox2.setAttribute("class","rbox2");


let rboxicon=document.createElement("i");
rboxicon.setAttribute("class","fas fa-graduation-cap");
rbox2.appendChild(rboxicon);

let rboxhead=document.createElement("h3");
rboxhead.setAttribute("class","rboxhead");
rboxhead.innerHTML=" Education";
rbox2.appendChild(rboxhead);

let rboxhead2=document.createElement("h4");
rboxhead2.setAttribute("class","rboxhead2");
rboxhead2.innerHTML="Engineering Immersion- Program";
rbox2.appendChild(rboxhead2);

let rboxspan=document.createElement("span");
rboxspan.innerHTML="11/2018 - 06/2018 ";
rboxspan.setAttribute("class","rboxspan");
rbox2.appendChild(rboxspan);

rbox.appendChild(rbox2);
workex.appendChild(rbox);//! 


//Education-list:
let Edu=document.createElement("ul");
Edu.setAttribute("class","Edu");

let Edux=document.createElement("li");
Edux.setAttribute("class","Edux");
Edux.innerHTML="  Project-focused intensive program with emphasis on Mango,Express ,React, and Javascript (MERN) technical stack. "

let Edu2x=document.createElement("li");
Edu2x.setAttribute("class","Edux");
Edu2x.innerHTML="Developer a Full-stack web application ,using React that allows users to explore various aspects of meditation.User's progess is stored on a backend created using node MongoDB. "

let Edu3x=document.createElement("li");
Edu3x.setAttribute("class","Edux");
Edu3x.innerHTML="   Developed a language learning app foodie Phonetics  using spaced repetition and a linked list data structure.React was used to create the front end components while Node and Mango were used to create a backend that stores data."


Edu.appendChild(Edu3x);
Edu.appendChild(Edu2x);
Edu.appendChild(Edux);
rightbox.appendChild(Edu);//!

//lastone:

let lone=document.createElement("div");
lone.setAttribute("class","lone");

let lonehead=document.createElement("h3");
lonehead.setAttribute("class","lonehead");
lonehead.innerHTML="BA, English";
lone.appendChild(lonehead);

let lonedate=document.createElement("span");
lonedate.innerHTML="11/2018 - 06/2018 ";
lonedate.setAttribute("class","lonedate");
lone.appendChild(lonedate);

let lonepara=document.createElement("p");
lonepara.innerHTML="University of California,Los Angles";
lonepara.setAttribute("class","lonepara");
lone.appendChild(lonepara);
Edu.appendChild(lone);

