import { create } from "zustand";
import type { Node } from "@xyflow/react";

export type NodeStore = {
  selectedNode: Node | null;
  setSelectedNode: (node: Node | null) => void;
  updateSelectedNodeData: (data: Record<string, any>) => void;
};

export const useNodeStore = create<NodeStore>((set, get) => ({
  selectedNode: null,
  setSelectedNode: (node) => set({ selectedNode: node }),

  updateSelectedNodeData: (data) => {
    const node = get().selectedNode;

    if (node) {
      const isSameText = node.data?.text === data.text;
      const isSameVars =
        JSON.stringify(node.data?.inputVars) === JSON.stringify(data.inputVars);
      if (isSameText && isSameVars) return;
      set({
        selectedNode: {
          ...node,
          data: {
            ...node.data,
            ...data,
          },
        },
      });
    }
  },
}));
