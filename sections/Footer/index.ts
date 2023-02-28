export default function Footer() {
  return (
    // @ts-expect-error TS(2304): Cannot find name 'footer'.
    <footer className="w-full h-24 flex justify-center items-center border-t border-solid border-gray-300">
      // @ts-expect-error TS(2304): Cannot find name 'a'.
      <a
        // @ts-expect-error TS(2304): Cannot find name 'className'.
        className="flex justify-center items-center text-black no-underline"
        // @ts-expect-error TS(2304): Cannot find name 'href'.
        href="https://github.com/ignaguri"
        // @ts-expect-error TS(2304): Cannot find name 'rel'.
        rel="noopener noreferrer"
      >
        // @ts-expect-error TS(1101): 'with' statements are not allowed in strict mode.
        Created with ♥ by @ignaguri
      </a>
    </footer>
  );
}
