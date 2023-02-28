import Button from '../../components/Button';
import LinkedInIcon from '../../components/Icons/LinkedIn';
import GithubIcon from '../../components/Icons/Github';
import MailIcon from '../../components/Icons/Mail';

export default function Header() {
  return (
    // @ts-expect-error TS(2304): Cannot find name 'div'.
    <div className="flex justify-around items-center lg:items-end">
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div className="pr-6 sm:pr-10">
        // @ts-expect-error TS(2304): Cannot find name 'h2'.
        <h2 className="text-5xl text-black font-semibold leading-tight">
          // @ts-expect-error TS(2304): Cannot find name 'Ignacio'.
          Ignacio <br className="lg:hidden" />
          // @ts-expect-error TS(2304): Cannot find name 'Gurí'.
          Gurí
        </h2>
      </div>
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div className="flex flex-col justify-around items-center sm:flex-row sm:justify-between">
        // @ts-expect-error TS(2709): Cannot use namespace 'Button' as a type.
        <Button
          // @ts-expect-error TS(2304): Cannot find name 'type'.
          type="primary"
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="medium"
          // @ts-expect-error TS(2304): Cannot find name 'className'.
          className="my-1 sm:mr-4"
          // @ts-expect-error TS(2304): Cannot find name 'iconLeft'.
          iconLeft={<LinkedInIcon classNames="fill-current" />}
        >
          // @ts-expect-error TS(2304): Cannot find name 'a'.
          <a
            // @ts-expect-error TS(2304): Cannot find name 'className'.
            className="text-current no-underline"
            // @ts-expect-error TS(2304): Cannot find name 'rel'.
            rel="noopener noreferrer"
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href="https://www.linkedin.com/in/ignacio-guri/"
          >
            // @ts-expect-error TS(2304): Cannot find name 'LinkedIn'.
            LinkedIn
          </a>
        </Button>
        <Button
          // @ts-expect-error TS(2304): Cannot find name 'type'.
          type="secondary"
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="medium"
          // @ts-expect-error TS(2304): Cannot find name 'className'.
          className="my-1 sm:mr-4"
          // @ts-expect-error TS(2304): Cannot find name 'iconLeft'.
          iconLeft={<GithubIcon />}
        >
          // @ts-expect-error TS(2304): Cannot find name 'a'.
          <a
            // @ts-expect-error TS(2304): Cannot find name 'className'.
            className="text-current no-underline"
            // @ts-expect-error TS(2304): Cannot find name 'rel'.
            rel="noopener noreferrer"
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href="https://github.com/ignaguri"
          >
            // @ts-expect-error TS(2304): Cannot find name 'Github'.
            Github
          </a>
        </Button>
        <Button
          // @ts-expect-error TS(2304): Cannot find name 'type'.
          type="secondary"
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="medium"
          // @ts-expect-error TS(2304): Cannot find name 'className'.
          className="my-1 sm:mr-4"
          // @ts-expect-error TS(2304): Cannot find name 'iconLeft'.
          iconLeft={<MailIcon />}
        >
          // @ts-expect-error TS(2304): Cannot find name 'a'.
          <a
            // @ts-expect-error TS(2304): Cannot find name 'className'.
            className="text-current no-underline"
            // @ts-expect-error TS(2304): Cannot find name 'rel'.
            rel="noopener noreferrer"
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href="mailto:ignacioguri@gmail.com"
          >
            // @ts-expect-error TS(2304): Cannot find name 'Email'.
            Email me
          </a>
        </Button>
      </div>
    </div>
  );
}
