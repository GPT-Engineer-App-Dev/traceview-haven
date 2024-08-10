import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Clock, AlertTriangle } from "lucide-react";

const TraceDetails = ({ trace }) => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{trace.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant={trace.status === 'success' ? 'default' : trace.status}>
              {trace.status}
            </Badge>
            <div className="flex items-center text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              {trace.duration}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Activity className="w-5 h-5 mr-2 text-blue-500" />
              <span>Activity Timeline</span>
            </div>
            {/* Placeholder for activity timeline */}
            <div className="h-40 bg-muted rounded-md flex items-center justify-center">
              Activity Timeline Placeholder
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Trace Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Trace ID:</span>
              <span className="text-muted-foreground">{trace.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Start Time:</span>
              <span className="text-muted-foreground">2023-04-15 10:30:00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">End Time:</span>
              <span className="text-muted-foreground">2023-04-15 10:30:02</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Errors and Warnings</CardTitle>
        </CardHeader>
        <CardContent>
          {trace.status === 'error' || trace.status === 'warning' ? (
            <div className="flex items-start space-x-2 text-yellow-600">
              <AlertTriangle className="w-5 h-5 mt-0.5" />
              <div>
                <p className="font-medium">Warning: High latency detected</p>
                <p className="text-sm text-muted-foreground">The trace duration exceeded the expected threshold.</p>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground">No errors or warnings detected.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TraceDetails;