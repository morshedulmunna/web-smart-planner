import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { LeftSidebar, TopNavbar } from "~/core-ui";
import "~/styles/globals.css";

const queryClient = new QueryClient();

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <div className=" grid h-screen grid-cols-12 overflow-hidden ">
          <div className=" col-span-10">
            <div className=" bg-white ">
              <TopNavbar />
            </div>
            <div className="grid grid-cols-12">
              <aside className="col-span-2  ">
                <LeftSidebar />
              </aside>
              <div className="col-span-10 ">
                <div className="">Profile Info</div>
                <div className="grid grid-cols-12 ">
                  <div className=" col-span-12   lg:col-span-8">
                    <Component {...pageProps} />
                  </div>

                  <div className=" col-span-12 lg:col-span-4">
                    <div>Calender</div>
                    <div>Event Attending</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 ">Right Sidebar</div>
        </div>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default MyApp;
