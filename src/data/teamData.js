// Team Member Data - Mission M2026-001
export const missionData = {
  mission_id: "M2026-001",
  team_members: [
    {
      callsign: "MARS_LEAD",
      real_name: "홍길동",
      mission_role: "Mission Director",
      department: "Propulsion System",
      contact: {
        comm_id: "lead@mars.inc",
        tech_logs: "github.com/lead",
        encryption_key: "0x123...abc"
      },
      status: {
        location: "Earth Orbit",
        availability: "In-Operation",
        vital_sign: "Stable"
      },
      core_modules: ["Python", "React", "AWS"],
      radar_chart_data: {
        focus: 90,
        navigation: 85,
        engineering: 95,
        communication: 80,
        survival: 75
      }
    },
    {
      callsign: "NOVA_02",
      real_name: "김철수",
      mission_role: "Chief Engineer",
      department: "Combustion Chamber",
      contact: {
        comm_id: "nova02@mars.inc",
        tech_logs: "github.com/nova02",
        encryption_key: "0x456...def"
      },
      status: {
        location: "Mars Station",
        availability: "In-Operation",
        vital_sign: "Stable"
      },
      core_modules: ["C++", "Rust", "Kubernetes"],
      radar_chart_data: {
        focus: 85,
        navigation: 90,
        engineering: 92,
        communication: 75,
        survival: 88
      }
    },
    {
      callsign: "PHOENIX_03",
      real_name: "이영희",
      mission_role: "Systems Architect",
      department: "Avionics & Control",
      contact: {
        comm_id: "phoenix03@mars.inc",
        tech_logs: "github.com/phoenix03",
        encryption_key: "0x789...ghi"
      },
      status: {
        location: "Lunar Base",
        availability: "Stand-by",
        vital_sign: "Stable"
      },
      core_modules: ["TypeScript", "Go", "Docker"],
      radar_chart_data: {
        focus: 88,
        navigation: 82,
        engineering: 90,
        communication: 92,
        survival: 80
      }
    }
  ]
};
