"use client";

import React, {useEffect, useState} from 'react';
import {AlertCircle} from 'lucide-react';
import {Alert, AlertDescription} from "@/app/components/ui/Alert";

interface InputGroupProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    tooltip?: string;
}

interface VehicleState {
    curb: string;
    gvwr: string;
    gcwr: string;
    cargo: string;
    passengers: string;
}

interface TrailerState {
    curb: string;
    gvwr: string;
    cargo: string;
    horses: string;
}

interface Condition {
    text: string;
    passed: boolean;
}

interface ResultsState {
    requiredLicense: string;
    vehiclePayload: number;
    trailerPayload: number;
    conditions: Condition[];
}

const TrailerCalculator = () => {
    const [vehicle, setVehicle] = useState<VehicleState>({
        curb: '', // G1
        gvwr: '', // F2
        gcwr: '', // F3
        cargo: '',
        passengers: ''
    });

    const [trailer, setTrailer] = useState<TrailerState>({
        curb: '', // G1
        gvwr: '', // F2
        cargo: '',
        horses: ''
    });

    const [results, setResults] = useState<ResultsState>({
        requiredLicense: '',
        vehiclePayload: 0,
        trailerPayload: 0,
        conditions: []
    });

    // Rest of your code remains the same...

    const calculateResults = () => {
        // Convert inputs to numbers
        const v = Object.fromEntries(
            Object.entries(vehicle).map(([k, v]) => [k, Number(v) || 0])
        );
        const t = Object.fromEntries(
            Object.entries(trailer).map(([k, v]) => [k, Number(v) || 0])
        );

        // Calculate actual weights
        const vehicleActualWeight = v.curb + v.cargo + v.passengers;
        const trailerActualWeight = t.curb + t.cargo + t.horses;
        const combinedActualWeight = vehicleActualWeight + trailerActualWeight;

        // Determine required license
        let license = '';
        if (t.gvwr <= 750) {
            license = 'B License';
        } else if (t.gvwr <= 3500) {
            const combined = t.gvwr + v.gvwr;
            if (combined <= 3500) {
                license = 'B License';
            } else if (combined <= 4250) {
                license = 'B96 License';
            } else {
                license = 'BE License';
            }
        } else {
            license = 'C1E License Required';
        }

        // Check conditions
        const conditions: Condition[] = [
            {
                text: `Vehicle actual weight (${vehicleActualWeight}kg) must not exceed GVWR (${v.gvwr}kg)`,
                passed: vehicleActualWeight <= v.gvwr
            },
            {
                text: `Trailer actual weight (${trailerActualWeight}kg) must not exceed GVWR (${t.gvwr}kg)`,
                passed: trailerActualWeight <= t.gvwr
            },
            {
                text: `Combined actual weight (${combinedActualWeight}kg) must not exceed GCWR (${v.gcwr}kg)`,
                passed: combinedActualWeight <= v.gcwr
            },
            {
                text: `Trailer actual weight (${trailerActualWeight}kg) must not exceed 1.3× vehicle weight (${vehicleActualWeight * 1.3}kg)`,
                passed: trailerActualWeight <= vehicleActualWeight * 1.3
            }
        ];

        setResults({
            requiredLicense: license,
            vehiclePayload: v.gvwr - v.curb,
            trailerPayload: t.gvwr - t.curb,
            conditions
        });
    };

    useEffect(() => {
        calculateResults();
    }, [vehicle, trailer]);

    const InputGroup = ({ label, value, onChange, tooltip }: InputGroupProps) => (
        <div className="flex items-center gap-2 mb-2">
            <label className="w-48 text-sm">{label}</label>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="border rounded p-1 w-24"
                min="0"
            />
            <span className="text-sm text-gray-600">kg</span>
            {tooltip && (
                <span className="text-xs text-gray-500 italic ml-2">{tooltip}</span>
            )}
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Alert className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                    This calculator is for informational purposes only. Always verify weight requirements with your local authorities.
                </AlertDescription>
            </Alert>

            {/* Rest of your JSX remains the same... */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Towing Vehicle Details</h2>
                        <InputGroup
                            label="Curb Weight (G1)"
                            value={vehicle.curb}
                            onChange={(v) => setVehicle(prev => ({...prev, curb: v}))}
                            tooltip="Empty weight as shown on registration"
                        />
                        <InputGroup
                            label="GVWR (F2)"
                            value={vehicle.gvwr}
                            onChange={(v) => setVehicle(prev => ({...prev, gvwr: v}))}
                            tooltip="Gross Vehicle Weight Rating"
                        />
                        <InputGroup
                            label="GCWR (F3)"
                            value={vehicle.gcwr}
                            onChange={(v) => setVehicle(prev => ({...prev, gcwr: v}))}
                            tooltip="Gross Combined Weight Rating"
                        />
                        <InputGroup
                            label="Cargo Weight"
                            value={vehicle.cargo}
                            onChange={(v) => setVehicle(prev => ({...prev, cargo: v}))}
                        />
                        <InputGroup
                            label="Passenger Weight"
                            value={vehicle.passengers}
                            onChange={(v) => setVehicle(prev => ({...prev, passengers: v}))}
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Trailer Details</h2>
                        <InputGroup
                            label="Curb Weight (G1)"
                            value={trailer.curb}
                            onChange={(v) => setTrailer(prev => ({...prev, curb: v}))}
                            tooltip="Empty trailer weight"
                        />
                        <InputGroup
                            label="GVWR (F2)"
                            value={trailer.gvwr}
                            onChange={(v) => setTrailer(prev => ({...prev, gvwr: v}))}
                            tooltip="Maximum allowed weight"
                        />
                        <InputGroup
                            label="Equipment Weight"
                            value={trailer.cargo}
                            onChange={(v) => setTrailer(prev => ({...prev, cargo: v}))}
                        />
                        <InputGroup
                            label="Horse Weight"
                            value={trailer.horses}
                            onChange={(v) => setTrailer(prev => ({...prev, horses: v}))}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Results</h2>

                <div className="mb-4">
                    <p className="font-semibold">Required License: {results.requiredLicense}</p>
                    <p className="text-sm text-gray-600">
                        Vehicle Payload Capacity: {results.vehiclePayload}kg
                        <br />
                        Trailer Payload Capacity: {results.trailerPayload}kg
                    </p>
                </div>

                <h3 className="font-bold mb-2">Conditions:</h3>
                <div className="space-y-2">
                    {results.conditions.map((condition, index) => (
                        <div key={index} className={`p-2 rounded ${condition.passed ? 'bg-green-100' : 'bg-red-100'}`}>
                            <span className={condition.passed ? 'text-green-700' : 'text-red-700'}>
                                {condition.passed ? '✓' : '✗'} {condition.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrailerCalculator;