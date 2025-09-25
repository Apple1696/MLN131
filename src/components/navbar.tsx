import {  Menu,  Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/images/group.jpg",
    alt: "logo",
    title: "MLN131 - Group 7",
  },
  menu = [
    { title: "Trang chủ", url: "/" },
    
    {
      title: "Các loại dân chủ",
      url: "/",
      items: [
        {
          title: "Dân chủ xã hội chủ nghĩa",
          description:
            "Tìm hiểu về dân chủ xã hội chủ nghĩa và vai trò của nó trong việc xây dựng xã hội công bằng.",
          url: "/socialist-democracy",
          icon: <Trees className="size-5" />,
        },
        {
          title: "Dân chủ tư sản",
          description:
            "Tìm hiểu về dân chủ tư sản và vai trò của nó trong việc xây dựng xã hội công bằng.",
          url: "/bourgeois-democracy",
          icon: <Zap className="size-5" />,
        },
        
      ],
    },
    {
      title: "AI Chatbot",
      url: "#",
    },

    {
      title: "Giới thiệu team",
      url: "#",
    },
    
  ],
}: Navbar1Props) => {
  return (
    <>
      <style>{`
        .navbar-custom {
          background-color: #f87171!important;
        }
        
        .navbar-custom .nav-button {
          background-color: #f87171 !important;
          color: white !important;
          border: none !important;
        }
        
        .navbar-custom .nav-button:hover {
          background-color: white !important;
          color: #f87171 !important;
        }
        
        .navbar-custom .logo-text {
          color: white !important;
        }
        
        .navbar-custom .mobile-trigger {
          background-color: #f87171 !important;
          border: 2px solid white !important;
          color: white !important;
        }
        
        .navbar-custom .mobile-trigger:hover {
          background-color: white !important;
          color: #f87171 !important;
        }
      `}</style>
      <section className="py-4 navbar-custom">
        <div className="container mx-auto">
          {/* Desktop Menu */}
         <nav className="hidden lg:flex">
            <div className="flex items-center justify-between w-full">
              {/* Logo */}
              <a href={logo.url} className="flex items-center gap-2">
                <img
                  src={logo.src}
                  className="max-h-8 dark:invert"
                  alt={logo.alt}
                />
                <span className="text-lg font-semibold tracking-tighter logo-text">
                  {logo.title}
                </span>
              </a>
              <div className="flex items-center justify-center flex-1">
                <NavigationMenu>
                  <NavigationMenuList>
                    {menu.map((item) => renderMenuItem(item))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <div className="w-auto"></div>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a href={logo.url} className="flex items-center gap-2">
                <img
                  src={logo.src}
                  className="max-h-8 dark:invert"
                  alt={logo.alt}
                />
              </a>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="mobile-trigger">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <a href={logo.url} className="flex items-center gap-2">
                        <img
                          src={logo.src}
                          className="max-h-8 dark:invert"
                          alt={logo.alt}
                        />
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="nav-button">{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="nav-button group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="hover:bg-muted hover:text-accent-foreground flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div className="flex-1 text-left">
        <div className="text-sm font-semibold text-left">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug text-left">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };