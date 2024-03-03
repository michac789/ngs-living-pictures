import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  MobileCloseButtonContainer,
  MobileSidebarContainer,
  SidebarActionText,
  SidebarBottomText,
  SidebarCitationFlex,
  SidebarCitationText,
  SidebarContainer,
  SidebarIconWrapper,
  SidebarImage,
  SidebarMenuItem,
  SidebarSectionText,
  SidebarSubtitleText,
  SidebarTitleText,
} from "./SidebarStyle";
import { Icon } from "../Icon/Icon";
import { Markdown } from "../Markdown/Markdown";
import { Portal } from "../Portal/Portal";
import { Text } from "../Text/Text";
import { Tooltip } from "../Tooltip/Tooltip";
import { colors } from "../../constants/styles/colors";
import { orderedPages } from "../../constants/pages";
import { sidebarConstants } from "../../constants/sidebar";
import sidebarImg from "../../assets/sidebarImg.webp";

interface SidebarProps {
  isSidebarOpen: boolean;
  isLargeScreen: boolean;
  onPageChange: () => void;
  onSidebarClose: () => void;
};

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>((
  {
    isSidebarOpen, isLargeScreen, onPageChange, onSidebarClose
  }, ref
) => {
  const navigate = useNavigate();

  const handleLinkClick = (link: string) => {
    navigate(link);
    onPageChange();
    if (!isLargeScreen) {
      onSidebarClose();
    }
  }

  const handlePdfClick = () => {
    const awsLink = "https://ntusu-api-static-prod.s3.ap-southeast-1.amazonaws.com/temp/test.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkYwRAIgPUJ%2FLHLaX4FpcUf%2B%2BMh6KE4cSYWDO1KSdLS8ZgZiEO4CIG3ck2noz%2B3JsP1H3NmKSIYI305RpTC68SbfT6YjrWhKKu0CCNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMMTQzOTQxNjUxNjQwIgx0tRkcYm6HilBlujkqwQI%2BLhJ%2BzLbe%2FoLHd9%2BV2i7NLgtIIX1C%2BioX84zJlGly7w1qiM4r%2BKjI7%2FrNQb3uwr%2B5jkhRgRLky0KAKULaZF7NQXKeA2WCFiI3%2BQ%2BM9S5p7Z3v%2FZezd8bRqe3qqGdKxEk2Qn5GH2FMr7wKkqDggpqeRqqkjyExCaO0mC%2FdKKZyS6BCsN5GWwcu1GVW2qCF7lTguicOOISqQGhMy602Lv%2Bz0CxwrWDXcf65OCP79sRamcpO61aDjPFIimfJMkN5FsBj1BxsSjGKFs00vva5EF6ZnlqrQf1yjSwCjNIYcZYkDlOi2oL0jP18sMSJuwscbbL8wvMIsirC8jlyFURNOFN8xl9OLyQcPv7804UulGLOR6mZbvTV7KDdwb71WZYxcm7jUFvy4rvLhVhlJM2Zlq85CnpLICH%2FSfZe2WpmJIkBPTMw2Nv2rgY6tAK%2BitK362NahipNR%2FtDwK%2F4Yq1jZNR6Z8SnQfSwBfe68NQGK8SSCdOLzu55iagZTdexHnawJzH4r34SZ3QQarBfgUZnCDZwEKbYK6Qm9ugy%2FJheGFSLvdDvg1xn8d5Sz88qNwom6KkeDJm%2BwsrzPtwA5AZq3AIE0CUg5mHYxhvmUOgOg4DfSNF%2BgRXfLfDqWsObtNhuxiwdQoSnY7Tt0ztGEnsDckksp%2BvMn7bv7f12HutPVrJUHSkbnhaYiqDiftQTJhWU6%2FdRmkEBen%2BLGrQj9Hz3hbPFKvzdQYll8w6JWGVoSXSl%2FFN1nZ7AjWzWaeeO%2B20Op5G221hl952hSkfgLwPFiosAPKicizBYm1qW8lSRv%2BX3qcy%2FVbqO4TAEjO8tkkCJ%2BQJso5QCA0aDJqP0A%2FpcHw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240227T094011Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASDA4XJS4FSMJQTFU%2F20240227%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=1599c73f6b42abf9fda57dc93c6186d667150f6b4e8ee638b796fcc9afa05002";
    window.open(awsLink, "_blank");
  }

  const sidebarContents = (
    <>
      <SidebarTitleText variant="title3" onClick={
        () => handleLinkClick("/")
      }>
        {sidebarConstants.title}
      </SidebarTitleText>
      <SidebarSubtitleText variant="body1">
        {sidebarConstants.subtitle}
      </SidebarSubtitleText>
      {orderedPages.map(({
        link, name, isSubpage=false,
      }, index) => {
        return (
          <SidebarMenuItem
            key={index}
            variant="body1"
            data-selected={window.location.pathname === link}
            data-subpage={isSubpage}
            onClick={() => handleLinkClick(link)}
          >
            {name}
          </SidebarMenuItem>
        );
      })}
      <SidebarSectionText variant="body1">
        OTHER FORMATS
      </SidebarSectionText>
      <SidebarActionText variant="body1" onClick={handlePdfClick}>
        PDF
      </SidebarActionText>
      <SidebarSectionText variant="body1">
        CITE THIS PAGE
      </SidebarSectionText>
      {sidebarConstants.citations.map(({
        format, text
      }, index) => {
        return (
          <SidebarCitationText key={index} variant="body1">
            <SidebarCitationFlex>
              <Text variant="body1" as="span" color={colors.Neutral200}>
                {format}
              </Text>
              <Tooltip contents="Copied to clipboard!" extraStyles="height: 16px;">
                <Icon
                  name="ri-file-copy-2-line"
                  onClick={() => navigator.clipboard.writeText(text)}
                />
              </Tooltip>
            </SidebarCitationFlex>
            <Markdown value={text} />
          </SidebarCitationText>
        );
      })}
      <SidebarImage src={sidebarImg} alt="National Gallery Singapore Logo" />
      <SidebarBottomText variant="body2" color={colors.Neutral200}>
        &copy; 2024 National Gallery Singapore
      </SidebarBottomText>
      <SidebarIconWrapper>
        <Icon
          name="ri-creative-commons-line"
          onClick={() => {window.open("https://creativecommons.org/licenses/by/4.0/")}}
        />
        <Icon
          name="ri-github-fill"
          onClick={() => {window.open("https://github.com/michac789/ngs-living-pictures")}}
        />
      </SidebarIconWrapper>
      <SidebarBottomText variant="body2" color={colors.Neutral200}>
        This work is licensed under a Creative Common Attribution 4.0 International License.
      </SidebarBottomText>
    </>
  );

  if (!isLargeScreen && !isSidebarOpen) return null;
  if (!isLargeScreen && isSidebarOpen) {
    return (
      <Portal>
        <MobileSidebarContainer>
          <MobileCloseButtonContainer onClick={onSidebarClose}>
            <Icon name="ri-close-fill" />
          </MobileCloseButtonContainer>
          {sidebarContents}
        </MobileSidebarContainer>
      </Portal>
    )
  }

  return (
    <SidebarContainer data-sidebar-closed={!isSidebarOpen} ref={ref}>
      {sidebarContents}
    </SidebarContainer>
  );
});
