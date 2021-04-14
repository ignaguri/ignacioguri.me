export default function Layout({ children }) {
  return (
    <div className="container mx-auto min-h-screen	py-0 px-4 sm:px-2 flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
