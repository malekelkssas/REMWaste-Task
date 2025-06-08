import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SkipItem } from "@/types";
import { createImageLink } from "@/utils/image";

interface SkipListProps {
    skipItem: SkipItem;
    isSelected: boolean;
    onSelect: () => void;
}

const SkipList = ({
    skipItem,
    isSelected,
    onSelect,
}: SkipListProps) => {
    return (
        <Card
            className={cn(
                "group relative overflow-hidden transition-all duration-300 hover:shadow-xl",
                isSelected
                    ? "ring-2 ring-blue-600 shadow-lg scale-[1.01]"
                    : "hover:scale-[1.01] hover:shadow-lg"
            )}
        >
            <CardContent className="p-6">
                <div className="flex gap-6 items-center">
                    <div className="relative w-40 h-40 flex-shrink-0">
                        <img
                            src={createImageLink(skipItem.size)}
                            alt={`${skipItem.size} skip`}
                            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                        />
                        <Badge className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                            {skipItem.size} Yards
                        </Badge>
                    </div>
                    
                    <div className="flex-grow min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                            <h3 className="text-xl font-semibold text-foreground transition-colors duration-200 group-hover:text-blue-600">
                                {skipItem.size} Yard Skip
                            </h3>
                        </div>
                        
                        <div className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                                {skipItem.hire_period_days} day hire period
                            </p>
                            
                            {skipItem.allowed_on_road && (
                                <div className="flex items-center gap-1 bg-orange-500 text-white px-3 py-1.5 rounded text-sm font-medium w-fit transition-opacity duration-200 group-hover:opacity-90">
                                    <AlertTriangle className="w-4 h-4" />
                                    Not Allowed On The Road
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-end justify-center min-w-[120px] gap-2 pr-2">
                        <div className="text-2xl font-bold text-blue-600 whitespace-nowrap">
                            £{skipItem.price_before_vat}
                        </div>
                        <Button
                            className={cn(
                                "w-full transition-all duration-200 cursor-pointer",
                                isSelected
                                    ? "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg"
                                    : "bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 hover:text-blue-800 shadow-sm hover:shadow-md"
                            )}
                            onClick={onSelect}
                        >
                            {isSelected ? "Selected" : "Select This Skip"}
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SkipList; 