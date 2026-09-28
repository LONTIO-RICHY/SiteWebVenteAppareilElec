import { Product, CategoryInfo } from '../types/index.ts';

// 20 DEDICATED, EXCLUSIVE STUDIO PRODUCT PHOTOGRAPHS (ZERO REUSE)
export const HERO_IMAGE = '/src/assets/images/hero_electronics_store_1790568414467.jpg';

// Rayon 1 : Ventilateurs (4 images uniques)
export const IMG_TOWER_FAN = '/src/assets/images/product_standing_fan_1790568461324.jpg';
export const IMG_INDUSTRIAL_FAN = '/src/assets/images/product_industrial_floor_fan_1790569551672.jpg';
export const IMG_SOLAR_FAN = '/src/assets/images/product_solar_standing_fan_1790570590380.jpg';
export const IMG_CEILING_FAN = '/src/assets/images/product_modern_ceiling_fan_1790570601269.jpg';

// Rayon 2 : Réfrigérateurs & Congélateurs (4 images uniques)
export const IMG_FRIDGE_FRENCH_DOOR = '/src/assets/images/product_smart_refrigerator_1790570133747.jpg';
export const IMG_FRIDGE_BOTTOM_FREEZER = '/src/assets/images/product_bottom_freezer_fridge_1790570557467.jpg';
export const IMG_FRIDGE_MINI_BAR = '/src/assets/images/product_mini_bar_fridge_1790570568296.jpg';
export const IMG_FRIDGE_CHEST_FREEZER = '/src/assets/images/product_chest_freezer_1790570580180.jpg';

// Rayon 3 : Téléphones & Smartphones (4 images uniques)
export const IMG_PHONE_SAMSUNG = '/src/assets/images/product_flagship_phone_1790568440516.jpg';
export const IMG_PHONE_IPHONE = '/src/assets/images/product_apple_iphone_1790569563780.jpg';
export const IMG_PHONE_XIAOMI = '/src/assets/images/product_xiaomi_phone_1790570850066.jpg';
export const IMG_PHONE_ARMOR = '/src/assets/images/product_rugged_armor_phone_1790570862545.jpg';

// Rayon 4 : Ampoules & Éclairage (4 images uniques)
export const IMG_SMART_BULB = '/src/assets/images/product_smart_bulb_1790568449604.jpg';
export const IMG_VINTAGE_BULB = '/src/assets/images/product_vintage_edison_bulb_1790569514559.jpg';
export const IMG_SOLAR_LIGHT = '/src/assets/images/product_solar_led_projector_1790569527371.jpg';
export const IMG_LED_TUBE = '/src/assets/images/product_led_tube_light_1790570838792.jpg';

// Rayon 5 : Machines & Informatique (4 images uniques)
export const IMG_ULTRABOOK = '/src/assets/images/product_ultrabook_pro_1790568428874.jpg';
export const IMG_WORKSTATION = '/src/assets/images/product_pc_workstation_1790569416304.jpg';
export const IMG_WASHING_MACHINE = '/src/assets/images/product_smart_washing_machine_1790569540313.jpg';
export const IMG_MINI_PC = '/src/assets/images/product_mini_pc_compact_1790570872915.jpg';

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'fans',
    label: 'Ventilateurs & Climatisation',
    tagline: 'Brasseurs industriels, tours silencieuses sans pales & ventilateurs solaires rechargeables.',
    count: 4,
    image: IMG_TOWER_FAN,
    varieties: [
      'Ventilateurs tours sans pales ultra-silencieux (28 dB)',
      'Brasseurs d’air industriels haute puissance (150W)',
      'Ventilateurs solaires rechargeables anti-coupures (12 000 mAh)',
      'Brasseurs de plafond modernes réversibles (140 cm)'
    ]
  },
  {
    id: 'fridges',
    label: 'Réfrigérateurs & Congélateurs',
    tagline: 'Réfrigérateurs Inverter no-frost basse consommation et modèles solaires longue conservation.',
    count: 4,
    image: IMG_FRIDGE_FRENCH_DOOR,
    varieties: [
      'Réfrigérateurs multi-portes French Door Inverter (520L)',
      'Réfrigérateurs combinés no-frost grand volume (450L)',
      'Mini réfrigérateurs de bureau et chambre ultra-silencieux (90L)',
      'Congélateurs coffres solaires hybrides 12V/220V (200L)'
    ]
  },
  {
    id: 'phones',
    label: 'Téléphones & Smartphones 5G',
    tagline: 'Smartphones flagships des plus grandes marques (Samsung, Apple, Xiaomi & Incassable).',
    count: 4,
    image: IMG_PHONE_SAMSUNG,
    varieties: [
      'Samsung Galaxy S24 Ultra 5G Titane (Capteur 200MP, S-Pen)',
      'Apple iPhone 16 Pro Max Titane (Puce A18 Pro, 4K 120fps)',
      'Xiaomi 14 Ultra Leica Pro (Optique Summilux 1 pouce)',
      'Smartphone Tout-Terrain Armor Shield (Batterie 10 600 mAh)'
    ]
  },
  {
    id: 'lighting',
    label: 'Ampoules & Éclairage LED',
    tagline: 'Ampoules connectées RGB, filaments vintage dorés, projecteurs solaires et réglettes étanches.',
    count: 4,
    image: IMG_SMART_BULB,
    varieties: [
      'Ampoules LED connectées Wi-Fi/Bluetooth RGB (16M couleurs)',
      'Packs d’ampoules vintage filament Edison ambré (2200K)',
      'Projecteurs solaires LED extérieurs autonomes (200W, IP67)',
      'Réglettes tubes LED étanches industrielles (120 cm, 36W)'
    ]
  },
  {
    id: 'machines',
    label: 'Machines & Informatique',
    tagline: 'Ultrabooks, stations de travail professionnelles, machines à laver et mini PC.',
    count: 4,
    image: IMG_ULTRABOOK,
    varieties: [
      'Ultrabooks TitanBook Pro 16 (Intel Core i9, 32GB RAM)',
      'Tours de travail MasterWork (Ryzen 9, RTX 4080)',
      'Machines à laver intelligentes Inverter Direct Drive (10.5 kg)',
      'Mini PC de bureau ultra-compacts (Intel Core i7)'
    ]
  }
];

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. VENTILATEURS & CLIMATISATION (FANS)
  // ==========================================
  {
    id: 'fan-01',
    name: 'Ventilateur Colonne Sans Pales Kessel AeroSilent 900',
    category: 'fans',
    brand: 'Kessel Climate',
    priceXAF: 65000,
    oldPriceXAF: 78000,
    rating: 4.9,
    reviewsCount: 58,
    inStock: true,
    stockCount: 14,
    image: IMG_TOWER_FAN,
    shortDesc: 'Technologie aérodynamique sans pales · Inaudible 28dB · Télécommande sans fil & Écran LED',
    description: "Ventilateur tour sans pales conçu pour offrir un flux d'air continu et rafraîchissant sans aucun risque pour les jeunes enfants. Moteur DC silencieux consommant seulement 35W avec programmation nocturne.",
    specs: {
      'Variété': 'Ventilateur Colonne Tour sans pales',
      'Niveau sonore': '28 dB en vitesse minimale (silence certifié)',
      'Sécurité': 'Zéro hélice tournante, 100% sécurisé et facile à nettoyer',
      'Flux d’air': 'Jusqu’à 650 litres d’air brassé par seconde',
      'Oscillation': 'Grand angle motorisé 90° à balayage fluide',
      'Vitesses': '9 vitesses précises + Mode Nuit + Mode Brise naturelle'
    },
    warranty: '2 ans de garantie avec échange en cas de panne',
    featured: true,
    isNew: true,
  },
  {
    id: 'fan-02',
    name: 'Brasseur d’Air Industriel Kessel Vortex Max 150W',
    category: 'fans',
    brand: 'Kessel Climate',
    priceXAF: 45000,
    oldPriceXAF: 52000,
    rating: 4.8,
    reviewsCount: 88,
    inStock: true,
    stockCount: 18,
    image: IMG_INDUSTRIAL_FAN,
    shortDesc: 'Moteur 100% cuivre 150W · Diamètre 50cm (20 pouces) · Débit massif 8500 m³/h',
    description: "Conçu pour aérer efficacement de très grands volumes : salons spacieux, commerces, ateliers ou restaurants. Châssis métallique en acier noir renforcé et trois pales en acier équilibrées au laser.",
    specs: {
      'Variété': 'Brasseur d’Air Industriel de Sol tambour acier',
      'Puissance': '150W réels avec bobinage 100% cuivre thermique',
      'Diamètre': '50 cm (20 pouces) avec grille métallique de protection',
      'Débit d’air': '8500 m³/h pour rafraîchir jusqu’à 80 m²',
      'Vitesses': '3 vitesses à sélecteur mécanique haute durabilité'
    },
    warranty: '2 ans de garantie constructeur',
    featured: true,
  },
  {
    id: 'fan-03',
    name: 'Ventilateur Solaire Rechargeable Kessel SolarBreeze Pro',
    category: 'fans',
    brand: 'Kessel Climate',
    priceXAF: 42000,
    oldPriceXAF: 49000,
    rating: 4.9,
    reviewsCount: 76,
    inStock: true,
    stockCount: 20,
    image: IMG_SOLAR_FAN,
    shortDesc: 'Batterie Li-ion 12000mAh · Panneau Solaire Fourni · Port USB Powerbank · Lampe LED',
    description: "La solution idéale contre les délestages électriques et les fortes chaleurs. Fonctionne sur prise secteur 220V, sur batterie rechargeable ou directement branché sur son panneau solaire dédié.",
    specs: {
      'Variété': 'Ventilateur sur pied hybride solaire rechargeable',
      'Autonomie': '8 à 16 heures continues selon la vitesse sans courant',
      'Batterie': 'Pack lithium 12 000 mAh longue durée de vie',
      'Recharge': 'Double option : Solaire via panneau 16V fourni ou Secteur 220V',
      'Ports': 'Sortie USB 5V pour recharger les téléphones + Veilleuse LED intégrée'
    },
    warranty: '18 mois de garantie échange standard',
    featured: true,
  },
  {
    id: 'fan-04',
    name: 'Brasseur Plafonnier Moderne Kessel AeroCeiling 140cm',
    category: 'fans',
    brand: 'Kessel Climate',
    priceXAF: 55000,
    rating: 4.7,
    reviewsCount: 39,
    inStock: true,
    stockCount: 16,
    image: IMG_CEILING_FAN,
    shortDesc: 'Envergure 140cm (56 pouces) · Moteur DC Ultra-Silencieux · Télécommande 6 vitesses',
    description: "Ventilateur de plafond au design contemporain 3 pales noir mat épuré. Moteur à courant continu (DC) consommant 70% moins d'électricité qu'un ventilateur ordinaire tout en restant ultra-silencieux.",
    specs: {
      'Variété': 'Ventilateur de plafond motorisé DC 3 pales noir mat',
      'Envergure': '140 cm (56 pouces), 3 pales aérodynamiques équilibrées',
      'Consommation': 'De 5W en vitesse douce à 35W à pleine vitesse',
      'Sens de rotation': 'Mode été (rafraîchissant) / Mode hiver (brassage)',
      'Contrôle': 'Télécommande murale et portable 6 vitesses incluse'
    },
    warranty: '2 ans de garantie constructeur',
  },

  // ==========================================
  // 2. RÉFRIGÉRATEURS & CONGÉLATEURS (FRIDGES)
  // ==========================================
  {
    id: 'fridge-01',
    name: 'Réfrigérateur Multi-Portes French Door Kessel Luxe 520L',
    category: 'fridges',
    brand: 'Kessel HomeTech',
    priceXAF: 590000,
    oldPriceXAF: 660000,
    rating: 4.9,
    reviewsCount: 34,
    inStock: true,
    stockCount: 6,
    image: IMG_FRIDGE_FRENCH_DOOR,
    shortDesc: '520 Litres · Double porte battante + Tiroir congélateur · Compresseur Digital Inverter',
    description: "Le sommet du froid domestique haut de gamme. Finition inox graphite anti-traces, distributeur d'eau fraîche en façade, froid ventilé intégral Total No-Frost garantissant zéro givre.",
    specs: {
      'Variété': 'Réfrigérateur Multi-portes French Door Inverter',
      'Capacité totale': '520 Litres (Réfrigérateur 345L / Congélateur 175L)',
      'Technologie de froid': 'Total No-Frost ventilé multi-flux sans givre',
      'Moteur': 'Compresseur Digital Inverter silencieux garanti 10 ans',
      'Consommation': 'Classe A+++ très faible consommation électrique',
      'Équipements': 'Distributeur d’eau fraîche en façade, écran tactile de contrôle'
    },
    warranty: '2 ans sur la structure, 10 ans sur le compresseur Inverter',
    featured: true,
    isNew: true,
  },
  {
    id: 'fridge-02',
    name: 'Réfrigérateur Combiné Inverter No-Frost Kessel EcoFrost 450L',
    category: 'fridges',
    brand: 'Kessel HomeTech',
    priceXAF: 385000,
    oldPriceXAF: 430000,
    rating: 4.8,
    reviewsCount: 52,
    inStock: true,
    stockCount: 9,
    image: IMG_FRIDGE_BOTTOM_FREEZER,
    shortDesc: 'Capacité 450L · Compartiment congélateur bas 3 tiroirs · Stabilisateur de tension intégré',
    description: "Réfrigérateur combiné vertical à deux portes avec congélateur en bas. Compresseur tropicalisé résistant aux fortes chaleurs et aux variations électriques du réseau camerounais.",
    specs: {
      'Variété': 'Réfrigérateur combiné 2 portes avec congélateur en bas',
      'Capacité': '450 Litres (Réfrigérateur 320L, Congélateur 130L)',
      'Protection électrique': 'Stabilisateur AVR interne tolérant de 160V à 260V',
      'Autonomie sans courant': 'Jusqu’à 18 heures de maintien au froid après coupure',
      'Clayettes': 'Verre trempé haute résistance supportant jusqu’à 100 kg'
    },
    warranty: '2 ans de garantie complète avec assistance technique',
    featured: true,
  },
  {
    id: 'fridge-03',
    name: 'Mini Réfrigérateur de Bureau Kessel Compact Bar 90L',
    category: 'fridges',
    brand: 'Kessel HomeTech',
    priceXAF: 115000,
    oldPriceXAF: 130000,
    rating: 4.7,
    reviewsCount: 61,
    inStock: true,
    stockCount: 14,
    image: IMG_FRIDGE_MINI_BAR,
    shortDesc: 'Capacité 90 Litres · Compartiment glaçons séparé · Silence absolu 36dB · Idéal bureau & studio',
    description: "Compact et discret en noir mat, ce mini réfrigérateur trouve idéalement sa place dans un bureau de direction, une chambre ou un studio. Consomme très peu d'électricité.",
    specs: {
      'Variété': 'Mini-bar réfrigérateur compact de table',
      'Volume utile': '90 Litres avec bac à légumes et compartiment freezer',
      'Niveau sonore': '36 dB ultra-silencieux',
      'Dimensions': 'Hauteur 84 cm x Largeur 47 cm x Profondeur 45 cm',
      'Consommation': 'Moins de 100 kWh par an (économique)'
    },
    warranty: '18 mois de garantie constructeur',
  },
  {
    id: 'fridge-04',
    name: 'Congélateur Coffre Solaire Hybride Kessel SolarFreeze 200L',
    category: 'fridges',
    brand: 'Kessel HomeTech',
    priceXAF: 275000,
    rating: 4.9,
    reviewsCount: 29,
    inStock: true,
    stockCount: 8,
    image: IMG_FRIDGE_CHEST_FREEZER,
    shortDesc: 'Double alimentation 12V/24V Solaire & 220V Secteur · Congélation ultra-rapide -22°C',
    description: "Congélateur bahut horizontal blanc conçu pour tourner directement sur des batteries solaires 12V ou sur le secteur 220V. Isolation thermique de 10 cm pour conserver les surgelés pendant 48 heures sans courant.",
    specs: {
      'Variété': 'Congélateur bahut solaire hybride horizontal',
      'Capacité': '200 Litres avec paniers suspendus de rangement',
      'Plage de température': 'De +5°C (réfrigération) à -22°C (congélation profonde)',
      'Alimentation': 'DC 12V/24V batterie solaire directe ou AC 220V avec adaptateur',
      'Isolation': 'Mousse polyuréthane haute densité 100 mm'
    },
    warranty: '2 ans de garantie constructeur',
    isNew: true,
  },

  // ==========================================
  // 3. TÉLÉPHONES & SMARTPHONES 5G (PHONES)
  // ==========================================
  {
    id: 'ph-01',
    name: 'Samsung Galaxy S24 Ultra 5G Titane',
    category: 'phones',
    brand: 'Samsung',
    priceXAF: 780000,
    oldPriceXAF: 850000,
    rating: 4.9,
    reviewsCount: 72,
    inStock: true,
    stockCount: 10,
    image: IMG_PHONE_SAMSUNG,
    shortDesc: 'Snapdragon 8 Gen 3 · 12GB RAM · 512GB · Capteur 200MP · Stylet S-Pen intégré',
    description: "Le sommet de la technologie Android. Châssis en titane résistant, écran Dynamic AMOLED 2X plat de 6.8 pouces lumineux à 2600 nits et zoom optique périscopique x5 et numérique x100.",
    specs: {
      'Marque': 'Samsung Electronics',
      'Modèle': 'Galaxy S24 Ultra 5G Titane',
      'Écran': '6.8" Dynamic AMOLED 2X, QHD+ 120Hz LTPO',
      'Processeur': 'Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm)',
      'Caméra': '200 MP principale + 50 MP téléobjectif 5x + 10 MP 3x + 12 MP ultra-large',
      'Batterie': '5000 mAh avec charge rapide 45W filaire et 15W sans fil'
    },
    warranty: '2 ans de garantie constructeur officielle Samsung',
    featured: true,
  },
  {
    id: 'ph-02',
    name: 'Apple iPhone 16 Pro Max 256GB Titane Naturel',
    category: 'phones',
    brand: 'Apple',
    priceXAF: 890000,
    oldPriceXAF: 960000,
    rating: 5.0,
    reviewsCount: 89,
    inStock: true,
    stockCount: 7,
    image: IMG_PHONE_IPHONE,
    shortDesc: 'Puce A18 Pro · Écran Super Retina XDR 6.9" 120Hz · Nouveau bouton Commande de l’appareil photo',
    description: "L'iPhone le plus puissant jamais conçu par Apple. Boîtier en titane de grade 5, écran géant 6.9 pouces bord à bord, enregistrement vidéo ProRes 4K à 120 images/s et autonomie record.",
    specs: {
      'Marque': 'Apple Inc.',
      'Modèle': 'iPhone 16 Pro Max Titane',
      'Puce': 'Apple A18 Pro (CPU 6 cœurs, GPU 6 cœurs, Neural Engine 16 cœurs)',
      'Écran': '6.9" Super Retina XDR OLED ProMotion 120Hz',
      'Appareil photo': '48 MP Fusion + 48 MP Ultra grand-angle + 12 MP Téléobjectif 5x',
      'Matériau': 'Titane brossé de qualité aérospatiale'
    },
    warranty: '1 an de garantie constructeur Apple internationale',
    featured: true,
  },
  {
    id: 'ph-03',
    name: 'Xiaomi 14 Ultra 5G Leica Édition Photographie',
    category: 'phones',
    brand: 'Xiaomi',
    priceXAF: 650000,
    oldPriceXAF: 710000,
    rating: 4.8,
    reviewsCount: 45,
    inStock: true,
    stockCount: 8,
    image: IMG_PHONE_XIAOMI,
    shortDesc: 'Quadruple optique Leica 50MP capteur 1 pouce · Cuir végan noir · Snapdragon 8 Gen 3',
    description: "L'appareil photo professionnel déguisé en smartphone. 4 capteurs 50MP calibrés par les maîtres opticiens de Leica avec ouverture variable continue pour des clichés exceptionnels même de nuit.",
    specs: {
      'Marque': 'Xiaomi',
      'Modèle': '14 Ultra Leica Édition Photographie',
      'Optique': 'Leica Vario-Summilux 1 pouce avec ouverture réglable f/1.63 à f/4.0',
      'Mémoire & Stockage': '16 Go RAM LPDDR5X + 512 Go UFS 4.0 ultra-rapide',
      'Dos': 'Cuir végétal nano-texturé résistant à l’usure et aux taches',
      'Charge': 'HyperCharge 90W filaire + 80W sans fil'
    },
    warranty: '2 ans de garantie constructeur',
    isNew: true,
  },
  {
    id: 'ph-04',
    name: 'Smartphone Tout-Terrain Armor Shield Kessel 5G',
    category: 'phones',
    brand: 'Kessel Armor',
    priceXAF: 240000,
    rating: 4.9,
    reviewsCount: 63,
    inStock: true,
    stockCount: 15,
    image: IMG_PHONE_ARMOR,
    shortDesc: 'Batterie géante 10 600mAh · Caméra Vision Nocturne Infrarouge · Norme Militaire IP69K',
    description: "Le smartphone blindé conçu pour les chantiers, les déplacements en brousse et les conditions extrêmes. Châssis renforcé en caoutchouc épais, vis métalliques apparentes et étanchéité totale.",
    specs: {
      'Marque': 'Kessel Armor',
      'Modèle': 'Armor Shield 5G Pro',
      'Robustesse': 'Certifié MIL-STD-810H militaire, étanchéité IP68 et IP69K',
      'Batterie': '10 600 mAh (jusqu’à 4 jours d’autonomie complète)',
      'Fonction spéciale': 'Caméra infrarouge vision nocturne dans le noir absolu'
    },
    warranty: '2 ans de garantie matérielle intégrale',
    isNew: true,
  },

  // ==========================================
  // 4. AMPOULES & ÉCLAIRAGE LED (LIGHTING)
  // ==========================================
  {
    id: 'light-01',
    name: 'Ampoule LED Connectée Wi-Fi Kessel Smart Glow E27',
    category: 'lighting',
    brand: 'Kessel Lumina',
    priceXAF: 9500,
    oldPriceXAF: 13500,
    rating: 4.9,
    reviewsCount: 112,
    inStock: true,
    stockCount: 85,
    image: IMG_SMART_BULB,
    shortDesc: 'Culot E27 · 12W (équivalent 100W) · 16 Millions de Couleurs RGB + Blanc Chaud/Froid',
    description: "Ampoule LED connectée haute luminosité pilotable directement depuis votre smartphone Android ou iPhone. Minuteur de réveil, variation d'intensité lumineuse et synchronisation avec la musique.",
    specs: {
      'Variété': 'Ampoule LED connectée intelligente RGB',
      'Culot': 'Standard E27 à visser universel',
      'Luminosité': '1200 Lumens réglable de 1% à 100% sans scintillement',
      'Couleurs': '16 Millions de nuances RGB + Blanc chaud 2700K à blanc pur 6500K',
      'Connectivité': 'Wi-Fi 2.4 GHz + Bluetooth direct sans passerelle'
    },
    warranty: '2 ans de garantie échange direct',
    featured: true,
  },
  {
    id: 'light-02',
    name: 'Pack 4 Ampoules LED Filament Edison Vintage Kessel Amber',
    category: 'lighting',
    brand: 'Kessel Lumina',
    priceXAF: 18000,
    oldPriceXAF: 24000,
    rating: 4.8,
    reviewsCount: 79,
    inStock: true,
    stockCount: 34,
    image: IMG_VINTAGE_BULB,
    shortDesc: 'Verre ambré doré · Culot E27 · 6W basse consommation · Ambiance chaleureuse 2200K',
    description: "Apportez une atmosphère élégante et chaleureuse à vos salons, restaurants, bureaux et chambres. Filament LED en spirale décoratif avec verre doré à haute transparence sans fatigue visuelle.",
    specs: {
      'Variété': 'Ampoules décoratives filament Edison vintage',
      'Contenu': 'Lot de 4 ampoules format ST64',
      'Consommation': '6W par ampoule (90% d’économie d’énergie)',
      'Température': '2200K lumière dorée douce et relaxante',
      'Durée de vie': '25 000 heures (plus de 10 ans)'
    },
    warranty: '18 mois de garantie constructeur',
    featured: true,
  },
  {
    id: 'light-03',
    name: 'Projecteur LED Solaire Extérieur Kessel SolarBeam 200W',
    category: 'lighting',
    brand: 'Kessel Lumina',
    priceXAF: 48000,
    oldPriceXAF: 58000,
    rating: 4.9,
    reviewsCount: 95,
    inStock: true,
    stockCount: 22,
    image: IMG_SOLAR_LIGHT,
    shortDesc: 'Panneau Monocristallin · Batterie 20 000mAh · Étanche IP67 · Allumage automatique crépusculaire',
    description: "Éclairez votre cour, clôture, entrepôt ou jardin avec 0 FCFA de facture d'électricité. S'allume automatiquement à la tombée de la nuit et se recharge tout seul la journée grâce au soleil.",
    specs: {
      'Variété': 'Projecteur solaire LED autonome extérieur avec panneau séparé',
      'Puissance LED': '200W LED SMD haute luminosité (4000 Lumens)',
      'Panneau solaire': 'Monocristallin 6V/25W avec câble étanche de 5 mètres',
      'Batterie': 'LiFePO4 3.2V 20 000 mAh longue durée',
      'Autonomie': 'Jusqu’à 14 heures continues après une journée de charge',
      'Étanchéité': 'Certifié IP67 étanche à la pluie et à la poussière'
    },
    warranty: '2 ans de garantie complète',
    featured: true,
  },
  {
    id: 'light-04',
    name: 'Réglette Tube LED Linéaire Kessel LinearPro 120cm',
    category: 'lighting',
    brand: 'Kessel Lumina',
    priceXAF: 8500,
    rating: 4.7,
    reviewsCount: 46,
    inStock: true,
    stockCount: 50,
    image: IMG_LED_TUBE,
    shortDesc: 'Longueur 1.20m · 36W LED · 3600 Lumens · Blanc Neutre 4000K · Raccordable',
    description: "Réglette plafonnier linéaire LED moderne de 120 cm. Éclairage direct et homogène pour boutiques, ateliers, cuisines, bureaux et couloirs. Démarrage instantané sans scintillement.",
    specs: {
      'Variété': 'Réglette tube LED linéaire plafonnier étanche',
      'Dimensions': 'Longueur 120 cm x Largeur 7.5 cm x Épaisseur 2.5 cm',
      'Puissance': '36W (remplace avantageusement les vieux néons de 80W)',
      'Luminosité': '3600 Lumens blanc neutre 4000K éclatant',
      'Montage': 'Clips inox pour fixation plafond ou murale rapide'
    },
    warranty: '1 an de garantie',
    isNew: true,
  },

  // ==========================================
  // 5. MACHINES & INFORMATIQUE (MACHINES)
  // ==========================================
  {
    id: 'mac-01',
    name: 'Ultrabook TitanBook Pro 16 Gen 4',
    category: 'machines',
    brand: 'Kessel Precision',
    priceXAF: 785000,
    oldPriceXAF: 890000,
    rating: 4.9,
    reviewsCount: 38,
    inStock: true,
    stockCount: 7,
    image: IMG_ULTRABOOK,
    shortDesc: 'Intel Core i9 14900H · 32GB RAM DDR5 · 1TB SSD NVMe · Écran OLED 3.2K 120Hz',
    description: "Ultrabook haute performance conçu pour les ingénieurs logiciels, concepteurs 3D et professionnels exigeants. Châssis unibody en aluminium aéronautique gris sidéral, refroidissement silencieux.",
    specs: {
      'Variété': 'Ordinateur Portable Ultrabook Haute Performance',
      'Processeur': 'Intel Core i9-14900H (14 cœurs / 20 threads, jusqu’à 5.4 GHz)',
      'Mémoire RAM': '32 Go LPDDR5x 6400 MHz bicanal',
      'Stockage': '1 To SSD PCIe 4.0 NVMe (7400 Mo/s)',
      'Écran': '16.0" OLED 3.2K (3200x2000), 120Hz, 100% DCI-P3, 600 nits'
    },
    warranty: '2 ans de garantie matérielle avec support direct',
    featured: true,
  },
  {
    id: 'mac-02',
    name: 'Station de Travail MasterWork Station Pro',
    category: 'machines',
    brand: 'Kessel Precision',
    priceXAF: 1450000,
    oldPriceXAF: 1620000,
    rating: 5.0,
    reviewsCount: 19,
    inStock: true,
    stockCount: 4,
    image: IMG_WORKSTATION,
    shortDesc: 'AMD Ryzen 9 7950X · 64GB DDR5 · RTX 4080 16GB · Watercooling liquide 360mm',
    description: "Unité centrale de calcul lourd avec boîtier tour en verre trempé et éclairage interne blanc sobre. Dédiée au rendu 3D temps réel, compilation logicielle, montage vidéo 8K et intelligence artificielle.",
    specs: {
      'Variété': 'Unité Centrale Tour Station de Travail',
      'Processeur': 'AMD Ryzen 9 7950X (16 cœurs / 32 threads, 5.7 GHz)',
      'Carte Graphique': 'NVIDIA GeForce RTX 4080 16 Go GDDR6X',
      'Mémoire': '64 Go DDR5 6000 MHz avec dissipateurs thermiques',
      'Stockage': '2 To SSD NVMe Gen4 ultra-rapide'
    },
    warranty: '3 ans de garantie pièces et main-d’œuvre',
    featured: true,
  },
  {
    id: 'mac-03',
    name: 'Machine à Laver Intelligente Inverter EcoWash 10.5kg',
    category: 'machines',
    brand: 'Kessel HomeTech',
    priceXAF: 345000,
    oldPriceXAF: 395000,
    rating: 4.8,
    reviewsCount: 42,
    inStock: true,
    stockCount: 9,
    image: IMG_WASHING_MACHINE,
    shortDesc: 'Moteur Direct Drive sans courroie · Fonction Vapeur Hygiène 99.9% · Wi-Fi & AI Wash',
    description: "Machine à laver hublot moderne en finition titane métallisé foncé avec cadran tactile. Moteur Direct Drive électromagnétique silencieux garanti 10 ans sans courroie ni vibration.",
    specs: {
      'Variété': 'Machine à laver hublot Direct Drive intelligente',
      'Capacité': '10.5 kg de linge avec essorage 1400 tours/min',
      'Moteur': 'Induction sans courroie (zéro usure, inaudible)',
      'Programmes': '14 programmes dont lavage vapeur 15 min'
    },
    warranty: '2 ans sur la machine, 10 ans sur le moteur Direct Drive',
    featured: true,
  },
  {
    id: 'mac-04',
    name: 'Mini PC Ultra-Compact Kessel MicroCore i7',
    category: 'machines',
    brand: 'Kessel Precision',
    priceXAF: 320000,
    rating: 4.7,
    reviewsCount: 27,
    inStock: true,
    stockCount: 12,
    image: IMG_MINI_PC,
    shortDesc: 'Intel Core i7 13620H · 16GB DDR5 · 512GB SSD · Châssis aluminium noir de poche',
    description: "L'ordinateur de bureau format de poche en aluminium noir avec ports USB et ouïes de ventilation visibles. Idéal pour bureaux professionnels, serveurs discrets et stations de travail écoénergétiques.",
    specs: {
      'Variété': 'Mini PC de bureau format de poche en aluminium noir',
      'Processeur': 'Intel Core i7-13620H (10 cœurs / 16 threads)',
      'Mémoire': '16 Go DDR5 extensible à 64 Go',
      'Stockage': '512 Go SSD NVMe ultra-rapide',
      'Sorties vidéo': '2x HDMI 4K + 1x USB-C DisplayPort'
    },
    warranty: '2 ans de garantie',
    isNew: true,
  }
];
