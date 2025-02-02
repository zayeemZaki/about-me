<template>
  <section class="home">
    <!-- Intro Section with Fade Transition -->
    <transition appear name="fade">
      <div class="intro">
        <h2 class="intro-title">Hello, I'm Zayeem Zaki</h2>
        <p class="intro-subtitle">Innovative Software Developer & AI Enthusiast</p>
        <div class="about-me">
          <p data-aos="fade-up">
            I am a passionate and driven Computer Science student at The University of Toledo, set to graduate in December 2025. With a strong GPA of 3.7 and recognition on the President's and Dean's Lists, I have built a solid foundation in <b>Data Structures</b>, <b>Object-Oriented Programming</b>, and <b>Software Development</b>.
          </p>
          <p data-aos="fade-up">
            My internship at <b>First Solar</b> as an IT Security Intern enabled me to automate workflows using <b>Python</b> and <b>CrowdStrike APIs</b>, manage user permissions, and execute real-time security commands. I also developed a <b>Flask-based</b> website with a <b>Bootstrap-powered</b> front end, streamlining administrative tasks.
          </p>
          <p data-aos="fade-up">
            I have deployed innovative solutions like an <b>online ordering restaurant website (U-Eats)</b> hosted on AWS Amplify using <b>React.js</b> and <b>Node.js</b>, and the <b>NeuroTransmitter iOS app</b> for the University of Toledo, enhancing research paper management and doctor communication.
          </p>
          <p data-aos="fade-up">
            My technical toolkit includes proficiency in <b>Python, Java, Swift, C++, JavaScript</b> and expertise in frameworks and tools such as <b>Spring Boot, React, Firebase, Docker, Kubernetes,</b> and <b>AWS</b>. I am also passionate about exploring machine learning and backend infrastructure systems.
          </p>
          <p data-aos="fade-up">
            As I aspire to become a <b>Software Developer</b>, I am eager to contribute to innovative projects and solve real-world problems, thriving in dynamic environments with impactful solutions.
          </p>
        </div>
      </div>
    </transition>

    <!-- Certificates Section with Fade Transition -->
    <transition appear name="fade">
      <section class="certificates" data-aos="fade-up">
        <h2 class="section-title">My Certifications</h2>
        <div class="certificates-grid">
          <div class="certificate" v-for="certificate in certificates" :key="certificate.id">
            <img :src="certificate.image" :alt="certificate.title" />
            <p>{{ certificate.title }}</p>
          </div>
        </div>
      </section>
    </transition>

    <!-- Skills Section with Fade Transition -->
    <transition appear name="fade">
      <section class="skills" data-aos="fade-up">
        <h2 class="section-title">My Expertise</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <li>Vue.js</li>
              <li>React</li>
              <li>Angular</li>
              <li>Spring Boot</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Dev Tools & Platforms</h3>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>Swift</li>
              <li>C++</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Database Systems</h3>
            <ul>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </div>
        </div>
      </section>
    </transition>

    <!-- Additional Links Section with Fade Transition -->
    <transition appear name="fade">
      <section class="additional-links" data-aos="fade-up">
        <h2 class="section-title">Explore More</h2>
        <div class="links-grid">
          <ul>
            <li v-for="link in additionalLinks" :key="link.id">
              <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.title }}</a>
            </li>
          </ul>
        </div>
      </section>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      social: {
        github: 'https://github.com/zayeemZaki',
        linkedin: 'https://www.linkedin.com/in/zayeem-zaki',
        portfolio: 'https://zayeemzaki.github.io/my-portfolio/',
        youTube: 'https://www.youtube.com/@AlgoAcez',
        leetCode: 'https://leetcode.com/u/zayeem_zaki/'
      },
      certificates: [
        { id: 1, title: 'Spring Boot', image: require('@/assets/spring_boot.jpeg') },
        { id: 2, title: 'Machine Learning', image: require('@/assets/ml.jpeg') },
        { id: 3, title: 'WIX', image: require('@/assets/wix.jpg') },
        { id: 4, title: 'Programming for Everybody', image: require('@/assets/python1.jpg') },
        { id: 5, title: 'Data Structures', image: require('@/assets/python2.jpg') },
        { id: 6, title: 'Capstone', image: require('@/assets/python3.jpg') },
        { id: 7, title: 'Using Python to Access Web Data', image: require('@/assets/python4.jpg') },
        { id: 8, title: 'Bits and Bytes of Computer Networking', image: require('@/assets/computer_network.jpg') },
        { id: 9, title: 'Customer Service', image: require('@/assets/customer_service.jpg') },
        { id: 10, title: 'HTML, CSS, JS', image: require('@/assets/html_css_js.jpg') },
        { id: 11, title: 'Operating System', image: require('@/assets/operating_system.jpg') },
        { id: 12, title: 'Technical Support', image: require('@/assets/technical_support.jpg') }
      ],
      additionalLinks: [
        { id: 1, title: 'My Portfolio', url: 'https://zayeemzaki.github.io/my-portfolio/' },
        { id: 2, title: 'GitHub', url: 'https://github.com/zayeemZaki' },
        { id: 3, title: 'LinkedIn', url: 'https://www.linkedin.com/in/zayeem-zaki' },
        { id: 4, title: 'LeetCode', url: 'https://leetcode.com/u/zayeem_zaki/' },
        { id: 5, title: 'YouTube', url: 'https://www.youtube.com/@AlgoAcez/' }
      ]
    }
  }
}
</script>

<style scoped>
/* Transition Styles */
.fade-enter-active,
.fade-leave-active,
.fade-appear-active {
  transition: opacity 0.6s ease;
}
.fade-enter,
.fade-leave-to,
.fade-appear {
  opacity: 0;
}
.fade-enter-to,
.fade-leave,
.fade-appear-to {
  opacity: 1;
}

/* HomePage Base Styles */
.home {
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
}

/* Intro Section */
.intro {
  position: relative;
  padding: 4rem 2rem;
  color: #fff;
  border-radius: 12px;
  margin-bottom: 2rem;
  background-size: cover;
  overflow: hidden;
}
.intro::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,rgb(8, 8, 8) 0%, #638C6D 100%);

}
.intro-title {
  position: relative;
  font-size: 3rem;
  margin-bottom: 0.5rem;
  z-index: 1;
}
.intro-subtitle {
  position: relative;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  z-index: 1;
}
.about-me {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  z-index: 1;
}
.social-links {
  position: relative;
  margin-top: 1.5rem;
  z-index: 1;
}
.social-links a {
  margin: 0 1rem;
  color: #213555;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}
.social-links a:hover {
  color: #ffea00;
}

/* Section Titles */
.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Certificates Section */
.certificates {
  padding: 2rem;
  background-color: #fff;
  margin-top: 2rem;
  border-radius: 12px;
  background: linear-gradient(135deg, #e0f7fa 0%, #213555 100%);

  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.certificates-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
}
@media (max-width: 600px) {
  .certificates-grid {
    grid-template-columns: 1fr;
  }
}
.certificate {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: #213555;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.certificate img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}
.certificate p {
  margin: 0;
  padding: 1rem;
  font-size: 1rem;
  background-color: #fff;
}

/* Skills Section */
.skills {
  padding: 2rem;
  background: linear-gradient(135deg, #e0f7fa 0%, #213555 100%);
  margin-top: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}
.skill-category {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.skill-category h3 {
  margin-bottom: 0.5rem;
  color: #213555;
}
.skill-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.skill-category ul li {
  margin-bottom: 0.5rem;
  color: #213555;
}

/* Additional Links Section */
.additional-links {
  padding: 2rem;
  background: linear-gradient(135deg, #fff9c4 0%, #213555 100%);
  margin-top: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.links-grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
.links-grid ul li {
  background: #f7f7f7;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.links-grid ul li a {
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
}
.links-grid ul li a:hover {
  text-decoration: underline;
}
</style>
