import Abstract from "../sections/Abstract";
import Experience from "../sections/Experience";
import Header from "../sections/Header";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

export const metadata = {
  title: "Ignacio Guri's page",
  description: "Ignacio Guri's personal webpage",
};

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center py-10 p-0 sm:py-20">
      <Header />
      <Abstract />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
