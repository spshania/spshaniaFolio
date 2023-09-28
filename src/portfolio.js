/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shania Putri",
  title: "Hi, Saya Shania Putri",
  subTitle: emoji(
    "Mahasiswi Politeknik Tri Mitra Karya Mandiri dengan Prodi Teknik Komputer."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/spshania",
  linkedin: "https://www.linkedin.com/in/spshania/",
  gmail: "spshania2004@gmail.com",
  gitlab: "https://gitlab.com/spshania",
  facebook: "https://www.facebook.com/spshania",
  medium: "https://medium.com/@spshania",
  stackoverflow: "https://stackoverflow.com/users/22614624/shania-putri",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Apa yang saya lakukan?",
  subTitle: "MENINGKATKAN KEMAMPUAN DALAM PENGEMBANGAN DAN BELAJAR LEBIH GIAT",
  skills: [
    emoji(
      "⚡ Mengembangkan Antarmuka Pengguna yang interaktif untuk WEB Aplikasi SMKN 1 Tirtamluya"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) di Politeknik TMKM"),
    emoji(
      "⚡ Integrasi layanan pihak ketiga seperti Firebase/AWS/Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Politeknik Tri Mitra Karya Mandiri",
      logo: require("./assets/images/tmkm.png"),
      subHeader: "Teknik Komputer",
      duration: "September 2022 -  sampai sekarang",
      desc: "Berpartisipasi dalam Badan Eksekutif Mahasiswa di Politeknik TMKM.",
      descBullets: [
        "Program Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB)",
        "Program Pelatihan Dasar Kepemimpinan Mahasiswa (LDKM)"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Prestasi dan Sertifikasi 🏆 "),
  subtitle:
    "Prestasi, Sertifikasi, Penghargaan dan Beberapa Hal yang telah saya dapatkan !",

  achievementsCards: [
    {
      title: "Google Code-In",
      subtitle:
        "Mengikuti Sertifikasi Google Code-In Action dari CNNA yang bertempat di Bandung .",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Sertifikat",
          url: ""
        },
        {
          name: "Penghargaan",
          url: "Surat Penghargaan"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Mempelajari Pembangunan Aplikasi Google Assistant JavaScript Guru oleh Google.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Google Assistant Action",
          url: "https://assistant.google.com/"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Menyelesaikan Sertifikasi dari SMIT untuk Pengembangan Aplikasi Web PWA",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Sertifikat", url: "" },
        {
          name: "Tugas Akhir",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blog",
  subtitle:
    "Untuk pengembangan hal yang menarik lainnya. Saya suka menulis dan berbagi ilmu yang saya dapat",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Kenapa harus prodi Teknik Komputer?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dolor nec dolor faucibus, sed volutpat metus consequat. Integer eget eleifend felis. Quisque porttitor est at libero tincidunt, in consequat nibh pellentesque. Vestibulum malesuada nisl libero, at finibus neque convallis vitae. In id arcu justo."
    },
    {
      url: "",
      title: "Kenapa harus Politeknik TMKM?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dolor nec dolor faucibus, sed volutpat metus consequat. Integer eget eleifend felis. Quisque porttitor est at libero tincidunt, in consequat nibh pellentesque. Vestibulum malesuada nisl libero, at finibus neque convallis vitae. In id arcu justo."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Obrolan",
  subtitle: emoji(
    "SAYA SUKA BERBAGI PENGETAHUAN SAYA YANG TIDAK SEBERAPA 😅"
  ),

  talks: [
    {
      title: "Pengembangan SIAKAD berbasis WEB",
      subtitle: "Praktik Kerja Lapangan di SMKN 1 Tirtamulya",
      slides_url: "",
      event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Saya suka menceritakan pengalaman saya pribadi tentang teknologi",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Kontak Saya ☎️"),
  subtitle:
    "Mau diskusi tentang project atau hanya sekedar ingin menyapa? Kontak Masuk saya terbuka untuk semua.",
  number: "+62-0000000000",
  email_address: "spshania2004@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "spshania", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
