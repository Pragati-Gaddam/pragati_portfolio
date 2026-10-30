import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  title: string;
  skills: string[];
}

interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  outcome: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  menuOpen = false;

  readonly skillGroups: SkillGroup[] = [
    { title: 'Backend engineering', skills: ['ASP.Net', 'C#', '.NET / .NET Framework', 'ASP.NET Core', 'Web API', 'WCF', 'Entity Framework', 'Entity Framework Core', 'LINQ'] },
    { title: 'Frontend engineering', skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'] },
    { title: 'Cloud & integration', skills: ['Microsoft Azure', 'Azure Devops', 'AWS', 'Microservices', 'Docker', 'Kubernets', 'Service fabric'] },
    { title: 'Data & observability', skills: ['SQL Server', 'Oracle', 'PostgreSQL', 'Mongo DB', 'Query optimization', 'OpenTelemetry', 'Dynatrace', 'ELK', 'PowerShell'] },
    { title: 'Reporting', skills: ['SSRS Reports', 'Crystal Reports'] },
    { title: 'Others', skills: ['XML', 'JSON', 'Appian', 'Fiddler', 'SOAP', 'Resharper', 'Postman', 'Beyond Compare', 'AXE', 'WAVE', 'GitHub', 'Swagger', 'Splunk', 'GitHub Copilot', 'Dynatrace', ' Onbase'] }
  ];

  readonly projects: Project[] = [
    {
      number: '01', category: 'OBSERVABILITY & PERFORMANCE',
      title: 'Enterprise application monitoring platform',
      description: 'A distributed instrumentation and reporting approach for capturing application transactions, downstream dependencies, database activity and exceptions across legacy services.',
      technologies: ['.NET Framework', 'OpenTelemetry', 'MSMQ', 'SQL Server', 'Dynatrace'],
      outcome: 'Designed for consistent telemetry collection and centralized performance analysis across multiple applications.'
    },
    {
      number: '02', category: 'CLOUD & FILE INTEGRATION',
      title: 'Secure cloud-based SFTP processing',
      description: 'A file-ingestion architecture using cloud storage, malware scanning, event-driven processing and downstream enterprise integration.',
      technologies: ['Azure Blob Storage', 'SFTP', 'Defender', 'Event Grid', 'Azure Functions'],
      outcome: 'A scalable event-driven pattern that separates secure file intake from downstream processing.'
    },
    {
      number: '03', category: 'REPORTING & AUTOMATION',
      title: 'Centralized application performance reporting',
      description: 'An automated reporting workflow that queries application telemetry, produces CSV and HTML summaries, and supports scheduled operational reporting.',
      technologies: ['.NET', 'PowerShell', 'ELK', 'Async Search', 'HTML'],
      outcome: 'Configuration-driven reporting designed to make operational metrics easier to review.'
    }
  ];

  readonly experienceHighlights = [
    'Designing and supporting enterprise .NET applications and service integrations',
    'Building APIs and integrating legacy systems, WCF services and cloud services',
    'Improving database performance, monitoring and production diagnostics',
    'Translating business requirements into maintainable technical solutions',
    'Collaborating with developers and stakeholders on implementation decisions'
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.closeMenu();
  }
}