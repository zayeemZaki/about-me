<template>
  <section class="home">
    <div class="intro">
      <h2>Welcome to My Personal Page</h2>
        <div className="about-me">
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
      }
    }
  }
}
</script>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}
.intro h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
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
</style>
