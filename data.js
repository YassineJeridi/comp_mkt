// Equipment data organized by priority (high to low)
const equipmentData = {
  // High Priority - Core Lighting Setup
  lighting: {
    title: "Lighting Equipment",
    priority: 1,
    items: [
      {
        id: 1,
        name: "GODOX SL60IIBI",
        price: "975 TND",
        store: "Hollywood HTN",
        description: "Projecteur LED bi-color 75W avec plage 2800-6500K, CRI≈96, contrôle Bluetooth et 11 effets intégrés",
        image: "https://via.placeholder.com/300x200/2563eb/ffffff?text=GODOX+LED",
        url: "https://hollywood.tn/product/godox-sl60iibi/",
        category: "Professional Lighting",
        features: ["75W Power", "2800-6500K", "Bowens Mount", "Bluetooth Control"]
      },
      {
        id: 2,
        name: "Godox Stand H280",
        price: "220 TND",
        store: "Hollywood HTN",
        description: "Pied d'éclairage professionnel jusqu'à 280cm, support jusqu'à 5kg, parfait pour softbox et projecteurs LED",
        image: "https://via.placeholder.com/300x200/2563eb/ffffff?text=Light+Stand",
        url: "https://hollywood.tn/product/godox-stand-h280/",
        category: "Light Support",
        features: ["280cm Max Height", "5kg Load Capacity", "3 Telescopic Sections", "Professional Grade"]
      },
      {
        id: 3,
        name: "SOFTBOX GODOX SB-UBW 95",
        price: "320 TND",
        store: "Hollywood HTN",
        description: "Softbox octogonale 95cm avec système parapluie, installation rapide, diffuseurs inclus et grille nid d'abeille",
        image: "https://via.placeholder.com/300x200/2563eb/ffffff?text=Softbox+95cm",
        url: "https://hollywood.tn/product/softbox-godox-sb-ubw95/",
        category: "Light Modifier",
        features: ["95cm Octagonal", "Quick Setup", "Bowens Mount", "Honeycomb Grid Included"]
      }
    ]
  },

  // High Priority - Audio
  audio: {
    title: "Audio Equipment",
    priority: 2,
    items: [
      {
        id: 4,
        name: "Hollyland LARK M2 Combo",
        price: "480 TND",
        store: "Hollywood HTN",
        description: "Micro sans fil professionnel ultra-compact, transmission 2.4GHz, portée 300m, parfait pour vlogs et interviews",
        image: "https://via.placeholder.com/300x200/f59e0b/ffffff?text=Wireless+Mic",
        url: "https://hollywood.tn/product/hollyland-lark-m2-combo/",
        category: "Wireless Microphone",
        features: ["2.4GHz Digital", "300m Range", "Multiple Transmitters", "USB-C Charging"]
      }
    ]
  },

  // Medium Priority - Storage & Transport
  storage: {
    title: "Storage & Transport",
    priority: 3,
    items: [
      {
        id: 5,
        name: "SAC DE TRANSPORT GODOX CB05",
        price: "85 TND",
        store: "Hollywood HTN",
        description: "Sac professionnel robuste pour équipements d'éclairage, rembourrage interne, poignées renforcées",
        image: "https://via.placeholder.com/300x200/64748b/ffffff?text=Transport+Bag",
        url: "https://hollywood.tn/product/sac-de-transport-godox-cb05/",
        category: "Transport Bag",
        features: ["Professional Grade", "Padded Interior", "Reinforced Handles", "Dust Resistant"]
      },
      {
        id: 6,
        name: "VALISE DE TRANSPORT GODOX CB-06",
        price: "165 TND",
        store: "Hollywood HTN",
        description: "Valise à roulettes pour kit 3 lampes, compartiments modulables, poignée télescopique et roulettes",
        image: "https://via.placeholder.com/300x200/64748b/ffffff?text=Wheeled+Case",
        url: "https://hollywood.tn/product/valise-de-transport-godox-a-roulette-cb06/",
        category: "Wheeled Case",
        features: ["Rolling Wheels", "3 Light Kit Capacity", "Modular Compartments", "94x34x25cm"]
      }
    ]
  },

  // Medium Priority - Power & Memory
  power: {
    title: "Power & Memory",
    priority: 4,
    items: [
      {
        id: 7,
        name: "CHARGEUR SONY BC-VW1",
        price: "120 TND",
        store: "Hollywood HTN",
        description: "Chargeur secteur Sony pour batteries NP-FW50, charge rapide 4.2h, compatible Alpha et NEX",
        image: "https://via.placeholder.com/300x200/10b981/ffffff?text=Sony+Charger",
        url: "https://hollywood.tn/product/chargeur-sony-bc-vw1/",
        category: "Battery Charger",
        features: ["100-240V Input", "4.2h Fast Charging", "LED Indicator", "Compact Design"]
      },
      {
        id: 8,
        name: "Batterie PATONA NP-FW50",
        price: "35 TND",
        store: "Splash Distribution",
        description: "Batterie compatible Sony Alpha, 1030mAh, qualité premium avec protection intégrée",
        image: "https://via.placeholder.com/300x200/10b981/ffffff?text=Camera+Battery",
        url: "https://www.splash-distribution.com/accueil/650-batterie-patona-1079-np-fw50.html",
        category: "Camera Battery",
        features: ["1030mAh", "Sony Compatible", "Premium Quality", "Protection Circuit"]
      },
      {
        id: 9,
        name: "Batterie PATONA Premium Coupler",
        price: "65 TND",
        store: "Splash Distribution",
        description: "Batterie externe avec câble USB-C, alimentation continue, parfaite pour longs tournages",
        image: "https://via.placeholder.com/300x200/10b981/ffffff?text=USB-C+Coupler",
        url: "https://www.splash-distribution.com/accueil/1216-batterie-patona-9413-premium-coupler-usb-c-np-fw50.html",
        category: "External Battery",
        features: ["USB-C Input", "Continuous Power", "Long Duration", "External Connection"]
      },
      {
        id: 10,
        name: "SanDisk SDHC Ultra 32GB",
        price: "45 TND",
        store: "Hollywood HTN",
        description: "Carte mémoire SDHC Ultra 140MB/s, 32Go, parfaite pour photo et vidéo 4K",
        image: "https://via.placeholder.com/300x200/ef4444/ffffff?text=SanDisk+32GB",
        url: "https://hollywood.tn/product/sandisk-carte-memoire-sdhc-ultra-140mb-s-32-go/",
        category: "Memory Card",
        features: ["32GB Capacity", "140MB/s Speed", "4K Ready", "SanDisk Quality"]
      }
    ]
  },

  // Lower Priority - Accessories
  accessories: {
    title: "Accessories & Support",
    priority: 5,
    items: [
      {
        id: 11,
        name: "SUPER CLEANING KIT",
        price: "25 TND",
        store: "Hollywood HTN",
        description: "Kit complet 14 pièces: souffleur, stylo nettoyage, chiffons microfibre, solution nettoyante",
        image: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Cleaning+Kit",
        url: "https://hollywood.tn/product/super-cleaning-kit/",
        category: "Maintenance Kit",
        features: ["14-Piece Kit", "Air Blower", "Microfiber Cloths", "Cleaning Solution"]
      },
      {
        id: 12,
        name: "Neewer Smartphone Holder",
        price: "35 TND",
        store: "Hollywood HTN",
        description: "Support smartphone pour trépied, adaptateur universel, rotation 360°, compatible tous smartphones",
        image: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Phone+Mount",
        url: "https://hollywood.tn/product/neewer-sp-02-smartphone-holder-tripod-mount-adapter-10103410/",
        category: "Phone Mount",
        features: ["Universal Mount", "360° Rotation", "Tripod Compatible", "Secure Grip"]
      },
      {
        id: 13,
        name: "AMH LED Tube TC-210 RGB",
        price: "180 TND",
        store: "Hollywood HTN",
        description: "Tube LED RGB professionnel, contrôle couleur complet, effet cinéma, télécommande incluse",
        image: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=RGB+LED+Tube",
        url: "https://hollywood.tn/product/amh-tube-light-tc-210-rgb-w/",
        category: "RGB LED Tube",
        features: ["Full RGB Control", "Cinema Effects", "Remote Control", "Professional Grade"]
      },
      {
        id: 14,
        name: "Lecteur Carte Pisen 3-en-1",
        price: "28 TND",
        store: "Hollywood HTN",
        description: "Lecteur carte mémoire USB 3.2, SD/TF/CF compatible, transfert rapide, compact",
        image: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Card+Reader",
        url: "https://hollywood.tn/product/lecteur-carte-memoire-pisen-3-en-1-usb3-2-sd-tf-4-0/",
        category: "Card Reader",
        features: ["USB 3.2", "SD/TF/CF Support", "Fast Transfer", "Compact Design"]
      },
      {
        id: 15,
        name: "Kit Accessoires GoPro 50-en-1",
        price: "95 TND",
        store: "Hollywood HTN",
        description: "Kit complet GoPro: supports, fixations, étuis, câbles, parfait pour sports extrêmes",
        image: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=GoPro+Kit+50",
        url: "https://hollywood.tn/product/kit-accessoires-go-pro-50-en-1/",
        category: "Action Camera Kit",
        features: ["50 Accessories", "Multiple Mounts", "Protective Case", "Complete Set"]
      }
    ]
  },

  // Lower Priority - Streaming & Background
  streaming: {
    title: "Streaming & Background",
    priority: 6,
    items: [
      {
        id: 16,
        name: "Fond Chroma 3x5m",
        price: "120 TND",
        store: "Hollywood HTN",
        description: "Fond vert professionnel 3x5m, parfait pour incrustation, studio photo/vidéo",
        image: "https://via.placeholder.com/300x200/22c55e/ffffff?text=Green+Screen",
        url: "https://hollywood.tn/product/fond-chroma-3x5m/",
        category: "Green Screen",
        features: ["3x5m Size", "Professional Grade", "Chroma Key", "Studio Quality"]
      },
      {
        id: 17,
        name: "Support Fond Trépied",
        price: "85 TND",
        store: "Hollywood HTN",
        description: "Support trépied pour fond, hauteur ajustable, stable, installation rapide",
        image: "https://via.placeholder.com/300x200/22c55e/ffffff?text=Background+Stand",
        url: "https://hollywood.tn/product/support-fond-trepied/",
        category: "Background Stand",
        features: ["Adjustable Height", "Quick Setup", "Stable Design", "Professional Use"]
      },
      {
        id: 18,
        name: "King Joy Trépied VT-890H",
        price: "220 TND",
        store: "Hollywood HTN",
        description: "Trépied professionnel robuste, tête fluide, parfait pour caméras et DSLRs",
        image: "https://via.placeholder.com/300x200/22c55e/ffffff?text=Pro+Tripod",
        url: "https://hollywood.tn/product/king-joy-vt-890h/",
        category: "Professional Tripod",
        features: ["Fluid Head", "Professional Grade", "Camera Support", "Adjustable Legs"]
      },
      {
        id: 19,
        name: "Carte Capture HDMI USB",
        price: "65 TND",
        store: "Hollywood HTN",
        description: "Carte capture vidéo HDMI vers USB, streaming HD 1080p, plug and play",
        image: "https://via.placeholder.com/300x200/22c55e/ffffff?text=HDMI+Capture",
        url: "https://hollywood.tn/product/carte-de-capture-video-hdmi-a-usb-diffusion-hd-1080p/",
        category: "Capture Card",
        features: ["HDMI to USB", "1080p HD", "Plug & Play", "Streaming Ready"]
      },
      {
        id: 20,
        name: "Câble HDMI 4K 2.0m",
        price: "15 TND",
        store: "Tunisia Net",
        description: "Câble HDMI haute qualité 4K, 2 mètres, compatible tous appareils HDMI",
        image: "https://via.placeholder.com/300x200/22c55e/ffffff?text=HDMI+Cable",
        url: "https://www.tunisianet.com.tn/cable-hdmi-prix-tunisie/46311-cable-hdmi-vers-hdmi-4k-20m.html",
        category: "HDMI Cable",
        features: ["4K Support", "2m Length", "High Quality", "Universal Compatible"]
      },
      {
        id: 21,
        name: "Adaptateur HDMI vers Micro HDMI",
        price: "12 TND",
        store: "2B Trading",
        description: "Adaptateur HDMI femelle vers micro HDMI, compact, parfait pour Raspberry Pi",
        image: "https://via.placeholder.com/300x200/22c55e/ffffff?text=HDMI+Adapter",
        url: "https://2btrading.tn/raspberry/376-adaptateur-hdmi-femelle-vers-micro-hdmi.html",
        category: "HDMI Adapter",
        features: ["HDMI to Micro HDMI", "Compact Design", "Raspberry Pi Compatible", "Reliable Connection"]
      }
    ]
  },

  // Lowest Priority - Phone Protection
  phone: {
    title: "Phone Protection",
    priority: 7,
    items: [
      {
        id: 22,
        name: "Protection Caméra iPhone 13 Pro",
        price: "8 TND",
        store: "iTech Store",
        description: "Protection objectif caméra iPhone 13 Pro, verre trempé, installation facile",
        image: "https://via.placeholder.com/300x200/6366f1/ffffff?text=Camera+Lens",
        url: "https://itechstore.tn/protection-de-cam%C3%A9ra/7491-protection-cam%C3%A9ra-iphone-13-pro-.html",
        category: "Camera Protection",
        features: ["Tempered Glass", "iPhone 13 Pro", "Easy Installation", "Camera Safe"]
      },
      {
        id: 23,
        name: "Film Protection Privacy iPhone 13 Pro Max",
        price: "12 TND",
        store: "iTech Store",
        description: "Film protection écran avec filtre confidentialité, anti-regard, iPhone 13 Pro Max",
        image: "https://via.placeholder.com/300x200/6366f1/ffffff?text=Privacy+Film",
        url: "https://itechstore.tn/accueil/2491-film-de-protection-privacy-iphone-13-pro-max-caisles.html",
        category: "Privacy Screen",
        features: ["Privacy Filter", "iPhone 13 Pro Max", "Anti-Glare", "Screen Protection"]
      }
    ]
  }
};

// Calculate total cost
const calculateTotalCost = () => {
  let total = 0;
  Object.values(equipmentData).forEach(category => {
    category.items.forEach(item => {
      const price = parseFloat(item.price.replace(' TND', '').replace(',', ''));
      total += price;
    });
  });
  return total;
};

// Export data
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { equipmentData, calculateTotalCost };
}
