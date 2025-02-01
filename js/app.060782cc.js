(function(){"use strict";var e={965:function(e,n,t){var i=t(5130),o=t(6768);const a={id:"app"};function r(e,n,t,i,r,s){const c=(0,o.g2)("AppHeader"),l=(0,o.g2)("router-view"),d=(0,o.g2)("AppFooter");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.bF)(c),(0,o.bF)(l),(0,o.bF)(d)])}var s=t(4232);const c={class:"navbar"},l={key:0},d={key:1};function u(e,n,t,i,a,r){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("nav",c,[n[5]||(n[5]=(0,o.Lk)("div",{class:"logo"},[(0,o.Lk)("h1",null,"Zayeem Zaki")],-1)),(0,o.Lk)("div",{class:"menu-icon",onClick:n[0]||(n[0]=(...e)=>r.toggleMenu&&r.toggleMenu(...e))},[a.menuOpen?((0,o.uX)(),(0,o.CE)("span",d,"×")):((0,o.uX)(),(0,o.CE)("span",l,"☰"))]),(0,o.Lk)("ul",{class:(0,s.C4)(["nav-links",{open:a.menuOpen}])},[(0,o.Lk)("li",null,[(0,o.bF)(u,{to:"/about-me",onClick:r.closeMenu},{default:(0,o.k6)((()=>n[1]||(n[1]=[(0,o.eW)("Home")]))),_:1},8,["onClick"])]),(0,o.Lk)("li",null,[(0,o.bF)(u,{to:"/experience",onClick:r.closeMenu},{default:(0,o.k6)((()=>n[2]||(n[2]=[(0,o.eW)("Experience")]))),_:1},8,["onClick"])]),(0,o.Lk)("li",null,[(0,o.bF)(u,{to:"/portfolio",onClick:r.closeMenu},{default:(0,o.k6)((()=>n[3]||(n[3]=[(0,o.eW)("Projects")]))),_:1},8,["onClick"])]),(0,o.Lk)("li",null,[(0,o.bF)(u,{to:"/contact",onClick:r.closeMenu},{default:(0,o.k6)((()=>n[4]||(n[4]=[(0,o.eW)("Contact")]))),_:1},8,["onClick"])])],2)])}var p={name:"AppHeader",data(){return{menuOpen:!1}},methods:{toggleMenu(){this.menuOpen=!this.menuOpen},closeMenu(){this.menuOpen=!1}}},m=t(1241);const f=(0,m.A)(p,[["render",u],["__scopeId","data-v-0642ba9c"]]);var h=f;const g={class:"footer"};function k(e,n,t,i,a,r){return(0,o.uX)(),(0,o.CE)("footer",g,n[0]||(n[0]=[(0,o.Lk)("p",null,"© 2025 Zayeem. Developed using Vue.",-1)]))}var v={name:"AppFooter"};const b=(0,m.A)(v,[["render",k],["__scopeId","data-v-e5c9d796"]]);var y=b,w={name:"App",components:{AppHeader:h,AppFooter:y}};const L=(0,m.A)(w,[["render",r]]);var C=L,I=t(1387);const A={class:"home"},x={class:"intro"},_={class:"social-links"},W=["href"],S=["href"],T=["href"],P=["href"],j=["href"];function O(e,n,t,i,a,r){return(0,o.uX)(),(0,o.CE)("section",A,[(0,o.Lk)("div",x,[n[0]||(n[0]=(0,o.Lk)("h2",null,"Welcome to My Personal Page",-1)),n[1]||(n[1]=(0,o.Lk)("div",{className:"about-me"},[(0,o.Lk)("p",{"data-aos":"fade-up"},[(0,o.eW)(" I am a passionate and driven Computer Science student at The University of Toledo, set to graduate in December 2025. With a strong GPA of 3.7 and recognition on the President's and Dean's Lists, I have cultivated a solid foundation in "),(0,o.Lk)("b",null," Data Structures"),(0,o.eW)(", "),(0,o.Lk)("b",null,"Object-Oriented Programming"),(0,o.eW)(", and "),(0,o.Lk)("b",null,"Software Development"),(0,o.eW)(". ")]),(0,o.Lk)("p",{"data-aos":"fade-up"},[(0,o.eW)(" My internship at "),(0,o.Lk)("b",null,"First Solar"),(0,o.eW)(" as an IT Security Intern allowed me to apply my technical expertise to automate workflows using "),(0,o.Lk)("b",null,"Python"),(0,o.eW)(" and "),(0,o.Lk)("b",null,"CrowdStrike APIs"),(0,o.eW)(", manage user permissions, and execute real-time security commands. Additionally, I developed a "),(0,o.Lk)("b",null,"Flask-based"),(0,o.eW)(" website with a "),(0,o.Lk)("b",null,"Bootstrap-powered"),(0,o.eW)(" front-end, streamlining administrative tasks and enhancing user experience. This hands-on experience strengthened my problem-solving abilities and exposed me to dynamic, cross-functional teamwork in a fast-paced environment. ")]),(0,o.Lk)("p",{"data-aos":"fade-up"},[(0,o.eW)(" I have developed and deployed innovative solutions, including an "),(0,o.Lk)("b",null,"online ordering restaurant website, U-Eats,"),(0,o.eW)(" hosted on AWS Amplify, leveraging "),(0,o.Lk)("b",null,"React.js"),(0,o.eW)(" and "),(0,o.Lk)("b",null,"Node.js"),(0,o.eW)(" to create a seamless user experience. My work on the "),(0,o.Lk)("b",null,"NeuroTransmitter iOS app"),(0,o.eW)(" for the University of Toledo enhanced research paper management and doctor communication through user-centric design and advanced document editing features. ")]),(0,o.Lk)("p",{"data-aos":"fade-up"},[(0,o.eW)(" My technical toolkit includes proficiency in "),(0,o.Lk)("b",null,"Python, Java, Swift, C++, JavaScript,"),(0,o.eW)(" and expertise in frameworks and tools like "),(0,o.Lk)("b",null,"Spring Boot, React, Firebase, Docker, Kubernetes,"),(0,o.eW)(" and "),(0,o.Lk)("b",null,"AWS"),(0,o.eW)(". I am equally passionate about exploring machine learning concepts and backend infrastructure systems. ")]),(0,o.Lk)("p",{"data-aos":"fade-up"},[(0,o.eW)(" As I aspire to become a "),(0,o.Lk)("b",null,"Software Developer"),(0,o.eW)(", I am eager to contribute to innovative projects and solve real-world problems. I thrive in dynamic environments and am committed to creating impactful solutions that drive progress and efficiency. ")])],-1)),(0,o.Lk)("div",_,[(0,o.Lk)("a",{href:a.social.github,target:"_blank"},"GitHub",8,W),(0,o.Lk)("a",{href:a.social.linkedin,target:"_blank"},"LinkedIn",8,S),(0,o.Lk)("a",{href:a.social.portfolio,target:"_blank"},"Portfolio",8,T),(0,o.Lk)("a",{href:a.social.youTube,target:"_blank"},"YouTube",8,P),(0,o.Lk)("a",{href:a.social.leetCode,target:"_blank"},"LeetCode",8,j)])])])}var E={name:"HomePage",data(){return{social:{github:"https://github.com/zayeemZaki",linkedin:"https://www.linkedin.com/in/zayeem-zaki",portfolio:"https://zayeemzaki.github.io/my-portfolio/",youTube:"https://www.youtube.com/@AlgoAcez",leetCode:"https://leetcode.com/u/zayeem_zaki/"}}}};const F=(0,m.A)(E,[["render",O],["__scopeId","data-v-68696c8c"]]);var M=F;const D={class:"experience"},X={class:"experiences"};function z(e,n,t,i,a,r){return(0,o.uX)(),(0,o.CE)("section",D,[n[0]||(n[0]=(0,o.Lk)("h2",null,"Experience",-1)),(0,o.Lk)("div",X,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.experiences,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"experience-card"},[(0,o.Lk)("h3",null,(0,s.v_)(e.title),1),(0,o.Lk)("p",null,(0,s.v_)(e.description),1)])))),128))])])}var U={name:"MyExperience",data(){return{experiences:[{id:1,title:"IT Security Intern",description:"Contributed to CrowdStrike automation projects, streamlining IT security processes and increasing operational efficiency.\nDeveloped Python scripts to identify and sort stale accounts using domain, inactivity period, and other criteria, enhancing account management efficiency.\nAutomated the removal of admin rights from specific users, improving security posture and reducing manual intervention.\nDesigned and implemented a Flask-based website with a Bootstrap-powered front end to manage administrative tasks, improving usability and productivity.\nExecuted real-time security commands using CrowdStrike APIs, ensuring quick and effective incident response.\nCollaborated with cross-functional teams to integrate automation solutions, driving scalability and adaptability in a fast-paced environment."},{id:2,title:"IT Network Intern",description:"Upgrading and configuring switches to optimize network performance and reliability.\nImplementing new firewall rules to enhance network security and ensure compliance with organizational policies and industry standards.\nProvisioning and configuring servers to support various network services and applications, fostering scalability and resource efficiency."},{id:3,title:"IT Service Desk Intern",description:"Orchestrated the imaging of 500+ laptops for new hires and refresh cycles, seamlessly integrating devices into the domain and transitioning them to Active Directory (AD).\nProficiently addressed IT-related tickets, resolving technical issues for employees in a timely manner to ensure uninterrupted workflow.\nStreamlined ticket management processes by routing over 1000 tickets to respective departments, optimizing operational efficiency and customer service delivery."},{id:4,title:"Peer Mentor",description:"I assist students in mastering foundational programming concepts and Object-Oriented Programming (OOP) principles through hands-on guidance and mentorship, while also providing constructive feedback on projects and fostering problem-solving skills to help them succeed in their coding journey."},{id:5,title:"IT Student Tech",description:"Successfully resolved over 100 software and IT-related challenges with an average solution time of less than 24 hours, addressing issues like devices not powering on, water damage, hardware replacement, screen replacement, network connectivity problems, and virus infections.\nDiagnosed and debugged staff and lab desktops at the University by employing techniques such as PXE boot and archive directory management to address slowdowns, re-imaging, networking, and other related issues."}]}}};const N=(0,m.A)(U,[["render",z],["__scopeId","data-v-319f277e"]]);var q=N;const H={class:"portfolio"},Y={class:"projects"},J=["href"];function K(e,n,t,i,a,r){return(0,o.uX)(),(0,o.CE)("section",H,[n[0]||(n[0]=(0,o.Lk)("h2",null,"Projects",-1)),(0,o.Lk)("div",Y,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.projects,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"project"},[(0,o.Lk)("h3",null,(0,s.v_)(e.title),1),(0,o.Lk)("p",null,(0,s.v_)(e.description),1),(0,o.Lk)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View Project",8,J)])))),128))])])}var V={name:"PortfolioPage",data(){return{projects:[{id:1,title:"U-Eats - Full-Stack Restaurant Website",description:"Deployed an online-ordering restaurant website on AWS Amplify in collaboration with my roommate in Dec 2023. The website is expected to increase monthly sales by 5%. Integrated React.js and Node.js technologies to enhance the website's performance, as evidenced by improved loading times and interactivity. Implemented Stripe payment for secure and efficient online transactions.",link:"https://main.d20ukwqpkslt8j.amplifyapp.com/"},{id:2,title:"NeuroTransmitter - iOS Application",description:"Developed an iOS app for the University of Toledo Neurology department, integrating SwiftUI and UIKit to revolutionize research paper management and enhance communication among doctors. The app, currently available on the App Store, features advanced security measures such as Firebase Authentication and Face ID for robust data protection. Key functionalities include real-time chat threads, document annotation with text highlighting, commenting, and writing directly on documents, as well as Text-to-Speech capabilities, fostering seamless collaboration and productivity among users. Designed to cater to specific research needs, NeuroTransmitter significantly streamlines workflows and boosts efficiency.",link:"https://apps.apple.com/us/app/neuro-transmitter/id6463495879"},{id:3,title:"AlgoAcez - YouTube Channel Project",description:"AlgoAce is a YouTube channel I created to share my expertise in data structures, algorithms, and LeetCode problem-solving. Through this project, I develop and deliver clear, concise, and engaging tutorials aimed at helping students and professionals improve their coding skills and excel in technical interviews. This project showcases my ability to break down complex topics, create educational content, and engage with an audience in the tech community.",link:"https://www.youtube.com/@AlgoAcez"}]}}};const R=(0,m.A)(V,[["render",K],["__scopeId","data-v-1dd87a55"]]);var Z=R;const B={class:"contact"},G={key:0,class:"success"};function Q(e,n,t,a,r,c){return(0,o.uX)(),(0,o.CE)("section",B,[n[5]||(n[5]=(0,o.Lk)("h2",null,"Contact Me",-1)),(0,o.Lk)("form",{onSubmit:n[3]||(n[3]=(0,i.D$)(((...e)=>c.submitForm&&c.submitForm(...e)),["prevent"]))},[(0,o.Lk)("div",null,[(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>r.form.name=e),placeholder:"Your Name",required:""},null,512),[[i.Jo,r.form.name]])]),(0,o.Lk)("div",null,[(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":n[1]||(n[1]=e=>r.form.email=e),placeholder:"Your Email",required:""},null,512),[[i.Jo,r.form.email]])]),(0,o.Lk)("div",null,[(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":n[2]||(n[2]=e=>r.form.message=e),placeholder:"Your Message",required:""},null,512),[[i.Jo,r.form.message]])]),n[4]||(n[4]=(0,o.Lk)("button",{type:"submit"},"Send Message",-1))],32),r.successMessage?((0,o.uX)(),(0,o.CE)("p",G,(0,s.v_)(r.successMessage),1)):(0,o.Q3)("",!0)])}var $={name:"ContactPage",data(){return{form:{name:"",email:"",message:""},successMessage:""}},methods:{submitForm(){this.successMessage="Thank you for your message!",this.form.name="",this.form.email="",this.form.message=""}}};const ee=(0,m.A)($,[["render",Q],["__scopeId","data-v-6f2e1b77"]]);var ne=ee;const te=[{path:"/about-me",name:"HomePage",component:M},{path:"/experience",name:"Experience",component:q},{path:"/portfolio",name:"Portfolio",component:Z},{path:"/contact",name:"Contact",component:ne}],ie=(0,I.aE)({history:(0,I.LA)(),routes:te});var oe=ie;(0,i.Ef)(C).use(oe).mount("#app")}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var a=n[i]={exports:{}};return e[i].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,i,o,a){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],o=e[d][1],a=e[d][2];for(var s=!0,c=0;c<i.length;c++)(!1&a||r>=a)&&Object.keys(t.O).every((function(e){return t.O[e](i[c])}))?i.splice(c--,1):(s=!1,a<r&&(r=a));if(s){e.splice(d--,1);var l=o();void 0!==l&&(n=l)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[i,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var o,a,r=i[0],s=i[1],c=i[2],l=0;if(r.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(c)var d=c(t)}for(n&&n(i);l<r.length;l++)a=r[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},i=self["webpackChunkabout_me"]=self["webpackChunkabout_me"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[504],(function(){return t(965)}));i=t.O(i)})();
//# sourceMappingURL=app.060782cc.js.map