import TrailerCalculator from "@/app/components/TrailerCalculator";

export default function Home() {
  return (
      <div className="max-w-4xl mx-auto p-4">
        {/* License Requirements Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">License Requirements Summary</h2>
          <p className="mb-4">Two main criteria determine the required license:</p>
          <ul className="list-disc list-inside mb-4">
            <li>The trailer&apos;s GVWR (Gross Vehicle Weight Rating)</li>
            <li>The combined GVWR of both the trailer and the towing vehicle</li>
          </ul>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Trailer GVWR</th>
                <th className="border border-gray-300 p-2">Combined GVWR</th>
                <th className="border border-gray-300 p-2">Required License</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className="border border-gray-300 p-2">≤ 750 kg</td>
                <td className="border border-gray-300 p-2">(any)</td>
                <td className="border border-gray-300 p-2">B License</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2" rowSpan={3}>
                  Between 750 kg and 3500 kg
                </td>
                <td className="border border-gray-300 p-2">≤ 3500 kg</td>
                <td className="border border-gray-300 p-2">B License</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Between 3500 kg and 4250 kg</td>
                <td className="border border-gray-300 p-2">B96 License</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">&gt; 4250 kg</td>
                <td className="border border-gray-300 p-2">BE License</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">&gt; 3500 kg</td>
                <td className="border border-gray-300 p-2">(any)</td>
                <td className="border border-gray-300 p-2">C1E License Required</td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded">
            <h3 className="font-bold mb-2">Important Notes:</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>A B license does not allow driving vehicles with GVWR over 3500 kg</li>
              <li>The combined GVWR can never exceed 7000 kg with a B license</li>
              <li>These rules apply to the new BE license, not the old EB license which had different privileges</li>
            </ul>
          </div>
        </section>

        {/* Vehicle Registration Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Vehicle Registration Terms</h2>
          <div className="bg-gray-50 p-4 rounded">
            <p className="mb-2">On your vehicle registration:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>F2 = GVWR (Gross Vehicle Weight Rating)</li>
              <li>F3 = GCWR (Gross Combined Weight Rating)</li>
              <li>G1 = Curb Weight</li>
            </ul>
          </div>
        </section>

        {/* Calculator Component */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Weight Calculator</h2>
          <TrailerCalculator />
        </section>
      </div>
  );
}