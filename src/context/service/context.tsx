"use client";

import { createContext, useContext, ReactNode } from "react";
import { createServiceInstances, ServiceInstances } from "./instances";

const ServiceContext = createContext<ServiceInstances | undefined>(undefined);

export const ServiceProvider = ({ children }: { children: ReactNode }) => {
  const services = createServiceInstances();

  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServices = (): ServiceInstances => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useServices must be used within a ServiceProvider");
  }
  return context;
};
