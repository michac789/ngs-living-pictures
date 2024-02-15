import React from "react";
import { Icon } from "../../components/Icon/Icon";
import { iconNames } from "../../components/Icon/Icons";
import { Text } from "../../components/Text/Text";

const IconSvg = () => {
  return <>
    {
      iconNames.map((iconName) => (
        <Text variant="body2" style={{
          display: 'flex',
          alignItems: 'center',
          padding: '2px',
          gap: '10px',
        }}>
          <Icon name={iconName} />
          {iconName}
        </Text>
      ))
    }
  </>
};
export default IconSvg;
