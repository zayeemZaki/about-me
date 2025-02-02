<template>
  <section class="home">
    <!-- Intro Section -->
    <div class="intro">
      <h2>Welcome to My Personal Page</h2>
      <div class="about-me">
        <p data-aos="fade-up">
          I am a passionate and driven Computer Science student at The University of Toledo, set to graduate in December 2025. 
          With a strong GPA of 3.7 and recognition on the President's and Dean's Lists, I have cultivated a solid foundation in 
          <b> Data Structures</b>, <b>Object-Oriented Programming</b>, and <b>Software Development</b>.
        </p>
        <p data-aos="fade-up">
          My internship at <b>First Solar</b> as an IT Security Intern allowed me to apply my technical expertise to 
          automate workflows using <b>Python</b> and <b>CrowdStrike APIs</b>, manage user permissions, and execute real-time 
          security commands. Additionally, I developed a <b>Flask-based</b> website with a <b>Bootstrap-powered</b> front-end, streamlining 
          administrative tasks and enhancing user experience. This hands-on experience strengthened my problem-solving abilities and exposed 
          me to dynamic, cross-functional teamwork in a fast-paced environment.
        </p>
        <p data-aos="fade-up">
          I have developed and deployed innovative solutions, including an <b>online ordering restaurant website, U-Eats,</b> 
          hosted on AWS Amplify, leveraging <b>React.js</b> and <b>Node.js</b> to create a seamless user experience. My work 
          on the <b>NeuroTransmitter iOS app</b> for the University of Toledo enhanced research paper management and doctor 
          communication through user-centric design and advanced document editing features.
        </p>
        <p data-aos="fade-up">
          My technical toolkit includes proficiency in <b>Python, Java, Swift, C++, JavaScript,</b> and expertise in 
          frameworks and tools like <b>Spring Boot, React, Firebase, Docker, Kubernetes,</b> and <b>AWS</b>. 
          I am equally passionate about exploring machine learning concepts and backend infrastructure systems.
        </p>
        <p data-aos="fade-up">
          As I aspire to become a <b>Software Developer</b>, I am eager to contribute to innovative projects and solve 
          real-world problems. I thrive in dynamic environments and am committed to creating impactful solutions that 
          drive progress and efficiency.
        </p>
      </div>
      <div class="social-links">
        <a :href="social.github" target="_blank">GitHub</a>
        <a :href="social.linkedin" target="_blank">LinkedIn</a>
        <a :href="social.portfolio" target="_blank">Portfolio</a>
        <a :href="social.youTube" target="_blank">YouTube</a>
        <a :href="social.leetCode" target="_blank">LeetCode</a>
      </div>
    </div>

    <!-- Certificates Section -->
    <section class="certificates" data-aos="fade-up">
      <h2>Certificates</h2>
      <div class="certificates-grid">
        <div class="certificate" v-for="certificate in certificates" :key="certificate.id">
          <img :src="certificate.image" :alt="certificate.title" />
          <p>{{ certificate.title }}</p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills" data-aos="fade-up">
      <h2>Skills</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Frameworks</h3>
          <ul>
            <li>Vue.js</li>
            <li>React</li>
            <li>Angular</li>
            <li>Spring Boot</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Tools</h3>
          <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>Swift</li>
            <li>C++</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Additional Links Section -->
    <section class="additional-links" data-aos="fade-up">
      <h2>Additional Links</h2>
      <div class="links-grid">
        <ul>
          <li v-for="link in additionalLinks" :key="link.id">
            <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.title }}</a>
          </li>
        </ul>
      </div>
    </section>
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
        {
          id: 1,
          title: 'Spring Boot',
          image: require('@/assets/spring_boot.jpeg')
        },
        {
          id: 2,
          title: 'Machine Learning',
          image: require('@/assets/ml.jpeg')
        },
        {
          id: 3,
          title: 'WIX',
          image: require('@/assets/wix.jpg')
        },
        {
          id: 4,
          title: 'Programming for Everybody',
          image: require('@/assets/python1.jpg')
        },
        {
          id: 5,
          title: 'Data Structures',
          image: require('@/assets/python2.jpg')
        },
        {
          id: 6,
          title: 'Capstone',
          image: require('@/assets/python3.jpg')
        },
        {
          id: 7,
          title: 'Using Python to Access Web Data',
          image: require('@/assets/python4.jpg')
        },
        {
          id: 8,
          title: 'Bits and Bytes of Computer Networking',
          image: require('@/assets/computer_network.jpg')
        },
        {
          id: 9,
          title: 'Customer Service',
          image: require('@/assets/customer_service.jpg')
        },
        {
          id: 10,
          title: 'HTML, CSS, JS',
          image: require('@/assets/html_css_js.jpg')
        },
        {
          id: 11,
          title: 'Operating System',
          image: require('@/assets/operating_system.jpg')
        },
        {
          id: 12,
          title: 'Technical Support',
          image: require('@/assets/technical_support.jpg')
        }
      ],
      additionalLinks: [
        { id: 1, title: 'Personal Blog', url: 'https://blog.example.com' },
        { id: 2, title: 'GitHub', url: 'https://github.com/zayeemZaki' },
        { id: 3, title: 'LinkedIn', url: 'https://www.linkedin.com/in/zayeem-zaki' },
        { id: 4, title: 'Portfolio', url: 'https://zayeemzaki.github.io/my-portfolio/' }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}

/* Intro Section */
.intro h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.about-me p {
  margin-bottom: 1rem;
  text-align: left;
}
.social-links {
  margin-top: 1rem;
}
.social-links a {
  margin: 0 1rem;
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
}
.social-links a:hover {
  text-decoration: underline;
}

/* Certificates Section */
.certificates {
  padding: 2rem;
  text-align: center;
  background-color: #fff;
  margin-top: 2rem;
}
.certificates h2 {
  margin-bottom: 1rem;
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
  background: #f9f9f9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.certificate img {
  width: 100%;
  height: 200px;
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
  text-align: center;
  background-color: #f7f7f7;
  margin-top: 2rem;
}
.skills h2 {
  margin-bottom: 1rem;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.skill-category h3 {
  margin-bottom: 0.5rem;
}
.skill-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.skill-category ul li {
  margin-bottom: 0.5rem;
}

/* Additional Links Section */
.additional-links {
  padding: 2rem;
  text-align: center;
  background-color: #fff;
  margin-top: 2rem;
}
.additional-links h2 {
  margin-bottom: 1rem;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
