import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover object-bottom -z-10"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
