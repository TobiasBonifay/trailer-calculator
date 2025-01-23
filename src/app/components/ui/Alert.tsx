import React from 'react';

interface AlertProps {
    children: React.ReactNode;
    className?: string;
}

export function Alert({ children, className = '' }: AlertProps) {
    return (
        <div className={`bg-blue-50 border-l-4 border-blue-400 p-4 ${className}`}>
            {children}
        </div>
    );
}

export function AlertDescription({ children }: { children: React.ReactNode }) {
    return <div className="text-sm text-blue-700">{children}</div>;
}