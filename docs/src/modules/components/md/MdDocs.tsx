import React from 'react';

import AppContent from '../AppContent';
import AppContentFooter from '../AppContentFooter';
import AppContentHeader from '../AppContentHeader';
import AppFrame from '../AppFrame';
import AppTableOfContents from '../AppTableOfContents';
import Head from '../Head';
import MdElement from './MdElement';

interface MarkdownDocsProps {
  content: string;
  markdownLocation?: string;
  disableToc?: boolean;
}

export const MdDocs = (props: MarkdownDocsProps) => {
  const {
    content,
    //  markdownLocation: markdownLocationProp,
    disableToc = false
  } = props;

  // const {
  //   state: {
  //     navigation: { activePage }
  //   }
  // }: { state: RootState } = useHoux();

  // const { markdownLocation } = useMarkdownDocsContents({
  //   markdown: content,
  //   markdownLocation: markdownLocationProp,
  //   activePage: activePage || ({ pathname: '' } as Page)
  // });

  return (
    <AppFrame>
      {/* <Head
        title={`${headers.title || getTitle(markdown)} - Project Affordable`}
        description={headers.description || getDescription(markdown)}
      /> */}
      <Head />
      {!disableToc ? <AppTableOfContents content={content} /> : null}
      <AppContent>
        <AppContentHeader />
        <MdElement content={content} />
        <AppContentFooter />
      </AppContent>
    </AppFrame>
  );
};

export default MdDocs;
