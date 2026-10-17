// EDIT ME: all portfolio content lives here. Items marked PLACEHOLDER must be replaced.

export type SkillGroup = { title: string; items: { name: string; learning?: boolean }[] }
export type ProjectStatus = 'In development' | 'Concept' | 'In progress' | 'Completed'
export type Project = {
  title: string
  category: string
  status: ProjectStatus
  description: string
  tags: string[]
  image?: string // e.g. '/images/pawresq.png' (put the file in public/images)
  github?: string
  demo?: string
}

export const profile = {
  photo: '',
  name: 'Marielle Anne D. Del Mar', // PLACEHOLDER
  initials: 'Maye', // PLACEHOLDER
  role: 'BSIT Student',
  headline: 'Building practical solutions through',
  highlight: 'code',
  intro:
    "I'm an Information Technology student passionate about software development and using technology to solve real-world problems. I enjoy learning, building, and creating meaningful projects.",
  email: 'marielledelmar@gmail.com', // PLACEHOLDER
  github: '', // e.g. 'https://github.com/username' (hidden while empty)
  linkedin: '', // e.g. 'https://www.linkedin.com/in/username' (hidden while empty)
  closing: 'Learning in public, one project at a time.',
}

export const about = {
  heading: 'Learning by building things that work.',
  paragraphs: [
    'I am a Bachelor of Science in Information Technology student focused on software development. I like turning an everyday problem into a small, working system and improving it with each iteration.', // PLACEHOLDER draft
    'My coursework and academic projects cover programming, databases, web development, and networking fundamentals. I am still building depth, and I treat every project as a way to learn something I did not know before.',
  ],
  interests: ['Software development', 'Web applications', 'Databases', 'Networking', 'Problem solving'],
  habits: ['Learning new technologies', 'Building academic projects', 'Solving practical problems', 'Improving technical skills'],
}

// Set `learning: true` on anything you are still studying and have not used in a project.
export const skills: SkillGroup[] = [
  { title: 'Programming languages', items: [{ name: 'C' }, { name: 'C++' }, { name: 'C#' }, { name: 'Python' }, { name: 'Java' }, { name: 'JavaScript' }] },
  { title: 'Frontend development', items: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'Bootstrap' }, { name: 'React' }] },
  { title: 'Backend development', items: [{ name: 'Django' }] },
  { title: 'Databases and tools', items: [{ name: 'MySQL' }, { name: 'Git' }, { name: 'GitHub' }, { name: 'Visual Studio Code' }] },
]

export const projects: Project[] = [
  {
    title: 'PawResQ',
    category: 'Academic capstone',
    status: 'In development',
    description:
      'An academic project concept for an AI-integrated animal welfare, rescue, and adoption management system featuring OCR and geofencing services.',
    tags: ['OCR', 'Geofencing', 'AI (planned)'], // Replace with technologies you actually use.
  },
  {
    title: 'QR-Linked Print Ordering System',
    category: 'Academic or personal project',
    status: 'Concept',
    description: 'A web application concept for organizing print orders through QR-based access and an administrative interface.', // Confirm scope before publishing.
    tags: ['QR codes', 'Admin interface'],
    image: '/images/delmarprint.png', // Add a screenshot of your project in public/images and reference it here.
  },
  {
    title: 'Pizzeria',
    category: 'Group Project',
    status: 'Completed',
    description: 'A basic responsive web application for a local pizzeria, featuring a menu display and online ordering system.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/images/pizzeria.jpeg',
  },
  {
     title: 'Patintero',
    category: 'Group Project',
    status: 'Completed',
    description: 'A basic classic Filipino game web application.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/images/patintero.png',
  },
]

export type Certificate = {
  title: string
  issuer: string
  date: string // e.g. 'March 2026'
  credentialUrl?: string // link to the verifiable certificate, if any
  image?: string // e.g. '/images/certs/python.png'
}

export const certificates: Certificate[] = [
  { title: 'Computer Hardware Basics', issuer: 'DICT-ITU DTC Initiative through the Cisco Networking Academy program', date: 'September 2026' },
  { title: 'Networking Basics', issuer: 'DICT-ITU DTC Initiative through the Cisco Networking Academy program', date: 'September 2026' },  
  { title: 'Operating Systems Basics', issuer: 'DICT-ITU DTC Initiative through the Cisco Networking Academy program', date: 'September 2026' },
]

export const education = {
  degree: 'Bachelor of Science in Information Technology',
  school: 'Cebu Eastern College Incorporated', // PLACEHOLDER
  status: 'Currently enrolled',
  graduation: '', // e.g. 'Expected 2027' (hidden while empty)
  coursework: [] as string[], // e.g. ['Data Structures', 'Database Systems']
}

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]
