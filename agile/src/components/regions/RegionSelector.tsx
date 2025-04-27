
import React from 'react';
import { Region, regions } from '../../utils/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface RegionSelectorProps {
  onSelectRegion: (region: Region) => void;
  selectedRegionId?: string;
}

const RegionSelector: React.FC<RegionSelectorProps> = ({ 
  onSelectRegion, 
  selectedRegionId 
}) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-4">Select a Region</h2>
      <p className="text-agil-gray mb-6">Choose a region to view available tickets</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {regions.map((region) => (
          <Card 
            key={region.id} 
            className={`cursor-pointer transition-all duration-300 ${
              selectedRegionId === region.id 
                ? 'border-2 border-agil-yellow ring-2 ring-agil-yellow/50' 
                : 'hover:shadow-md'
            }`}
            onClick={() => onSelectRegion(region)}
          >
            <CardContent className="p-0">
              <div className="relative">
                <div className="h-36 overflow-hidden">
                  <img 
                    src={region.imageUrl} 
                    alt={region.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <h3 className="font-semibold">{region.name}</h3>
                  </div>
                </div>
                {selectedRegionId === region.id && (
                  <div className="absolute top-2 right-2 bg-agil-yellow text-agil-black text-xs font-bold px-2 py-1 rounded-full">
                    Selected
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-sm text-agil-gray">{region.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RegionSelector;
