import * as gtag from '../../lib/gtag';

export default function Footer() {
  const handleGoToGithub = () => {
    gtag.event({
      action: 'go_to_github',
      category: 'Contact',
    });
  };

  return (
    <footer className="w-full h-24 flex justify-center items-center border-t border-solid border-gray-300">
      <a
        className="flex justify-center items-center text-black no-underline"
        onClick={handleGoToGithub}
        href="https://github.com/ignaguri"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created with ♥ by @ignaguri
      </a>
    </footer>
  );
}
