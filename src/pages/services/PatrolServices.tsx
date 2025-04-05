
import React from "react";
import ServicesLayout from "@/components/services/ServicesLayout";
import PatrolService from "@/components/services/PatrolService";

const PatrolPage: React.FC = () => {
  return (
    <ServicesLayout>
      <PatrolService />
    </ServicesLayout>
  );
};

export default PatrolPage;
