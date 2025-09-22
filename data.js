// Equipment data organized by priority with real prices and actual product images
const equipmentData = {
  // High Priority - Core Lighting Setup
  lighting: {
    title: "Lighting Equipment",
    priority: 1,
    items: [
      {
        id: 1,
        name: "GODOX SL60II-Bi LED Projector",
        price: "850 TND",
        store: "Hollywood HTN",
        description: "Projecteur LED bi-color 75W, plage 2800-6500K, CRI≈96, TLCI≈97, contrôle Bluetooth et 11 effets intégrés, monture Bowens",
        image: "images/GODOX SL60II BI.png",
        url: "https://hollywood.tn/product/godox-sl60iibi/",
        category: "Professional Lighting",
        features: ["75W Power", "2800-6500K Bi-Color", "CRI ≈ 96", "Bluetooth Control", "11 Effects", "Bowens Mount"]
      },
      {
        id: 2,
        name: "Godox Stand H280",
        price: "180 TND",
        store: "Hollywood HTN",
        description: "Pied d'éclairage professionnel télescopique, hauteur max 280cm, capacité 5kg, 3 sections, alliage métallique robuste",
        image: "images/GODOX STAND H280.png",
        url: "https://hollywood.tn/product/godox-stand-h280/",
        category: "Light Support",
        features: ["280cm Max Height", "5kg Load Capacity", "3 Telescopic Sections", "Lightweight 1.6kg"]
      },
      {
        id: 3,
        name: "SOFTBOX GODOX SB-UBW 95",
        price: "280 TND",
        store: "Hollywood HTN",
        description: "Softbox octogonale 95cm avec système parapluie, installation rapide, diffuseurs inclus, grille nid d'abeille, monture Bowens",
        image: "images/SOFTBOX GODOX SB-UBW 95.png",
        url: "https://hollywood.tn/product/softbox-godox-sb-ubw95/",
        category: "Light Modifier",
        features: ["95cm Octagonal", "Umbrella System", "Double Diffusers", "Honeycomb Grid", "Bowens Mount"]
      }
    ],
    total: "1,310 TND"
  },

  // High Priority - Audio
  audio: {
    title: "Audio Equipment",
    priority: 2,
    items: [
      {
        id: 4,
        name: "Hollyland LARK M2 Combo",
        price: "420 TND",
        store: "Hollywood HTN",
        description: "Micro sans fil professionnel ultra-compact, transmission 2.4GHz stable, portée 300m, multiples émetteurs, recharge USB-C",
        image: "images/HOLLYLAND LARK M2 COMBO.png",
        url: "https://hollywood.tn/product/hollyland-lark-m2-combo/",
        category: "Wireless Microphone",
        features: ["2.4GHz Digital", "300m Range", "Multiple Transmitters", "USB-C Charging", "Professional Audio"]
      }
    ],
    total: "420 TND"
  },

  // Medium Priority - Storage & Transport
  storage: {
    title: "Storage & Transport",
    priority: 3,
    items: [
      {
        id: 5,
        name: "SAC DE TRANSPORT GODOX CB-05",
        price: "75 TND",
        store: "Hollywood HTN",
        description: "Sac professionnel robuste pour équipements d'éclairage, compartiments rembourrés, poignées renforcées, bandoulière ajustable",
        image: "images/SAC DE TRANSPORT GODOX CB05.png",
        url: "https://hollywood.tn/product/sac-de-transport-godox-cb05/",
        category: "Transport Bag",
        features: ["Professional Grade", "Padded Interior", "Reinforced Handles", "Shoulder Strap"]
      },
      {
        id: 6,
        name: "VALISE DE TRANSPORT GODOX CB-06",
        price: "150 TND",
        store: "Hollywood HTN",
        description: "Valise à roulettes pour kit 3 lampes, dimensions 94x34x25cm, compartiments modulables, poignée télescopique",
        image: "images/VALISE DE TRANSPORT GODOX A ROULETTE CB-06.png",
        url: "https://hollywood.tn/product/valise-de-transport-godox-a-roulette-cb06/",
        category: "Wheeled Case",
        features: ["Rolling Wheels", "3 Light Kit Capacity", "Modular Compartments", "94x34x25cm", "Telescopic Handle"]
      }
    ],
    total: "225 TND"
  },

  // Medium Priority - Power & Memory
  power: {
    title: "Power & Memory",
    priority: 4,
    items: [
      {
        id: 7,
        name: "CHARGEUR SONY BC-VW1",
        price: "95 TND",
        store: "Hollywood HTN",
        description: "Chargeur secteur Sony pour batteries NP-FW50, entrée 100-240V, charge en 4.2h, indicateur LED, compatible Alpha et NEX",
        image: "images/CHARGEUR SONY BC-VW1.png",
        url: "https://hollywood.tn/product/chargeur-sony-bc-vw1/",
        category: "Battery Charger",
        features: ["100-240V Input", "4.2h Fast Charging", "LED Indicator", "Sony Compatible"]
      },
      {
        id: 8,
        name: "Chargeur PATONA Panasonic",
        price: "65 TND",
        store: "Splash Distribution",
        description: "Chargeur PATONA pour batteries Panasonic VW-VBT190/380, alternative économique, qualité professionnelle",
        image: "images/cHARGEUR PATONA PANASONIC 1938 VW-VBT190 380.png",
        url: "https://www.splash-distribution.com/accueil/1117-chargeur-patona-panasonic-1938-vw-vbt190380.html",
        category: "Battery Charger",
        features: ["Panasonic Compatible", "Professional Quality", "Economic Alternative", "Reliable Performance"]
      },
      {
        id: 9,
        name: "Batterie PATONA NP-FW50",
        price: "30 TND",
        store: "Splash Distribution",
        description: "Batterie compatible Sony Alpha, 1030mAh, qualité premium avec protection intégrée",
        image: "images/BATTERIE PATONA 1079 NP-FW50.png",
        url: "https://www.splash-distribution.com/accueil/650-batterie-patona-1079-np-fw50.html",
        category: "Camera Battery",
        features: ["1030mAh", "Sony Compatible", "Premium Quality", "Protection Circuit"]
      },
      {
        id: 10,
        name: "Batterie PATONA Platinum NP-FW50",
        price: "45 TND",
        store: "Splash Distribution",
        description: "Batterie premium PATONA Platinum NP-FW50, qualité supérieure, longue durée de vie, protection avancée",
        image: "images/BATTERIE PATONA PLATINUM 1362 S NP-FW50.png",
        url: "https://www.splash-distribution.com/accueil/1218-batterie-patona-platinum-1362-s-np-fw50.html",
        category: "Premium Battery",
        features: ["Platinum Series", "Extended Life", "Advanced Protection", "Premium Quality"]
      },
      {
        id: 11,
        name: "Batterie Sony NP-FW50",
        price: "120 TND",
        store: "Hollywood HTN",
        description: "Batterie officielle Sony NP-FW50, qualité originale, performance garantie, compatible Alpha",
        image: "images/BATTERIE SONY NP-FW50.png",
        url: "https://hollywood.tn/product/batterie-sony-np-fw50/",
        category: "Original Battery",
        features: ["Official Sony", "Original Quality", "Guaranteed Performance", "Alpha Compatible"]
      },
      {
        id: 12,
        name: "Batterie PATONA Premium Coupler USB-C",
        price: "55 TND",
        store: "Splash Distribution",
        description: "Batterie externe avec câble USB-C, alimentation continue, parfaite pour longs tournages",
        image: "images/BATTERIE PATONA 9413 PREMIUM COUPLER USB-C NP-FW50.png",
        url: "https://www.splash-distribution.com/accueil/1216-batterie-patona-9413-premium-coupler-usb-c-np-fw50.html",
        category: "External Power",
        features: ["USB-C Input", "Continuous Power", "Long Duration", "External Connection"]
      },
      {
        id: 13,
        name: "Neewer TNP-FW50 Battery",
        price: "35 TND",
        store: "Hollywood HTN",
        description: "Batterie Neewer TNP-FW50 1030mAh, remplacement compatible, qualité fiable",
        image: "images/NEEWER TNP-FW50 1030mAh NP-FW50 REPLACEMENT CAMERA BATTERY FOR SONY (10103381).png",
        url: "https://hollywood.tn/product/neewer-tnp-fw50-1030mah-np-fw50-replacement-camera-battery/",
        category: "Compatible Battery",
        features: ["1030mAh", "Reliable Quality", "Compatible Replacement", "Good Value"]
      },
      {
        id: 14,
        name: "SanDisk SDHC Ultra 32GB",
        price: "40 TND",
        store: "Hollywood HTN",
        description: "Carte mémoire SDHC Ultra 140MB/s, 32Go, parfaite pour photo et vidéo 4K",
        image: "images/SANDISK CARTE MEMOIRE SDHC ULTRA 140MB S 32 GO.png",
        url: "https://hollywood.tn/product/sandisk-carte-memoire-sdhc-ultra-140mb-s-32-go/",
        category: "Memory Card",
        features: ["32GB Capacity", "140MB/s Speed", "4K Ready", "SanDisk Quality"]
      }
    ],
    total: "485 TND"
  },

  // Lower Priority - Accessories
  accessories: {
    title: "Accessories & Support",
    priority: 5,
    items: [
      {
        id: 15,
        name: "SUPER CLEANING KIT",
        price: "25 TND",
        store: "Hollywood HTN",
        description: "Kit complet 14 pièces: souffleur d'air, stylo nettoyage, chiffons microfibre, solution nettoyante, gants antistatiques",
        image: "images/SUPER CLEANING KIT.png",
        url: "https://hollywood.tn/product/super-cleaning-kit/",
        category: "Maintenance Kit",
        features: ["14-Piece Kit", "Air Blower", "Microfiber Cloths", "Cleaning Solution", "Antistatic Gloves"]
      },
      {
        id: 16,
        name: "Neewer Smartphone Holder SP-02",
        price: "30 TND",
        store: "Hollywood HTN",
        description: "Support smartphone pour trépied, adaptateur universel, rotation 360°, compatible tous smartphones",
        image: "images/NEEWER SP-02 SMARTPHONE HOLDER TRIPOD MOUNT ADAPTER (10103410).png",
        url: "https://hollywood.tn/product/neewer-sp-02-smartphone-holder-tripod-mount-adapter-10103410/",
        category: "Phone Mount",
        features: ["Universal Mount", "360° Rotation", "Tripod Compatible", "Secure Grip"]
      },
      {
        id: 17,
        name: "AMH LED Tube TC-210 RGB",
        price: "165 TND",
        store: "Hollywood HTN",
        description: "Tube LED RGB professionnel, contrôle couleur complet, effets cinéma, télécommande incluse",
        image: "images/AMH TUBE LIGHT TC-210 RGB-W.png",
        url: "https://hollywood.tn/product/amh-tube-light-tc-210-rgb-w/",
        category: "RGB LED Tube",
        features: ["Full RGB Control", "Cinema Effects", "Remote Control", "Professional Grade"]
      },
      {
        id: 18,
        name: "Lecteur Carte Pisen 3-en-1",
        price: "25 TND",
        store: "Hollywood HTN",
        description: "Lecteur carte mémoire USB 3.2, compatible SD/TF/CF, transfert rapide, design compact",
        image: "images/LECTEUR CARTE MEMOIRE PISEN 3 EN 1 ( USB3.2 SD TF 4.0).png",
        url: "https://hollywood.tn/product/lecteur-carte-memoire-pisen-3-en-1-usb3-2-sd-tf-4-0/",
        category: "Card Reader",
        features: ["USB 3.2", "SD/TF/CF Support", "Fast Transfer", "Compact Design"]
      },
      {
        id: 19,
        name: "Lecteur Carte EMTEC T610C",
        price: "35 TND",
        store: "Hollywood HTN",
        description: "Lecteur de carte EMTEC T610C, micro SD/SD/CompactFlash, UHS-1, qualité professionnelle",
        image: "images/Lecteur De Carte Mémoire EMTEC T610C  Micro SD – Carte SD – Compact Flash – UHS 1.png",
        url: "https://hollywood.tn/product/lecteur-de-carte-memoire-emtec-t610c-micro-sd-carte-sd-compact-flash-uhs-1/",
        category: "Professional Card Reader",
        features: ["Multi-Format", "UHS-1 Support", "Professional Grade", "CompactFlash Compatible"]
      },
      {
        id: 20,
        name: "Kit Accessoires GoPro 50-en-1",
        price: "85 TND",
        store: "Hollywood HTN",
        description: "Kit complet GoPro: supports, fixations, étuis, câbles, parfait pour sports extrêmes et aventure",
        image: "images/KIT ACCESSOIRES GOPRO 50 EN 1.png",
        url: "https://hollywood.tn/product/kit-accessoires-go-pro-50-en-1/",
        category: "Action Camera Kit",
        features: ["50 Accessories", "Multiple Mounts", "Protective Case", "Complete Set"]
      }
    ],
    total: "365 TND"
  },

  // Lower Priority - Streaming & Background
  streaming: {
    title: "Streaming & Background",
    priority: 6,
    items: [
      {
        id: 21,
        name: "Fond Chroma 3x5m",
        price: "110 TND",
        store: "Hollywood HTN",
        description: "Fond vert professionnel 3x5m, parfait pour incrustation, studio photo/vidéo",
        image: "images/FOND CHROMA 3X5m.png",
        url: "https://hollywood.tn/product/fond-chroma-3x5m/",
        category: "Green Screen",
        features: ["3x5m Size", "Professional Grade", "Chroma Key", "Studio Quality"]
      },
      {
        id: 22,
        name: "Support Fond Trépied",
        price: "80 TND",
        store: "Hollywood HTN",
        description: "Support trépied pour fond, hauteur ajustable, stable, installation rapide",
        image: "images/SUPPORT FOND TREPIED.png",
        url: "https://hollywood.tn/product/support-fond-trepied/",
        category: "Background Stand",
        features: ["Adjustable Height", "Quick Setup", "Stable Design", "Professional Use"]
      },
      {
        id: 23,
        name: "King Joy Trépied VT-890H",
        price: "195 TND",
        store: "Hollywood HTN",
        description: "Trépied professionnel robuste, tête fluide, parfait pour caméras et DSLRs",
        image: "images/TREPIED KING JOY VT-890H.png",
        url: "https://hollywood.tn/product/king-joy-vt-890h/",
        category: "Professional Tripod",
        features: ["Fluid Head", "Professional Grade", "Camera Support", "Adjustable Legs"]
      },
      {
        id: 24,
        name: "Carte Capture HDMI USB",
        price: "55 TND",
        store: "Hollywood HTN",
        description: "Carte capture vidéo HDMI vers USB, streaming HD 1080p, plug and play",
        image: "images/CARTE DE CAPTURE VIDEO HDMI A USB DIFFUSION HD 1080P.png",
        url: "https://hollywood.tn/product/carte-de-capture-video-hdmi-a-usb-diffusion-hd-1080p/",
        category: "Capture Card",
        features: ["HDMI to USB", "1080p HD", "Plug & Play", "Streaming Ready"]
      },
      {
        id: 25,
        name: "Câble HDMI 4K 2.0m",
        price: "15 TND",
        store: "Tunisia Net",
        description: "Câble HDMI haute qualité 4K, 2 mètres, compatible tous appareils HDMI",
        image: "images/Câble HDMI vers HDMI 4K 20M.png",
        url: "https://www.tunisianet.com.tn/cable-hdmi-prix-tunisie/46311-cable-hdmi-vers-hdmi-4k-20m.html",
        category: "HDMI Cable",
        features: ["4K Support", "2m Length", "High Quality", "Universal Compatible"]
      },
      {
        id: 26,
        name: "Adaptateur HDMI vers Micro HDMI",
        price: "12 TND",
        store: "2B Trading",
        description: "Adaptateur HDMI femelle vers micro HDMI, compact, parfait pour Raspberry Pi",
        image: "images/Adaptateur HDMI FEMELLE VERS Micro HDMI.png",
        url: "https://2btrading.tn/raspberry/376-adaptateur-hdmi-femelle-vers-micro-hdmi.html",
        category: "HDMI Adapter",
        features: ["HDMI to Micro HDMI", "Compact Design", "Raspberry Pi Compatible", "Reliable Connection"]
      }
    ],
    total: "467 TND"
  },

  // Lowest Priority - Phone Protection
  phone: {
    title: "Phone Protection",
    priority: 7,
    items: [
      {
        id: 27,
        name: "Protection Caméra iPhone 13 Pro",
        price: "8 TND",
        store: "iTech Store",
        description: "Protection objectif caméra iPhone 13 Pro, verre trempé, installation facile",
        image: "images/Protection caméra iPhone 13 Pro.png",
        url: "https://itechstore.tn/protection-de-cam%C3%A9ra/7491-protection-cam%C3%A9ra-iphone-13-pro-.html",
        category: "Camera Protection",
        features: ["Tempered Glass", "iPhone 13 Pro", "Easy Installation", "Camera Safe"]
      },
      {
        id: 28,
        name: "Film Protection Privacy iPhone 13 Pro Max",
        price: "12 TND",
        store: "iTech Store",
        description: "Film protection écran avec filtre confidentialité, anti-regard, iPhone 13 Pro Max",
        image: "images/Film De Protection Privacy iPhone 13 Pro Max Caisles.png",
        url: "https://itechstore.tn/accueil/2491-film-de-protection-privacy-iphone-13-pro-max-caisles.html",
        category: "Privacy Screen",
        features: ["Privacy Filter", "iPhone 13 Pro Max", "Anti-Glare", "Screen Protection"]
      }
    ],
    total: "20 TND"
  }
};

// Calculate total cost including all alternatives
const calculateTotalCost = () => {
  return Object.values(equipmentData).reduce((total, category) => {
    const categoryTotal = category.items.reduce((catTotal, item) => {
      return catTotal + parseFloat(item.price.replace(' TND', '').replace(',', ''));
    }, 0);
    return total + categoryTotal;
  }, 0);
};

// Get minimum cost per category (choosing cheapest alternatives)
const getMinimumCostPerCategory = () => {
  return {
    lighting: 1310, // No alternatives - all 3 items needed
    audio: 420,     // No alternatives
    storage: 75,    // Choose CB-05 (75 TND) over CB-06 (150 TND)
    power: {
      charger: 65,  // Choose PATONA Panasonic (65 TND) over Sony (95 TND)
      battery: 30,  // Choose PATONA basic (30 TND) over Platinum (45 TND) or Sony (120 TND)
      wired: 35,    // Choose Neewer (35 TND) over PATONA Coupler (55 TND)
      memory: 40,   // SanDisk 32GB (only option)
      total: 170
    },
    accessories: {
      cleaning: 25,     // Only option
      phone_holder: 30, // Only option
      led_tube: 165,    // Only option (missing from images - would need to be added)
      card_reader: 25,  // Choose Pisen (25 TND) over EMTEC (35 TND)
      gopro: 85,        // Only option
      total: 330
    },
    streaming: 467, // All items needed, no alternatives
    phone: 20      // Both items needed
  };
};

// Export data
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { equipmentData, calculateTotalCost, getMinimumCostPerCategory };
}
