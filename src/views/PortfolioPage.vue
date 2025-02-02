<template>
  <section class="portfolio">
    <h2>Projects</h2>
    <div class="projects">
      <div v-for="project in projects" :key="project.id" class="project">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioPage',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'U-Eats - Full-Stack Restaurant Website',
          description: 'Deployed an online-ordering restaurant website on AWS Amplify in collaboration with my roommate in Dec 2023. The website is expected to increase monthly sales by 5%. Integrated React.js and Node.js technologies to enhance the website\'s performance, as evidenced by improved loading times and interactivity. Implemented Stripe payment for secure and efficient online transactions.',
          link: 'https://main.d20ukwqpkslt8j.amplifyapp.com/'
        },
        {
          id: 2,
          title: 'NeuroTransmitter - iOS Application',
          description: 'Developed an iOS app for the University of Toledo Neurology department, integrating SwiftUI and UIKit to revolutionize research paper management and enhance communication among doctors. The app, currently available on the App Store, features advanced security measures such as Firebase Authentication and Face ID for robust data protection. Key functionalities include real-time chat threads, document annotation with text highlighting, commenting, and writing directly on documents, as well as Text-to-Speech capabilities, fostering seamless collaboration and productivity among users. Designed to cater to specific research needs, NeuroTransmitter significantly streamlines workflows and boosts efficiency.',
          link: 'https://apps.apple.com/us/app/neuro-transmitter/id6463495879'
        },
        {
          id: 3,
          title: 'AlgoAcez - YouTube Channel Project',
          description: 'AlgoAce is a YouTube channel I created to share my expertise in data structures, algorithms, and LeetCode problem-solving. Through this project, I develop and deliver clear, concise, and engaging tutorials aimed at helping students and professionals improve their coding skills and excel in technical interviews. This project showcases my ability to break down complex topics, create educational content, and engage with an audience in the tech community.',
          link: 'https://www.youtube.com/@AlgoAcez'
        }
      ]
    }
  }
}
</script>

<style scoped>
.portfolio {
  padding: 2rem;
  text-align: center;
  color: rgb(0, 0, 0);
  background: linear-gradient(135deg, rgb(82, 28, 28) 0%,rgb(68, 110, 78) 100%);

}
.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}
.project {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  width: 300px;
  background: linear-gradient(135deg, rgb(248, 248, 248) 0%,rgb(68, 110, 78) 100%);

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.project h3 {
  margin-top: 0;
}
.project a {
  color:rgb(47, 33, 236);
  text-decoration: none;
  font-weight: bold;
}
.project a:hover {
  text-decoration: underline;
}
</style>
