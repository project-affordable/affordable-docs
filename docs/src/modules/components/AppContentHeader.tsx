import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { isMobileOnly } from 'react-device-detect';

import Breadcrumbs from './common/breadcrumbs';

export const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    headerRow: {
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      height: '56px'
    }
  })
);

export interface MarkdownDocsProps {
  markdownLocation?: string;
}

export const AppContentHeader = () => {
  const classes = useStyles({});

  return !isMobileOnly ? (
    <div className={classes.headerRow}>
      <Breadcrumbs />
    </div>
  ) : null;
};

export default AppContentHeader;
