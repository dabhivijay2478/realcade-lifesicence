import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export const NavMenu = (props) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Manufacturing</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="">
              <Link href="/docs" title="Introduction">
                Manufacturing Unit 1
              </Link>
              <Link href="/docs/installation" title="Installation">
                Manufacturing Unit 2
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="">
              <Link href="/docs" title="Introduction">
                Product 1
              </Link>
              <Link href="/docs/installation" title="Installation">
                Product 2
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#">About</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#">Contact Us</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);


