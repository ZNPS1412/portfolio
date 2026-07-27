import portfolioImage from "../assets/projects/portfolio.png";
import taskmanager from "../assets/projects/taskmanager.png";
import login from "../assets/projects/login.png";

export const projects = [

    {

        id: 1,

        featured: true,

        title: "Portfolio Full Stack",

        category: "Full Stack Web Application",

        description:
            "A responsive full-stack portfolio built with Spring Boot 4 and React, featuring secure authentication, REST APIs, Docker support and PostgreSQL database.",

        technologies: [
            "Spring Boot 4",
            "React",
            "Tailwind CSS",
            "PostgreSQL",
            "Docker",
            "JWT",
            "JPA",
            "REST API",
        ],

        highlights: [
            "JWT Authentication",
            "Role-Based Authorization",
            "Project CRUD API",
            "Secure Image Upload",
            "Contact API",
            "Responsive React Frontend",
        ],

        github: "https://github.com/ZNPS1412/portfolio",

        liveDemo: "#",

        apiDocs: "#",

        image: portfolioImage

    },

    {

        id: 2,

        featured: false,

        title: "Cross Platform Task Manager",

        category: "Desktop & Android",

        description:
            "Task management application developed using Java desktop, Android and a shared cloud database.",

        technologies: [
            "Java",
            "Android",
            "MySQL",
        ],

        highlights: [
            "Desktop + Android",
            "Cloud Sync",
            "Task Management",
        ],

        github: "#",

        image: taskmanager

    },

    {

        id: 3,

        featured: false,

        title: "Registration & Login System",

        category: "Desktop Application",

        description:
            "Java desktop application featuring PBKDF2 password hashing, AES email encryption, image CAPTCHA and OTP-based authentication.",

        technologies: [
            "Java",
            "Swing",
            "MySQL",
        ],

        highlights: [
            "PBKDF2",
            "AES Encryption",
            "OTP Verification",
        ],

        github: "#",

        image: login,

    },

];
