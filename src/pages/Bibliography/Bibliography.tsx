import React from "react";
import { BibliographyContentContainer, StyledIdText } from "./BibliographyStyle";
import { bibliographyList } from "../../constants/bibliography";
import { Markdown } from "../../components/Markdown/Markdown";
import { PageContent } from "../../components/PageContent/PageContent";

const Bibliography = () => {
  return (
    <PageContent data={{
      title: 'Bibliography',
    }}>
      <BibliographyContentContainer>
        {
          bibliographyList.map((item, index) => (
            <div key={index}>
              <StyledIdText variant="subtitle2">
                {item.id}
              </StyledIdText>
              <Markdown value={item.markdown} additionalStyles={{
                lineHeight: '1.5',
              }} />
            </div>
          ))
        }
      </BibliographyContentContainer>
    </PageContent>
  );
}
export default Bibliography;
