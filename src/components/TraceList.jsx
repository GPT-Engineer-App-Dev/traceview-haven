import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockTraces = [
  { id: 1, name: 'Trace 1', status: 'success', duration: '120ms' },
  { id: 2, name: 'Trace 2', status: 'error', duration: '250ms' },
  { id: 3, name: 'Trace 3', status: 'warning', duration: '180ms' },
  { id: 4, name: 'Trace 4', status: 'success', duration: '90ms' },
  { id: 5, name: 'Trace 5', status: 'success', duration: '150ms' },
];

const TraceList = ({ onSelectTrace }) => {
  return (
    <div className="space-y-4">
      {mockTraces.map((trace) => (
        <Card 
          key={trace.id} 
          className="cursor-pointer hover:bg-grey-200 transition-colors duration-200"
          onClick={() => onSelectTrace(trace)}
        >
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-grey-800">{trace.name}</h3>
              <Badge 
                variant={trace.status === 'success' ? 'default' : trace.status}
                className={`${
                  trace.status === 'success' ? 'bg-green-100 text-green-800' :
                  trace.status === 'error' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}
              >
                {trace.status}
              </Badge>
            </div>
            <p className="text-sm text-grey-600 mt-2">Duration: {trace.duration}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TraceList;