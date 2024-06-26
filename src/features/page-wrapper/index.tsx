import React, { ReactNode } from 'react';
import { BaseContainer } from './base-container';
import { ContentWrapper } from './content-wrapper';
import { Header } from './header';
import { MainContent } from './main-content';

export const PageWrapper = ({
  children,
  onSearch,
}: {
  children: ReactNode;
  onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <BaseContainer>
      <Header onSearch={onSearch} />

      <ContentWrapper>
        <MainContent>{children}</MainContent>
      </ContentWrapper>
    </BaseContainer>
  );
};
