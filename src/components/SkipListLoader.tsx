import { Card } from "@/components/ui/card";

const SkipListLoader = () => (
  <>
    <div className="space-y-4">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="p-4">
          <div className="p-6">
            <div className="flex gap-6 items-center">
              <div className="w-40 h-40 rounded shimmer flex-shrink-0" />
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div className="h-6 w-32 rounded shimmer" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-48 rounded shimmer" />
                  <div className="h-6 w-40 rounded shimmer" />
                </div>
              </div>
              <div className="flex flex-col items-end justify-center min-w-[120px] gap-2 pr-2">
                <div className="h-8 w-20 rounded shimmer" />
                <div className="h-10 w-full rounded shimmer" />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </>
);

export default SkipListLoader; 