interface AppFooterProps {
  onImpressumClick: () => void;
  onDatenschutzClick: () => void;
}

export function AppFooter({ onImpressumClick, onDatenschutzClick }: AppFooterProps) {
  return (
    <footer className="mx-auto max-w-2xl space-y-2 p-8 text-center text-xs text-slate-400">
      <p>
        Diese Simulation dient als grobe Orientierungshilfe. Die reale Restschuld weicht je
        nach Zinssatz der Finanzierung leicht ab (hier wird eine reine Tilgungsverrechnung
        angenommen).
      </p>
      <p>&copy; 2024 – Plan zur Gütertrennung & Immobilienauseinandersetzung</p>
      <p className="flex justify-center gap-4 pt-1">
        <button
          type="button"
          onClick={onImpressumClick}
          className="underline underline-offset-2 transition hover:text-slate-600"
        >
          Impressum
        </button>
        <button
          type="button"
          onClick={onDatenschutzClick}
          className="underline underline-offset-2 transition hover:text-slate-600"
        >
          Datenschutz
        </button>
      </p>
    </footer>
  );
}
