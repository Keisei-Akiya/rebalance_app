import React, { useState } from 'react';
import { AssetFormProps } from '../types';

const AssetForm: React.FC<AssetFormProps> = ({ addAsset }) => {
  const [assetName, setAssetName] = useState('');
  const [assetAmount, setAssetAmount] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (assetName && assetAmount) {
      addAsset({ name: assetName, amount: Number(assetAmount), weight: 0 });
      setAssetName('');
      setAssetAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Asset Name"
        value={assetName}
        onChange={(e) => setAssetName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Asset Amount"
        value={assetAmount}
        onChange={(e) => setAssetAmount(e.target.value)}
        required
      />
      <button type="submit">Add Asset</button>
    </form>
  );
};

export default AssetForm;
