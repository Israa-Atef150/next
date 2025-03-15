import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Categories() {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">التصنيفات</h2>
      
      <table className="w-full border-collapse rounded-lg ">
        <thead>
          <tr className="bg-orange-500 text-white">
            <th className="p-3 text-right">الأغنية</th>
            <th className="p-3 text-right">الفنان</th>
            <th className="p-3 text-right">السنة</th>
            <th className="p-3 text-right">الإجراء</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-300 hover:bg-gray-100 transition">
              <td className="p-3">{item.song}</td>
              <td className="p-3">{item.artist}</td>
              <td className="p-3">{item.year}</td>
              <td className="p-3 flex justify-start space-x-2">
                <button className="text-blue-500 hover:text-blue-700 transition">
                  <FaEdit className="text-lg" />
                </button>
                <button className="text-red-500 hover:text-red-700 transition">
                  <FaTrash className="text-lg" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const data = [
  { song: "The Sliding Mr. Bones (Next Stop, Pottersville)", artist: "Malcolm Lockyer", year: "1961" },
  { song: "Witchy Woman", artist: "The Eagles", year: "1972" },
  { song: "Shining Star", artist: "Earth, Wind, and Fire", year: "1975" },
];
