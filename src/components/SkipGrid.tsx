import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SkipItem } from "@/types";
import { createImageLink } from "@/utils/image";

interface SkipCardProps {
    skipItem: SkipItem;
    isSelected: boolean;
    onSelect: () => void;
}

const SkipGrid = ({
    skipItem,
    isSelected,
    onSelect,
}: SkipCardProps) => {
    return (
        <Card
            className={cn(
                "group relative overflow-hidden transition-all duration-300 hover:shadow-xl",
                isSelected
                    ? "ring-2 ring-blue-600 shadow-lg scale-[1.02]"
                    : "hover:scale-[1.02] hover:shadow-lg"
            )}
        >
            <CardContent className="p-0">
                <div className="relative">
                    <img
                        src={createImageLink(skipItem.size)}
                        alt={`${skipItem.size} skip`}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                    <Badge className="absolute top-3 right-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                        {skipItem.size} Yards
                    </Badge>
                    {skipItem.allowed_on_road && (
                        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium transition-opacity duration-200 group-hover:opacity-90">
                            <AlertTriangle className="w-3 h-3" />
                            Not Allowed On The Road
                        </div>
                    )}
                </div>

                <div className="p-4 space-y-3">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-blue-600">
                            {skipItem.size} Yard Skip
                        </h3>
                        <p className="text-sm text-muted-foreground">{skipItem.hire_period_days} day hire period</p>
                    </div>

                    <div className="text-2xl font-bold text-blue-600">
                        £{skipItem.price_before_vat}
                    </div>

                    <Button
                        className={cn(
                            "w-full transition-all duration-200 cursor-pointer",
                            isSelected
                                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg ring-2 ring-blue-600 ring-offset-2"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border shadow-sm hover:shadow-md"
                        )}
                        onClick={onSelect}
                    >
                        {isSelected ? "Selected" : "Select This Skip"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default SkipGrid;