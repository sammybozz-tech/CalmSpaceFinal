import { useState } from "react";
import LandingPage from "@/components/LandingPage";

export default function Index() {
  const [showLanding, setShowLanding] = useState(true);

  const handleGetStarted = (name: string) => {
    // setUserName(name);
    setShowLanding(false);
    // setActiveTab('home');
  };

  return <LandingPage onGetStarted={handleGetStarted} />;
}
