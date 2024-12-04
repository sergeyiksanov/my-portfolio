import Image from "next/image";
import ProjectsList from "./ui/ProjectsList";
import ProjectsTitle from "./ui/ProjectsTitle";

const features = [
  {
    name: "Карта жителя Татарстана",
    description: "Мобильное приложение для жителей республики Татарстан.",
    href: "https://github.com/GP-Hacks/android-app",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    technologies: [
      {
        icon: <Image src={"/kotlin.svg"} alt="Kotlin" width={20} height={20} />,
        name: "Kotlin",
      },
      {
        icon: (
          <Image src={"/ktor.svg"} alt="Ktor-client" width={20} height={20} />
        ),
        name: "Ktor-client",
      },
      {
        icon: (
          <Image
            src={"/jetpackcompose.svg"}
            alt="Jetpack Compose"
            width={20}
            height={20}
          />
        ),
        name: "Jetpack Compose",
      },
      {
        icon: <Image src={"/firebase.svg"} alt="FCM" width={20} height={20} />,
        name: "Firebase Cloud Messaging",
      },
    ],
    background: (
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={"/kdt.png"}
          alt="Карта жителя Татарстана."
          className="object-cover w-full h-full z-0 pb-1 group-hover:scale-105 group-hover:pb-3 duration-300"
          width={0}
          height={0}
          unoptimized
        />
      </div>
    ),
  },
  {
    name: "Pro Math",
    description:
      "Applications for competition in the speed of solving mathematical examples.",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    technologies: [
      {
        icon: <Image src={"/kotlin.svg"} alt="Nest" width={20} height={20} />,
        name: "Kotlin",
      },
      {
        icon: (
          <Image src={"/ktor.svg"} alt="Ktor-client" width={20} height={20} />
        ),
        name: "Ktor-client",
      },
      {
        icon: (
          <Image
            src={"/jetpackcompose.svg"}
            alt="Jetpack Compose"
            width={20}
            height={20}
          />
        ),
        name: "Jetpack Compose",
      },
    ],
    available: false,
    background: (
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={"/promath.png"}
          alt="Pro Math"
          className="object-cover w-full h-full z-0 pb-1 group-hover:scale-105 group-hover:pb-3 duration-300"
          width={0}
          height={0}
          unoptimized
        />
      </div>
    ),
  },
  {
    name: "Post Pulse",
    description: "Telegram autoposting platform for SMM managers.",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    technologies: [
      {
        icon: <Image src={"/kotlin.svg"} alt="Kotlin" width={20} height={20} />,
        name: "Kotlin",
      },
      {
        icon: (
          <Image
            src={"/jetpackcompose.svg"}
            alt="Jetpack Compose"
            width={20}
            height={20}
          />
        ),
        name: "Jetpack Compose",
      },
      {
        icon: (
          <Image src={"/ktor.svg"} alt="Ktor-client" width={20} height={20} />
        ),
        name: "Ktor-client",
      },
      {
        icon: <Image src={"/firebase.svg"} alt="FCM" width={20} height={20} />,
        name: "Firebase Cloud Messaging",
      },
    ],
    background: (
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={"/postpulse.jpg"}
          alt="Post Pulse"
          className="object-cover w-full h-full z-0 pb-1 group-hover:scale-105 group-hover:pb-3 duration-300"
          width={0}
          height={0}
          unoptimized
        />
      </div>
    ),
    available: false,
  },
  //{
  //  name: "VideoLoader",
  //  description: "App for loading videos from any platform.",
  //  cta: "Learn more",
  //  className: "col-span-3 lg:col-span-1",
  //  technologies: [
  //    {
  //      icon: (
  //        <Image src={"/nextjs.svg"} alt='Next.js' width={20} height={20} />
  //      ),
  //      name: "Next.js",
  //    },
  //    {
  //      icon: (
  //        <Image src={"/tailwind.svg"} alt='Tailwind' width={20} height={20} />
  //      ),
  //      name: "Tailwind",
  //    },
  //    {
  //      icon: (
  //        <Image src={"/mongodb.svg"} alt='MongoDB' width={20} height={20} />
  //      ),
  //      name: "MongoDB",
  //    },
  //  ],
  //  background: (
  //    <div className='absolute inset-0 w-full h-full'>
  //      <Image
  //        src={"/videoloaderscreen.png"}
  //        alt='VideoLoader'
  //        className='object-cover w-full h-full z-0 pb-1 group-hover:scale-105 group-hover:pb-3 duration-300'
  //        width={0}
  //        height={0}
  //        unoptimized
  //      />
  //    </div>
  //  ),
  //  available: false,
  //},
];

const Projects = () => {
  return (
    <div className="dot-background py-28 md:py-20" id="projects">
      <div className="max-w-2xl md:max-w-5xl mx-auto px-6 md:px-0">
        <ProjectsTitle />
        <ProjectsList features={features} />
      </div>
    </div>
  );
};

export default Projects;
