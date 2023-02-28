export default function Layout({
  children
}: any) {
  return (
    // @ts-expect-error TS(2304): Cannot find name 'div'.
    <div className="container min-h-screen flex flex-col justify-center items-center mx-auto py-0 px-2 sm:px-4">
      {children}
    </div>
  );
}
