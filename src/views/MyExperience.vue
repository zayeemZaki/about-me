<template>
  <section class="experience">
    <h2>Experience</h2>
    <div class="experiences">
      <div 
        v-for="experience in experiences" 
        :key="experience.id" 
        class="experience-card"
      >
        <h3>{{ experience.title }}</h3>
        <p>{{ experience.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyExperience',
  data() {
    return {
      experiences: [
        {
          id: 1,
          title: 'IT Security Intern',
          description: `Contributed to CrowdStrike automation projects, streamlining IT security processes and increasing operational efficiency.
Developed Python scripts to identify and sort stale accounts using domain, inactivity period, and other criteria, enhancing account management efficiency.
Automated the removal of admin rights from specific users, improving security posture and reducing manual intervention.
Designed and implemented a Flask-based website with a Bootstrap-powered front end to manage administrative tasks, improving usability and productivity.
Executed real-time security commands using CrowdStrike APIs, ensuring quick and effective incident response.
Collaborated with cross-functional teams to integrate automation solutions, driving scalability and adaptability in a fast-paced environment.`
        },
        {
          id: 2,
          title: 'IT Network Intern',
          description: `Upgrading and configuring switches to optimize network performance and reliability.
Implementing new firewall rules to enhance network security and ensure compliance with organizational policies and industry standards.
Provisioning and configuring servers to support various network services and applications, fostering scalability and resource efficiency.`
        },
        {
          id: 3,
          title: 'IT Service Desk Intern',
          description: `Orchestrated the imaging of 500+ laptops for new hires and refresh cycles, seamlessly integrating devices into the domain and transitioning them to Active Directory (AD).
Proficiently addressed IT-related tickets, resolving technical issues for employees in a timely manner to ensure uninterrupted workflow.
Streamlined ticket management processes by routing over 1000 tickets to respective departments, optimizing operational efficiency and customer service delivery.`
        },
        {
          id: 4,
          title: 'Peer Mentor',
          description: 'I assist students in mastering foundational programming concepts and Object-Oriented Programming (OOP) principles through hands-on guidance and mentorship, while also providing constructive feedback on projects and fostering problem-solving skills to help them succeed in their coding journey.'
        },
        {
          id: 5,
          title: 'IT Student Tech',
          description: `Successfully resolved over 100 software and IT-related challenges with an average solution time of less than 24 hours, addressing issues like devices not powering on, water damage, hardware replacement, screen replacement, network connectivity problems, and virus infections.
Diagnosed and debugged staff and lab desktops at the University by employing techniques such as PXE boot and archive directory management to address slowdowns, re-imaging, networking, and other related issues.`
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Styles for the outer section */
.experience {
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #fff9c4 0%, #213555 100%);

}

/* Container for the experience cards */
.experiences {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

/* Styles for each experience card */
.experience-card {
  background: linear-gradient(135deg, rgb(221, 174, 174) 0%, #638C6D 100%);
  padding: 1rem;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.experience-card h3 {
  margin-top: 0;
}

.experience-card a {
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
}

.experience-card a:hover {
  text-decoration: underline;
}
</style>
