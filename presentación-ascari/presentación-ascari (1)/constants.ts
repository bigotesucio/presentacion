import type { ProductLine, Role, ComparisonElement, ProductCategory, ProductDetail, TimelinePhase, ProposalQuestion } from './types';

export const HERO_DATA = {
    title: 'Propuesta de Desarrollo y Producción',
    client: 'ASCARI'
};

export const PRODUCT_LINES: ProductLine[] = [
    {
        id: 1,
        line: 'LÍNEA 1',
        title: 'ELEGANTE Y SOBRIA',
        visualStyle: 'Discreción, refinamiento, atemporalidad',
        inspiration: 'Lujo silencioso, materiales nobles, diseño minimalista',
        palette: 'Negro, beige, gris piedra, blanco roto',
        keyMaterials: 'Algodón orgánico, cuero, acero cepillado, lana',
        target: 'Socios clásicos, amantes del detalle y la estética sobria',
        quote: '“Menos ruido, más presencia. Detalles que hablan por sí solos.”'
    },
    {
        id: 2,
        line: 'LÍNEA 2',
        title: 'RACING Y CALLEJERA',
        visualStyle: 'Energía, dinamismo, diseño gráfico',
        inspiration: 'Cultura automovilística, streetwear, deporte técnico',
        palette: 'Negro, rojo intenso, blanco, gris antracita, amarillo',
        keyMaterials: 'Tejidos técnicos, algodón pesado, neopreno, pintura electrostática',
        target: 'Socios jóvenes o apasionados del motor, con estilo urbano',
        quote: '“Actitud, contraste y velocidad. Espíritu racing con acabado premium.”'
    }
];

export const OUR_ROLE_DATA: Role[] = [
    {
        title: 'Sourcing especializado',
        description: 'Seleccionamos los mejores proveedores para cada categoría: textil, accesorios técnicos, artículos lifestyle y detalles de lujo. Nos aseguramos de que cada producto esté a la altura de la marca, tanto en materiales como en acabados.',
        shape: 'circle'
    },
    {
        title: 'Desarrollo técnico y viabilidad',
        description: 'Validamos cada diseño con criterios de producción reales: materiales, formatos, acabados, técnica aplicable. Traducimos el concepto en un producto fabricable sin perder intención de diseño ni nivel de calidad.',
        shape: 'square'
    },
    {
        title: 'Control de calidad y muestras presenciales',
        description: 'Coordinamos el desarrollo de muestras para cada producto: Presentación física de muestras para revisión, asegurando que cada propuesta cumple con los estándares deseados antes de pasar a producción.',
        shape: 'triangle'
    }
];

export const COMPARISON_DATA: ComparisonElement[] = [
    { element: 'Estética', elegant: 'Lujo silencioso, sobriedad, diseño atemporal', racing: 'Actitud, energía, diseño gráfico' },
    { element: 'Inspiración', elegant: 'Moda minimalista, clubes privados, tejidos nobles', racing: 'Streetwear premium, paddock, cultura racing' },
    { element: 'Materiales clave', elegant: 'Algodón orgánico, lana, cuero natural o vegano, acero cepillado', racing: 'Algodón técnico, neopreno, tejidos funcionales, acabados reflectantes' },
    { element: 'Target', elegant: 'Socios clásicos, perfil más sobrio y sofisticado', racing: 'Socios jóvenes, estilo urbano, fanáticos del motor' },
    { element: 'Detalles y acabados', elegant: 'Bordados tono sobre tono, grabados discretos, costuras limpias', racing: 'Parcheados, serigrafía, etiquetas técnicas, detalles racing' },
];

export const PRODUCT_CATEGORIES_DATA: ProductCategory[] = [
    {
        category: 'Textil',
        items: ['Camisetas (manga corta y manga larga)', 'Polos', 'Sudaderas (varios modelos)', 'Chaleco', 'Chaquetas', 'Mono de conducción'],
    },
    {
        category: 'Accesorios',
        items: ['Gorras', 'Mochilas', 'Totebag (versión premium)', 'Bolsa para casco', 'Guantes de conducción', 'Botas de conducción', 'Paraguas', 'Mantas para terraza', 'Toallas para piscina/playa', 'Cartera / billetera / tarjetero', 'Broche / pin'],
    },
    {
        category: 'Lifestyle/Regalos&Family',
        items: ['Botella térmica premium (posible accesorio en piel)', 'Tazas', 'Osito de peluche con mono piloto Ascari', 'Mini cochecitos', 'Set infantil (body + gorro + calcetines)'],
    }
];

export const PRODUCT_DETAILS_DATA: ProductDetail[] = [
    // Textil
    { product: 'Camisetas', category: 'Textil', elegant: 'Algodón orgánico, líneas limpias, logo bordado', racing: 'Gráficos Bold, impresión premium, etiquetas tejidas', development: 'Alto gramaje (180-220 gms), Serigrafía, Bordados, DTG' },
    { product: 'Sudaderas', category: 'Textil', elegant: 'Felpa de densidad, tonos neutros, detalles de otros materiales', racing: 'Oversize fit, gráficos grandes, capucha doble capa', development: 'Diferentes cortes según línea, detalles en ribetes y costuras' },
    { product: 'Chaleco', category: 'Textil', elegant: 'Chaleco técnio acolchado, líneas minimalistas', racing: 'Corte más agresivo, colores más llamativos', development: 'Prendas con acabados técnicos que aporten un plus' },
    { product: 'Chaquetas', category: 'Textil', elegant: 'Cazadora tipo bomber elegante, tejidos técnicos de calidad', racing: 'Inspiración racing, detalles reflectantes o vinilo', development: 'Diseños técnicos con complejidad en detalles' },
    { product: 'Polos', category: 'Textil', elegant: 'Polo de piqué con logo bordado de tamaño pequeño', racing: 'Polo deportivo con cortes a contraste', development: 'Diferenciar bien fitting y materiales en cada línea' },
    { product: 'Mono de conducción', category: 'Textil', elegant: 'N/A', racing: 'Estilo competición, branding de racing', development: 'Tallas y especificaciones técnicas?' },
    
    // Accesorios
    { product: 'Gorras', category: 'Accesorios', elegant: 'Tonos neutros, bordado 3D de tamaño pequeño y fino', racing: 'Gorras trucker/5 panel con diseño llamativo', development: 'Sarga, Algodón lavado, bordado 3D, vinilo 3D' },
    { product: 'Guantes de conducción', category: 'Accesorios', elegant: 'Cerámica mate o esmaltada, con caja rígida de presentación', racing: 'Diseño racing, logo visible, interior a color', development: 'Tallas y especificaciones técnicas?' },
    { product: 'Botella térmica', category: 'Accesorios', elegant: 'Acero cepillado, accesorio en cuero natural', racing: 'Pintura electrostática, logotipo grande', development: 'Packaging, funda protectora, opción de correa de mano' },
    { product: 'Bolsa para casco', category: 'Accesorios', elegant: 'Lona encerada, interior acolchado, cierre metálico', racing: 'Diseño más técnico, branding de racing, materiales ligeros', development: '-' },
    { product: 'Botas conducción', category: 'Accesorios', elegant: 'N/A', racing: 'Estilo competición, branding de racing', development: 'Tallas y especificaciones técnicas?' },
    { product: 'Mochila', category: 'Accesorios', elegant: 'Diseño urbano sobrio', racing: 'Mochila street con contraste, cierres metálicos', development: 'Compartimentos inteligentes, espalda acolchada' },
    { product: 'Totebag Premium', category: 'Accesorios', elegant: 'Algodón de alto gramaje, impresión discreta, forro interior', racing: 'Colores vivos, frases o gráficos llamativos,', development: 'Detalles de asas de cueto o imanes a modo de cierre' },
    { product: 'Mantas para terraza', category: 'Accesorios', elegant: 'Lana o mezcla, ribete en cuero, bordado fino', racing: 'Estilo picnic racing, manta polar con patch', development: 'Medidas?' },
    { product: 'Toallas piscina/playa', category: 'Accesorios', elegant: 'Algodón de alta calidad, bordado pequeño, tonos neutros', racing: 'Toalla deportiva con logo central grande', development: 'Alta calidad de rizo' },
    { product: 'Broche/pin', category: 'Accesorios', elegant: 'Metálico, acabado envejecido o esmaltado discreto', racing: 'Pin racing con colores vibrantes y/o formas llamativas', development: '-' },
    
    // Lifestyle
    { product: 'Cartera/Tarjetero', category: 'Lifestyle/Regalos&Family', elegant: 'Cuero natural, costuras visibles, grabado láser', racing: 'Estilo urbano, cierre con goma o velcro', development: 'Personalización con bolsa o packaging' },
    { product: 'Paraguas', category: 'Lifestyle/Regalos&Family', elegant: 'Mango de madera, logo pequeño, estructura sólida', racing: 'Automático, colores llamativos, logo racing', development: 'Windproof, mango de calidad, tejido con teflón' },
    { product: 'Detalles de bebé/niños', category: 'Lifestyle/Regalos&Family', elegant: 'Peluche con diseño clásico, materiales suaves', racing: 'Mini coche, body bebé con logo racing', development: 'Tallas?' },
];

export const TIMELINE_DATA: TimelinePhase[] = [
    { phase: 1, title: 'Validación de gama de productos', duration: 'Duración: 1 semana', description: 'Revisión conjunta del listado inicial, ajustes por tipología, prioridades y aplicación a cada línea.', result: 'listado de productos definitivo.' },
    { phase: 2, title: 'Sourcing y propuesta de fabricación', duration: 'Duración: 2 semanas', description: 'Selección de proveedores por tipo de producto. Propuesta de materiales, calidades, precios estimados.', result: 'proveedor asignado por producto.' },
    { phase: 3, title: 'Desarrollo de muestras físicas', duration: 'Duración: 4 semanas', description: 'Producción de prototipos. Presentación física de las muestras en vuestras oficinas para validación.', result: 'primeras muestras físicas listas para feedback.' },
    { phase: 4, title: 'Ajustes y validación final', duration: 'Duración: 1-2 semanas', description: 'Ajustes a partir de feedback. Afinar detalles, colores y terminaciones definitivas', result: 'producto final aprobado para producción.' },
    { phase: 5, title: 'Producción y entrega', duration: 'Duración: 4-6 semanas (según producto)', description: 'Control de calidad y seguimiento de entregas. Revisión de detalles y mejoras solicitadas.', result: 'productos entregados en las condiciones acordadas.' },
];

export const QUESTIONS_DATA: ProposalQuestion[] = [
    { id: 1, question: '¿Qué artículos son prioritarios para cada línea?', context: '(¿Cuáles se enfocan en boutique vs. regalo institucional?)' },
    { id: 2, question: '¿Cuál es el PVP objetivo por tipo de producto?', context: '(Esto nos ayudará a definir materiales, calidades y acabados posibles.)' },
    { id: 3, question: '¿Los productos serán genderless o habrá versiones diferenciadas por género?', context: '' },
    { id: 4, question: '¿Especificaciones de tallas en los productos ready to wear/calzado/guantes?', context: '' },
    { id: 5, question: '¿Qué nivel de personalización se espera por producto?', context: '(¿Colores propios? ¿Etiquetas? ¿Detalles premium como piel, bordados, etc.?)' },
    { id: 6, question: '¿Está confirmada que la primera propuesta será Camisetas, Gorras y Termos?', context: '(De ser así, ¿disponéis ya de arhivos de diseño?)' },
    { id: 7, question: '¿Qué rol tendrá la agencia creativa?', context: '(Recepción de mockups y AAFF, ¿también nos enviarán tech packs?)' },
    { id: 8, question: '¿Cuál es la fecha objetivo para lanzamiento o entrega de producto?', context: '' },
    { id: 9, question: '¿Algún producto tiene ya un enfoque claro?', context: '(Ej: el oso piloto como regalo de bienvenida, la térmica como objeto aspiracional, etc.)' },
];