import { AppShell, Box, Burger, Group, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import classes from './Layout.module.css';
import LoginButton from '../Login/LoginButton';
import BasicProfile from './BasicProfile';

type LayoutProp = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProp) => {
  const [opened, { toggle }] = useDisclosure();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <AppShell
      header={{ height: { base: 60, md: 60, lg: 60 } }}
      navbar={{
        width: { base: 200, md: 200, lg: 200 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <MantineLogo size={30} />
            <Group ml="xl" gap={5} visibleFrom="sm">
              <UnstyledButton className={classes.control}>Home</UnstyledButton>
              <UnstyledButton className={classes.control}>Blog</UnstyledButton>
              <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
              <UnstyledButton className={classes.control}>Support</UnstyledButton>
              <Box className={classes.control}>
                <LoginButton />
              </Box>
              <ColorSchemeToggle />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="xs">
        {isAuthenticated && user?.picture && user?.name && user && (
          <BasicProfile photoUrl={user?.picture} userName={user?.name} />
        )}
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default Layout;
