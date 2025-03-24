import React from 'react';
import { Card, Title } from '@tremor/react';

const mockHeatmapData = [
  { area: 'Retail Space', roi: 22 },
  { area: 'Office Space', roi: 18 },
  { area: 'Residential Units', roi: 15 },
  { area: 'Parking', roi: 12 },
];

export const ROIHeatmap = () => {
  return (
    <Card className="p-4">
      <Title>ROI Heatmap</Title>
      <div className="mt-4 space-y-2">
        {mockHeatmapData.map((item) => (
          <div key={item.area} className="flex items-center space-x-2">
            <div 
              className="w-full h-8 rounded"
              style={{
                background: `linear-gradient(90deg, #34d399 ${item.roi}%, #f3f4f6 ${item.roi}%)`,
              }}
            >
              <div className="flex justify-between items-center px-2 h-full">
                <span className="text-sm font-medium">{item.area}</span>
                <span className="text-sm font-bold">{item.roi}% ROI</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};