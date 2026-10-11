import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const vehicles = [
    {
      id: "VH-1001",
      registration: "KA-20-MA-1234",
      driver: "Rahul Kumar",
      location: "Udupi",
      status: "On Trip",
    },
    {
      id: "VH-1002",
      registration: "KA-19-MB-5678",
      driver: "Arun Shetty",
      location: "Mangalore",
      status: "Available",
    },
    {
      id: "VH-1003",
      registration: "KA-01-MC-9012",
      driver: "Sanjay Rao",
      location: "Bangalore",
      status: "Maintenance",
    },
    {
      id: "VH-1004",
      registration: "KA-20-MD-3456",
      driver: "Vijay Naik",
      location: "Manipal",
      status: "On Trip",
    },
  ];
  return (
    <main
      style={{
        padding: "32px",
        fontFamily: "Arial, sans-serif",
        background: "#f8fafc",
        color: "#1e293b",
        minHeight: "100vh",
      }}
    >
      <h1>Fleet Management</h1>
      <p>Monitor vehicles and their current availability.</p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        {vehicles.map((vehicle) => (
          <article
            key={vehicle.id}
            style={{
              padding: "20px",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              background: "#ffffff",
            }}
          >
            <h3>{vehicle.id}</h3>
            <p>
              <strong>Registration:</strong> {vehicle.registration}
            </p>
            <p>
              <strong>Driver:</strong> {vehicle.driver}
            </p>
            <p>
              <strong>Location:</strong> {vehicle.location}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                style={{
                  color:
                    vehicle.status === "Available"
                      ? "green"
                      : vehicle.status === "On Trip"
                        ? "#2563eb"
                        : "#d97706",
                  fontWeight: "bold",
                }}
              >
                {vehicle.status}
              </span>
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
