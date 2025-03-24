import React from 'react';
import { Card, Title, AreaChart } from '@tremor/react';
import { Building2, TrendingUp, Users, Map } from 'lucide-react';

const mockMarketTrends = [
  { date: '2024-01', value: 100, demand: 90, supply: 85 },
  { date: '2024-02', value: 105, demand: 95, supply: 82 },
  { date: '2024-03', value: 110, demand: 98, supply: 80 },
  { date: '2024-04', value: 115, demand: 102, supply: 78 },
];

export const PropertyAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Building2 className="w-6 h-6 text-blue-500" />
            <Title>Property Value</Title>
          </div>
          <p className="mt-2 text-2xl font-bold">$2.5M</p>
          <p className="text-sm text-gray-500">Current Market Value</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-6 h-6 text-green-500" />
            <Title>ROI Potential</Title>
          </div>
          <p className="mt-2 text-2xl font-bold">18.5%</p>
          <p className="text-sm text-gray-500">Expected Return</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Users className="w-6 h-6 text-purple-500" />
            <Title>Demand Score</Title>
          </div>
          <p className="mt-2 text-2xl font-bold">8.4/10</p>
          <p className="text-sm text-gray-500">Market Demand</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Map className="w-6 h-6 text-orange-500" />
            <Title>Zoning Status</Title>
          </div>
          <p className="mt-2 text-2xl font-bold">Mixed-Use</p>
          <p className="text-sm text-gray-500">Current Zoning</p>
        </Card>
      </div>

      <Card>
        <Title>Market Trends Analysis</Title>
        <AreaChart
          className="mt-4 h-72"
          data={mockMarketTrends}
          index="date"
          categories={["value", "demand", "supply"]}
          colors={["blue", "green", "red"]}
        />
      </Card>
    </div>
  );
};