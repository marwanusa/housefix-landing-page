import { BookOpenIcon, InfoIcon, LifeBuoyIcon } from "lucide-react";

import { cn } from "@/lib/utils";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import Image from "next/image";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  {
    label: "Home",
    submenu: true,
    type: "simple",
    items: [
      { href: "/#services", label: "Services" },
      { href: "/#recentworks", label: "Recent Works" },
      { href: "/#pricing", label: "Pricing Plans" },
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#partners", label: "Partners" },
      { href: "/#blog", label: "Blog" },
    ],
  },
  {
    label: "Pages",
    submenu: true,
    type: "description",
    items: [
      {
        href: "/services",
        label: "Services",
        description:
          "Discover the range of professional services we provide to meet your needs.",
      },
      {
        href: "/about-us",
        label: "About Us",
        description:
          "Get to know our story, mission, and the team behind our success.",
      },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  return (
    <header className="border-b mainContainer ">
      <div className="flex h-[80px] items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <Link href="/" className="text-primary hover:text-primary/90">
              <Image
                src="/assets/icons/FullLogo.svg"
                width={147}
                height={42}
                alt="Logo"
              />
            </Link>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}

          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <Image
                  src={"/assets/icons/Hamburger-02.svg"}
                  alt={"Hamburger Icon"}
                  className={"pointer-events-none rotate-180"}
                  width={32}
                  height={32}
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      {link.submenu ? (
                        <>
                          <div className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
                            {link.label}
                          </div>
                          <ul>
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink
                                  href={item.href}
                                  className="py-1.5"
                                >
                                  {item.label}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <NavigationMenuLink href={link.href} className="py-1.5">
                          {link.label}
                        </NavigationMenuLink>
                      )}
                      {index < navigationLinks.length - 1 &&
                        ((!link.submenu &&
                          navigationLinks[index + 1].submenu) ||
                          (link.submenu &&
                            !navigationLinks[index + 1].submenu) ||
                          (link.submenu &&
                            navigationLinks[index + 1].submenu &&
                            link.type !== navigationLinks[index + 1].type)) && (
                          <div
                            role="separator"
                            aria-orientation="horizontal"
                            className="bg-border -mx-1 my-1 h-px w-full"
                          />
                        )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Navigation menu */}

          <NavigationMenu viewport={false} className="max-md:hidden">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  {link.submenu ? (
                    <>
                      <NavigationMenuTrigger className="text-muted-foreground hover:text-primary bg-transparent px-2 py-1.5 font-medium *:[svg]:-me-0.5 *:[svg]:size-3.5">
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="data-[motion=from-end]:slide-in-from-right-1! data-[motion=from-start]:slide-in-from-left-1! data-[motion=to-end]:slide-out-to-right-1! data-[motion=to-start]:slide-out-to-left-1! z-50 p-1">
                        <ul
                          className={cn(
                            link.type === "description"
                              ? "min-w-64"
                              : "min-w-48"
                          )}
                        >
                          {link.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <NavigationMenuLink
                                href={item.href}
                                className="py-1.5"
                              >
                                {/* Display icon if present */}
                                {link.type === "icon" && "icon" in item && (
                                  <div className="flex items-center gap-2">
                                    {item.icon === "BookOpenIcon" && (
                                      <BookOpenIcon
                                        size={16}
                                        className="text-foreground opacity-60"
                                        aria-hidden="true"
                                      />
                                    )}
                                    {item.icon === "LifeBuoyIcon" && (
                                      <LifeBuoyIcon
                                        size={16}
                                        className="text-foreground opacity-60"
                                        aria-hidden="true"
                                      />
                                    )}
                                    {item.icon === "InfoIcon" && (
                                      <InfoIcon
                                        size={16}
                                        className="text-foreground opacity-60"
                                        aria-hidden="true"
                                      />
                                    )}
                                    <span>{item.label}</span>
                                  </div>
                                )}

                                {/* Display label with description if present */}
                                {link.type === "description" &&
                                "description" in item ? (
                                  <div className="space-y-1">
                                    <div className="font-medium">
                                      {item.label}
                                    </div>
                                    <p className="text-muted-foreground line-clamp-2 text-xs">
                                      {item.description}
                                    </p>
                                  </div>
                                ) : (
                                  // Display simple label if not icon or description type
                                  !link.type ||
                                  (link.type !== "icon" &&
                                    link.type !== "description" && (
                                      <span>{item.label}</span>
                                    ))
                                )}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href={link.href}
                      className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
