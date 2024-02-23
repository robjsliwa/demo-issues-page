import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllIssues, OpenIssues, ClosedIssues } from "./index";
// @ts-ignore
import { useDashboard } from "@myorg/dashboard-layout";

export function Issues(props) {
  const [activeTab, setActiveTab] = useState("");
  const { updateDashboard } = useDashboard();
  const tabs = [
    {
      name: "Open",
      href: "/issues/open",
      current: activeTab.includes("/open"),
    },
    {
      name: "Closed",
      href: "/issues/closed",
      current: activeTab.includes("/closed"),
    },
  ];

  useEffect(() => {
    updateDashboard({ tabs, tabTitle: "Issues" });
    if (typeof window !== "undefined") {
      setActiveTab(window.location.pathname);
    }
  }, []);

  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/issues" element={<AllIssues />} />
          <Route path="/issues/open" element={<OpenIssues />} />
          <Route path="/issues/closed" element={<ClosedIssues />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}
