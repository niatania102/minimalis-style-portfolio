"use client";

import { AppShell, Burger, Group, NavLink, useComputedColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";

import { useState } from "react";
import Theme from "./Theme";
import { navigationOption } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = ({children}) => {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(0);
  const pathname = usePathname();

  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

          <Link href="/" className="flex">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={30}
              height={30}
            />
            <p className="font-bold ml-4 text-xl font-handlee my-auto">Tania</p>
          </Link>

          <Theme />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        {navigationOption
          .map((navOption, index) => (
            <NavLink
              href={navOption.path}
              key={navOption.value}
              active={navOption.path === pathname}
              label={navOption.value}
              description={navOption.description}
              onClick={() => setActive(index)}
              color="dark"
              variant="filled"

            />
          ))}
      </AppShell.Navbar>

      <AppShell.Main className={`${computedColorScheme === 'light' ? 'bg-dot-black/[0.5]' : 'bg-dot-white/[0.5]' }`}>{children}</AppShell.Main>
    </AppShell>
  );
};

export default Navbar;
