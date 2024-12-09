import React from "react";

export default function Home() {
  return <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#242424", color: "rgba(255, 255, 255, 0.87)" }}>
      
  {/* Header Section */}
  <header style={{ padding: "20px", backgroundColor: "#333", textAlign: "center", borderBottom: "1px solid #444" }}>
    <h1 style={{ margin: 0, fontSize: "2.5rem", fontWeight: "bold" }}>Handluj z nami Paletami</h1>
    <p style={{ margin: 0, fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.6)" }}>Skup, sprzedaż i wynajem palet. Twoje zaufane rozwiązanie!</p>
  </header>

  {/* Hero Section */}
  <section style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "60px 20px", backgroundColor: "#1e1e1e" }}>
    <div style={{ textAlign: "center", maxWidth: "800px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px", fontWeight: "bold" }}>Dlaczego warto z nami współpracować?</h2>
      <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6" }}>
        Oferujemy kompleksowe usługi związane z handlem paletami. Niezależnie od tego, czy potrzebujesz sprzedaży, zakupu czy wynajmu, jesteśmy tu, aby Ci pomóc. Nasze doświadczenie i profesjonalizm to gwarancja udanej współpracy!
      </p>
      <a 
        href="/About"
        style={{ 
          marginTop: "30px",
          padding: "12px 25px",
          backgroundColor: "#e74c3c",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          fontSize: "1.2rem",
        }}
      >
        Zobacz naszą ofertę
      </a>
    </div>
  </section>

  {/* Services Section */}
  <section style={{ padding: "40px 20px", backgroundColor: "#333", textAlign: "center" }}>
    <h2 style={{ fontSize: "2rem", marginBottom: "30px", fontWeight: "bold" }}>Nasze usługi</h2>
    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
      <div style={{ maxWidth: "250px", marginBottom: "20px", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#e74c3c" }}>Skup palet</h3>
        <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.75)" }}>
          Oferujemy skup palet w różnych rozmiarach i rodzajach. Szybka wycena i natychmiastowa transakcja.
        </p>
      </div>
      <div style={{ maxWidth: "250px", marginBottom: "20px", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#e74c3c" }}>Sprzedaż palet</h3>
        <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.75)" }}>
          Sprzedajemy nowe i używane palety. Gwarantujemy wysoką jakość i konkurencyjne ceny.
        </p>
      </div>
      <div style={{ maxWidth: "250px", marginBottom: "20px", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#e74c3c" }}>Wynajem palet</h3>
        <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.75)" }}>
          Oferujemy wynajem palet na określony czas. Idealne rozwiązanie dla firm potrzebujących elastyczności.
        </p>
      </div>
    </div>
  </section>

  {/* Contact Section */}
  <section style={{ padding: "40px 20px", backgroundColor: "#242424", textAlign: "center" }}>
    <h2 style={{ fontSize: "2rem", marginBottom: "30px", fontWeight: "bold" }}>Skontaktuj się z nami</h2>
    <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6" }}>
      Masz pytania? Skontaktuj się z nami, a nasi specjaliści chętnie udzielą odpowiedzi i pomogą znaleźć najlepsze rozwiązanie.
    </p>
    <a
      href="/Contact"
      style={{
        marginTop: "30px",
        padding: "12px 25px",
        backgroundColor: "#e74c3c",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px",
        fontSize: "1.2rem",
      }}
    >
      Napisz do nas
    </a>
  </section>

  {/* Footer Section */}
  <footer style={{ padding: "20px", backgroundColor: "#333", textAlign: "center", borderTop: "1px solid #444" }}>
    <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)" }}>
      &copy; {new Date().getFullYear()} Handluj z nami Paletami. Wszystkie prawa zastrzeżone.
    </p>
  </footer>
</div>;
}
