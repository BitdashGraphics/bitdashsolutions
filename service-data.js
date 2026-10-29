window.BAS_SERVICES = [
  {
    "id": "controls-engineering",
    "title": "Controls engineering",
    "short": "Engineer the system.",
    "headline": "The details that make a building work.",
    "intro": "Build a coordinated controls package around the mechanical design, equipment requirements, and the way the building will operate. We develop the documents your programmers, installers, and commissioning team can work from.",
    "phase": "DESIGN / DOCUMENT / COORDINATE",
    "deliverables": [
      [
        "Controls drawings",
        "System schematics for AHUs, RTUs, VAVs, FCUs, exhaust systems, pumps, and central plants, coordinated with the approved mechanical design."
      ],
      [
        "Panel & wiring details",
        "Controller layouts, power distribution details, terminal schedules, wiring diagrams, and field-device connection requirements."
      ],
      [
        "Point & I/O schedules",
        "Organized hardware and software point lists, units, ranges, naming conventions, alarm requirements, and trend requirements."
      ],
      [
        "Network architecture",
        "Supervisory and controller architecture, BACnet addressing schedules, network segmentation requirements for IT review, and integration boundaries."
      ],
      [
        "Device & submittal coordination",
        "Sensor and actuator schedules, controller I/O allocation, equipment interface review, and coordinated technical submittals."
      ],
      [
        "Record documentation",
        "Review comment tracking, drawing revisions, and record updates based on verified field markups and agreed closeout information."
      ],
      [
        "Estimation & proposal support",
        "Review project plans and specifications, prepare engineering effort estimates, identify scope gaps, and develop device takeoffs and bills of materials for your bid. Field information is supplied by your local team."
      ],
      [
        "Valve & damper selection support",
        "Prepare sizing schedules and selection documentation using the project design flows, pressure requirements, equipment information, and manufacturer data. Record assumptions for design-team review."
      ]
    ],
    "inputs": [
      "Mechanical plans, specifications, and equipment schedules",
      "Existing control drawings and selected controller models",
      "Owner standards, network requirements, and project milestones"
    ],
    "outcome": "A coordinated engineering package with defined interfaces, point requirements, and documented assumptions.",
    "systems": [
      "Air handling",
      "Terminal units",
      "Central plants",
      "Hydronic systems",
      "Equipment integration"
    ],
    "platforms": {
      "niagara": "Controls engineering for Tridium Niagara 4. Station structure, integration and operator services.",
      "alerton": "Controls engineering for Alerton. A coordinated path from controller to operator view.",
      "ebi": "Controls engineering for Honeywell EBI. BAS information that works at the enterprise level.",
      "webs": "Controls engineering for Honeywell WEBs. Niagara-based supervision with a defined engineering boundary.",
      "optimizer": "Controls engineering for Honeywell Optimizer. Match the application to the selected controller.",
      "cpo": "Controls engineering for Honeywell CPO. Plant data and constraints before performance conclusions.",
      "trend": "Controls engineering for TREND. Application detail connected to the installed TREND system.",
      "sbc": "Controls engineering for Saia Burgess Controls. Hardware, application and visualization in agreement.",
      "centraline": "Controls engineering for CentraLine. Connect the field-control and operator experience.",
      "excel5000": "Controls engineering for Honeywell EXCEL 5000. Preserve the existing knowledge. Define the next step.",
      "ignition": "Controls engineering for Ignition. Tags, HMI and histories around an operator workflow."
    }
  },
  {
    "id": "sequences-of-operation",
    "title": "Sequences of operation",
    "short": "Define the behavior.",
    "headline": "One intent. Every operating condition.",
    "intro": "Turn design intent into an implementable controls narrative. Define what equipment should do, when it should do it, and how it should respond when conditions change.",
    "phase": "DEFINE / REVIEW / VALIDATE",
    "deliverables": [
      [
        "Operating modes",
        "Occupied, unoccupied, warm-up, cooldown, standby, and other project-specific modes with explicit entry and exit conditions."
      ],
      [
        "Equipment control",
        "Fan and pump enable logic, heating and cooling control, damper operation, lead/lag selection, staging, and equipment coordination."
      ],
      [
        "Reset strategies",
        "Project-specific temperature, static-pressure, and differential-pressure reset narratives tied to approved design requirements."
      ],
      [
        "Interlocks & exceptions",
        "Enable permissives, failure responses, loss-of-communication behavior, freeze-protection interfaces, and restart requirements."
      ],
      [
        "Alarms & setpoints",
        "Setpoint schedules, adjustable limits, alarm delays, priorities, deadbands, and clear operator-facing descriptions."
      ],
      [
        "Testable acceptance criteria",
        "A reviewable relationship between the sequence, programmed logic, and functional tests, including applicable owner or project standards."
      ]
    ],
    "inputs": [
      "Mechanical design intent and operating requirements",
      "Equipment manufacturer requirements and control interfaces",
      "Existing sequences, owner standards, and review responsibilities"
    ],
    "outcome": "An approved control narrative that programming and functional testing can use as their common reference.",
    "systems": [
      "AHU sequences",
      "VAV strategies",
      "Plant staging",
      "Occupancy schedules",
      "Alarm logic"
    ],
    "platforms": {
      "niagara": "Sequences of operation for Tridium Niagara 4. Station structure, integration and operator services.",
      "alerton": "Sequences of operation for Alerton. A coordinated path from controller to operator view.",
      "ebi": "Sequences of operation for Honeywell EBI. BAS information that works at the enterprise level.",
      "webs": "Sequences of operation for Honeywell WEBs. Niagara-based supervision with a defined engineering boundary.",
      "optimizer": "Sequences of operation for Honeywell Optimizer. Match the application to the selected controller.",
      "cpo": "Sequences of operation for Honeywell CPO. Plant data and constraints before performance conclusions.",
      "trend": "Sequences of operation for TREND. Application detail connected to the installed TREND system.",
      "sbc": "Sequences of operation for Saia Burgess Controls. Hardware, application and visualization in agreement.",
      "centraline": "Sequences of operation for CentraLine. Connect the field-control and operator experience.",
      "excel5000": "Sequences of operation for Honeywell EXCEL 5000. Preserve the existing knowledge. Define the next step.",
      "ignition": "Sequences of operation for Ignition. Tags, HMI and histories around an operator workflow."
    }
  },
  {
    "id": "programming-integration",
    "title": "Programming & integration",
    "short": "Connect the logic.",
    "headline": "From point data to coordinated control.",
    "intro": "Develop and organize building automation applications around approved sequences. Bring equipment, controller networks, and supervisory information into a consistent operator environment.",
    "phase": "CONFIGURE / PROGRAM / INTEGRATE",
    "deliverables": [
      [
        "Niagara station development",
        "Station structure, equipment organization, control components, schedules, histories, alarm services, and point metadata for the agreed Niagara scope."
      ],
      [
        "DDC application programming",
        "Project-specific controller logic, equipment templates, interlocks, and reusable routines matched to the selected hardware and available engineering tools."
      ],
      [
        "BACnet & Modbus integration",
        "Device discovery coordination, object or register mapping, scaling, units, status handling, and agreed read/write permissions."
      ],
      [
        "Supervisory configuration",
        "Point databases, equipment hierarchy, alarm routing, trends, user-role requirements, and operator workflows in the target platform."
      ],
      [
        "Bench review & testing",
        "Offline review where supported, simulated inputs where appropriate, logic walkthroughs, and an organized record of test findings."
      ],
      [
        "Release & backup handover",
        "Versioned application files, station or system backups as supported, change notes, deployment coordination, and rollback planning."
      ],
      [
        "Custom application & API scope",
        "Define and implement agreed application extensions, data interfaces, and API workflows. Confirm platform capabilities, access, licensing, and test requirements before development."
      ],
      [
        "Ignition SCADA & HMI engineering",
        "Develop the agreed tag structure, HMI views, alarms, histories, and integration workflows for Ignition projects, including energy and electrical monitoring applications."
      ]
    ],
    "inputs": [
      "Approved sequences, point schedules, and platform versions",
      "Controller models, integration maps, and required licenses",
      "Authorized engineering access and an agreed release process"
    ],
    "outcome": "Documented applications and integrations ready for coordinated field verification.",
    "systems": [
      "Niagara stations",
      "DDC controllers",
      "BACnet",
      "Modbus",
      "Supervisory integration"
    ],
    "platforms": {
      "niagara": "Programming & integration for Tridium Niagara 4. Station structure, integration and operator services.",
      "alerton": "Programming & integration for Alerton. A coordinated path from controller to operator view.",
      "ebi": "Programming & integration for Honeywell EBI. BAS information that works at the enterprise level.",
      "webs": "Programming & integration for Honeywell WEBs. Niagara-based supervision with a defined engineering boundary.",
      "optimizer": "Programming & integration for Honeywell Optimizer. Match the application to the selected controller.",
      "cpo": "Programming & integration for Honeywell CPO. Plant data and constraints before performance conclusions.",
      "trend": "Programming & integration for TREND. Application detail connected to the installed TREND system.",
      "sbc": "Programming & integration for Saia Burgess Controls. Hardware, application and visualization in agreement.",
      "centraline": "Programming & integration for CentraLine. Connect the field-control and operator experience.",
      "excel5000": "Programming & integration for Honeywell EXCEL 5000. Preserve the existing knowledge. Define the next step.",
      "ignition": "Programming & integration for Ignition. Tags, HMI and histories around an operator workflow."
    }
  },
  {
    "id": "analytics-optimization",
    "title": "Analytics & optimization",
    "short": "Make performance visible.",
    "headline": "Find the pattern. Understand the cause.",
    "intro": "Turn building trends into a useful engineering conversation. We structure data, develop agreed analytical checks, and help your team prioritize operating issues for verification.",
    "phase": "ORGANIZE / ANALYZE / VERIFY",
    "deliverables": [
      [
        "Data readiness",
        "Review point naming, units, trend intervals, equipment relationships, missing data, and sensor reliability before interpreting performance."
      ],
      [
        "Fault-detection rules",
        "Project-specific checks for after-hours operation, simultaneous heating and cooling, unstable control, persistent overrides, and abnormal equipment response."
      ],
      [
        "Niagara analytics configuration",
        "Configure supported Niagara Analytics functions where licensed, with agreed rule logic, evaluation periods, thresholds, and equipment context."
      ],
      [
        "Energy & demand visibility",
        "Meter aggregation, interval profiles, demand views, and baseline comparisons using available metering and an agreed reporting boundary."
      ],
      [
        "Actionable dashboards",
        "Present rule results, trend evidence, equipment context, and priority so operators can understand what to investigate next."
      ],
      [
        "Follow-through & reporting",
        "Review findings with your team, document proposed adjustments, and compare post-change trends. Savings are evaluated from project data, not assumed."
      ],
      [
        "Indoor environmental dashboards",
        "Bring available temperature, humidity, CO₂, and other specified sensor data into operator views with project-defined limits and trend context."
      ]
    ],
    "inputs": [
      "Available trend and meter data with operating context",
      "Occupancy schedules, setpoints, and known operating issues",
      "Analytics licensing, reporting goals, and baseline assumptions"
    ],
    "outcome": "A prioritized view of operating issues with trend evidence and a defined verification path.",
    "systems": [
      "Fault detection",
      "Energy profiles",
      "Trend review",
      "Equipment performance",
      "Operational reporting"
    ],
    "platforms": {
      "niagara": "Analytics & optimization for Tridium Niagara 4. Station structure, integration and operator services.",
      "alerton": "Analytics & optimization for Alerton. A coordinated path from controller to operator view.",
      "ebi": "Analytics & optimization for Honeywell EBI. BAS information that works at the enterprise level.",
      "webs": "Analytics & optimization for Honeywell WEBs. Niagara-based supervision with a defined engineering boundary.",
      "optimizer": "Analytics & optimization for Honeywell Optimizer. Match the application to the selected controller.",
      "cpo": "Analytics & optimization for Honeywell CPO. Plant data and constraints before performance conclusions.",
      "trend": "Analytics & optimization for TREND. Application detail connected to the installed TREND system.",
      "sbc": "Analytics & optimization for Saia Burgess Controls. Hardware, application and visualization in agreement.",
      "centraline": "Analytics & optimization for CentraLine. Connect the field-control and operator experience.",
      "excel5000": "Analytics & optimization for Honeywell EXCEL 5000. Preserve the existing knowledge. Define the next step.",
      "ignition": "Analytics & optimization for Ignition. Tags, HMI and histories around an operator workflow."
    }
  },
  {
    "id": "remote-commissioning",
    "title": "Remote commissioning",
    "short": "Verify the intent.",
    "headline": "A clear path from startup to sign-off.",
    "intro": "Give your field team a focused engineering partner during checkout and functional testing. We support the software, evidence, and issue-resolution work remotely while on-site personnel perform physical verification.",
    "phase": "PREPARE / WITNESS / RESOLVE",
    "deliverables": [
      [
        "Readiness review",
        "Confirm approved sequences, software backups, accessible points, graphics, trend setup, and the responsibilities of each testing participant."
      ],
      [
        "Point-to-point support",
        "Coordinate remote observation of values and statuses while the field team verifies sensors, actuators, wiring, and physical equipment response."
      ],
      [
        "Functional test scripts",
        "Document the expected response, test conditions, evidence, and acceptance criteria for the agreed equipment and operating modes."
      ],
      [
        "Remote test participation",
        "Review trends and controller behavior during scheduled tests, support software diagnostics, and record results with your field personnel."
      ],
      [
        "Deficiency resolution",
        "Maintain a clear issue list, assign technical actions, coordinate agreed logic corrections, and support retesting against the approved sequence."
      ],
      [
        "Closeout & operator handover",
        "Compile test evidence, software revisions, open items, and operating guidance for the agreed acceptance and handover process."
      ],
      [
        "Remote operator training",
        "Walk through the agreed graphics, alarms, trends, schedules, and operating procedures with the customer team, and record follow-up items for handover."
      ]
    ],
    "inputs": [
      "Approved sequences and functional acceptance criteria",
      "A designated on-site testing team and authorized remote access",
      "Test windows, equipment readiness, and escalation contacts"
    ],
    "outcome": "Traceable test evidence and an organized route from deficiencies to verified closeout.",
    "systems": [
      "Point checkout",
      "Functional testing",
      "Trend verification",
      "Issue tracking",
      "Operator handover"
    ],
    "platforms": {
      "niagara": "Remote commissioning for Tridium Niagara 4. Station structure, integration and operator services.",
      "alerton": "Remote commissioning for Alerton. A coordinated path from controller to operator view.",
      "ebi": "Remote commissioning for Honeywell EBI. BAS information that works at the enterprise level.",
      "webs": "Remote commissioning for Honeywell WEBs. Niagara-based supervision with a defined engineering boundary.",
      "optimizer": "Remote commissioning for Honeywell Optimizer. Match the application to the selected controller.",
      "cpo": "Remote commissioning for Honeywell CPO. Plant data and constraints before performance conclusions.",
      "trend": "Remote commissioning for TREND. Application detail connected to the installed TREND system.",
      "sbc": "Remote commissioning for Saia Burgess Controls. Hardware, application and visualization in agreement.",
      "centraline": "Remote commissioning for CentraLine. Connect the field-control and operator experience.",
      "excel5000": "Remote commissioning for Honeywell EXCEL 5000. Preserve the existing knowledge. Define the next step.",
      "ignition": "Remote commissioning for Ignition. Tags, HMI and histories around an operator workflow."
    }
  },
  {
    "id": "project-management-support",
    "title": "Project management support",
    "short": "Keep delivery connected.",
    "headline": "Technical coordination. Fewer loose ends.",
    "intro": "Extend your project team with controls-specific coordination. Keep design decisions, submittals, engineering progress, and field dependencies connected throughout delivery.",
    "phase": "PLAN / COORDINATE / CLOSE",
    "deliverables": [
      [
        "Scope & responsibility mapping",
        "Define engineering boundaries, deliverables, dependencies, review owners, and interfaces with mechanical, electrical, IT, and commissioning teams."
      ],
      [
        "Engineering milestone planning",
        "Organize submittal, programming, graphics, integration, testing, and closeout milestones around the overall project schedule."
      ],
      [
        "Submittal & RFI tracking",
        "Maintain technical review logs, track unanswered questions, coordinate comments, and record the decisions affecting controls implementation."
      ],
      [
        "Interface coordination",
        "Track packaged-equipment interfaces, network information, integration maps, access prerequisites, and other inputs needed to release work."
      ],
      [
        "Change & risk visibility",
        "Document scope changes, unresolved assumptions, impacts, and technical risks for review by the responsible project leads."
      ],
      [
        "Progress & turnover support",
        "Prepare engineering status updates, readiness reviews, punch-list tracking, and a structured closeout deliverables register."
      ],
      [
        "Pre-sales & engineering capacity support",
        "Organize estimating inputs, bid clarifications, deliverable registers, and engineering work packages so your project leads can plan resources and review progress."
      ]
    ],
    "inputs": [
      "Contract scope, deliverables, schedule, and stakeholders",
      "Current submittals, RFIs, engineering status, and issue logs",
      "Agreed reporting cadence and decision authority"
    ],
    "outcome": "A shared view of engineering progress, outstanding decisions, and the next actions required.",
    "systems": [
      "Controls contractors",
      "Systems integrators",
      "Project engineers",
      "Facility teams",
      "Commissioning teams"
    ],
    "platforms": {
      "niagara": "Project management support for Tridium Niagara 4. Station structure, integration and operator services.",
      "alerton": "Project management support for Alerton. A coordinated path from controller to operator view.",
      "ebi": "Project management support for Honeywell EBI. BAS information that works at the enterprise level.",
      "webs": "Project management support for Honeywell WEBs. Niagara-based supervision with a defined engineering boundary.",
      "optimizer": "Project management support for Honeywell Optimizer. Match the application to the selected controller.",
      "cpo": "Project management support for Honeywell CPO. Plant data and constraints before performance conclusions.",
      "trend": "Project management support for TREND. Application detail connected to the installed TREND system.",
      "sbc": "Project management support for Saia Burgess Controls. Hardware, application and visualization in agreement.",
      "centraline": "Project management support for CentraLine. Connect the field-control and operator experience.",
      "excel5000": "Project management support for Honeywell EXCEL 5000. Preserve the existing knowledge. Define the next step.",
      "ignition": "Project management support for Ignition. Tags, HMI and histories around an operator workflow."
    }
  },
  {
    "id": "graphics-visualization",
    "title": "Graphics & visualization",
    "short": "Give operators clarity.",
    "headline": "More than a graphic. A working view.",
    "intro": "Build an operator experience that makes equipment relationships and current conditions understandable. The visual foundation of Bitdash Graphics meets the engineering detail of building automation.",
    "phase": "MAP / DESIGN / CONNECT",
    "deliverables": [
      [
        "Site & floor navigation",
        "Campus, building, floor, and system navigation with a consistent route from the overview to the equipment that needs attention."
      ],
      [
        "Equipment graphics",
        "AHU, RTU, VAV, FCU, central plant, and hydronic system graphics reflecting the actual project configuration."
      ],
      [
        "Live point binding",
        "Point mapping, units, operating states, status colors, command visibility, and unavailable-data behavior coordinated with the controls database."
      ],
      [
        "Trends & alarms in context",
        "Bring relevant histories, alarm status, setpoints, and equipment information into views that support the operator’s next action."
      ],
      [
        "Energy & portfolio views",
        "Metering dashboards, system comparisons, and facility summaries using the data and calculations agreed for the project."
      ],
      [
        "Graphic standards & QA",
        "Reusable components, naming conventions, navigation review, point verification, and screen-size checks for the target operator environment."
      ],
      [
        "3D equipment & floor-plan visualization",
        "Develop detailed equipment views, floor navigation, and dashboard components from the project configuration, with clear state indication and bindings to the agreed point list."
      ]
    ],
    "inputs": [
      "Equipment schematics, floor plans, and operator workflows",
      "Point database or agreed binding schedule",
      "Platform version, visual standards, and target screen sizes"
    ],
    "outcome": "A coherent operator interface with clear navigation and verified point relationships.",
    "systems": [
      "Equipment graphics",
      "Floor plans",
      "Energy dashboards",
      "BMS navigation",
      "HMI standards"
    ],
    "platforms": {
      "niagara": "Graphics & visualization for Tridium Niagara 4. Station structure, integration and operator services.",
      "alerton": "Graphics & visualization for Alerton. A coordinated path from controller to operator view.",
      "ebi": "Graphics & visualization for Honeywell EBI. BAS information that works at the enterprise level.",
      "webs": "Graphics & visualization for Honeywell WEBs. Niagara-based supervision with a defined engineering boundary.",
      "optimizer": "Graphics & visualization for Honeywell Optimizer. Match the application to the selected controller.",
      "cpo": "Graphics & visualization for Honeywell CPO. Plant data and constraints before performance conclusions.",
      "trend": "Graphics & visualization for TREND. Application detail connected to the installed TREND system.",
      "sbc": "Graphics & visualization for Saia Burgess Controls. Hardware, application and visualization in agreement.",
      "centraline": "Graphics & visualization for CentraLine. Connect the field-control and operator experience.",
      "excel5000": "Graphics & visualization for Honeywell EXCEL 5000. Preserve the existing knowledge. Define the next step.",
      "ignition": "Graphics & visualization for Ignition. Tags, HMI and histories around an operator workflow."
    }
  },
  {
    "id": "lifecycle-modernization",
    "title": "Lifecycle & modernization",
    "short": "Plan what comes next.",
    "headline": "Keep the building. Evolve the controls.",
    "intro": "Understand the existing system before changing it. We support the engineering behind upgrades, staged migrations, standards improvements, and ongoing technical changes.",
    "phase": "ASSESS / PLAN / TRANSITION",
    "deliverables": [
      [
        "Existing-system review",
        "Inventory the available controllers, supervisors, points, software versions, integrations, and documentation to establish the current state."
      ],
      [
        "Upgrade scope planning",
        "Identify dependencies, compatibility questions, licensing needs, and responsibilities before a proposed version or system change."
      ],
      [
        "Migration mapping",
        "Map legacy points, alarms, trends, schedules, and graphics to the intended target structure and document the information to retain."
      ],
      [
        "Phased transition support",
        "Plan release groups, cutover windows, verification steps, and rollback requirements with the owner and on-site implementation team."
      ],
      [
        "Standards & cleanup",
        "Improve naming consistency, equipment organization, alarm structure, historical data requirements, and the maintainability of project documents."
      ],
      [
        "Post-change review",
        "Support agreed validation, trend observation, issue closure, backup updates, and operator guidance after a coordinated release."
      ],
      [
        "Legacy-to-current transition mapping",
        "Assess candidate transitions across TREND, Alerton, Honeywell, and Niagara environments. Map retained functionality, graphics, points, and acceptance checks before agreeing a migration path."
      ]
    ],
    "inputs": [
      "System inventory, versions, backups, and current documentation",
      "Target outcomes, constraints, and acceptable service windows",
      "Vendor compatibility information and approved change responsibilities"
    ],
    "outcome": "A practical transition plan with documented dependencies and verification steps.",
    "systems": [
      "Existing buildings",
      "Phased upgrades",
      "Legacy graphics",
      "Database cleanup",
      "Engineering support"
    ],
    "platforms": {
      "niagara": "Lifecycle & modernization for Tridium Niagara 4. Station structure, integration and operator services.",
      "alerton": "Lifecycle & modernization for Alerton. A coordinated path from controller to operator view.",
      "ebi": "Lifecycle & modernization for Honeywell EBI. BAS information that works at the enterprise level.",
      "webs": "Lifecycle & modernization for Honeywell WEBs. Niagara-based supervision with a defined engineering boundary.",
      "optimizer": "Lifecycle & modernization for Honeywell Optimizer. Match the application to the selected controller.",
      "cpo": "Lifecycle & modernization for Honeywell CPO. Plant data and constraints before performance conclusions.",
      "trend": "Lifecycle & modernization for TREND. Application detail connected to the installed TREND system.",
      "sbc": "Lifecycle & modernization for Saia Burgess Controls. Hardware, application and visualization in agreement.",
      "centraline": "Lifecycle & modernization for CentraLine. Connect the field-control and operator experience.",
      "excel5000": "Lifecycle & modernization for Honeywell EXCEL 5000. Preserve the existing knowledge. Define the next step.",
      "ignition": "Lifecycle & modernization for Ignition. Tags, HMI and histories around an operator workflow."
    }
  }
];
window.BAS_PLATFORMS = {
  "niagara": {
    "name": "Tridium Niagara 4",
    "subtitle": "A connected framework. A coordinated engineering approach.",
    "description": "Niagara Framework connects building systems and operational information. Our scope brings station engineering, integration, graphics, and performance analysis together around your installed environment.",
    "tags": [
      "Niagara 4",
      "JACE",
      "Supervisor",
      "BACnet / Modbus"
    ],
    "layers": [
      "Field devices & equipment",
      "JACE / controller integration",
      "Niagara Supervisor",
      "Graphics · histories · analytics"
    ],
    "work": [
      "Station architecture and equipment organization",
      "Wiresheet logic, schedules, alarms, and histories",
      "Point integration, naming, tagging, and data structure",
      "Operator views and licensed analytics configuration"
    ],
    "scope": "Version, drivers, modules, controller capability, and licensing are confirmed during scoping.",
    "url": "https://www.tridium.com/us/en/Products/niagara"
  },
  "alerton": {
    "name": "Alerton",
    "subtitle": "Field-level control. Operator-level clarity.",
    "description": "Alerton combines controller networks with a supervisory operator environment. We support engineering across the installed BACtalk / Ascent equipment and Compass scope, from documentation to coordinated verification.",
    "tags": [
      "BACtalk",
      "Ascent",
      "Compass",
      "BACnet"
    ],
    "layers": [
      "Sensors · actuators · HVAC",
      "Alerton controller network",
      "Compass supervisory environment",
      "Graphics · alarms · trends"
    ],
    "work": [
      "Controls drawings, I/O, and controller coordination",
      "Application logic and equipment sequence support",
      "Compass point database and graphics coordination",
      "Trend review and remote functional-test support"
    ],
    "scope": "Hardware generation, Compass version, engineering tools, and authorized access define the implementation scope.",
    "url": "https://buildings.honeywell.com/us/en/products/by-category/software/building-control-software/system-agreements-and-upgrades/compass-software"
  },
  "webs": {
    "name": "Honeywell WEBs",
    "subtitle": "Connected engineering for your WEBs environment.",
    "description": "Coordinate controller applications, supervisory configuration, graphics, and integration around the installed WEBs system.",
    "work": [
      "Controls documentation and point schedules",
      "Application and supervisory engineering support",
      "Equipment graphics, alarms, histories, and schedules",
      "Remote checkout and release coordination"
    ],
    "tags": [
      "Engineering",
      "Programming",
      "Graphics",
      "Remote support"
    ],
    "layers": [
      "Equipment & project information",
      "Controller / data interfaces",
      "Honeywell WEBs",
      "Operator workflows & performance views"
    ],
    "scope": "Scope is confirmed against the installed release, controller models, available tools, licenses, and authorized access."
  },
  "optimizer": {
    "name": "Honeywell Optimizer",
    "subtitle": "Controls engineering with the full project in view.",
    "description": "Develop the engineering and software scope for your Honeywell Optimizer project, from controller requirements to operator handover.",
    "work": [
      "Controller and I/O selection coordination",
      "Approved sequence implementation and application review",
      "Integration mapping and supervisory coordination",
      "Remote functional checks and closeout documentation"
    ],
    "tags": [
      "Engineering",
      "Programming",
      "Graphics",
      "Remote support"
    ],
    "layers": [
      "Equipment & project information",
      "Controller / data interfaces",
      "Honeywell Optimizer",
      "Operator workflows & performance views"
    ],
    "scope": "Scope is confirmed against the installed release, controller models, available tools, licenses, and authorized access."
  },
  "ebi": {
    "name": "Honeywell EBI",
    "subtitle": "Enterprise visibility. Building-level detail.",
    "description": "Enterprise Buildings Integrator brings building information into a supervisory environment. Our building automation scope focuses on point structure, interfaces, operator displays, alarms, and histories.",
    "tags": [
      "Enterprise supervision",
      "Point databases",
      "Operator displays",
      "System interfaces"
    ],
    "layers": [
      "Building systems & controllers",
      "Supported subsystem interfaces",
      "Honeywell EBI",
      "Operator displays · alarms · histories"
    ],
    "work": [
      "Point schedules and supervisory database coordination",
      "Building-system interface and mapping support",
      "Operator graphics, navigation, alarms, and trends",
      "Remote verification and handover coordination"
    ],
    "scope": "The installed EBI release, licensed interfaces, and underlying controllers determine the supported scope.",
    "url": "https://buildings.honeywell.com/us/en/solutions/integrated-operations/ebi"
  },
  "cpo": {
    "name": "Honeywell CPO",
    "subtitle": "A clear engineering scope for plant performance.",
    "description": "Support the data, controls coordination, and verification work around your Honeywell CPO environment. Agree optimization boundaries and responsibilities before implementation.",
    "work": [
      "Plant point schedules and data readiness",
      "Control-sequence and operating-limit coordination",
      "Trend and performance dashboard support",
      "Remote testing, issue review, and handover"
    ],
    "tags": [
      "Engineering",
      "Programming",
      "Graphics",
      "Remote support"
    ],
    "layers": [
      "Equipment & project information",
      "Controller / data interfaces",
      "Honeywell CPO",
      "Operator workflows & performance views"
    ],
    "scope": "Scope is confirmed against the installed release, controller models, available tools, licenses, and authorized access."
  },
  "trend": {
    "name": "TREND",
    "subtitle": "Make the next stage of your TREND project clear.",
    "description": "Support drawings, application programming, operator graphics, and transition planning for the installed TREND environment.",
    "work": [
      "Controls submittals and equipment schedules",
      "Controller application and sequence support",
      "Supervisory graphics and database coordination",
      "Legacy-system review and migration planning"
    ],
    "tags": [
      "Engineering",
      "Programming",
      "Graphics",
      "Remote support"
    ],
    "layers": [
      "Equipment & project information",
      "Controller / data interfaces",
      "TREND",
      "Operator workflows & performance views"
    ],
    "scope": "Scope is confirmed against the installed release, controller models, available tools, licenses, and authorized access."
  },
  "sbc": {
    "name": "Saia Burgess Controls",
    "subtitle": "Engineering support across the controls lifecycle.",
    "description": "Connect project documentation, controller logic, and supervisory information for your Saia Burgess Controls installation.",
    "work": [
      "Hardware architecture, I/O, and wiring documentation",
      "Application programming against approved sequences",
      "Point mapping and operator interface coordination",
      "Remote verification and application handover"
    ],
    "tags": [
      "Engineering",
      "Programming",
      "Graphics",
      "Remote support"
    ],
    "layers": [
      "Equipment & project information",
      "Controller / data interfaces",
      "Saia Burgess Controls",
      "Operator workflows & performance views"
    ],
    "scope": "Scope is confirmed against the installed release, controller models, available tools, licenses, and authorized access."
  },
  "centraline": {
    "name": "CentraLine",
    "subtitle": "Bring field control and supervision together.",
    "description": "Support CentraLine project engineering, applications, visualization, and integration within the capabilities of the installed system.",
    "work": [
      "System architecture and controls documentation",
      "Equipment applications and supervisory coordination",
      "Graphics, schedules, alarms, and trend organization",
      "Remote functional-test and turnover support"
    ],
    "tags": [
      "Engineering",
      "Programming",
      "Graphics",
      "Remote support"
    ],
    "layers": [
      "Equipment & project information",
      "Controller / data interfaces",
      "CentraLine",
      "Operator workflows & performance views"
    ],
    "scope": "Scope is confirmed against the installed release, controller models, available tools, licenses, and authorized access."
  },
  "excel5000": {
    "name": "Honeywell EXCEL 5000",
    "subtitle": "Support the installed system. Plan the transition.",
    "description": "Review existing Honeywell EXCEL 5000 controls and develop a practical engineering scope for maintenance changes, integration, or staged modernization.",
    "work": [
      "Existing-system and application documentation review",
      "Controller logic and sequence coordination",
      "Legacy point, alarm, and graphic mapping",
      "Migration dependencies and phased cutover planning"
    ],
    "tags": [
      "Engineering",
      "Programming",
      "Graphics",
      "Remote support"
    ],
    "layers": [
      "Equipment & project information",
      "Controller / data interfaces",
      "Honeywell EXCEL 5000",
      "Operator workflows & performance views"
    ],
    "scope": "Scope is confirmed against the installed release, controller models, available tools, licenses, and authorized access."
  },
  "ignition": {
    "name": "Ignition",
    "subtitle": "Operational information, built for your team.",
    "description": "Develop SCADA, HMI, and energy-monitoring views around your project data and operator workflow, extending the project capabilities shown in our video collection.",
    "work": [
      "Tag structure, equipment models, and data mapping",
      "HMI screens and operator navigation",
      "Alarm, history, and reporting configuration",
      "Energy and electrical monitoring dashboards"
    ],
    "tags": [
      "Engineering",
      "Programming",
      "Graphics",
      "Remote support"
    ],
    "layers": [
      "Equipment & project information",
      "Controller / data interfaces",
      "Ignition",
      "Operator workflows & performance views"
    ],
    "scope": "Scope is confirmed against the installed release, controller models, available tools, licenses, and authorized access."
  }
};
