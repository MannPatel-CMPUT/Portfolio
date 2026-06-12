export interface CarLabelData {
  id: string
  label: string
  targetId: string
  tooltipTitle: string
  tooltipDescription: string
  top: string
  left: string
}

export const carLabels: CarLabelData[] = [
  {
    id: 'driver',
    label: 'Driver',
    targetId: 'about',
    tooltipTitle: 'DRIVER',
    tooltipDescription:
      'The engineer behind the wheel — background, focus areas, and what drives my work.',
    top: '28%',
    left: '52%',
  },
  {
    id: 'power-unit',
    label: 'Power Unit',
    targetId: 'projects',
    tooltipTitle: 'POWER UNIT',
    tooltipDescription:
      'Projects that power my portfolio: AI apps, backend systems, databases.',
    top: '38%',
    left: '72%',
  },
  {
    id: 'chassis',
    label: 'Chassis',
    targetId: 'skills',
    tooltipTitle: 'CHASSIS',
    tooltipDescription:
      'The structural foundation — core languages, frameworks, and engineering disciplines.',
    top: '48%',
    left: '58%',
  },
  {
    id: 'telemetry',
    label: 'Telemetry',
    targetId: 'skills',
    tooltipTitle: 'TELEMETRY',
    tooltipDescription:
      'Real-time skill metrics and performance data across my technical stack.',
    top: '18%',
    left: '42%',
  },
  {
    id: 'front-wing',
    label: 'Front Wing',
    targetId: 'timeline',
    tooltipTitle: 'FRONT WING',
    tooltipDescription:
      'Experience and trajectory — how I got here and where the path leads next.',
    top: '62%',
    left: '22%',
  },
  {
    id: 'rear-wing',
    label: 'Rear Wing',
    targetId: 'contact',
    tooltipTitle: 'REAR WING',
    tooltipDescription:
      'Downforce for collaboration — reach out and let\'s connect.',
    top: '22%',
    left: '82%',
  },
  {
    id: 'tires',
    label: 'Tires',
    targetId: 'skills',
    tooltipTitle: 'TIRES',
    tooltipDescription:
      'Grip on the track — the technologies I rely on daily to ship reliable systems.',
    top: '72%',
    left: '68%',
  },
]
