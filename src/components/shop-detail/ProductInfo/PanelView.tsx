'use client';

import { createContext, FC, ReactNode, use, useState } from "react";

type Props = {
  className?: string;
  renderItems: ReactNode[];
  navItem: ReactNode;
  navLocation?: 'top' | 'bottom';
}

type PanelState = {
  index: number;
  length: number;
}

type PanelAction = {
  setIndex: (index: number) => void;
}

type PanelContextType = PanelState & PanelAction;

const initialData: PanelState = {
  index: 0,
  length: 0,
}

const PanelContext = createContext<PanelContextType | undefined>(undefined);

export const usePanelContext = () => {
  const context = use(PanelContext);

  if(!context) {
    throw new Error('usePanelContext should be a descendent of PanelView');
  }

  return context;
}

const PanelView: FC<Props> = ({className, renderItems, navItem, navLocation = 'top'}) => {
  const [panel, setPanel] = useState<PanelState>(initialData);

  const context: PanelContextType = {
    ...panel,
    length: renderItems.length,
    setIndex: (index) => {setPanel(prev => ({...prev, index: Math.min(Math.max(index, 0), renderItems.length)}))},
  }

  return (
    <PanelContext value={context}>
      <section className={className}>
        {navLocation === 'top' && navItem}
        {renderItems[panel.index]}
        {navLocation === 'bottom' && navItem}
      </section>
    </PanelContext>
  );
}

export default PanelView;