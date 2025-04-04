// src/components/services/ServiceDescription.tsx
import React from "react";

interface ServiceDescriptionProps {
  title: string;
  description: string;
  listItems?: string[];
}

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({
  title,
  description,
  listItems,
}) => {
  return (
    <div className="text-[rgba(65,65,65,1)] text-2xl font-normal leading-[35px]">
      <span className="font-bold">{title}</span>
      {description}
      {listItems && (
        <>
          <br />
          <br />
          <span className="font-bold">System Design & Implementation</span>
          <br />
          Our inventory includes a diverse range of options to cater to various
          requirements, including:
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ServiceDescription;
