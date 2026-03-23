// import { LineChart } from 'lucide-react';
import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const studentsData = [
  {
    id: 1,
    name: "Rahim",
    math: 85,
    english: 78,
    science: 92,
    ict: 88,
  },
  {
    id: 2,
    name: "Karim",
    math: 70,
    english: 82,
    science: 75,
    ict: 80,
  },
  {
    id: 3,
    name: "Ayesha",
    math: 95,
    english: 88,
    science: 91,
    ict: 93,
  },
  {
    id: 4,
    name: "Nusrat",
    math: 60,
    english: 72,
    science: 68,
    ict: 65,
  },
  {
    id: 5,
    name: "Tanvir",
    math: 88,
    english: 79,
    science: 84,
    ict: 90,
  },
  {
    id: 6,
    name: "Sadia",
    math: 92,
    english: 85,
    science: 89,
    ict: 94,
  },
  {
    id: 7,
    name: "Imran",
    math: 75,
    english: 70,
    science: 72,
    ict: 78,
  },
  {
    id: 8,
    name: "Mim",
    math: 83,
    english: 90,
    science: 87,
    ict: 85,
  }
];

const ResultCharts = () => {
    return (
        <div>
            <LineChart width={500} height={300} data={studentsData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="science"></YAxis>
                <Line dataKey="math" stroke='green'></Line>
                <Line dataKey="ict" stroke='red'></Line>
                <Line dataKey="english" stroke='blue'></Line>
            </LineChart>
        </div>
    );
};

export default ResultCharts;