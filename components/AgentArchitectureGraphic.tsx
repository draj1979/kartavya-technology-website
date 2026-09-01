const CENTER = { x: 240, y: 240 };
const CENTER_R = 56;
const OUTER_R = 176;
const NODE_W = 152;
const NODE_H = 48;

type NodeDef = {
  label: string;
  angle: number; // degrees, 0 = right, -90 = top, clockwise
  icon: "crm" | "erp" | "database" | "api" | "knowledge" | "people";
};

const nodes: NodeDef[] = [
  { label: "CRM", angle: -90, icon: "crm" },
  { label: "ERP", angle: -30, icon: "erp" },
  { label: "APIs", angle: 30, icon: "api" },
  { label: "Employees", angle: 90, icon: "people" },
  { label: "Databases", angle: 150, icon: "database" },
  { label: "Knowledge Base", angle: 210, icon: "knowledge" },
];

function point(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CENTER.x + radius * Math.cos(rad),
    y: CENTER.y + radius * Math.sin(rad),
  };
}

function Icon({ type }: { type: NodeDef["icon"] }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#60a5fa",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (type) {
    case "crm":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="2.5" y="4" width="19" height="13" rx="3" />
          <path d="M7.5 17l2.8 3.5 2.8-3.5" />
        </svg>
      );
    case "erp":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" />
          <path d="M3 12l9 4.5 9-4.5" />
          <path d="M3 16.5L12 21l9-4.5" />
        </svg>
      );
    case "database":
      return (
        <svg {...common} aria-hidden="true">
          <ellipse cx="12" cy="5.5" rx="8" ry="2.8" />
          <path d="M4 5.5v6.2c0 1.55 3.58 2.8 8 2.8s8-1.25 8-2.8V5.5" />
          <path d="M4 11.7v6.2c0 1.55 3.58 2.8 8 2.8s8-1.25 8-2.8v-6.2" />
        </svg>
      );
    case "api":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M8.5 4.5L2.5 12l6 7.5" />
          <path d="M15.5 4.5l6 7.5-6 7.5" />
        </svg>
      );
    case "knowledge":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M6.5 3h7l4 4v13a1 1 0 01-1 1h-10a1 1 0 01-1-1V4a1 1 0 011-1z" />
          <path d="M13.5 3v4h4" />
          <path d="M8.5 12.5h7M8.5 16h4.5" />
        </svg>
      );
    case "people":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="7.5" r="3.6" />
          <path d="M4.5 20.5c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5" />
        </svg>
      );
  }
}

export default function AgentArchitectureGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]">
      {/* soft ambient glow behind the diagram */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[8%] rounded-full bg-accent/15 blur-3xl"
      />
      <svg
        viewBox="0 0 480 480"
        className="relative h-auto w-full"
        role="img"
        aria-label="Diagram of an AI agent at the center, connected to enterprise systems including CRM, ERP, databases, APIs, knowledge bases and employees"
      >
        <style>
          {`
            .kt-ring { animation: kt-pulse 3.2s ease-in-out infinite; transform-origin: ${CENTER.x}px ${CENTER.y}px; }
            .kt-ring-2 { animation-delay: 0.6s; }
            .kt-line { stroke-dasharray: 3 7; animation: kt-dash 1.4s linear infinite; }
            .kt-node { animation: kt-fade 0.6s ease both; }
            @keyframes kt-pulse {
              0%, 100% { opacity: 0.45; transform: scale(1); }
              50% { opacity: 0.9; transform: scale(1.06); }
            }
            @keyframes kt-dash {
              to { stroke-dashoffset: -20; }
            }
            @keyframes kt-fade {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @media (prefers-reduced-motion: reduce) {
              .kt-ring, .kt-line { animation: none; }
            }
          `}
        </style>

        {/* connector lines + flowing dots, drawn first so nodes sit on top */}
        {nodes.map((n, i) => {
          const from = point(n.angle, CENTER_R);
          const to = point(n.angle, OUTER_R);
          const pathId = `kt-path-${i}`;
          return (
            <g key={n.label}>
              <path
                id={pathId}
                d={`M${from.x},${from.y} L${to.x},${to.y}`}
                fill="none"
                stroke="#1f2937"
                strokeWidth="1.5"
              />
              <path
                d={`M${from.x},${from.y} L${to.x},${to.y}`}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="kt-line"
                opacity="0.7"
              />
              <circle r="3" fill="#60a5fa">
                <animateMotion
                  dur="2.6s"
                  begin={`${i * 0.35}s`}
                  repeatCount="indefinite"
                  path={`M${from.x},${from.y} L${to.x},${to.y}`}
                />
              </circle>
            </g>
          );
        })}

        {/* pulsing rings behind the center node */}
        <circle
          className="kt-ring"
          cx={CENTER.x}
          cy={CENTER.y}
          r={CENTER_R + 14}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1"
        />
        <circle
          className="kt-ring kt-ring-2"
          cx={CENTER.x}
          cy={CENTER.y}
          r={CENTER_R + 26}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1"
        />

        {/* center node: AI Agent */}
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={CENTER_R}
          fill="#111827"
          stroke="#3b82f6"
          strokeWidth="1.5"
        />
        <g transform={`translate(${CENTER.x}, ${CENTER.y - 10})`}>
          <circle r="4.5" fill="#3b82f6" />
          <circle r="2.2" fill="#60a5fa" cx="14" cy="-6" />
          <circle r="2.2" fill="#60a5fa" cx="-15" cy="-4" />
          <circle r="2.2" fill="#60a5fa" cx="2" cy="15" />
          <path d="M0,0 L14,-6 M0,0 L-15,-4 M0,0 L2,15" stroke="#3b82f6" strokeWidth="1" opacity="0.6" />
        </g>
        <text
          x={CENTER.x}
          y={CENTER.y + 26}
          textAnchor="middle"
          fill="#f8fafc"
          fontSize="13"
          fontWeight="600"
        >
          AI Agent
        </text>

        {/* outer enterprise system nodes */}
        {nodes.map((n, i) => {
          const c = point(n.angle, OUTER_R);
          return (
            <g
              key={n.label}
              className="kt-node"
              style={{ animationDelay: `${i * 90}ms` }}
              transform={`translate(${c.x - NODE_W / 2}, ${c.y - NODE_H / 2})`}
            >
              <rect
                width={NODE_W}
                height={NODE_H}
                rx="9"
                fill="#0f172a"
                stroke="#1f2937"
                strokeWidth="1"
              />
              <g transform={`translate(14, ${NODE_H / 2 - 9})`}>
                <Icon type={n.icon} />
              </g>
              <text
                x="40"
                y={NODE_H / 2 + 4}
                textAnchor="start"
                fill="#94a3b8"
                fontSize="11.5"
                fontWeight="500"
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
