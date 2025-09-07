import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";


export default function DataFetcher({ loading, error, children}) {
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  return <>{children}</>;
}