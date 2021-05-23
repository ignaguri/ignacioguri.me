export default function Layout({ children }) {
  return (
    <div className="container min-h-screen flex flex-col justify-center items-center mx-auto py-0 px-2 sm:px-4">
      {children}
    </div>
  );
}
