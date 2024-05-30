import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ setSelectedComponent }) => {
  const navItems = [
    { label: "Assignment", src: "/signal.png" },
    { label: "Podcast", src: "/headphone.png" },
    { label: "Articles", src: "/artical.png" },
    { label: "Topics", src: "/talk.png" },
    { label: "Prompt", src: "/chat.png" },
    { label: "Quiz", src: "/ideas.png" },
  ];
  // ****************************************

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % navItems.length);
    }, 4000); // Change the time duration here (in milliseconds)

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setSelectedComponent(navItems[currentIndex].label);
  }, [currentIndex, setSelectedComponent, navItems]);

  // *******************************************

  return (
    <header className="p-4 bg-gray-100 shadow">
      <nav className="flex justify-around space-x-4">
        {navItems.map((item, index) => (
          <div
            key={item.label}
            className={`cursor-pointer flex items-center py-2 px-4 bg-gray-200 rounded-lg text-black hover:bg-gray-300 transition-colors ${index === currentIndex ? "bg-blue-200" : ""
              }`}
            onClick={() => setSelectedComponent(item.label)}
          >
            <Image src={item.src} alt={item.label} width={20} height={20} />
            <span className="ml-2">{item.label}</span>
          </div>
        ))}
      </nav>
    </header>
  );
};

const PromptComponent = ({ content }) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:col-span-2 md:grid-cols-2">
      {content.map((item, index) => (
        <div
          key={index}
          className="flex items-center h-24 p-4 border rounded-lg"
        >
          <Image src={item.src} alt={item.alt} width={30} height={30} />
          <div className="flex flex-col justify-center ml-4 ">
            <h1 className="text-lg font-bold text-gray-500">{item.title}</h1>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState("Prompt");

  const contentMap = {
    Assignment: [
      {
        src: "/japan.png",
        alt: "Japan",
        title: "Japan",
        description: "Complete your assignment on Japanese history.",
      },
      {
        src: "/canada.png",
        alt: "Canada",
        title: "Canada",
        description: "Assignment on Canadian wildlife.",
      },
      {
        src: "/germany.png",
        alt: "Germany",
        title: "Germany",
        description: "Research on German engineering.",
      },
      {
        src: "/india.png",
        alt: "India",
        title: "India",
        description: "History of Indian independence.",
      },
      {
        src: "/australia.png",
        alt: "Australia",
        title: "Australia",
        description: "Study on Australian ecosystems.",
      },
      {
        src: "/spain.png",
        alt: "Spain",
        title: "Spain",
        description: "Essay on Spanish literature.",
      },
    ],
    Podcast: [
      {
        src: "/mexico.png",
        alt: "Mexico",
        title: "Mexico",
        description: "Listen to the Mexican history podcast.",
      },
      {
        src: "/china.png",
        alt: "China",
        title: "China",
        description: "Chinese culture in podcasts.",
      },
      {
        src: "/uk.png",
        alt: "UK",
        title: "UK",
        description: "British monarchy podcast.",
      },
      {
        src: "/egypt.png",
        alt: "Egypt",
        title: "Egypt",
        description: "Egyptian pyramids podcast.",
      },
      {
        src: "/south-africa.png",
        alt: "South Africa",
        title: "South Africa",
        description: "South African wildlife podcast.",
      },
      {
        src: "/new-zealand.png",
        alt: "New Zealand",
        title: "New Zealand",
        description: "Maori culture podcast.",
      },
    ],
    Articles: [
      {
        src: "/argentina.png",
        alt: "Argentina",
        title: "Argentina",
        description: "Read articles about Argentinian culture.",
      },
      {
        src: "/greece.png",
        alt: "Greece",
        title: "Greece",
        description: "Greek historical articles.",
      },
      {
        src: "/sweden.png",
        alt: "Sweden",
        title: "Sweden",
        description: "Swedish innovation articles.",
      },
      {
        src: "/turkey.png",
        alt: "Turkey",
        title: "Turkey",
        description: "Turkish cuisine articles.",
      },
      {
        src: "/portugal.png",
        alt: "Portugal",
        title: "Portugal",
        description: "Portuguese exploration articles.",
      },
      {
        src: "/thailand.png",
        alt: "Thailand",
        title: "Thailand",
        description: "Thai cultural articles.",
      },
    ],
    Topics: [
      {
        src: "/norway.png",
        alt: "Norway",
        title: "Norway",
        description: "Discuss Norwegian fjords.",
      },
      {
        src: "/netherlands.png",
        alt: "Netherlands",
        title: "Netherlands",
        description: "Dutch art and architecture.",
      },
      {
        src: "/switzerland.png",
        alt: "Switzerland",
        title: "Switzerland",
        description: "Swiss banking system.",
      },
      {
        src: "/belgium.png",
        alt: "Belgium",
        title: "Belgium",
        description: "Belgian chocolate industry.",
      },
      {
        src: "/finland.png",
        alt: "Finland",
        title: "Finland",
        description: "Finnish education system.",
      },
      {
        src: "/austria.png",
        alt: "Austria",
        title: "Austria",
        description: "Austrian classical music.",
      },
    ],
    Prompt: [
      {
        src: "/brazil.png",
        alt: "Brazil",
        title: "Brazil",
        description: "Prompts about Brazilian culture.",
      },
      {
        src: "/france.png",
        alt: "France",
        title: "France",
        description: "Prompts on French history.",
      },
      {
        src: "/italy.png",
        alt: "Italy",
        title: "Italy",
        description: "Prompts on Italian cuisine.",
      },
      {
        src: "/america.png",
        alt: "America",
        title: "America",
        description: "Prompts on American innovations.",
      },
      {
        src: "/south-korea.png",
        alt: "South Korea",
        title: "South Korea",
        description: "Prompts on Korean traditions.",
      },
      {
        src: "/russia.png",
        alt: "Russia",
        title: "Russia",
        description: "Prompts on Russian literature.",
      },
    ],
    Quiz: [
      {
        src: "/kiribati.png",
        alt: "Kiribati",
        title: "Kiribati",
        description: "Quiz on Kiribati geography.",
      },
      {
        src: "/comoros.png",
        alt: "Comoros",
        title: "Comoros",
        description: "Comoros language quiz.",
      },
      {
        src: "/djibouti.png",
        alt: "Djibouti",
        title: "Djibouti",
        description: "Quiz on Djibouti art.",
      },
      {
        src: "/tuvalu.png",
        alt: "Tuvalu",
        title: "Tuvalu",
        description: "Tuvalu history quiz.",
      },
      {
        src: "/tonga.png",
        alt: "Tonga",
        title: "Tonga",
        description: "Quiz on Tonga pop culture.",
      },
      {
        src: "/nauru.png",
        alt: "Nauru",
        title: "Nauru",
        description: "Nauru politics quiz.",
      },
    ],
  };

  return (
    <div>
      <Header setSelectedComponent={setSelectedComponent} />
      <main className="p-8 bg-[#F3F4F6] min-h-screen ">
        <section className="grid grid-cols-1 px-28 lg:grid-cols-3 ">
          {/* Left side impressive card */}
          <div className="flex flex-col items-center bg-transparent rounded-lg shadow lg:col-span-1 w-80">
            <div className="flex items-start justify-center w-full h-64 overflow-hidden">
              <Image
                src="/imaage2.jpg"
                alt="Welcome Image"
                width={300}
                height={300}
                className="object-cover w-full rounded-md"
                style={{ marginTop: 0 }}
              />
            </div>
            <h2 className="my-2 text-xl font-bold text-gray-700 ">
              Assessment
            </h2>
            <p className="mx-5 text-sm text-gray-700">
              Test your level with a free language assessment
            </p>
            <Link href="#">
              <div className="px-4 py-2 mt-2 text-lg font-bold text-blue-500 transition-colors duration-500 rounded-lg">
                Test now ➡️
              </div>
            </Link>
          </div>

          {/* Right side prompt cards */}
          <PromptComponent content={contentMap[selectedComponent]} />
        </section>
      </main>
    </div>
  );
}
