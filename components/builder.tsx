'use client';

import React, { useState } from 'react';
import Toolbar from './toolbar';
import FlowWrapper from './flow';
import { Node } from '@xyflow/react';
import NodeDetails from './nodeDetails';


const Builder = () => {
    
  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans text-gray-800">
      {/* Navbar */}
      <div className="h-24 flex items-center justify-between px-6 shadow-md bg-white border-b">
        <Toolbar />
        
      </div>

      {/* Main Content Area */}
      <div className="flex-grow min-h-0 grid grid-cols-12 gap-2 p-2 overflow-hidden">
        
        {/* Left Panel: Flow Canvas */}
        <div className="col-span-8 bg-white rounded-lg shadow-sm border overflow-hidden flex flex-col">
          <div className="p-2 border-b text-sm font-semibold text-gray-700 bg-gray-100">
            Flow Builder
          </div>
          <div className="flex-grow">
            <FlowWrapper />
          </div>
        </div>

        {/* Right Panel: Info/Inspector */}
        <div className="col-span-4 bg-white rounded-lg shadow-sm border overflow-auto flex flex-col">
          <div className="p-2 border-b text-sm font-semibold text-gray-700 bg-gray-100">
            Inspector Panel
          </div>
          
             <NodeDetails />
          {/* //   <div className="flex-grow p-2 text-sm text-gray-600">
          //   Select a node to see details here.
          // </div> */}
          
          
        </div>

      </div>
    </div>
  );
};

export default Builder;