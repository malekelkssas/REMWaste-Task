import { createContext, useContext, useState, ReactNode } from 'react';
import { MapPin, Trash2, Package, FileCheck, Calendar, CreditCard } from 'lucide-react';

export type Step = {
  id: string;
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const STEPS: Step[] = [
  { id: 'postcode', label: 'Postcode', path: '/postcode', icon: MapPin },
  { id: 'waste-type', label: 'Waste Type', path: '/waste-type', icon: Trash2 },
  { id: 'select-skip', label: 'Select Skip', path: '/', icon: Package },
  { id: 'permit-check', label: 'Permit Check', path: '/permit-check', icon: FileCheck },
  { id: 'choose-date', label: 'Choose Date', path: '/choose-date', icon: Calendar },
  { id: 'payment', label: 'Payment', path: '/payment', icon: CreditCard },
];

interface StepContextType {
  currentStep: Step;
  completedSteps: string[];
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  markStepAsCompleted: (stepId: string) => void;
  goToStep: (stepId: string) => void;
}

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(2);
  const [completedSteps, setCompletedSteps] = useState<string[]>(['postcode', 'waste-type']);

  const goToNextStep = () => {
    if (currentStepIndex < STEPS.length - 1) {
      const currentStepId = STEPS[currentStepIndex].id;
      if (!completedSteps.includes(currentStepId)) {
        setCompletedSteps([...completedSteps, currentStepId]);
      }
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStepIndex > 0) {
      const newStepIndex = currentStepIndex - 1;
      setCurrentStepIndex(newStepIndex);
      setCompletedSteps(completedSteps.filter(stepId => {
        const stepIndex = STEPS.findIndex(step => step.id === stepId);
        return stepIndex < newStepIndex;
      }));
    }
  };

  const markStepAsCompleted = (stepId: string) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const goToStep = (stepId: string) => {
    const stepIndex = STEPS.findIndex(step => step.id === stepId);
    if (stepIndex !== -1) {
      setCurrentStepIndex(stepIndex);
      setCompletedSteps(completedSteps.filter(completedStepId => {
        const completedStepIndex = STEPS.findIndex(step => step.id === completedStepId);
        return completedStepIndex < stepIndex;
      }));
    }
  };

  const value = {
    currentStep: STEPS[currentStepIndex],
    completedSteps,
    goToNextStep,
    goToPreviousStep,
    markStepAsCompleted,
    goToStep,
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