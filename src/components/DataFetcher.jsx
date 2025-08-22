import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";


export default function DataFetcher({ loading, error, children, loadingText = "Loading..." }) {
  if (loading) return <Loader text={loadingText} />;
  if (error) return <ErrorMessage message={error.message} />;

  return <>{children}</>;
}