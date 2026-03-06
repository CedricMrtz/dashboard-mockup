"use client";

import { Product } from "@/components/product";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

type GraphCardProps = {
	products: Product[];
};

const STATUS_META = {
	available: { label: "Available", color: "#22c55e" },
	maintenance: { label: "Maintenance", color: "#f59e0b" },
	assigned: { label: "Assigned", color: "#3b82f6" },
} as const;

function GraphCard({ products }: GraphCardProps) {
	const total = products.length;

	const chartData = [
		{
			status: "available",
			label: STATUS_META.available.label,
			value: products.filter((product) => product.status === "available").length,
			color: STATUS_META.available.color,
		},
		{
			status: "maintenance",
			label: STATUS_META.maintenance.label,
			value: products.filter((product) => product.status === "maintenance").length,
			color: STATUS_META.maintenance.color,
		},
		{
			status: "assigned",
			label: STATUS_META.assigned.label,
			value: products.filter((product) => product.status === "assigned").length,
			color: STATUS_META.assigned.color,
		},
	];

	return (
		<article className="rounded-2xl border border-[#313244] bg-[#1e1e2e]/95 p-4 text-[#cdd6f4] shadow-[0_0_12px_rgba(137,180,250,0.08)] backdrop-blur-sm">
			<div className="h-45 w-full">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart>
						<Pie
							data={chartData}
							dataKey="value"
							nameKey="label"
							cx="42%"
							cy="50%"
							innerRadius={42}
							outerRadius={64}
							paddingAngle={4}
							label={false}
						>
							{chartData.map((entry) => (
								<Cell key={entry.status} fill={entry.color} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								borderRadius: "12px",
								border: "1px solid #313244",
								backgroundColor: "#181825",
								color: "#cdd6f4",
							}}
							labelStyle={{ color: "#f5e0dc", fontWeight: 600 }}
							itemStyle={{ color: "#cdd6f4" }}
							formatter={(value) => {
								const numericValue = typeof value === "number" ? value : Number(value ?? 0);
								const percentage = total > 0 ? ((numericValue / total) * 100).toFixed(1) : "0.0";
								return [
									` ${numericValue} (${percentage}%)`,
									"Products",
								];
							}}
						/>
						<Legend
							layout="vertical"
							verticalAlign="middle"
							align="right"
							wrapperStyle={{ color: "#bac2de", fontSize: "12px", paddingRight: "4px" }}
						/>
					</PieChart>
				</ResponsiveContainer>
			</div>
		</article>
	);
}

export default GraphCard;
