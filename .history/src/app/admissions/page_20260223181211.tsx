import AdmissionRequirements from "@/components/Admissions/AdmissionRequirements";
import AdmissionsSection from "@/components/Admissions/AdmissionsSection";
import AdmissionsSubheader from "@/components/Admissions/AdmissionsSubheader";
import ApplicationProcess from "@/components/Admissions/ApplicationProcess";

export default function ServicesPage() {
  return (
    <>
      <AdmissionsSubheader />
      <AdmissionsSection />
      <ApplicationProcess />
      <AdmissionRequirements />
    </>
  );
}
