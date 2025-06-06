import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import JobApplicationForm from "./JobApplicationForm";

const ApplyPage = () => {
  const [open, setOpen] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const jobTitle = searchParams.get("job") || "Job Position";

  const handleDialogChange = (isOpen: boolean) => {
    if (!isOpen) {
      setOpen(false);
      navigate("/careers");
    }
  };

  return (
    <JobApplicationForm
      jobTitle={jobTitle}
      open={open}
      onOpenChange={handleDialogChange}
    />
  );
};

export default ApplyPage;
