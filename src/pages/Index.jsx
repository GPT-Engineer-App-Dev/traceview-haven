import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import TraceList from '../components/TraceList';
import TraceDetails from '../components/TraceDetails';

const Index = () => {
  const [selectedTrace, setSelectedTrace] = useState(null);

  return (
    <div className="flex h-screen bg-grey-100">
      <div className="w-1/3 border-r border-grey-200">
        <ScrollArea className="h-screen">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-grey-800">Traces</h2>
            <Separator className="my-2 bg-grey-300" />
            <TraceList onSelectTrace={setSelectedTrace} />
          </div>
        </ScrollArea>
      </div>
      <div className="w-2/3 bg-white">
        <ScrollArea className="h-screen">
          <div className="p-4">
            {selectedTrace ? (
              <TraceDetails trace={selectedTrace} />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-grey-500">Select a trace to view details</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Index;