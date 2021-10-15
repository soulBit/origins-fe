import React, { useState } from 'react';
import { Position, Popover, PopoverInteractionKind } from '@blueprintjs/core';
import { AssetList } from './AssetList';
import { AssetRenderer } from '../AssetRenderer';
import { Asset } from 'types/asset';

type AssetOptionalType = Asset | string | undefined;

interface AssetSelectProps {
  selected: AssetOptionalType;
  onChange?: (asset: Asset) => void;
}

export const AssetSelect: React.FC<AssetSelectProps> = ({
  selected,
  onChange,
}) => {
  const [selectedAsset] = useState<Asset>(selected || Asset[0]);
  return (
    <div className="tw-cursor-pointer">
      <Popover
        interactionKind={PopoverInteractionKind.CLICK}
        openOnTargetFocus={false}
        minimal={true}
        content={<AssetList selected={selectedAsset} onSelect={onChange} />}
        hoverOpenDelay={0}
        hoverCloseDelay={0}
        position={Position.BOTTOM_RIGHT}
      >
        <AssetRenderer asset={selectedAsset} />
      </Popover>
    </div>
  );
};
