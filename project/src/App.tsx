import React from 'react';
import { PropertyAnalysis } from './components/PropertyAnalysis';
import { PropertyViewer } from './components/PropertyViewer';
import { ROIHeatmap } from './components/ROIHeatmap';
import { LayoutDashboard, Building, TrendingUp, Hammer, FileSpreadsheet, Scale } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Building className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">PropTech Analytics</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-full w-16 bg-white shadow-lg flex flex-col items-center py-8 space-y-8">
          <LayoutDashboard className="w-6 h-6 text-blue-600 cursor-pointer" />
          <TrendingUp className="w-6 h-6 text-gray-400 cursor-pointer" />
          <Building className="w-6 h-6 text-gray-400 cursor-pointer" />
          <Hammer className="w-6 h-6 text-gray-400 cursor-pointer" />
          <FileSpreadsheet className="w-6 h-6 text-gray-400 cursor-pointer" />
          <Scale className="w-6 h-6 text-gray-400 cursor-pointer" />
        </div>

        {/* Dashboard Content */}
        <div className="ml-20">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Property Analysis Dashboard</h1>
          
          <div className="space-y-8">
            <PropertyAnalysis />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">3D Property Model</h2>
                <PropertyViewer />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Investment Analysis</h2>
                <ROIHeatmap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;