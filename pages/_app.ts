import '../styles/global.css';

function App({
  Component,
  pageProps
}: any) {
  // @ts-expect-error TS(2749): 'Component' refers to a value, but is being used a... Remove this comment to see the full error message
  return <Component {...pageProps} />;
}

export default App;
