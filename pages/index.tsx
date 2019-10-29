import { Container, Divider, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

import AppFrame from '../docs/src/modules/components/AppFrame';
import Head from '../docs/src/modules/components/Head';
import HomeFooter from '../docs/src/modules/components/HomeFooter';
import { useMdStyles } from '../docs/src/modules/components/md/styles/MdStyles';
import { useTranslation } from '../i18n';
import GuttersGrid from '../src/components/layout/grid/GuttersGrid';

// // --- Post bootstrap -----
// const useStyles = makeStyles(_theme => ({
//   root: {
//     textAlign: "center"
//     // paddingTop: theme.spacing(2)
//     // paddingTop: theme.spacing.unit * 20
//   }
// }));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: '1 1 100%'
    },
    drawer: {
      width: 0
    },
    hero: {
      paddingTop: 64,
      color: theme.palette.primary.main
    },
    // content: {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   textAlign: 'center',
    //   paddingTop: theme.spacing(4),
    //   paddingBottom: theme.spacing(8),
    //   [theme.breakpoints.up('md')]: {
    //     paddingTop: theme.spacing(20),
    //     paddingBottom: theme.spacing(20),
    //     flexDirection: 'row',
    //     alignItems: 'flex-start',
    //     textAlign: 'left'
    //   }
    // },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(8),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(20),
        // flexDirection: 'row',
        // alignItems: 'flex-start',
        textAlign: 'left'
      }
    },
    title: {
      marginLeft: -12,
      // whiteSpace: 'nowrap',
      letterSpacing: '.7rem',
      textIndent: '.7rem',
      fontWeight: theme.typography.fontWeightLight,
      [theme.breakpoints.only('xs')]: {
        fontSize: 28
      },
      textAlign: 'center'
    },
    header: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column'
    },
    headerSpace: {
      flexGrow: 1
    },
    headerItem: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    }
  })
);

const useStylesRoot = makeStyles((theme: Theme) => {
  return {
    ...useMdStyles(theme)
    // ...createStyles({
    // })
  };
});

const Index = () => {
  const classes = useStyles({});
  const rootClasses = useStylesRoot({});
  const { t } = useTranslation();

  return (
    <AppFrame drawerStyleOverride={{ drawer: classes.drawer }}>
      <div className={classes.root}>
        <Head />
        <div className={classes.hero}>
          <Container maxWidth='md' className={classes.content}>
            <div className={classes.header}>
              <Typography
                variant='h3'
                // component='h1'
                color='inherit'
                gutterBottom
                className={classes.title}
              >
                {t('application-title')}
              </Typography>
              <Typography
                variant='h4'
                // component='h1'
                color='inherit'
                gutterBottom
                className={classes.title}
              >
                {t('application-subTitle')}
              </Typography>
            </div>
            <div className={rootClasses.root}>
              <Divider />
              <GuttersGrid />
              <HomeFooter />
            </div>
          </Container>
        </div>
      </div>
    </AppFrame>
  );
};

export default Index;
