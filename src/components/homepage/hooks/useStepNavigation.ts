import { useState } from 'react';

export const useStepNavigation = (totalSteps: number) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    setActiveStep((prev) => (prev < totalSteps - 1 ? prev + 1 : prev));
  };

  const handlePrevStep = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleStepDotClick = (index: number) => {
    setActiveStep(index);
  };

  const resetToFirstStep = () => {
    setActiveStep(0);
  };

  return {
    activeStep,
    handleNextStep,
    handlePrevStep,
    handleStepDotClick,
    resetToFirstStep
  };
};
