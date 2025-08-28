

// import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "@/assets/Logo";
import { useMyUserInfoQuery } from "@/redux/features/user/user.api";
import { getSidebarItems } from "@/utils/getSideBarItems";
import { Link } from "react-router";
import { NavUser } from "./nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useMyUserInfoQuery(undefined);
  console.log(userData?.data?.role);
  const data = {
    navMain: getSidebarItems(userData?.data?.role),
  };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <a
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600 hover:text-blue-500 transition-colors duration-300"
        >
          {/* Logo Component */}
          <div className="w-10 h-10  flex items-center justify-center ">
            <Logo />
          </div>

          {/* Brand Name */}
          <span className="tracking-wide">RideWay</span>
        </a>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
          {userData?.data ? (
          <NavUser
            user={{
              name: userData.data.name || "Guest",
              email: userData.data.email || "guest@example.com",
              avatar: userData.data.profileImage || "",
            }}
          />
        ) : (
          <div>Loading...</div>
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
