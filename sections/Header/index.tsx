import Button from "@components/Button";
import GithubIcon from "@components/Icons/Github";
import LinkedInIcon from "@components/Icons/LinkedIn";
import MailIcon from "@components/Icons/Mail";

export default function Header() {
  return (
    <div className="flex justify-around items-center lg:items-end">
      <div className="pr-6 sm:pr-10">
        <h2 className="text-5xl text-black dark:text-white font-semibold leading-tight">
          Ignacio <br className="lg:hidden" />
          Gurí
        </h2>
      </div>
      <div className="flex flex-col justify-around items-center sm:flex-row sm:justify-between">
        <Button
          type="primary"
          size="medium"
          className="my-1 sm:mr-4"
          iconLeft={<LinkedInIcon className="fill-current" />}
        >
          <a
            className="text-white dark:text-white no-underline"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ignacio-guri/"
          >
            LinkedIn
          </a>
        </Button>
        <Button
          type="secondary"
          size="medium"
          className="my-1 sm:mr-4"
          iconLeft={<GithubIcon className="fill-current" />}
        >
          <a
            className="text-gray-700 dark:text-gray-300 no-underline"
            rel="noopener noreferrer"
            href="https://github.com/ignaguri"
          >
            Github
          </a>
        </Button>
        <Button
          type="secondary"
          size="medium"
          className="my-1 sm:mr-4"
          iconLeft={<MailIcon />}
        >
          <a
            className="text-gray-700 dark:text-gray-300 no-underline"
            rel="noopener noreferrer"
            href="mailto:ignacioguri@gmail.com"
          >
            Email me
          </a>
        </Button>
      </div>
    </div>
  );
}
