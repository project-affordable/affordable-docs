import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import groupArray from 'group-array';
import _ from 'lodash';
import { TFunction } from 'next-i18next-serverless';
import React from 'react';
import { WithTranslation } from 'react-i18next';
import { OverviewProps } from 'src/typings/data/import';

import { withTranslation } from '../../../../i18n';
import ExpandableCard from '../../card/Item';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    root: {
      marginTop: '24px',
      marginBottom: '24px'
    },
    header: {
      textAlign: 'left'
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    }
  })
);

const generateTopicData = (t: TFunction): Array<OverviewProps> => {
  const topics: Array<OverviewProps> = t('topics', { returnObjects: true });

  if (_.isArray(topics)) {
    return topics;
  }

  return [];
};

type Props = WithTranslation;

const scenarios: Array<string> = ['general', 'loan'];
const categories: Array<string> = ['recommendation', 'overview', 'validation', 'risk'];

const GuttersGrid = ({ t }: Props) => {
  const classes = useStyles({});

  const topics = generateTopicData(t);
  const stingifiedCategories: Array<OverviewProps> = t('categories', { returnObjects: true });
  const stingifiedScenarios: Array<OverviewProps> = t('scenarios', { returnObjects: true });

  const categorySections = groupArray(topics, 'scenario', 'category');

  return (
    <>
      {scenarios.map(scenario => {
        return categorySections && categorySections[scenario] ? (
          <div
          // className={classes.column}
          >
            <Typography component='h2' className={classes.header}>
              {_.get(stingifiedScenarios, scenario)}
            </Typography>
            {categories.map(category => {
              return categorySections &&
                categorySections[scenario] &&
                categorySections[scenario][category] ? (
                <div
                // className={classes.column}
                >
                  <Typography component='h3' className={classes.header}>
                    {_.get(stingifiedCategories, category)}
                  </Typography>
                  <Grid container className={classes.root} spacing={6}>
                    {categorySections[scenario][category].map((data, index) => {
                      return (
                        <Grid key={index} item xs={12} md={6}>
                          <ExpandableCard
                            title={data.title}
                            description={data.description}
                            link={data.link}
                            icon={data.icon}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </div>
              ) : null;
            })}
          </div>
        ) : null;
      })}
    </>
  );
};

GuttersGrid.getInitialProps = async () => {
  return {
    namespacesRequired: ['pages/topics/index']
  };
};

export default withTranslation('pages/topics/index')(GuttersGrid);
