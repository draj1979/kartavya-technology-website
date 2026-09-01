export default function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-3 md:flex-1 md:flex-col md:gap-2">
          <div className="flex-1 rounded-lg border border-border bg-bg-card px-4 py-3 text-center text-sm font-medium text-text-primary">
            {step}
          </div>
          {i < steps.length - 1 && (
            <span className="shrink-0 text-accent md:rotate-90" aria-hidden="true">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
