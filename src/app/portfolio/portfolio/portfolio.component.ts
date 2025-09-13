import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var bootstrap: any;
interface ThirdPartyApi {
  name: string;
  description: string;
}

interface Project {
  name: string;
  shortDescription: string;
  fullDescription: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  teamMembers: string[];
  role: string;
  responsibilities: string[];
  thirdPartyApis: ThirdPartyApi[];
}

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  projects: Project[];
}

interface Education {
  degree: string;
  institute: string;
  from: string;
  to: string;
  notes?: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {

constructor(private router: Router, private scroller: ViewportScroller) {}



  // Header / Hero
  name = 'Ankush Dubey';
  title = 'Full-Stack Developer';
  subtitle =
    'C# • ASP.NET Core • Dapper • Git • GitHub • Postman • Angular • JavaScript • TypeScript • MongoDB • RESTful API • Third-Party API';
  profileImage = 'assets/ankush.jpg';
   bannerImage = 'assets/banner.jpg';
   // put your photo in src/assets/profile.jpg
  currentYear: number = new Date().getFullYear();
  // About
  about = `Highly skilled and motivated .NET Developer with 3.2 years of hands-on experience in developing web applications using a variety
 of technologies, including C#, ASP.NET Core, Angular, and Web API. Adept at creating efficient and scalable solutions that meet
 client needs. Currently working as a .NET software developer on a USA healthcare project, with a deep understanding of the USA
 healthcare domain. Proficient in building robust APIs using .NET, and experienced in integrating third-party APIs. Seeking to
 contribute my expertise to a dynamic team and further advance my career in software development..`;

  education: Education[] = [
    {
      degree: 'BCA, Computer Science',
      institute: 'SCHOOL OF MANAGEMENT SCIENCE VARANASI',
      from: '2018',
      to: '2021',
      notes: 'CGPA 6.5/10',
    },
    {
      degree: 'MCA, Software Systems',
      institute: 'Mumbai University',
      from: '2023',
      to: '2025',
    },
  ];

  achievements: string[] = [
    ' RISING STAR OF THE QUARTER – OSP LABS Pvt Ltd',
    ' SOCIAL WELFARE (UWC)',
    //'Speaker @ Local Angular Meetup'
  ];

  // Experience → Company → Projects (each project 3 per row)
  experiences: Experience[] = [
    {
      company: 'OSP Labs Pvt Ltd',
      position: 'Software Developer',
      startDate: 'July 2022',
      endDate: 'Present',
      projects: [
        {
          name: 'BABYLIVEADVICE',
          shortDescription: 'Patient classes, scheduling, surveys, payments.',
          fullDescription:
            ' BabyLiveAdvice is a tech-education platform designed to provide educational resources and instructions to pregnant women. The project focuses on delivering vital information and guidance through interactive sessions, helping expectant mothers to stay informed throughout their pregnancy.',
          startDate: 'Jan 2023',
          endDate: 'Present',
          technologies: [
            'C#',
            'ASP.NET Core Web API',
            'Dapper',
            'SQL Server',
            'Angular',
            'JavaScript',
            'TypeScript',
            'Repository Pattern',
            'Onion Architecture',
          ],
          teamMembers: ['You', 'Priya', 'Rahul'],
          role: 'Full-Stack Developer',
          responsibilities: [
            'Implemented responsive Angular components and state handling',
            'Built .NET APIs and optimized SQL stored procedures',
            'Wrote integration tests and CI/CD pipelines',
          ],
          thirdPartyApis: [
            {
              name: 'Twilio API',
              description: 'Integration for SMS notifications and OTP.',
            },
            {
              name: 'Stripe Payment API',
              description:
                'Integration for processing secure payments, subscriptions, and refunds.',
            },
            {
              name: 'Zoom API',
              description:
                'Integration for virtual meetings, scheduling, and managing online consultations.',
            },
          ],
        },
        {
          name: 'HEALTH CONNECT',
          shortDescription:
            'Remote Patient Monitoring with vital readings, including BP, CGM, ECG, and seamless healthcare provider access.',
          fullDescription:
            'HealthConnect is a comprehensive Remote Patient Monitoring Application where nurses monitor patients remotely through Call & Chat features. Patients can take vital readings such as BP, CGM, and ECG, which are recorded in the application. Based on these readings, healthcare providers can assess the patient’s status and make informed decisions. The system integrates vital data from medical devices (via APIs like Mio Connect and Dexcom), ensuring seamless monitoring. Additionally, Single Sign-On (SSO) integration is used to streamline user access across platforms.',
          startDate: 'Jan 2023',
          endDate: 'Jun 2023',
          technologies: [
            'C#',
            'ASP.NET Core Web API',
            'Dapper',
            'SQL Server',
            'Angular',
            'JavaScript',
            'TypeScript',
            'Repository Pattern',
            'Onion Architecture',
          ],
          teamMembers: ['You', 'Anita'],
          role: 'Backend-Heavy Full-Stack',
          responsibilities: [
            'Designed and optimized complex stored procedures and views',
            'Exposed REST endpoints via .NET Core',
            'Built Angular charts and tables for visualizing patient data',
          ],
          thirdPartyApis: [
            {
              name: 'Mio Connect API',
              description:
                'For integrating medication device vital readings like BP, CGM, and ECG.',
            },
            {
              name: 'Dexcom API',
              description:
                'For continuous glucose monitoring (CGM) vital readings.',
            },
            {
              name: 'SSO (Single Sign-On)',
              description:
                'For seamless authentication across multiple platforms and devices.',
            },
          ],
        },
        {
          name: 'AMBIENT CARE VIRTUAL',
          shortDescription:
            'Telehealth platform for appointments, remote consultations, and improved patient-provider interactions.',
          fullDescription:
            'Ambient Care Virtual is a telehealth platform that allows patients to create appointments and connect with medical assistants and healthcare providers. The project aims to streamline the healthcare process by enabling remote consultations, improving patient-provider interactions, and ensuring seamless communication and tracking. It integrates various third-party APIs for notifications, payment processing, and more.',
          startDate: 'Jul 2023',
          endDate: 'Dec 2023',
          technologies: [
            'Angular',
            '.NET Core',
            'SendGrid',
            'C#',
            'ASP.NET Core Web API',
            'Dapper',
            'SQL Server',
            'Repository Pattern',
            'Onion Architecture',
            'MongoDB',
          ],
          teamMembers: ['You', 'Nikhil'],
          role: 'Full-Stack Developer',
          responsibilities: [
            'Built user interfaces for campaign management, segmenting, and analytics',
            'Integrated SendGrid API for email campaigns, stats, and suppression groups',
            'Automated scheduled email jobs using SendGrid',
            'Designed REST APIs for appointment management and provider communications',
            'Implemented MongoDB for storing patient data and medical records',
          ],
          thirdPartyApis: [
            {
              name: 'Twilio API',
              description:
                'Integrated for SMS notifications and two-factor authentication.',
            },
            {
              name: 'OrbitHC API',
              description:
                'Used for eligibility checks and verification in healthcare processes.',
            },
            {
              name: 'DocuTap API',
              description:
                'For inserting patient appointment details into the system.',
            },
            {
              name: 'Stripe Payment API',
              description:
                'Integrated for secure payment processing and subscription management.',
            },
            {
              name: 'SignalR API',
              description:
                'Real-time web notifications for appointment updates and reminders.',
            },
            {
              name: 'FCM (Firebase Cloud Messaging) API',
              description:
                'Mobile push notifications for appointment reminders and updates.',
            },
            {
              name: 'Zoom SDK',
              description:
                'Integrated for virtual consultations and telemedicine meetings.',
            },
          ],
        },
        {
  name: 'STAR POINT',
  shortDescription: 'Web application for streamlining business operations and enhancing productivity.',
  fullDescription: 'Star Point is a comprehensive web application developed to facilitate various business operations, streamline workflows, and enhance productivity through the effective use of modern technologies. The project focuses on automating key business processes, improving communication, and providing intuitive dashboards for managing tasks.',
  startDate: 'May 2023',
  endDate: 'June 2023',
  technologies: ['C#', 'ASP.NET Core Web API', 'Dapper', 'SQL Server', 'Angular', 'JavaScript', 'TypeScript', 'Repository Pattern', 'Onion Architecture'],
  teamMembers: ['You', 'Team'],
  role: 'Full-Stack Developer',
  responsibilities: [
    'Developed RESTful APIs using ASP.NET Core and Dapper for data access.',
    'Implemented the Repository Pattern and Onion Architecture for scalable and maintainable code.',
    'Built responsive frontend components with Angular, JavaScript, and TypeScript.',
    'Optimized SQL queries and ensured smooth database interactions.',
    'Collaborated with the team to integrate features and ensure project deadlines were met.'
  ],
  thirdPartyApis: []  // Add relevant APIs here if any
}

      ],
    },
    // {
    //   company: 'NextGen Innovations',
    //   position: 'Senior Software Engineer',
    //   startDate: 'Jan 2021',
    //   endDate: 'Dec 2021',
    //   projects: [
    //     {
    //       name: 'E-Commerce Platform',
    //       shortDescription: 'Multi-vendor shop with payments & notifications.',
    //       fullDescription: 'Led the Angular team; built catalog, cart, checkout and order dashboards; integrated payments and SMS.',
    //       startDate: 'Jan 2021',
    //       endDate: 'Dec 2021',
    //       technologies: ['Angular', 'ASP.NET Web API', 'MongoDB'],
    //       teamMembers: ['You', 'James', 'Sophia'],
    //       role: 'Tech Lead',
    //       responsibilities: [
    //         'Led 4 devs; code reviews & standards',
    //         'Designed REST APIs and caching',
    //         'Owned release process'
    //       ],
    //       thirdPartyApis: [
    //         { name: 'Stripe/PayPal', description: 'Payment collection and refunds.' },
    //         { name: 'Twilio', description: 'Order/SLA SMS alerts.' }
    //       ]
    //     }
    //   ]
    // }
  ];

  // Third-Party API “catalog” (global section below projects)
  apiCatalog: ThirdPartyApi[] = [
    {
      name: 'Zoom API',
      description:
        'Meeting creation, schedule management, concurrency control per account.',
    },
    {
      name: 'Zoom SDK for Virtual Consultations',
      description:
        'SDK integration for scheduling and managing virtual consultations.',
    },
    {
      name: 'Stripe API',
      description: 'Payments, subscriptions, refunds, webhooks.',
    },
    {
      name: 'SendGrid API',
      description: 'Bulk + transactional emails, suppression groups, stats.',
    },
    { name: 'Twilio API', description: 'SMS notifications and OTP.' },
    {
      name: 'OrbitHC API',
      description: 'Eligibility checks for healthcare services.',
    },
    {
      name: 'DocuTap API',
      description: 'Inserting appointment details into the system.',
    },
    {
      name: 'SignalR API',
      description: 'Real-time web notifications for users.',
    },
    {
      name: 'FCM (Firebase Cloud Messaging) API',
      description: 'Mobile push notifications.',
    },
    {
      name: 'Mio Connect API',
      description:
        'Integration for managing Mio sensors and data synchronization.',
    },
    {
      name: 'Dexcom API',
      description:
        'Real-time data from Dexcom devices for continuous glucose monitoring.',
    },
  ];

  // Contact
  contact = {
    email: 'ankushdubey099@gmail.com',
    phone: '+91-7007635014',
    github: 'https://github.com/ANKUSH-032',
    linkedin:
      'https://in.linkedin.com/in/ankush-dubey-36bb98175',
    resumeUrl: 'assets/Resume2.pdf',
  };
openImageModal() {
    const modal = new bootstrap.Modal(document.getElementById('profileModal'));
    modal.show();
  }
  goToSection(section: string) {
  this.router.navigate(['/'], { fragment: section }).then(() => {
    this.scroller.scrollToAnchor(section);
  });
}
  // Helpers
  toId(s: string) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }
}
