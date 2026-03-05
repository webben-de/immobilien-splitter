import { Modal } from "./Modal";

interface DatenschutzModalProps {
  onClose: () => void;
}

export function DatenschutzModal({ onClose }: DatenschutzModalProps) {
  return (
    <Modal title="Datenschutzerklärung" onClose={onClose}>
      <p className="mb-1 font-semibold text-slate-800">1. Verantwortlicher</p>
      <p className="mb-4">
        Benjamin Geißler, An den Gärten 21, 39122 Magdeburg (siehe Impressum).
      </p>
      <p className="mb-1 font-semibold text-slate-800">2. Datenerhebung</p>
      <p className="mb-4">
        Diese Webanwendung läuft vollständig im Browser des Nutzers (Client-Side). Es werden
        keinerlei personenbezogene Daten erhoben, gespeichert oder an Server übertragen. Alle
        eingegebenen Werte verbleiben ausschließlich im lokalen Speicher des Browsers (RAM)
        und werden nicht persistent gespeichert.
      </p>
      <p className="mb-1 font-semibold text-slate-800">3. Cookies</p>
      <p className="mb-4">
        Diese Anwendung verwendet keine Cookies.
      </p>
      <p className="mb-1 font-semibold text-slate-800">4. Externe Dienste</p>
      <p className="mb-4">
        Es werden keine externen Analyse-, Tracking- oder Werbedienste (z. B. Google
        Analytics) eingesetzt.
      </p>
      <p className="mb-1 font-semibold text-slate-800">5. Ihre Rechte</p>
      <p className="mb-4">
        Da keine personenbezogenen Daten verarbeitet werden, bestehen keine
        datenschutzrechtlichen Ansprüche auf Auskunft, Berichtigung oder Löschung gegenüber
        dem Betreiber dieser Anwendung.
      </p>
      <p className="mb-1 font-semibold text-slate-800">6. Hosting</p>
      <p>
        Diese Anwendung wird als statische Webanwendung bereitgestellt. Beim Aufrufen der
        Seite können technisch bedingt IP-Adresse und Zeitstempel im Serverlog des Hosters
        gespeichert werden. Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse an der technisch fehlerfreien Bereitstellung).
      </p>
    </Modal>
  );
}
