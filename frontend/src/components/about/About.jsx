import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      {/* Nagłówek */}
      <h1 className={styles.heading}>O nas - Handluj z nami paletami</h1>
      <p className={styles.description}>
        Witamy w <strong>Handluj z nami paletami!</strong> Jesteśmy dynamicznie
        rozwijającą się firmą specjalizującą się w sprzedaży, zakupie oraz
        dystrybucji palet najwyższej jakości. Od lat działamy na rynku krajowym
        i międzynarodowym, dostarczając naszym klientom kompleksowe rozwiązania
        związane z logistyką i transportem.
      </p>

      {/* Historia */}
      <div className={styles.section}>
        <h2 className={styles.subheading}>Nasza historia</h2>
        <p className={styles.text}>
          Historia naszej firmy rozpoczęła się w 2010 roku, kiedy grupa
          zapalonych przedsiębiorców z branży logistycznej dostrzegła rosnącą
          potrzebę optymalizacji i uproszczenia procesów związanych z
          magazynowaniem i transportem towarów. Tak narodziła się firma{" "}
          <strong>Handluj z nami paletami</strong> - z misją dostarczania
          najwyższej jakości palet do wszystkich zakątków Polski i Europy.
        </p>
        <p className={styles.text}>
          Od skromnych początków, zaledwie dwoma samochodami i kilkoma
          klientami, zbudowaliśmy rozbudowaną sieć kontaktów, nowoczesną flotę i
          solidny zespół specjalistów. Nasza firma łączy tradycyjne wartości z
          nowoczesnymi technologiami, dbając o potrzeby każdego klienta.
        </p>
      </div>

      {/* Kim jesteśmy */}
      <div className={styles.section}>
        <h2 className={styles.subheading}>Kim jesteśmy?</h2>
        <p className={styles.text}>
          Nasz zespół to doświadczeni specjaliści z wieloletnim doświadczeniem w
          branży logistycznej. Skupiamy się na dostarczaniu efektywnych
          rozwiązań biznesowych, przy jednoczesnym zachowaniu standardów
          jakości, bezpieczeństwa i terminowości dostaw.
        </p>

        <div className={styles.team}>
          <div className={styles.teamMember}>
            <h3 className={styles.teamMemberName}>
              Jan Kowalski - CEO & Założyciel
            </h3>
            <p className={styles.teamMemberText}>
              Jan jest jednym z założycieli firmy i posiada ponad 20 lat
              doświadczenia w branży transportowej i logistycznej. Jego wizja i
              umiejętności strategiczne pozwoliły firmie osiągnąć obecny poziom
              sukcesu.
            </p>
          </div>
          <div className={styles.teamMember}>
            <h3 className={styles.teamMemberName}>
              Anna Nowak - Dyrektor Operacyjny
            </h3>
            <p className={styles.teamMemberText}>
              Z wieloletnim doświadczeniem w logistyce i zarządzaniu łańcuchem
              dostaw, Anna odpowiada za sprawne funkcjonowanie operacyjne firmy
              i dba o efektywną współpracę z partnerami biznesowymi.
            </p>
          </div>
          <div className={styles.teamMember}>
            <h3 className={styles.teamMemberName}>
              Piotr Wiśniewski - Dyrektor ds. Sprzedaży
            </h3>
            <p className={styles.teamMemberText}>
              Piotr jest odpowiedzialny za kontakty z klientami i rozwój
              współpracy na rynku krajowym oraz międzynarodowym. Jego podejście
              do klienta, bazujące na zaufaniu i partnerskim dialogu, jest
              fundamentem wielu udanych współpracy.
            </p>
          </div>
        </div>
      </div>

      {/* Oferta */}
      <div className={styles.section}>
        <h2 className={styles.subheading}>Co oferujemy?</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Sprzedaż palet - Oferujemy palety o różnych parametrach
            technicznych, idealnie dopasowane do potrzeb Twojego biznesu.
          </li>
          <li className={styles.listItem}>
            Skup palet - Kupujemy używane palety, zapewniając naszym klientom
            uczciwe warunki współpracy i szybkie transakcje.
          </li>
          <li className={styles.listItem}>
            Transport palet - Dysponujemy nowoczesną flotą samochodów, dzięki
            czemu gwarantujemy szybką i bezpieczną dostawę do każdego zakątka
            kraju i Europy.
          </li>
          <li className={styles.listItem}>
            Logistyka paletowa - Nasze rozwiązania logistyczne usprawniają
            procesy magazynowe, transportowe oraz operacyjne dla wielu branż.
          </li>
        </ul>
      </div>

      {/* Dlaczego warto z nami współpracować */}
      <div className={styles.section}>
        <h2 className={styles.subheading}>
          Dlaczego warto z nami współpracować?
        </h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            ✅ Doświadczenie i profesjonalizm: Ponad 13 lat na rynku i tysiące
            zadowolonych klientów.
          </li>
          <li className={styles.listItem}>
            ✅ Terminowość dostaw: Dbamy o to, aby każda dostawa dotarła na
            czas.
          </li>
          <li className={styles.listItem}>
            ✅ Elastyczność i indywidualne podejście: Każdy klient jest dla nas
            ważny, dlatego dopasowujemy rozwiązania do indywidualnych potrzeb.
          </li>
          <li className={styles.listItem}>
            ✅ Konkurencyjne ceny i transparentne warunki współpracy.
          </li>
        </ul>
      </div>

      {/* Zaufanie */}
      <div className={styles.section}>
        <p className={styles.text}>
          W "Handluj z nami paletami" wierzymy, że sukces to efekt zaufania i
          dobrej współpracy. Nasza firma opiera swoje działania na budowaniu
          trwałych relacji z klientami, dostawcami i partnerami biznesowymi.
        </p>
      </div>
    </div>
  );
};

export default About;
