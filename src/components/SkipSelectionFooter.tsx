import { Button } from "@/components/ui/button";
import { SkipItem } from "@/types";

interface SkipSelectionFooterProps {
  selectedSkipData?: SkipItem;
  onBack: () => void;
  onContinue: () => void;
}

const SkipSelectionFooter = ({
  selectedSkipData,
  onBack,
  onContinue,
}: SkipSelectionFooterProps) => {
  return (
    <div className="bg-card border rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">
            {selectedSkipData?.size} Yard Skip - £{selectedSkipData?.price_before_vat} - {selectedSkipData?.hire_period_days} day hire period
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={onContinue}>
            Continue →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkipSelectionFooter;
