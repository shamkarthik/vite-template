import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import classes from './Theme.module.css';

export function ColorSchemeToggle() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon onClick={() => toggleColorScheme()} variant="default" aria-label="Settings">
      <IconSun className={classes.darkIcon} />
      <IconMoonStars className={classes.lightIcon} />
    </ActionIcon>
  );
}
