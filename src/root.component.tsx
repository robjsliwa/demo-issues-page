import "./index.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// eslint-disable-next-line
// @ts-ignore
import { DashboardLayout } from "@myorg/dashboard-layout";
import { AllIssues, OpenIssues, ClosedIssues } from "./components";

export default function Root(props) {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveTab(window.location.pathname);
    }
  }, []);

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

  return (
    <section>
      <DashboardLayout tabs={tabs} tabTitle={"Issues"}>
        <BrowserRouter>
          <Routes>
            <Route path="/issues" element={<AllIssues />} />
            <Route path="/issues/open" element={<OpenIssues />} />
            <Route path="/issues/closed" element={<ClosedIssues />} />
          </Routes>
        </BrowserRouter>
      </DashboardLayout>
    </section>
  );
}
