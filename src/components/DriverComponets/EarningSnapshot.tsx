import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function EarningSnapshot() {
  // Example earnings data
  const earnings = {
    today: 120.5,
    week: 780,
    month: 3200,
  };

  const cards = [
    { label: "Today", value: earnings.today },
    { label: "Week", value: earnings.week },
    { label: "Month", value: earnings.month },
  ];

  return (

      <div className="flex justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  mt-15 ">
      {cards.map((card) => (
        <Card
          key={card.label}
          className="bg-white dark:bg-gray-800 text-center shadow-md "
        >
          <CardHeader>
            <CardTitle className="text-lg text-gray-800 dark:text-gray-100">{card.label}</CardTitle>
            <CardDescription className="text-sm text-gray-500 dark:text-gray-300">
              Earnings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">${card.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
}
