// const withPageAuthRequired: WithPageAuthRequired = (Component, options = {}) => {
//     return function WithPageAuthRequired(props): JSX.Element {
//       const { returnTo, onRedirecting = defaultOnRedirecting, onError = defaultOnError } = options;
//       const { loginUrl } = useConfig();
//       const { user, error, isLoading } = useUser();
  
//       useEffect(() => {
//         if ((user && !error) || isLoading) return;
//         let returnToPath: string;
  
//         if (!returnTo) {
//           const currentLocation = window.location.toString();
//           returnToPath = currentLocation.replace(new URL(currentLocation).origin, '') || '/';
//         } else {
//           returnToPath = returnTo;
//         }
  
//         window.location.assign(`${loginUrl}?returnTo=${encodeURIComponent(returnToPath)}`);
//       }, [user, error, isLoading]);
  
//       if (error) return onError(error);
//       if (user) return <Component user={user} {...(props as any)} />;
  
//       return onRedirecting();
//     };
//   };
  
//   export default withPageAuthRequired;