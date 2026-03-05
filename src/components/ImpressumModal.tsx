import { Modal } from "./Modal";

interface ImpressumModalProps {
  onClose: () => void;
}

export function ImpressumModal({ onClose }: ImpressumModalProps) {
  return (
    <Modal title="Impressum" onClose={onClose}>
      <p className="mb-4 font-semibold text-slate-800">Angaben gemäß § 5 TMG</p>
      <p className="mb-4">
        Benjamin Geißler<br />
        An den Gärten 21<br />
        39122 Magdeburg<br />
        Deutschland
      </p>
      <p className="mb-1 font-semibold text-slate-800">Kontakt</p>
      <p className="mb-4">
        E-Mail: me@web-ben.de
      </p>
      <p className="mb-1 font-semibold text-slate-800">Haftung für Inhalte</p>
      <p className="mb-4">
        Diese Webanwendung dient ausschließlich zur privaten Orientierung und stellt keine
        Rechts- oder Finanzberatung dar. Für die Richtigkeit, Vollständigkeit und Aktualität
        der berechneten Werte wird keine Haftung übernommen.
      </p>
      <p className="mb-1 font-semibold text-slate-800">Haftung für Links</p>
      <p>
        Diese Anwendung enthält keine externen Links. Sollten solche hinzugefügt werden, wird
        auf externe Inhalte kein Einfluss genommen und daher keine Haftung übernommen.
      </p>
    </Modal>
  );
}
