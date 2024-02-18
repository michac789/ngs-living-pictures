import React, { forwardRef } from "react";
import {
  SingleTab,
  TabsContainer,
  TabsHeaderContainer,
} from "./TabsStyle";

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: React.ReactNode[];
  selected?: number;
  children?: React.ReactNode;
  fullWidth?: boolean;
  onTabClick?: (index: number) => void;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ tabs, selected = 0, children, fullWidth = false, onTabClick, ...props }, ref) => {
    return (
      <TabsContainer>
        <TabsHeaderContainer data-fullwidth={fullWidth} ref={ref} {...props}>
          {tabs.map((tab, index) => (
            <SingleTab
              key={index}
              data-selected={selected === index}
              onClick={() => onTabClick?.(index)}
            >
              {tab}
            </SingleTab>
          ))}
        </TabsHeaderContainer>
        {children}
      </TabsContainer>
    );
  }
);
