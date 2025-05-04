export type Asset = {
  name: string;
  amount: number;
  weight?: number; // Weight can be calculated and may not be provided initially
};

export type AssetData = {
  assets: Asset[];
  totalAmount: number;
};

export type AssetFormProps = {
  addAsset: (asset: Asset) => void;
};
