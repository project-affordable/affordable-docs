import { createStyles, Theme } from '@material-ui/core';

export const useMdStyles = (theme: Theme) =>
  createStyles({
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 16,
      color: theme.palette.text.primary,
      '& .anchor-link': {
        marginTop: -96, // Offset for the anchor.
        position: 'absolute'
      },
      '& pre': {
        margin: '24px 0',
        padding: '12px 18px',
        backgroundColor: '#333',
        direction: 'ltr',
        borderRadius: theme.shape.borderRadius,
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch' // iOS momentum scrolling.
      },
      '& code': {
        display: 'inline-block',
        fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
        WebkitFontSmoothing: 'subpixel-antialiased',
        padding: '2px 6px',
        color: theme.palette.text.primary,
        backgroundColor:
          theme.palette.type === 'dark' ? 'rgba(255,229,100,0.2)' : 'rgba(255,229,100,0.1)',
        fontSize: 14,
        borderRadius: 2
      },
      '& code[class*="language-"]': {
        backgroundColor: '#333',
        color: '#fff'
      },
      '& p code, & ul code, & pre code': {
        fontSize: 14
      },
      '& .token.operator': {
        background: 'transparent'
      },
      '& h1': {
        ...theme.typography.h3,
        fontSize: 40,
        margin: '16px 0'
      },
      '& .description': {
        ...theme.typography.h5,
        margin: '0 0 40px'
      },
      '& h2': {
        ...theme.typography.h4,
        fontSize: 30,
        margin: '40px 0 16px'
      },
      '& h3': {
        ...theme.typography.h5
        // margin: '40px 0 16px'
      },
      '& h4': {
        ...theme.typography.h6
        // margin: '32px 0 16px'
      },
      '& h5': {
        ...theme.typography.subtitle2,
        margin: '32px 0 16px'
      },
      '& p, & ul, & ol': {
        lineHeight: 1.6,
        marginTop: 0,
        marginBottom: '16px'
      },
      '& ul': {
        paddingLeft: 30
      },
      '& h1, & h2, & h3, & h4': {
        '& code': {
          fontSize: 'inherit',
          lineHeight: 'inherit',
          // Remove scroll on small screens.
          wordBreak: 'break-all'
        },
        '& .anchor-link-style': {
          opacity: 0,
          // To prevent the link to get the focus.
          display: 'none'
        },
        '&:hover .anchor-link-style': {
          display: 'inline-block',
          opacity: 1,
          padding: '0 8px',
          color: theme.palette.text.hint,
          '&:hover': {
            color: theme.palette.text.secondary
          },
          '& svg': {
            width: '0.55em',
            height: '0.55em',
            fill: 'currentColor'
          }
        }
      },
      '& table': {
        width: '100%',
        display: 'block',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch', // iOS momentum scrolling.
        borderCollapse: 'collapse',
        marginBottom: '16px',
        borderSpacing: 0,
        overflow: 'hidden',
        '& .prop-name': {
          fontSize: 13,
          fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace'
        },
        '& .required': {
          color: theme.palette.type === 'light' ? '#006500' : '#a5ffa5'
        },
        '& .prop-type': {
          fontSize: 13,
          fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
          color: theme.palette.type === 'light' ? '#932981' : '#ffb6ec'
        },
        '& .prop-default': {
          fontSize: 13,
          fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
          borderBottom: `1px dotted ${theme.palette.text.hint}`
        }
      },
      '& td': {
        ...theme.typography.body2,
        borderBottom: `1px solid ${theme.palette.divider}`,
        padding: 16,
        color: theme.palette.text.primary
      },
      '& td code': {
        fontSize: 13,
        lineHeight: 1.6
      },
      '& th': {
        fontSize: 14,
        lineHeight: theme.typography.pxToRem(24),
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.text.primary,
        whiteSpace: 'pre',
        borderBottom: `1px solid ${theme.palette.divider}`,
        padding: 16
      },
      '& blockquote': {
        borderLeft: '5px solid #ffe564',
        backgroundColor: 'rgba(255,229,100,0.2)',
        padding: '4px 24px',
        margin: '24px 0',
        '& p': {
          marginTop: '16px'
        }
      },
      '& a, & a code': {
        // Style taken from the Link component
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline'
        }
      },
      '& img': {
        maxWidth: '100%'
      },
      '& hr': {
        height: 1,
        margin: theme.spacing(6, 0),
        border: 'none',
        flexShrink: 0,
        backgroundColor: theme.palette.divider
      }
    }
  });
