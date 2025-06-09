import { Button } from "@/components/ui/button";
import { SkipItem } from "@/types";
import { useStep } from "@/context/StepContext";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { THEME_CONSTANTS } from "@/utils/constants";
import { motion, AnimatePresence } from "framer-motion";

interface SkipSelectionFooterProps {
  selectedSkipData?: SkipItem;
  onCancel: () => void;
  onContinue: () => void;
}

const SkipSelectionFooter = ({
  selectedSkipData,
  onCancel,
  onContinue,
}: SkipSelectionFooterProps) => {
  const { goToPreviousStep, goToNextStep, markStepAsCompleted } = useStep();
  const { theme } = useTheme();

  const handleCancel = () => {
    onCancel();
    goToPreviousStep();
  };

  const handleContinue = () => {
    onContinue();
    markStepAsCompleted('select-skip');
    goToNextStep();
  };

  return (
    <AnimatePresence>
      {selectedSkipData && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          <div className="max-w-6xl mx-auto px-4 py-2">
            <Card className={cn(
              "shadow-lg border-t",
              theme === THEME_CONSTANTS.DARK ? "bg-gray-900" : "bg-white"
            )}>
              <CardContent className="p-4 lg:p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="w-full md:w-auto text-center md:text-left">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{selectedSkipData.size} Yard Skip</span> - £{selectedSkipData.price_before_vat} - {selectedSkipData.hire_period_days} day hire period
                    </div>
                  </div>
                  <div className="flex gap-3 w-full md:w-auto">
                    <Button 
                      variant="outline" 
                      onClick={handleCancel}
                      className="flex-1 md:flex-none cursor-pointer hover:bg-secondary transition-colors duration-200 min-w-[120px]"
                    >
                      Cancel
                    </Button>
                    <Button 
                      className={cn(
                        "flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 cursor-pointer transition-colors duration-200 min-w-[120px]"
                      )} 
                      onClick={handleContinue}
                    >
                      Continue →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SkipSelectionFooter;
