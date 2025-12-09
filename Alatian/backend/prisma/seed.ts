import { PrismaClient, Category } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  const products = [
    {
      name: 'AMD Ryzen 9 7950X',
      description: 'AMD Ryzen 9 7950X processor with 16 cores and 32 threads, ideal for gaming and professional work',
      price: 2499000,
      brand: 'AMD',
      images: ['https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=500'],
      category: Category.CPU,
      stock: 15,
      powerConsumption: 170,
      specifications: {
        cores: 16,
        threads: 32,
        baseClock: '4.5 GHz',
        boostClock: '5.7 GHz',
        socket: 'AM5',
        cache: '80MB'
      }
    },
    {
      name: 'Intel Core i9-14900K',
      description: 'Intel Core i9 14th Gen processor, exceptional gaming and content creation performance with 24 cores',
      price: 2699000,
      brand: 'Intel',
      images: ['https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500'],
      category: Category.CPU,
      stock: 12,
      powerConsumption: 253,
      specifications: {
        cores: 24,
        threads: 32,
        baseClock: '3.2 GHz',
        boostClock: '6.0 GHz',
        socket: 'LGA1700',
        cache: '36MB'
      }
    },
    {
      name: 'AMD Ryzen 7 7800X3D',
      description: 'Best gaming processor with 3D V-Cache technology, excellent gaming performance at a reasonable price',
      price: 1899000,
      brand: 'AMD',
      images: ['https://images.unsplash.com/photo-1587202372583-49330a15584d?w=500'],
      category: Category.CPU,
      stock: 20,
      powerConsumption: 120,
      specifications: {
        cores: 8,
        threads: 16,
        baseClock: '4.2 GHz',
        boostClock: '5.0 GHz',
        socket: 'AM5',
        cache: '104MB'
      }
    },
    {
      name: 'NVIDIA RTX 4090',
      description: 'NVIDIA most powerful graphics card with 24GB GDDR6X, ideal for 4K gaming and AI',
      price: 8999000,
      brand: 'NVIDIA',
      images: ['https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500'],
      category: Category.GPU,
      stock: 8,
      powerConsumption: 450,
      specifications: {
        vram: '24GB GDDR6X',
        cudaCores: 16384,
        baseClock: '2.23 GHz',
        boostClock: '2.52 GHz',
        interface: 'PCIe 4.0 x16',
        outputs: 'HDMI 2.1, 3x DisplayPort 1.4a'
      }
    },
    {
      name: 'AMD Radeon RX 7900 XTX',
      description: 'AMD flagship graphics card with 24GB GDDR6 for 4K gaming and professional content',
      price: 4999000,
      brand: 'AMD',
      images: ['https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500'],
      category: Category.GPU,
      stock: 10,
      powerConsumption: 355,
      specifications: {
        vram: '24GB GDDR6',
        streamProcessors: 6144,
        gameClock: '2.3 GHz',
        boostClock: '2.5 GHz',
        interface: 'PCIe 4.0 x16',
        outputs: 'HDMI 2.1, 2x DisplayPort 2.1'
      }
    },
    {
      name: 'NVIDIA RTX 4070 Ti',
      description: 'Mid-high range graphics card ideal for 1440p and 4K gaming with Ray Tracing',
      price: 3999000,
      brand: 'NVIDIA',
      images: ['https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=500'],
      category: Category.GPU,
      stock: 15,
      powerConsumption: 285,
      specifications: {
        vram: '12GB GDDR6X',
        cudaCores: 7680,
        baseClock: '2.31 GHz',
        boostClock: '2.61 GHz',
        interface: 'PCIe 4.0 x16',
        outputs: 'HDMI 2.1, 3x DisplayPort 1.4a'
      }
    },
    {
      name: 'Corsair Vengeance RGB DDR5 32GB',
      description: 'DDR5 memory at 6000MHz with customizable RGB lighting, ideal for gaming and high performance',
      price: 699000,
      brand: 'Corsair',
      images: ['https://images.unsplash.com/photo-1541248032325-1a4e4e2b36a4?w=500'],
      category: Category.RAM,
      stock: 25,
      specifications: {
        capacity: '32GB (2x16GB)',
        type: 'DDR5',
        speed: '6000MHz',
        latency: 'CL36',
        voltage: '1.35V',
        rgb: 'Yes'
      }
    },
    {
      name: 'G.SKILL Trident Z5 RGB 64GB',
      description: 'Best DDR5 RAM for maximum performance with 6400MHz speed and stunning RGB lighting',
      price: 1299000,
      brand: 'G.SKILL',
      images: ['https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500'],
      category: Category.RAM,
      stock: 18,
      specifications: {
        capacity: '64GB (2x32GB)',
        type: 'DDR5',
        speed: '6400MHz',
        latency: 'CL32',
        voltage: '1.4V',
        rgb: 'Yes'
      }
    },
    {
      name: 'ASUS ROG Strix X670E-E',
      description: 'Premium motherboard for AMD Ryzen with PCIe 5.0 and DDR5 support and excellent cooling',
      price: 2199000,
      brand: 'ASUS',
      images: ['https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=500'],
      category: Category.MOTHERBOARD,
      stock: 12,
      specifications: {
        socket: 'AM5',
        chipset: 'X670E',
        formFactor: 'ATX',
        memorySlots: 4,
        maxMemory: '128GB DDR5',
        pcie5: 'Yes',
        ethernet: '2.5Gb LAN',
        wifi: 'Wi-Fi 6E'
      }
    },
    {
      name: 'MSI MPG Z790 EDGE',
      description: 'Advanced motherboard for Intel 13th and 14th Gen with gaming features',
      price: 1899000,
      brand: 'MSI',
      images: ['https://images.unsplash.com/photo-1562976540-1502c2145186?w=500'],
      category: Category.MOTHERBOARD,
      stock: 10,
      specifications: {
        socket: 'LGA1700',
        chipset: 'Z790',
        formFactor: 'ATX',
        memorySlots: 4,
        maxMemory: '128GB DDR5',
        pcie5: 'Yes',
        ethernet: '2.5Gb LAN',
        wifi: 'Wi-Fi 6E'
      }
    },
    {
      name: 'Samsung 990 PRO 2TB NVMe',
      description: 'Fastest SSD from Samsung with read speeds up to 7450MB/s, ideal for gaming and professional apps',
      price: 899000,
      brand: 'Samsung',
      images: ['https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500'],
      category: Category.STORAGE,
      stock: 30,
      specifications: {
        capacity: '2TB',
        type: 'NVMe PCIe 4.0 x4',
        formFactor: 'M.2 2280',
        readSpeed: '7450 MB/s',
        writeSpeed: '6900 MB/s',
        warranty: '5 years'
      }
    },
    {
      name: 'WD Black SN850X 1TB',
      description: 'High performance SSD from Western Digital designed for gaming with advanced cooling',
      price: 549000,
      brand: 'Western Digital',
      images: ['https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500'],
      category: Category.STORAGE,
      stock: 40,
      specifications: {
        capacity: '1TB',
        type: 'NVMe PCIe 4.0 x4',
        formFactor: 'M.2 2280',
        readSpeed: '7300 MB/s',
        writeSpeed: '6300 MB/s',
        warranty: '5 years'
      }
    },
    {
      name: 'Corsair RM1000e 1000W',
      description: '1000W power supply 80+ Gold efficiency with modular cables and 10-year warranty',
      price: 799000,
      brand: 'Corsair',
      images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?w=500'],
      category: Category.PSU,
      stock: 20,
      powerConsumption: 1000,
      specifications: {
        wattage: '1000W',
        efficiency: '80+ Gold',
        modular: 'Fully Modular',
        warranty: '10 years',
        fanSize: '135mm',
        certification: 'ATX 3.0'
      }
    },
    {
      name: 'EVGA SuperNOVA 850 GT',
      description: '850W power supply 80+ Gold high quality from EVGA',
      price: 599000,
      brand: 'EVGA',
      images: ['https://images.unsplash.com/photo-1609057159219-c0fb1ba962d2?w=500'],
      category: Category.PSU,
      stock: 25,
      powerConsumption: 850,
      specifications: {
        wattage: '850W',
        efficiency: '80+ Gold',
        modular: 'Fully Modular',
        warranty: '10 years',
        fanSize: '135mm',
        certification: 'ATX 3.0'
      }
    },
    {
      name: 'Lian Li O11 Dynamic EVO',
      description: 'Premium case with modern design and tempered glass, supports advanced water cooling',
      price: 899000,
      brand: 'Lian Li',
      images: ['https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500'],
      category: Category.CASE,
      stock: 15,
      specifications: {
        formFactor: 'Mid Tower',
        motherboardSupport: 'ATX, Micro-ATX, Mini-ITX',
        maxGPULength: '420mm',
        maxCPUCooler: '167mm',
        driveBays: '2x 3.5", 4x 2.5"',
        fans: 'Up to 13x 120mm',
        material: 'Aluminum & Tempered Glass'
      }
    },
    {
      name: 'NZXT H7 Flow',
      description: 'Modern case with excellent ventilation and clean design, easy installation and maintenance',
      price: 649000,
      brand: 'NZXT',
      images: ['https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=500'],
      category: Category.CASE,
      stock: 18,
      specifications: {
        formFactor: 'Mid Tower',
        motherboardSupport: 'ATX, Micro-ATX, Mini-ITX',
        maxGPULength: '400mm',
        maxCPUCooler: '185mm',
        driveBays: '2x 3.5", 4x 2.5"',
        fans: '4x 120mm included',
        material: 'Steel & Tempered Glass'
      }
    }
  ];

  console.log('Creating products...');
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log(`Created ${products.length} products`);
  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
