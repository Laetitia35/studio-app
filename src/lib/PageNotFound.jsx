export default function PageNotFound() {
  const pageName = window.location.pathname.substring(1);
  const { data: authData, isFetched } = useQuery({
  queryKey: ['user'],
  queryFn: async () => {
    return { user: null, isAuthenticated: false };
  }
});

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl">404</h1>
        <p>Page "{pageName}" introuvable</p>

        <a href="/" className="text-blue-500">
          Retour accueil
        </a>
      </div>
    </div>
  );
}