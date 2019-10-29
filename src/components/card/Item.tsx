import { Avatar, createStyles, Icon, makeStyles, Theme, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

import { OverviewProps } from '../../typings/data/import';

export const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    row: {
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    },
    avatar: {
      margin: 10
    }
  })
);

const Item = ({ title, description, link, icon }: OverviewProps) => {
  const classes = useStyles({});

  return (
    <div className={classes.row}>
      <Link href={link}>
        <Avatar className={classes.avatar}>
          <Icon>{icon}</Icon>

          {/* <LaunchIcon /> */}
        </Avatar>
      </Link>
      <div className={classes.column}>
        <Typography component='h4'>{title}</Typography>
        <Typography component='h5'>{description}</Typography>
      </div>
    </div>
  );
};

export default Item;
