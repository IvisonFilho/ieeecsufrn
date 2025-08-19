"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { mes: "AGO/24", membros: 4 },
    { mes: "SET/24", membros: 5 },
    { mes: "OUT/24", membros: 6 },
    { mes: "NOV/24", membros: 11 },
    { mes: "DEZ/24", membros: 12 },
    { mes: "JAN/25", membros: 12 },
    { mes: "FEV/25", membros: 13 },
    { mes: "MAR/25", membros: 13 },
    { mes: "ABR/25", membros: 14 },
    { mes: "MAI/25", membros: 14 },
    { mes: "JUN/25", membros: 16 },
    { mes: "JUL/25", membros: 16 },
];

export function MembershipChart() {
    return (
        <div className="w-full max-w-4xl mx-auto rounded-2xl bg-[#111] p-6 shadow-lg">
            <h4 className="text-lg font-semibold text-white mb-1">
                Crescimento de Membros
            </h4>
            <p className="text-sm text-gray-400 mb-4">
                Evolução das membresias no IEEE CS UFRN de ago/24 a jul/25
            </p>

            <div className="h-[300px] md:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    >
                        {/* Eixo X com meses */}
                        <XAxis
                            dataKey="mes"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#aaa", fontSize: 12 }}
                        />

                        {/* Esconde completamente o eixo Y */}
                        <YAxis hide />

                        {/* Linha sem pontos e sem tooltip */}
                        <Line
                            type="monotone"
                            dataKey="membros"
                            stroke="#ffffff"
                            strokeWidth={3}
                            dot={false}        // 🔹 remove as bolinhas
                            activeDot={false}  // 🔹 remove destaque no hover
                        />
                    </LineChart>
                </ResponsiveContainer>


            </div>
        </div>
    );
}
