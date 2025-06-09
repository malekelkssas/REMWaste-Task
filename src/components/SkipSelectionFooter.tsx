import { Button } from "@/components/ui/button";
import { SkipItem } from "@/types";
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
  const { theme } = useTheme();

  const handleCancel = () => {
    onCancel();
  };

  const handleContinue = () => {
    onContinue();
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
          <div className="max-w-4xl mx-auto px-4 py-10">
            <Card className={cn(
              "shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_6px_-1px_rgba(255,255,255,0.1),0_-2px_4px_-2px_rgba(255,255,255,0.1)] border-t backdrop-blur-sm",
              theme === THEME_CONSTANTS.DARK 
                ? "bg-gray-900/95" 
                : "bg-gradient-to-b from-gray-50/95 to-gray-100/90 shadow-[0_-8px_30px_-15px_rgba(0,0,0,0.1)]"
            )}>
              <CardContent className="py-2 px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                  <div className="w-full md:w-auto text-center md:text-left">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{selectedSkipData.size} Yard Skip</span> - £{selectedSkipData.price_before_vat} - {selectedSkipData.hire_period_days} day hire period
                    </div>
                  </div>
                  <div className="flex gap-2 w-full md:w-auto">
                    <Button 
                      variant="outline" 
                      onClick={handleCancel}
                      className="flex-1 md:flex-none cursor-pointer hover:bg-secondary transition-colors duration-200 min-w-[120px] h-8"
                    >
                      Cancel
                    </Button>
                    <Button 
                      className={cn(
                        "flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 cursor-pointer transition-colors duration-200 min-w-[120px] h-8"
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
