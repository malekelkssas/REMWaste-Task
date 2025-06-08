import { Card } from "@/components/ui/card";

const SkipListLoader = () => (
  <>
    <div className="space-y-4">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="p-4">
          <div className="flex gap-4 items-center">
            <div className="w-32 h-32 rounded shimmer flex-shrink-0" />
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-2">
                <div className="h-6 w-32 rounded shimmer" />
                <div className="h-8 w-24 rounded shimmer" />
              </div>
              <div className="h-4 w-48 rounded shimmer mb-4" />
              <div className="h-6 w-40 rounded shimmer" />
            </div>
            <div className="h-10 w-40 rounded shimmer" />
          </div>
        </Card>
      ))}
    </div>
  </>
);

export default SkipListLoader; 