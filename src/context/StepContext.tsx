import { createContext, useContext, useState, ReactNode } from 'react';

export type Step = {
  id: string;
  label: string;
  path: string;
};

export const STEPS: Step[] = [
  { id: 'postcode', label: 'Postcode', path: '/prev' },
  { id: 'waste-type', label: 'Waste Type', path: '/prev' },
  { id: 'select-skip', label: 'Select Skip', path: '/' },
  { id: 'permit-check', label: 'Permit Check', path: '/next' },
  { id: 'choose-date', label: 'Choose Date', path: '/next' },
  { id: 'payment', label: 'Payment', path: '/next' },
];

interface StepContextType {
  currentStep: Step;
  completedSteps: string[];
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  markStepAsCompleted: (stepId: string) => void;
}

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(2); // Start at Select Skip step
  const [completedSteps, setCompletedSteps] = useState<string[]>(['postcode', 'waste-type']);

  const goToNextStep = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const markStepAsCompleted = (stepId: string) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const value = {
    currentStep: STEPS[currentStepIndex],
    completedSteps,
    goToNextStep,
    goToPreviousStep,
    markStepAsCompleted,
  };

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};

export const useStep = () => {
  const context = useContext(StepContext);
  if (context === undefined) {
    throw new Error('useStep must be used within a StepProvider');
  }
  return context;
}; 