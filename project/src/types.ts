export interface PropertyData {
  id: string;
  address: string;
  currentValue: number;
  potentialValue: number;
  zoning: string;
  size: number;
  constructionCost: number;
  roi: number;
}

export interface MarketTrend {
  date: string;
  value: number;
  demand: number;
  supply: number;
}

export interface ConstructionMaterial {
  name: string;
  quantity: number;
  unitPrice: number;
  totalCost: number;
  priceRange: {
    min: number;
    max: number;
  };
}

export interface FinancialMetrics {
  roi: number;
  irr: number;
  paybackPeriod: number;
  npv: number;
}