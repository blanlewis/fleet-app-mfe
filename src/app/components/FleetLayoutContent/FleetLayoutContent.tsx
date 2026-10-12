
"use client";

import { useSearchParams } from "next/navigation";
import CustomSidebar from "../CustomSidebar";

const allNavigationItems = [
  { label: "Dashboard", href: "/", icon: "🏠" },
  { label: "Bookings", href: "/bookings", icon: "📦" },
  { label: "Fleet", href: "/fleet", icon: "🚚" },
  { label: "Reports", href: "/reports", icon: "📊" },
];

const standaloneNavigationItems = [
  { label: "Fleet", href: "/fleet", icon: "🚚" },
];

interface FleetLayoutContentProps {
  readonly children: React.ReactNode;
}
export default function FleetLayoutContent({
  children,
}: FleetLayoutContentProps) {
  const searchParams = useSearchParams();
  const openedThroughHost = searchParams.get("source") === "host";

  const navigationItems = openedThroughHost
    ? allNavigationItems
    : standaloneNavigationItems;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <CustomSidebar
        navigationItems={navigationItems}
        activeHref="/fleet"
      />

      <main style={{ flex: 1, minWidth: 0 }}>
        {children}
      </main>
    </div>
  );
}