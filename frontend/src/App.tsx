import './App.css';
import { useState } from 'react';
import AssetForm from './components/AssetForm';
import AssetList from './components/AssetList';
import { Asset } from './types';

function App() {
  const [assets, setAssets] = useState<Asset[]>([]);

  const addAsset = (asset: Asset) => {
    setAssets([...assets, asset]);
  };

  const totalAmount = assets.reduce((total, asset) => total + asset.amount, 0);

  return (
    <>
      <h1>計算</h1>
      <AssetForm addAsset={addAsset} />
      <AssetList assets={assets} totalAmount={totalAmount} />
    </>
  );
}

export default App;