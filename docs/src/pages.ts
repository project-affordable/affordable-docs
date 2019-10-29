import _ from 'lodash';

import { Page } from '../../src/typings/data/import';

const lowerTextIncludes = (text: string, sub: string) =>
  _.includes(_.lowerCase(text), _.lowerCase(_.trimStart(sub)));

/* eslint-disable consistent-return */
export const loadPages = (pathname: string, currentPages: Array<Page>) => {
  const linkIncludesText = (link: Page) => lowerTextIncludes(link.pathname, pathname);

  if (pathname === '/') {
    return [];
  }

  // if (
  //   pagesPET.filter(link => {
  //     return _.some([link, ...(link.children || [])], linkIncludesText);
  //   }).length > 0
  // ) {
  //   return [
  //     ...pagesCommon,
  //     ...pagesRethinkSecurity,
  //     ...pagesPET,
  //     ...pagesPerspective,
  //     ...pagesDiscoverMore
  //   ];
  // }

  // if (
  //   pagesPIDP.filter(link => {
  //     return _.some([link, ...(link.children || [])], linkIncludesText);
  //   }).length > 0
  // ) {
  //   return [
  //     ...pagesCommon,
  //     ...pagesRethinkSecurity,
  //     ...pagesPIDP,
  //     ...pagesPerspective,
  //     ...pagesDiscoverMore
  //   ];
  // }

  // if (
  //   pagesRethinkSecurity.filter(link => {
  //     return _.some([link, ...(link.children || [])], linkIncludesText);
  //   }).length > 0
  // ) {
  //   return [...currentPages];
  // }

  if (
    pagesDiscoverMore.filter(link => {
      return _.some([link, ...(link.children || [])], linkIncludesText);
    }).length > 0
  ) {
    return [...currentPages];
  }

  // if (
  //   pagesPerspective.filter(link => {
  //     return _.some([link, ...(link.children || [])], linkIncludesText);
  //   }).length > 0
  // ) {
  //   return [...currentPages];
  // }

  // if (
  //   pagesCommon.filter(link => {
  //     return _.some([link, ...(link.children || [])], linkIncludesText);
  //   }).length > 0
  // ) {
  //   return [...currentPages];
  // }

  // if (
  //   pagesCommon.filter(link => {
  //     return _.some([link, ...(link.children || [])], linkIncludesText);
  //   }).length > 0
  // ) {
  //   return [...currentPages];
  // }

  if (
    pagesCommon.filter(link => {
      return _.some([link, ...(link.children || [])], linkIncludesText);
    }).length > 0
  ) {
    return [...pagesCommon];
  }
};

// export const pagesCommon: Array<Page> = [
//   {
//     pathname: '/guides',
//     icon: 'star',
//     highlight: true,
//     children: [
//       {
//         pathname: '/guides/landing',
//         icon: 'star',
//         highlight: true
//       },
//       {
//         pathname: '/guides/api',
//         icon: 'star',
//         highlight: true
//       }
//     ]
//   },
//   {
//     pathname: '/',
//     displayNav: false
//   }
// ];

export const pagesCommon: Array<Page> = [
  {
    pathname: '/affordable',
    icon: 'star',
    highlight: true,
    children: []
  },
  {
    pathname: '/risk',
    icon: 'star',
    highlight: true,
    children: [
      {
        pathname: '/risk/outage',
        icon: 'star',
        highlight: true
      },
      {
        pathname: '/risk/recommendation',
        icon: 'star',
        highlight: true
      },
      {
        pathname: '/risk/simulation',
        icon: 'star',
        highlight: true
      }
    ]
  },
  {
    pathname: '/validation',
    icon: 'star',
    highlight: true,
    children: [
      {
        pathname: '/validation/credit',
        icon: 'star',
        highlight: true
      },
      {
        pathname: '/validation/rating',
        icon: 'star',
        highlight: true
      }
    ]
  },
  {
    pathname: '/tracking',
    icon: 'star',
    highlight: true,
    children: []
  },
  {
    pathname: '/',
    displayNav: false
  }
];

export const pagesDiscoverMore: Array<Page> = [
  {
    pathname: '/discover-more',
    icon: 'star',
    highlight: true,
    children: [
      { pathname: '/discover-more/support', icon: 'star', highlight: true },
      { pathname: '/discover-more/team', icon: 'star', highlight: true },
      { pathname: '/discover-more/organisation', icon: 'star', highlight: true }
    ]
  }
];

export const pagesPIDP: Array<Page> = [
  {
    pathname: '/pidp',
    icon: 'star',
    children: [
      {
        pathname: '/pidp/approach',
        icon: 'star'
      },
      {
        pathname: '/pidp/approach/byExample',
        icon: 'star'
      }
    ]
  }
];

export const pagesPET: Array<Page> = [
  {
    pathname: '/common',
    icon: 'star',
    children: [
      {
        pathname: '/common/dataflow',
        icon: 'star'
      },
      {
        pathname: '/common/dataflow/comparison',
        icon: 'star'
      }
    ]
  }
];

export const pagesRethinkSecurity: Array<Page> = [
  {
    pathname: '/rethink-security',
    icon: 'star',
    children: [
      {
        pathname: '/rethink-security/attackVectors',
        icon: 'star'
      },
      {
        pathname: '/rethink-security/attackVectors/comparison',
        icon: 'star'
      }
    ]
  }
];

export const pagesPerspective: Array<Page> = [
  {
    pathname: '/perspective',
    icon: 'star',
    children: [
      {
        pathname: '/perspective/strategy',
        icon: 'star'
      },
      {
        pathname: '/perspective/cause',
        icon: 'star'
      },
      {
        pathname: '/perspective/shortsighted',
        icon: 'star'
      },
      {
        pathname: '/perspective/competence',
        icon: 'star'
      },
      {
        pathname: '/perspective/reference',
        icon: 'star'
      }
    ]
  }
];
