/* ──────────────────────────────────────────────────────────────
   Shared catalog data for programmatic SEO pages.
   Used by /parts/[brand], /parts/[category], and /products/[type] pages.
   ────────────────────────────────────────────────────────────── */

export type Brand = {
  slug: string;
  name: string;
  country: string;
  image: string;
  logo: string;
  description: string;
  longDescription: string;
  equipmentTypes: string[];
  partCategories: string[];
};

export type PartCategory = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  description: string;
  longDescription: string;
  brands: string[];
  relatedCategories: string[];
};

export type EquipmentType = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  description: string;
  longDescription: string;
  specs: { label: string; value: string }[];
  brands: string[];
};

/* ─── BRANDS ─────────────────────────────────────────────────── */

export const brands: Brand[] = [
  {
    slug: "jungheinrich",
    name: "Jungheinrich",
    country: "Germany",
    image: "/images/brands/jungheinrich-product.webp",
    logo: "/images/brands/jungheinrich.png",
    description:
      "We supply genuine and aftermarket spare parts for Jungheinrich forklifts, reach trucks, stackers, and pallet trucks across Pakistan with fast delivery and expert technical support.",
    longDescription:
      "Jungheinrich is one of the world's leading manufacturers of material handling equipment, renowned for their innovative electric forklifts and warehouse technology. At Fazlerasheed, we maintain a comprehensive inventory of replacement parts compatible with the full range of Jungheinrich equipment including the EFG, ERE, ETV, and EJE series. Our parts undergo strict quality checks to ensure reliable performance and minimal downtime for your fleet. Whether you need hydraulic components, electrical modules, or wear parts, our team can source and deliver the right solution quickly.",
    equipmentTypes: ["Forklifts", "Reach Trucks", "Stackers", "Power Pallets", "Order Pickers"],
    partCategories: ["Hydraulic Parts", "Electrical Parts", "Filters", "Brake Parts", "Tires & Wheels", "Steering Parts", "Transmission Parts", "Engine Parts", "Cooling Parts"],
  },
  {
    slug: "still",
    name: "Still",
    country: "Germany",
    image: "/images/brands/still-product.webp",
    logo: "/images/brands/still.jpeg",
    description:
      "Get high-quality spare parts for Still forklifts and warehouse equipment in Pakistan. We stock genuine and OEM-equivalent components for the entire Still product range.",
    longDescription:
      "Still, a KION Group brand, produces premium electric and IC-powered forklifts, reach trucks, and automated guided vehicles trusted by warehouses worldwide. Fazlerasheed provides compatible spare parts for the full Still lineup including the RX series forklifts, FM-X reach trucks, and EXU pallet trucks. Our stock covers everything from drive motors and controllers to filters and brake assemblies. With direct sourcing from reputable suppliers and rigorous quality control, we ensure every part meets the exacting standards Still equipment demands.",
    equipmentTypes: ["Forklifts", "Reach Trucks", "Stackers", "Power Pallets", "Tow Trucks"],
    partCategories: ["Hydraulic Parts", "Electrical Parts", "Filters", "Brake Parts", "Tires & Wheels", "Steering Parts", "Transmission Parts", "Cooling Parts", "Chassis Parts"],
  },
  {
    slug: "clark",
    name: "Clark",
    country: "USA",
    image: "/images/brands/clark.webp",
    logo: "/images/brands/clark.webp",
    description:
      "Reliable spare parts for Clark forklifts available in Pakistan. From hydraulic cylinders to electrical components, we supply everything your Clark fleet requires.",
    longDescription:
      "Clark Material Handling has been building forklifts since 1917, making it one of the oldest and most established names in the industry. Their rugged IC and electric forklifts are workhorses in warehouses and manufacturing plants across Pakistan. We supply a complete range of Clark-compatible spare parts including engine components, transmission assemblies, hydraulic pumps, steering systems, and electrical wiring harnesses. Our experienced technical team can help you identify the exact part you need using your Clark model and serial number.",
    equipmentTypes: ["Forklifts", "Tow Trucks"],
    partCategories: ["Hydraulic Parts", "Engine Parts", "Electrical Parts", "Filters", "Brake Parts", "Tires & Wheels", "Steering Parts", "Transmission Parts", "Fuel Parts", "Cooling Parts"],
  },
  {
    slug: "linde",
    name: "Linde",
    country: "Germany",
    image: "/images/brands/linde-product.webp",
    logo: "/images/brands/linde.jpeg",
    description:
      "Premium spare parts for Linde material handling equipment in Pakistan. We supply genuine and aftermarket parts for Linde forklifts, reach trucks, and pallet trucks.",
    longDescription:
      "Linde Material Handling, part of the KION Group, is recognized globally for its high-performance forklifts and advanced hydrostatic drive technology. Their equipment is widely used in Pakistan's automotive, FMCG, and logistics sectors. Fazlerasheed stocks an extensive range of Linde-compatible parts covering the H-series IC forklifts, E-series electric trucks, and R-series reach trucks. From proprietary hydraulic valves and dual-pedal control components to standard filters and brake pads, we deliver the parts you need to maintain peak equipment performance.",
    equipmentTypes: ["Forklifts", "Reach Trucks", "Stackers", "Power Pallets", "Tow Trucks"],
    partCategories: ["Hydraulic Parts", "Electrical Parts", "Filters", "Brake Parts", "Tires & Wheels", "Steering Parts", "Transmission Parts", "Engine Parts", "Cooling Parts", "Chassis Parts"],
  },
  {
    slug: "crown",
    name: "Crown",
    country: "USA",
    image: "/images/brands/crown.webp",
    logo: "/images/brands/crown.webp",
    description:
      "Spare parts for Crown forklifts and warehouse equipment in Pakistan. We provide quality replacement components for the entire Crown product range.",
    longDescription:
      "Crown Equipment Corporation designs and manufactures a complete line of material handling products including forklifts, reach trucks, stackers, and pallet trucks. Known for their operator-centric design and AC traction motors, Crown equipment delivers exceptional productivity in warehouse operations. We supply a full catalog of Crown-compatible parts across Pakistan, from AC drive controllers and regenerative braking components to load wheels and mast rollers. Our parts inventory is carefully curated to match the specific requirements of Crown's proprietary systems.",
    equipmentTypes: ["Forklifts", "Reach Trucks", "Stackers", "Power Pallets", "Order Pickers"],
    partCategories: ["Electrical Parts", "Hydraulic Parts", "Filters", "Brake Parts", "Tires & Wheels", "Steering Parts", "Chassis Parts", "Cooling Parts"],
  },
  {
    slug: "toyota",
    name: "Toyota",
    country: "Japan",
    image: "/images/brands/toyota-product.webp",
    logo: "/images/brands/toyota.png",
    description:
      "Affordable spare parts for Toyota forklifts in Pakistan. We stock genuine and OEM parts for Toyota material handling equipment with nationwide delivery.",
    longDescription:
      "Toyota Industries is the world's largest manufacturer of forklifts by volume, and their equipment is one of the most widely deployed across Pakistani warehouses and factories. The Toyota 8-series forklifts are known for their System of Active Stability (SAS) and fuel-efficient engines. At Fazlerasheed, we maintain deep stock of Toyota-compatible spare parts including engine overhaul kits, SAS controller modules, LPG/CNG fuel system components, and all standard wear parts. Our pricing on Toyota parts is highly competitive, helping fleet managers reduce total cost of ownership.",
    equipmentTypes: ["Forklifts", "Reach Trucks", "Power Pallets", "Tow Trucks", "Hand Pallets"],
    partCategories: ["Engine Parts", "Hydraulic Parts", "Electrical Parts", "Filters", "Brake Parts", "Tires & Wheels", "Steering Parts", "Transmission Parts", "Fuel Parts", "Cooling Parts"],
  },
  {
    slug: "bt",
    name: "BT",
    country: "Sweden",
    image: "/images/brands/bt-product.webp",
    logo: "/images/brands/bt.png",
    description:
      "Quality spare parts for BT warehouse equipment in Pakistan. We supply replacement components for BT pallet trucks, stackers, and reach trucks.",
    longDescription:
      "BT, now part of the Toyota Material Handling family, is a Swedish manufacturer specializing in warehouse equipment including powered pallet trucks, stackers, and reach trucks. BT equipment is widely used in Pakistani distribution centers and cold storage facilities for its reliability and energy efficiency. We provide compatible spare parts for popular BT models including the Levio, Staxio, Reflex, and Optio series. Our inventory covers drive units, control boards, load cells, mast chains, and hydraulic seals — all sourced from trusted suppliers with full traceability.",
    equipmentTypes: ["Power Pallets", "Stackers", "Reach Trucks", "Order Pickers", "Hand Pallets"],
    partCategories: ["Electrical Parts", "Hydraulic Parts", "Tires & Wheels", "Brake Parts", "Filters", "Steering Parts", "Chassis Parts"],
  },
  {
    slug: "yale",
    name: "Yale",
    country: "USA",
    image: "/images/brands/yale.webp",
    logo: "/images/brands/yale.webp",
    description:
      "Dependable spare parts for Yale forklifts and warehouse equipment in Pakistan. Fast delivery on all Yale-compatible components.",
    longDescription:
      "Yale Materials Handling, part of Hyster-Yale Group, manufactures a broad portfolio of forklifts and warehouse equipment suited for demanding industrial applications. Their equipment combines durability with advanced telematics and operator comfort features. Fazlerasheed supplies Yale-compatible spare parts covering the full range from IC counterbalance trucks to electric reach trucks and pallet jacks. Our inventory includes engine kits, hydraulic cylinders, mast bearings, electronic controllers, and cabin components. We also provide hard-to-find legacy parts for older Yale models still in operation across Pakistan.",
    equipmentTypes: ["Forklifts", "Reach Trucks", "Stackers", "Power Pallets", "Tow Trucks"],
    partCategories: ["Engine Parts", "Hydraulic Parts", "Electrical Parts", "Filters", "Brake Parts", "Tires & Wheels", "Steering Parts", "Transmission Parts", "Fuel Parts", "Cooling Parts", "Chassis Parts"],
  },
];

/* ─── PART CATEGORIES ────────────────────────────────────────── */

export const partCategories: PartCategory[] = [
  {
    slug: "hydraulic-parts",
    name: "Hydraulic Parts",
    image: "/images/parts/hydraulic-parts-forklift.jpg",
    alt: "Forklift hydraulic cylinders pumps and valves",
    description:
      "Hydraulic cylinders, pumps, valves, seals, and hoses for forklifts and warehouse equipment. We supply both OEM and aftermarket hydraulic components across Pakistan.",
    longDescription:
      "The hydraulic system is the backbone of every forklift, responsible for lifting, tilting, and steering operations. A malfunctioning hydraulic pump or leaking cylinder can bring your entire operation to a standstill. At Fazlerasheed, we stock a comprehensive range of hydraulic spare parts including lift and tilt cylinders, gear pumps, control valves, hydraulic hose assemblies, O-rings, and seal kits. Our components are compatible with all major forklift brands and are sourced from trusted manufacturers to ensure long service life and reliable performance under heavy loads.",
    brands: ["Jungheinrich", "Still", "Clark", "Linde", "Crown", "Toyota", "BT", "Yale"],
    relatedCategories: ["steering-parts", "engine-parts", "cooling-parts"],
  },
  {
    slug: "tires-wheels",
    name: "Tires & Wheels",
    image: "/images/parts/forklift-tires-wheels.jpg",
    alt: "Forklift solid tires and wheels replacement",
    description:
      "Solid, pneumatic, and cushion tires along with wheel rims and caster wheels for all forklift and warehouse equipment brands.",
    longDescription:
      "Forklift tires are critical for safe operation, stability, and operator comfort. Worn tires reduce traction, increase stopping distances, and can damage warehouse flooring. We supply all types of forklift tires including solid rubber tires for indoor use, pneumatic tires for outdoor and rough terrain, cushion tires for smooth surfaces, and polyurethane load and drive wheels for warehouse equipment. Our inventory includes standard and non-marking compound options for food and pharmaceutical facilities that require clean floor operations.",
    brands: ["Jungheinrich", "Still", "Clark", "Linde", "Crown", "Toyota", "BT", "Yale"],
    relatedCategories: ["brake-parts", "steering-parts", "chassis-parts"],
  },
  {
    slug: "steering-parts",
    name: "Steering Parts",
    image: "/images/parts/forklift-steering-parts.jpg",
    alt: "Forklift steering column and steering parts",
    description:
      "Steering columns, orbitrol units, tie rods, knuckles, and power steering components for forklifts and material handling equipment.",
    longDescription:
      "Precise steering is essential for safe forklift operation, especially in tight warehouse aisles and high-traffic areas. Steering problems can lead to accidents, product damage, and reduced operator productivity. We provide a full range of steering replacement parts including hydraulic steering units (orbitrol), steering columns and shafts, tie rod ends, king pins, knuckle assemblies, and power steering pumps. All components are tested for fitment and performance, ensuring your equipment handles responsively after installation.",
    brands: ["Jungheinrich", "Still", "Clark", "Linde", "Crown", "Toyota", "BT", "Yale"],
    relatedCategories: ["hydraulic-parts", "tires-wheels", "chassis-parts"],
  },
  {
    slug: "transmission-parts",
    name: "Transmission Parts",
    image: "/images/parts/forklift-transmission-parts.jpg",
    alt: "Forklift transmission gears and drive parts",
    description:
      "Gearboxes, drive axles, clutch assemblies, torque converters, and drivetrain components for IC and electric forklifts.",
    longDescription:
      "The transmission system transfers engine or motor power to the drive wheels, enabling the forklift to move forward, reverse, and modulate speed under load. Transmission failures are among the most costly forklift repairs if not addressed early. We stock transmission spare parts including complete gearbox assemblies, ring and pinion gear sets, clutch plates and pressure plates, torque converters, drive axle shafts, differential components, and shift cables. Our parts are compatible with both automatic powershift and hydrostatic drive systems used across major forklift brands.",
    brands: ["Jungheinrich", "Still", "Clark", "Linde", "Toyota", "Yale"],
    relatedCategories: ["engine-parts", "brake-parts", "electrical-parts"],
  },
  {
    slug: "brake-parts",
    name: "Brake Parts",
    image: "/images/parts/forklift-brake-parts.jpg",
    alt: "Forklift brake pads discs and brake assembly",
    description:
      "Brake pads, discs, drums, master cylinders, and parking brake components for safe forklift operations.",
    longDescription:
      "Reliable braking is non-negotiable for forklift safety. Worn brake components increase stopping distances and create serious risks in busy warehouse environments. We supply all types of forklift brake parts including disc brake pads and rotors, drum brake shoes and drums, master and wheel cylinders, brake cables, parking brake assemblies, and hydraulic brake boosters. Our brake components meet or exceed OEM specifications and are available for both wet-disc and dry-disc brake systems used in modern forklift designs.",
    brands: ["Jungheinrich", "Still", "Clark", "Linde", "Crown", "Toyota", "BT", "Yale"],
    relatedCategories: ["tires-wheels", "hydraulic-parts", "steering-parts"],
  },
  {
    slug: "filters",
    name: "Filters",
    image: "/images/parts/forklift-filters.jpg",
    alt: "Forklift oil air and hydraulic filters",
    description:
      "Oil, air, fuel, and hydraulic filters for regular forklift maintenance. Genuine and OEM-equivalent filtration products.",
    longDescription:
      "Filters are the most frequently replaced components in forklift maintenance. Clean oil, air, and hydraulic fluid are essential for protecting engine internals, preventing system contamination, and maximizing equipment lifespan. We stock a complete range of forklift filters including engine oil filters, air intake filters, hydraulic return and suction filters, fuel filters, and transmission filters. Our filtration products come from reputable manufacturers and are cross-referenced to OEM part numbers for guaranteed compatibility. We recommend following manufacturer-prescribed service intervals for optimal performance.",
    brands: ["Jungheinrich", "Still", "Clark", "Linde", "Crown", "Toyota", "BT", "Yale"],
    relatedCategories: ["engine-parts", "hydraulic-parts", "fuel-parts"],
  },
  {
    slug: "engine-parts",
    name: "Engine Parts",
    image: "/images/parts/forklift-engine-parts.jpg",
    alt: "Forklift engine components and motor parts",
    description:
      "Pistons, gaskets, water pumps, starters, alternators, and complete engine overhaul kits for IC-powered forklifts.",
    longDescription:
      "Internal combustion forklift engines operate under demanding conditions — heavy loads, frequent stop-start cycles, and sometimes extreme temperatures. Over time, engine components wear and require replacement to maintain power output and fuel efficiency. We provide a comprehensive selection of IC engine parts including cylinder head gaskets, piston and ring sets, water pumps, thermostats, starter motors, alternators, timing chains and belts, crankshaft bearings, and complete overhaul kits. Our engine parts are compatible with popular forklift engine families from Kubota, Nissan, Isuzu, GM, and Perkins.",
    brands: ["Clark", "Linde", "Toyota", "Yale", "Jungheinrich", "Still"],
    relatedCategories: ["filters", "fuel-parts", "cooling-parts"],
  },
  {
    slug: "electrical-parts",
    name: "Electrical Parts",
    image: "/images/parts/forklift-electrical-parts.jpg",
    alt: "Forklift electrical wiring controllers and sensors",
    description:
      "Controllers, contactors, sensors, wiring harnesses, switches, and electronic modules for electric and IC forklifts.",
    longDescription:
      "Modern forklifts rely heavily on sophisticated electrical and electronic systems for motor control, instrumentation, safety interlocks, and diagnostics. Electrical faults can be complex to diagnose and costly when the wrong part is installed. We supply a wide range of electrical components including AC and DC motor controllers, power contactors, main fuses and fuse holders, wiring harnesses, key switches and ignition modules, instrument clusters, proximity sensors, and CAN-bus communication modules. Our technical team can assist with part identification using your equipment model and error codes.",
    brands: ["Jungheinrich", "Still", "Crown", "Linde", "Toyota", "BT", "Yale", "Clark"],
    relatedCategories: ["engine-parts", "transmission-parts", "cooling-parts"],
  },
  {
    slug: "chassis-parts",
    name: "Chassis Parts",
    image: "/images/parts/forklift-chassis-parts.jpg",
    alt: "Forklift chassis frame and structural parts",
    description:
      "Mast sections, fork carriages, counterweights, overhead guards, and structural body components for forklifts.",
    longDescription:
      "The chassis and structural components of a forklift provide the framework that supports all other systems. Damage from collisions, overloading, or corrosion can compromise equipment safety and load capacity. We supply chassis and structural parts including mast channels and rails, fork carriages and mounting brackets, lift chains and sheaves, counterweight assemblies, overhead guard frames, side panels, floor plates, and mounting hardware. All structural parts are inspected for dimensional accuracy and material quality before dispatch.",
    brands: ["Jungheinrich", "Still", "Clark", "Linde", "Crown", "Toyota", "BT", "Yale"],
    relatedCategories: ["hydraulic-parts", "tires-wheels", "steering-parts"],
  },
  {
    slug: "cooling-parts",
    name: "Cooling Parts",
    image: "/images/parts/forklift-cooling-parts.jpg",
    alt: "Forklift radiators fans and cooling system parts",
    description:
      "Radiators, cooling fans, water pumps, thermostats, and hoses for forklift engine and hydraulic cooling systems.",
    longDescription:
      "Overheating is a leading cause of unplanned forklift downtime and engine damage. Both IC engines and electric drive motors generate significant heat that must be dissipated efficiently. We stock cooling system parts including engine radiators, hydraulic oil coolers, electric cooling fans and motor assemblies, fan belts, water pumps, thermostats, coolant hoses, and expansion tanks. For electric forklifts, we also provide controller heat sinks and ventilation components. Regular cooling system maintenance prevents costly engine failures and extends equipment life.",
    brands: ["Clark", "Linde", "Toyota", "Yale", "Jungheinrich", "Still"],
    relatedCategories: ["engine-parts", "hydraulic-parts", "filters"],
  },
  {
    slug: "attachments",
    name: "Attachments",
    image: "/images/parts/forklift-attachments.jpg",
    alt: "Forklift attachments clamps and fork extensions",
    description:
      "Fork extensions, side shifters, clamps, rotators, and specialized attachments to expand your forklift capabilities.",
    longDescription:
      "Forklift attachments multiply the versatility of your equipment by enabling it to handle different load types and sizes without additional machinery. The right attachment can significantly improve operational efficiency and reduce product damage. We supply a range of forklift attachments including fork extensions for oversized loads, hydraulic side shifters for precise pallet positioning, carton clamps for handling unpalletized goods, paper roll clamps, drum handlers, rotators, and push-pull attachments. All attachments are rated for specific load capacities and mount types.",
    brands: ["Jungheinrich", "Still", "Clark", "Linde", "Crown", "Toyota", "Yale"],
    relatedCategories: ["hydraulic-parts", "chassis-parts", "electrical-parts"],
  },
  {
    slug: "fuel-parts",
    name: "Fuel Parts",
    image: "/images/parts/forklift-fuel-parts.jpg",
    alt: "Forklift fuel system pumps and injector parts",
    description:
      "Fuel pumps, injectors, carburetors, LPG converters, and fuel system components for IC-powered forklifts.",
    longDescription:
      "Fuel system integrity directly impacts engine performance, fuel economy, and emissions compliance. A failing fuel pump or clogged injector causes rough idling, power loss, and excessive fuel consumption. We supply fuel system components for diesel, petrol, LPG, and CNG-powered forklifts including fuel lift pumps, injection pumps, injector nozzles, carburetors, LPG vaporizers and converters, fuel tanks, fuel lines and fittings, and fuel level sensors. Our parts cover engine platforms commonly found in Clark, Toyota, Yale, and Linde IC forklifts operating across Pakistan.",
    brands: ["Clark", "Toyota", "Yale", "Linde"],
    relatedCategories: ["engine-parts", "filters", "electrical-parts"],
  },
];

/* ─── EQUIPMENT TYPES ────────────────────────────────────────── */

export const equipmentTypes: EquipmentType[] = [
  {
    slug: "forklifts",
    name: "Forklifts",
    image: "/images/equipment/forklift.webp",
    alt: "Battery operated forklift trucks for sale and rental in Pakistan",
    description:
      "Battery operated and IC counterbalance forklifts for indoor and outdoor material handling. Available for sale and rental with full after-sales support.",
    longDescription:
      "Counterbalance forklifts are the most versatile and widely used material handling equipment in warehouses, factories, and distribution centers. They can lift loads ranging from 1 ton to over 5 tons and are available in electric (battery-operated) and internal combustion (diesel, LPG, CNG) configurations. At Fazlerasheed, we specialize in imported battery-operated forklifts that deliver zero emissions, low noise, and reduced operating costs. Our fleet of 170+ machines includes models from Jungheinrich, Still, Linde, Clark, Crown, Toyota, BT, and Yale, available for both outright purchase and flexible rental terms.",
    specs: [
      { label: "Load Capacity", value: "1.0 - 5.5 Tons" },
      { label: "Lift Height", value: "Up to 7 meters" },
      { label: "Power Source", value: "Electric / Diesel / LPG" },
      { label: "Drive Type", value: "AC Motor / IC Engine" },
    ],
    brands: ["Jungheinrich", "Still", "Clark", "Linde", "Crown", "Toyota", "BT", "Yale"],
  },
  {
    slug: "reach-trucks",
    name: "Reach Trucks",
    image: "/images/equipment/reach-truck.webp",
    alt: "Electric reach trucks for narrow aisle warehousing in Pakistan",
    description:
      "Electric reach trucks designed for narrow-aisle warehousing with high lift heights. Ideal for maximizing storage density in racking systems.",
    longDescription:
      "Reach trucks are purpose-built for narrow-aisle operations in high-density racking warehouses. Their extendable mast or pantograph mechanism allows the forks to reach into pallet racking without the truck entering the aisle, enabling tighter aisle widths and greater storage capacity. Our range of imported reach trucks features advanced features including 360-degree steering, height pre-selection, tilt sensors, and regenerative braking for extended battery life. Reach trucks are available from leading manufacturers including Jungheinrich, Still, Linde, Crown, BT, and Yale with capacities from 1.0 to 2.5 tons and lift heights exceeding 10 meters.",
    specs: [
      { label: "Load Capacity", value: "1.0 - 2.5 Tons" },
      { label: "Lift Height", value: "Up to 12 meters" },
      { label: "Power Source", value: "Electric (Battery)" },
      { label: "Aisle Width", value: "2.6 - 3.0 meters" },
    ],
    brands: ["Jungheinrich", "Still", "Linde", "Crown", "BT", "Yale"],
  },
  {
    slug: "power-pallets",
    name: "Power Pallets",
    image: "/images/equipment/power-pallet.webp",
    alt: "Electric power pallet trucks for warehouse operations in Pakistan",
    description:
      "Electric powered pallet trucks for efficient horizontal transport of palletized goods across warehouses and loading docks.",
    longDescription:
      "Powered pallet trucks, also known as electric pallet jacks, are essential for horizontal transport of palletized loads across warehouses, loading docks, and distribution centers. They eliminate the physical strain of manual pallet jacks while dramatically increasing throughput. Our range includes walkie pallet trucks for short-distance transport, rider pallet trucks for longer runs, and dock stockers for trailer loading and unloading. Available from brands including Jungheinrich, Still, Linde, Toyota, BT, and Yale, our power pallets feature compact turning radiuses, proportional speed control, and maintenance-free AC motors.",
    specs: [
      { label: "Load Capacity", value: "1.5 - 3.0 Tons" },
      { label: "Travel Speed", value: "Up to 12 km/h" },
      { label: "Power Source", value: "Electric (Battery)" },
      { label: "Type", value: "Walkie / Rider" },
    ],
    brands: ["Jungheinrich", "Still", "Linde", "Toyota", "BT", "Yale", "Crown"],
  },
  {
    slug: "tow-trucks",
    name: "Tow Trucks",
    image: "/images/equipment/tow-truck.webp",
    alt: "Electric tow trucks and towing tractors for industrial use in Pakistan",
    description:
      "Electric tow tractors and tuggers for pulling trailers and carts in manufacturing, logistics, and airport environments.",
    longDescription:
      "Electric tow trucks and towing tractors are used to pull trains of trailers and carts in manufacturing facilities, logistics hubs, and airports. They are essential for internal logistics workflows where goods need to be moved across large distances within a facility. Our tow tractors come from established brands like Still, Linde, Toyota, and Yale, offering towing capacities from 1 ton to over 25 tons. Features include ergonomic stand-on or sit-down operator positions, automatic trailer coupling systems, and compact dimensions for navigating tight production lines.",
    specs: [
      { label: "Towing Capacity", value: "1.0 - 25 Tons" },
      { label: "Travel Speed", value: "Up to 20 km/h" },
      { label: "Power Source", value: "Electric (Battery)" },
      { label: "Operator Position", value: "Stand-on / Sit-down" },
    ],
    brands: ["Still", "Linde", "Toyota", "Yale", "Clark"],
  },
  {
    slug: "order-pickers",
    name: "Order Pickers",
    image: "/images/equipment/order-picker.webp",
    alt: "Electric order picker trucks for warehouse picking in Pakistan",
    description:
      "Electric order pickers that elevate the operator to picking height for fast and accurate item selection from racking systems.",
    longDescription:
      "Order pickers are specialized warehouse vehicles that elevate the operator along with the forks to the picking level, enabling direct access to individual items stored in racking. They are essential for operations that handle piece-picking or case-picking rather than full-pallet retrieval. Our order pickers feature working heights up to 12 meters, wire guidance capability for very narrow aisle operations, integrated pick-to-light systems, and comfortable operator platforms with safety gates. Available from Jungheinrich, Crown, and BT, these machines maximize picking speed and accuracy in high-bay warehouses.",
    specs: [
      { label: "Pick Height", value: "Up to 12 meters" },
      { label: "Load Capacity", value: "1.0 - 1.5 Tons" },
      { label: "Power Source", value: "Electric (Battery)" },
      { label: "Guidance", value: "Wire / Rail / Free" },
    ],
    brands: ["Jungheinrich", "Crown", "BT"],
  },
  {
    slug: "stackers",
    name: "Stackers",
    image: "/images/equipment/stacker.webp",
    alt: "Electric pallet stackers for stacking operations in Pakistan",
    description:
      "Electric pallet stackers for lifting and stacking pallets to medium heights. Compact and cost-effective alternative to full forklifts.",
    longDescription:
      "Electric pallet stackers bridge the gap between powered pallet trucks and full counterbalance forklifts. They offer pallet stacking capability at a fraction of the cost and in a much smaller footprint. Stackers are ideal for light-duty stacking, staging areas, and locations where a full forklift would be impractical. Our range includes straddle stackers, counterbalanced stackers, and reach stackers from brands like Jungheinrich, Still, Linde, Crown, BT, and Yale. Features include free-lift masts for use in low-ceiling environments, initial lift for pallet pickup, and proportional hydraulic controls for precise load placement.",
    specs: [
      { label: "Load Capacity", value: "1.0 - 2.0 Tons" },
      { label: "Lift Height", value: "Up to 6 meters" },
      { label: "Power Source", value: "Electric (Battery)" },
      { label: "Type", value: "Straddle / Counterbalanced" },
    ],
    brands: ["Jungheinrich", "Still", "Linde", "Crown", "BT", "Yale"],
  },
  {
    slug: "hand-pallets",
    name: "Hand Pallets",
    image: "/images/equipment/hand-pallet.webp",
    alt: "Manual and semi-electric hand pallet jacks in Pakistan",
    description:
      "Manual and semi-electric hand pallet jacks for basic pallet transport. Durable, low-maintenance, and essential for every warehouse.",
    longDescription:
      "Hand pallet jacks are the most fundamental material handling tool found in virtually every warehouse, factory, and retail store. They provide a simple, reliable means of moving palletized loads across short distances without any battery or fuel requirement. We offer manual hydraulic pallet jacks in standard and specialized configurations including high-lift models, low-profile models for closed-bottom pallets, stainless steel models for food and pharmaceutical use, and weigh-scale models with integrated load cells. For higher throughput, our semi-electric models add powered drive while retaining manual lift. Available from Toyota, BT, and other leading brands.",
    specs: [
      { label: "Load Capacity", value: "2.0 - 3.0 Tons" },
      { label: "Fork Length", value: "800 - 1200 mm" },
      { label: "Power Source", value: "Manual / Semi-Electric" },
      { label: "Lift Height", value: "85 - 200 mm" },
    ],
    brands: ["Toyota", "BT", "Jungheinrich"],
  },
  {
    slug: "lithium-batteries",
    name: "Lithium Batteries",
    image: "/images/equipment/lithium-battery.webp",
    alt: "LiFePO4 lithium forklift batteries for sale in Pakistan",
    description:
      "LiFePO4 lithium-ion forklift batteries delivering zero maintenance, fast charging, and 3x longer cycle life for high-throughput warehouse operations.",
    longDescription:
      "Lithium iron phosphate (LiFePO4) batteries represent the latest advancement in industrial traction battery technology. They offer significant advantages over traditional lead-acid batteries: zero watering or maintenance, opportunity charging capability that eliminates battery swaps, consistent power output throughout the discharge cycle, and a cycle life exceeding 3,000 full cycles — roughly three times that of lead-acid alternatives. At Fazlerasheed & Co., we supply lithium forklift batteries in configurations from 24V to 80V with capacities ranging from 100Ah to 690Ah, compatible with forklifts, reach trucks, stackers, power pallets, and other warehouse equipment from all major brands. Our lithium battery solutions include integrated BMS (Battery Management System), CAN-bus communication for smart charger integration, and built-in heating elements for cold-storage applications. While the upfront investment is higher, the total cost of ownership over the battery's lifetime is significantly lower due to reduced energy consumption, zero maintenance labour, and extended service life.",
    specs: [
      { label: "Voltage Range", value: "24V - 80V" },
      { label: "Capacity Range", value: "100 - 690 Ah" },
      { label: "Cycle Life", value: "3,000+ Cycles" },
      { label: "Charging Time", value: "1 - 2 Hours" },
    ],
    brands: ["Jungheinrich", "Still", "Linde", "Crown", "Toyota", "BT", "Yale", "Clark"],
  },
  {
    slug: "lead-acid-batteries",
    name: "Lead Acid Batteries",
    image: "/images/equipment/lead-acid-battery.webp",
    alt: "Deep-cycle flooded lead acid traction batteries in Pakistan",
    description:
      "Deep-cycle flooded, AGM, and gel lead-acid traction batteries — the proven, cost-effective power source for forklifts and material handling equipment.",
    longDescription:
      "Lead-acid traction batteries have been the backbone of electric forklift and warehouse equipment power for decades. They remain the most cost-effective solution for single-shift operations and applications where upfront budget is a primary consideration. We supply three main lead-acid battery technologies: deep-cycle flooded batteries offering the lowest cost per cycle with regular watering maintenance, AGM (Absorbed Glass Mat) batteries providing sealed maintenance-free operation with excellent vibration resistance, and gel batteries delivering spill-proof deep-discharge tolerance ideal for sensitive indoor environments. Our lead-acid battery range covers voltages from 6V individual cells to complete 24V, 36V, 48V, and 80V traction battery assemblies. We partner with globally trusted manufacturers including Trojan, Eternity Technologies, and Hawker to ensure reliable performance. Our services include battery condition testing, electrolyte level checks, equalization charging guidance, and end-of-life recycling coordination.",
    specs: [
      { label: "Types", value: "Flooded / AGM / Gel" },
      { label: "Voltage Range", value: "6V - 80V" },
      { label: "Cycle Life", value: "1,000 - 1,500 Cycles" },
      { label: "Maintenance", value: "Regular / Maintenance-Free" },
    ],
    brands: ["Jungheinrich", "Still", "Linde", "Crown", "Toyota", "BT", "Yale", "Clark"],
  },
];

/* ─── CITIES ────────────────────────────────────────────────── */

export type City = {
  slug: string;
  name: string;
  province: string;
  description: string;
  longDescription: string;
  industries: string[];
  landmarks: string[];
};

export const cities: City[] = [
  {
    slug: "lahore",
    name: "Lahore",
    province: "Punjab",
    description:
      "Fazlerasheed & Co. is headquartered in Lahore, providing forklift sales, rentals, and spare parts to the city's thriving textile, pharmaceutical, and FMCG industries.",
    longDescription:
      "Lahore is the economic heart of Punjab and serves as the headquarters for Fazlerasheed & Co. The city's massive textile mills, pharmaceutical manufacturing plants, FMCG distribution centers, and packaging industries create constant demand for reliable material handling equipment. From the bustling warehouses along GT Road to the modern logistics parks in the Sundar Industrial Estate, Lahore businesses depend on forklifts for loading, unloading, and internal transport. Our Lahore operations provide same-day spare parts delivery, on-site maintenance services, and a large fleet of battery-operated forklifts available for short- and long-term rental across the entire metropolitan area.",
    industries: ["Textiles", "Pharmaceuticals", "FMCG & Consumer Goods", "Packaging", "Logistics & Warehousing", "Food Processing"],
    landmarks: ["Sundar Industrial Estate", "Quaid-e-Azam Industrial Estate", "Lahore Dry Port"],
  },
  {
    slug: "karachi",
    name: "Karachi",
    province: "Sindh",
    description:
      "As Pakistan's largest port city and industrial hub, Karachi relies on Fazlerasheed & Co. for forklift solutions that keep its ports, factories, and warehouses running at full capacity.",
    longDescription:
      "Karachi is Pakistan's largest city and the gateway for international trade, home to the busiest seaports in the country. The city's sprawling industrial zones house automotive assembly plants, chemical manufacturing facilities, food and beverage companies, and massive port logistics operations that collectively require thousands of forklifts in daily operation. Fazlerasheed & Co. supplies forklift sales, rentals, traction batteries, and spare parts to Karachi's industrial base, serving businesses from the SITE Industrial Area to the Port Qasim free zones. Our Karachi service network ensures rapid response times for breakdowns and scheduled maintenance across the city's demanding 24/7 operational environments.",
    industries: ["Port & Shipping Logistics", "Automotive Assembly", "Chemical Manufacturing", "Food & Beverage", "Textile & Garments", "Steel & Metal"],
    landmarks: ["SITE Industrial Area", "Korangi Industrial Area", "Port Qasim"],
  },
  {
    slug: "islamabad",
    name: "Islamabad",
    province: "Federal",
    description:
      "Fazlerasheed & Co. serves Islamabad's growing construction sector, corporate warehouses, and government logistics operations with premium forklift rental and maintenance services.",
    longDescription:
      "Islamabad, the federal capital of Pakistan, is experiencing rapid growth in construction, real estate development, and corporate logistics infrastructure. The city's expanding commercial zones, government supply depots, and modern retail distribution centers all require efficient material handling solutions. Fazlerasheed & Co. provides forklift rentals for large-scale construction projects in new sectors, battery-operated equipment for indoor corporate warehouses, and comprehensive spare parts supply for existing fleets. Our presence in Islamabad also serves the nearby Islamabad Industrial Area and the growing logistics corridor that connects the capital with the twin city of Rawalpindi and northern Pakistan.",
    industries: ["Construction & Real Estate", "Corporate Logistics", "Government & Defence", "Retail & Distribution", "IT & Technology Parks"],
    landmarks: ["I-9 Industrial Area", "Islamabad Dry Port", "CPEC Industrial Zones"],
  },
  {
    slug: "rawalpindi",
    name: "Rawalpindi",
    province: "Punjab",
    description:
      "Rawalpindi's military installations, heavy industries, and wholesale markets are supported by Fazlerasheed & Co.'s forklift sales, spare parts, and on-site maintenance services.",
    longDescription:
      "Rawalpindi, the twin city of Islamabad, has a strong industrial and military heritage that drives significant demand for material handling equipment. The city's heavy engineering workshops, military logistics depots, wholesale commodity markets, and manufacturing units all depend on forklifts for daily operations. Rawalpindi's strategic location as a distribution gateway to northern Pakistan makes its warehousing sector particularly active. Fazlerasheed & Co. provides a full range of services to Rawalpindi clients including forklift sales and rentals, genuine spare parts for all major brands, traction battery supply, and scheduled preventive maintenance programs tailored to the city's diverse operational requirements.",
    industries: ["Military & Defence Logistics", "Heavy Engineering", "Wholesale & Trading", "Manufacturing", "Construction"],
    landmarks: ["Rawat Industrial Estate", "Taxila Industrial Area", "Raja Bazaar Commercial Zone"],
  },
  {
    slug: "faisalabad",
    name: "Faisalabad",
    province: "Punjab",
    description:
      "Faisalabad, Pakistan's textile capital, counts on Fazlerasheed & Co. for forklift solutions that power its hundreds of textile mills, dyeing units, and manufacturing plants.",
    longDescription:
      "Faisalabad is widely recognized as Pakistan's textile capital, housing the largest concentration of textile spinning, weaving, dyeing, and garment manufacturing units in the country. The city's industrial output drives enormous demand for forklifts in raw material handling, finished goods warehousing, and container loading at dry port facilities. Beyond textiles, Faisalabad's chemical plants, food processing factories, and agricultural commodity storage facilities also require reliable material handling equipment. Fazlerasheed & Co. serves the Faisalabad market with a comprehensive range of forklift brands, spare parts for quick turnaround on repairs, and flexible rental solutions that allow manufacturers to scale their fleet with seasonal demand fluctuations.",
    industries: ["Textile Mills & Weaving", "Dyeing & Processing", "Chemical Plants", "Food Processing", "Agricultural Storage", "Garment Manufacturing"],
    landmarks: ["Faisalabad Industrial Estate", "Value Addition City (VAC)", "Faisalabad Dry Port"],
  },
  {
    slug: "multan",
    name: "Multan",
    province: "Punjab",
    description:
      "Fazlerasheed & Co. supports Multan's growing agricultural, fertilizer, and ceramics industries with durable forklifts, spare parts, and maintenance services built for heavy use.",
    longDescription:
      "Multan is the economic hub of southern Punjab, anchored by a powerful agricultural economy and expanding industrial base. The city's large fertilizer plants, ceramics and tile factories, cotton ginning mills, and mango processing units generate steady demand for forklift equipment capable of handling heavy loads in challenging conditions. Multan's role as a major commodity trading center means its warehouses and cold storage facilities are constantly moving bulk goods that require efficient mechanical handling. Fazlerasheed & Co. provides Multan industries with robust forklift solutions, from diesel-powered units for outdoor fertilizer handling to battery-operated machines for indoor ceramics warehouses, along with spare parts and scheduled maintenance services.",
    industries: ["Fertilizer Manufacturing", "Ceramics & Tiles", "Cotton & Agriculture", "Mango Processing & Cold Storage", "Chemical Production"],
    landmarks: ["M-2 Industrial Estate Multan", "Multan Industrial Estate", "Southern Punjab FIEDMC Zone"],
  },
  {
    slug: "sialkot",
    name: "Sialkot",
    province: "Punjab",
    description:
      "Sialkot's world-renowned sports goods and surgical instruments export industries trust Fazlerasheed & Co. for forklift solutions that keep their production and shipping lines moving.",
    longDescription:
      "Sialkot is one of Pakistan's most dynamic export-driven cities, internationally recognized for manufacturing sports goods, surgical instruments, leather products, and musical instruments. The city's export-oriented industries operate high-volume production and warehousing facilities that require precise, reliable material handling equipment for both finished goods storage and container stuffing at the Sialkot International Airport cargo terminal and dry port. Fazlerasheed & Co. serves Sialkot's export community with compact battery-operated forklifts ideal for indoor factory environments, spare parts for quick maintenance turnaround, and traction batteries that ensure uninterrupted warehouse operations during the critical export packing seasons.",
    industries: ["Sports Goods Manufacturing", "Surgical Instruments", "Leather & Gloves", "Export Packaging & Logistics", "Musical Instruments"],
    landmarks: ["Sialkot Export Processing Zone", "Sialkot Dry Port", "Sialkot International Airport Cargo"],
  },
  {
    slug: "gujranwala",
    name: "Gujranwala",
    province: "Punjab",
    description:
      "Gujranwala's steel re-rolling mills, ceramics factories, and electrical goods manufacturers rely on Fazlerasheed & Co. for heavy-duty forklift rentals and genuine spare parts.",
    longDescription:
      "Gujranwala, known as the 'City of Wrestlers,' is equally renowned as a major industrial center in Punjab's manufacturing corridor. The city's steel re-rolling mills, sanitary ware and ceramics factories, electrical goods manufacturers, and rice processing units create substantial demand for heavy-duty material handling equipment. Gujranwala's industrial operations often involve moving heavy steel coils, bulky ceramic products, and large electrical assemblies that require powerful forklifts with specialized attachments. Fazlerasheed & Co. provides Gujranwala's industries with high-capacity forklift solutions, comprehensive spare parts supply for rapid repair turnaround, and flexible rental terms that accommodate the city's diverse manufacturing needs and seasonal production cycles.",
    industries: ["Steel Re-Rolling", "Ceramics & Sanitary Ware", "Electrical Goods", "Rice Processing", "Fan Manufacturing", "Auto Parts"],
    landmarks: ["Gujranwala Industrial Estate", "Small Industrial Estate Gujranwala", "GIDA (Gujranwala Industrial Development Authority)"],
  },
  {
    slug: "peshawar",
    name: "Peshawar",
    province: "KPK",
    description:
      "As the largest trading hub in Khyber Pakhtunkhwa, Peshawar depends on Fazlerasheed & Co. for forklift supply, spare parts, and maintenance to support its booming construction and trade sectors.",
    longDescription:
      "Peshawar is the economic and cultural capital of Khyber Pakhtunkhwa, serving as the primary trading gateway between Pakistan and Central Asia. The city's thriving construction industry, cross-border trade warehouses, agricultural commodity markets, and manufacturing units along the GT Road industrial corridor all require dependable forklift solutions. Peshawar's strategic importance has grown significantly with ongoing CPEC-related infrastructure development, driving demand for material handling equipment at construction sites and new logistics facilities. Fazlerasheed & Co. extends its forklift sales, rental, and after-sales services to Peshawar, ensuring businesses in the region have access to the same quality brands and spare parts availability as clients in Punjab and Sindh.",
    industries: ["Cross-Border Trade & Logistics", "Construction & Infrastructure", "Agricultural Commodities", "Marble & Granite", "Tobacco Processing"],
    landmarks: ["Hayatabad Industrial Estate", "Peshawar Industrial Estate (Kohat Road)", "Azakhel Dry Port"],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    province: "Sindh",
    description:
      "Fazlerasheed & Co. provides forklift solutions to Hyderabad's glass, bangle, and manufacturing industries, supporting the city's role as Sindh's second-largest industrial center.",
    longDescription:
      "Hyderabad is the second-largest city in Sindh and a significant industrial center with a diverse manufacturing base. The city is famous for its glass and bangle industries, but it also hosts textile mills, chemical plants, food processing units, and a growing logistics sector that services the agricultural heartland of lower Sindh. Hyderabad's industries range from traditional crafts to modern manufacturing, all requiring material handling solutions that balance cost-efficiency with reliability. Fazlerasheed & Co. serves Hyderabad with forklift sales and rentals suited for both heavy industrial use and lighter warehouse operations, complemented by a full spare parts supply chain and traction battery solutions for businesses transitioning to electric-powered material handling equipment.",
    industries: ["Glass & Bangles Manufacturing", "Textile Mills", "Chemical Processing", "Food Processing", "Agricultural Warehousing"],
    landmarks: ["SITE Area Hyderabad", "Hyderabad Industrial Estate", "Kotri Industrial Area"],
  },
];

/* ─── HELPERS ────────────────────────────────────────────────── */

export function getBrandBySlug(slug: string) {
  return brands.find((b) => b.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return partCategories.find((c) => c.slug === slug);
}

export function getEquipmentBySlug(slug: string) {
  return equipmentTypes.find((e) => e.slug === slug);
}

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export function getBrandEquipmentCombos() {
  const combos: { brand: Brand; equipment: EquipmentType }[] = [];
  for (const brand of brands) {
    for (const eqName of brand.equipmentTypes) {
      const eq = equipmentTypes.find((e) => e.name === eqName);
      if (eq) combos.push({ brand, equipment: eq });
    }
  }
  return combos;
}
