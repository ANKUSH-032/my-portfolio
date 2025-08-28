import { Component } from '@angular/core';

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
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  // Header / Hero
  name = 'Your Name';
  title = 'Full-Stack Developer';
  subtitle = 'Angular • .NET • SQL';
  profileImage = 'assets/profile.jpg'; // put your photo in src/assets/profile.jpg
   currentYear: number = new Date().getFullYear();
  // About
  about = `I build clean, scalable web apps with Angular, .NET, and SQL Server. 
I enjoy performance tuning, clean APIs, and pixel-perfect UIs.`;

  education: Education[] = [
    { degree: 'B.Tech, Computer Science', institute: 'XYZ University', from: '2016', to: '2020', notes: 'CGPA 8.2/10' },
    { degree: 'M.Tech, Software Systems', institute: 'ABC Institute', from: '2020', to: '2022' }
  ];

  achievements: string[] = [
    'Top Performer Award 2024 – Tech Solutions Pvt Ltd',
    'Azure AZ-204 Certified',
    'Speaker @ Local Angular Meetup'
  ];

  // Experience → Company → Projects (each project 3 per row)
  experiences: Experience[] = [
    {
      company: 'Tech Solutions Pvt Ltd',
      position: 'Software Developer',
      startDate: 'Jan 2022',
      endDate: 'Present',
      projects: [
        {
          name: 'Healthcare Portal',
          shortDescription: 'Patient classes, scheduling, surveys, payments.',
          fullDescription: 'Built a secure portal for prenatal/postpartum classes with scheduling, Q&A, and support. Implemented complex SQL reporting and Angular UI.',
          startDate: 'Jan 2022',
          endDate: 'Dec 2022',
          technologies: ['Angular 14', 'ASP.NET Core', 'SQL Server', 'Bootstrap'],
          teamMembers: ['You', 'Priya', 'Rahul'],
          role: 'Full-Stack Developer',
          responsibilities: [
            'Implemented responsive Angular components and state handling',
            'Built .NET APIs and optimized SQL stored procedures',
            'Wrote integration tests and CI/CD pipelines'
          ],
          thirdPartyApis: [
            { name: 'Zoom API', description: 'Create/manage meetings; prevented >2 overlap per account.' },
            { name: 'Stripe API', description: 'Secure payments for class registrations and refunds.' },
            { name: 'SendGrid API', description: 'Bulk/transactional emails with suppression groups.' }
          ]
        },
        {
          name: 'Availability Analytics',
          shortDescription: 'Seat/slot availability across white-label portals.',
          fullDescription: 'Aggregated class availability by client/portal with multi-CTE reporting SPs and Angular dashboards.',
          startDate: 'Jan 2023',
          endDate: 'Jun 2023',
          technologies: ['Angular', 'ASP.NET Core', 'SQL Server'],
          teamMembers: ['You', 'Anita'],
          role: 'Backend-Heavy Full-Stack',
          responsibilities: [
            'Designed/optimized complex SPs and views',
            'Exposed REST endpoints via .NET',
            'Built Angular charts & tables'
          ],
          thirdPartyApis: [
            { name: 'Power BI Embed (optional)', description: 'Embedded analytics visuals into the portal.' }
          ]
        },
        {
          name: 'Email Campaign Tool',
          shortDescription: 'Bulk email campaigns with tracking.',
          fullDescription: 'Created an admin UI to send segmented emails, track opens/clicks, and manage unsubscribe groups.',
          startDate: 'Jul 2023',
          endDate: 'Dec 2023',
          technologies: ['Angular', '.NET', 'SendGrid'],
          teamMembers: ['You', 'Nikhil'],
          role: 'Full-Stack Developer',
          responsibilities: [
            'Built UX for campaigns, segments, and analytics',
            'Integrated SendGrid APIs (stats, suppression)',
            'Automated scheduled email jobs'
          ],
          thirdPartyApis: [
            { name: 'SendGrid API', description: 'Campaigns, tracking, suppression groups, stats.' }
          ]
        }
      ]
    },
    {
      company: 'NextGen Innovations',
      position: 'Senior Software Engineer',
      startDate: 'Jan 2021',
      endDate: 'Dec 2021',
      projects: [
        {
          name: 'E-Commerce Platform',
          shortDescription: 'Multi-vendor shop with payments & notifications.',
          fullDescription: 'Led the Angular team; built catalog, cart, checkout and order dashboards; integrated payments and SMS.',
          startDate: 'Jan 2021',
          endDate: 'Dec 2021',
          technologies: ['Angular', 'ASP.NET Web API', 'MongoDB'],
          teamMembers: ['You', 'James', 'Sophia'],
          role: 'Tech Lead',
          responsibilities: [
            'Led 4 devs; code reviews & standards',
            'Designed REST APIs and caching',
            'Owned release process'
          ],
          thirdPartyApis: [
            { name: 'Stripe/PayPal', description: 'Payment collection and refunds.' },
            { name: 'Twilio', description: 'Order/SLA SMS alerts.' }
          ]
        }
      ]
    }
  ];

  // Third-Party API “catalog” (global section below projects)
  apiCatalog: ThirdPartyApi[] = [
    { name: 'Zoom API', description: 'Meeting creation, schedule management, concurrency control per account.' },
    { name: 'Stripe', description: 'Payments, subscriptions, refunds, webhooks.' },
    { name: 'SendGrid', description: 'Bulk + transactional emails, suppression groups, stats.' },
    { name: 'Twilio', description: 'SMS notifications and OTP.' },
    { name: 'Power BI Embed', description: 'Embedded analytics dashboards.' }
  ];

  // Contact
  contact = {
    email: 'you@email.com',
    phone: '+91-9876543210',
    github: 'https://github.com/yourhandle',
    linkedin: 'https://linkedin.com/in/yourhandle',
    resumeUrl: 'assets/Resume.pdf'
  };

  // Helpers
  toId(s: string) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }
}
