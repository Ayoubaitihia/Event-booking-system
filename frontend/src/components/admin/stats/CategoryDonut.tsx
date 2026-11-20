"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartLegend,
    ChartLegendContent,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 190, fill: "var(--color-other)" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "var(--chart-1)",
    },
    safari: {
        label: "Safari",
        color: "var(--chart-2)",
    },
    firefox: {
        label: "Firefox",
        color: "var(--chart-3)",
    },
    edge: {
        label: "Edge",
        color: "var(--chart-4)",
    },
    other: {
        label: "Other",
        color: "var(--chart-5)",
    },
} satisfies ChartConfig

export default function CategoryDonut() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>By category</CardTitle>
        <CardDescription>Ticket distribution</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (
                    viewBox &&
                    "cx" in viewBox &&
                    "cy" in viewBox
                  ) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>

                        <tspan
                          x={viewBox.cx}
                          y={Number(viewBox.cy) + 24}
                          className="fill-muted-foreground text-sm"
                        >
                          tickets
                        </tspan>
                      </text>
                    )
                  }

                  return null
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        {/* Category labels at the bottom */}
        <ChartLegend
            content={<ChartLegendContent nameKey="browser" />}
            className="mt-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
        />
      </CardContent>
    </Card>
  )
}