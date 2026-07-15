function DashboardCard({ title, children }) {
  return (
    <div
      style={{
        background: "rgba(30,41,59,.92)",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: "18px",
        padding: "24px",
        boxShadow: "0 10px 25px rgba(0,0,0,.25)",
        height: "100%",
      }}
    >
      {title && (
        <h3
          style={{
            color: "#fff",
            marginBottom: "18px",
            fontWeight: "600",
          }}
        >
          {title}
        </h3>
      )}

      {children}
    </div>
  );
}

export default DashboardCard;