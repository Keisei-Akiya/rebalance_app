import React from 'react';
import { Asset } from '../types';

interface AssetListProps {
  assets: Asset[];
  totalAmount: number;
}

const AssetList: React.FC<AssetListProps> = ({ assets, totalAmount }) => {
  return (
    <div>
      <h2>Asset List</h2>
      <ul>
        {assets.map((asset, index) => (
          <li key={index}>
            {asset.name}: {asset.amount}: {totalAmount > 0 ? ((asset.amount / totalAmount) * 100).toFixed(2) + '%' : '0%'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssetList;