import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Clock, AlertTriangle } from "lucide-react";

const TraceDetails = ({ trace }) => {
  return (
    <div className="space-y-4">
      <Card className="bg-grey-50 border-grey-200">
        <CardHeader>
          <CardTitle className="text-2xl text-grey-800">{trace.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
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
            <div className="flex items-center text-grey-600">
              <Clock className="w-4 h-4 mr-1" />
              {trace.duration}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Activity className="w-5 h-5 mr-2 text-grey-600" />
              <span className="text-grey-800">Activity Timeline</span>
            </div>
            {/* Placeholder for activity timeline */}
            <div className="h-40 bg-grey-200 rounded-md flex items-center justify-center text-grey-600">
              Activity Timeline Placeholder
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-grey-50 border-grey-200">
        <CardHeader>
          <CardTitle className="text-xl text-grey-800">Trace Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium text-grey-700">Trace ID:</span>
              <span className="text-grey-600">{trace.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-grey-700">Start Time:</span>
              <span className="text-grey-600">2023-04-15 10:30:00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-grey-700">End Time:</span>
              <span className="text-grey-600">2023-04-15 10:30:02</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-grey-50 border-grey-200">
        <CardHeader>
          <CardTitle className="text-xl text-grey-800">Errors and Warnings</CardTitle>
        </CardHeader>
        <CardContent>
          {trace.status === 'error' || trace.status === 'warning' ? (
            <div className="flex items-start space-x-2 text-yellow-600">
              <AlertTriangle className="w-5 h-5 mt-0.5" />
              <div>
                <p className="font-medium">Warning: High latency detected</p>
                <p className="text-sm text-grey-600">The trace duration exceeded the expected threshold.</p>
              </div>
            </div>
          ) : (
            <p className="text-grey-600">No errors or warnings detected.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TraceDetails;