export class ProductosTipo {
  private tipoProducto: string[];
  private pinturaFamilia: string[];
  private pinturasAlAgua: string[];
  private pinturasAlDisolvente: string[];
  private pinturasEspeciales: string[];
  private pincelesBrochasRodillos: string[];
  private masillas: string[];
  private anexosPintura: string[];
  private adhesivos: string[];

  private limpiezaFamilia: string[];
  private celulosa: string[];
  private limpiadores: string[];
  private anexosLimpieza: string[];

  private lavanderiaFamilia: string[];
  private lavanderiaDomestica: string[];
  private lavanderiaIndustrial: string[];

  constructor() {
    this.tipoProducto = ['Pintura', 'Limpieza', 'Lavandería'];

    this.pinturaFamilia = [
      'Pinturas al agua',
      'Pinturas al disolvente',
      'Pinturas Especiales',
      'Pinceles brochas y rodillos',
      'Masillas',
      'Anexos pintura',
      'Adhesivos',
    ];
    this.limpiezaFamilia = ['Celulosa', 'Limpiadores', 'Anexos limpieza'];

    this.lavanderiaFamilia = ['Lavandería doméstica', 'Lavandería indutrial'];

    

    this.pinturasAlAgua = [
      'Plástico mate',
      'Plástico Satinado',
      'Revestimiento',
      'Esmalte al agua',
      'Barniz alagua',
    ];
    this.pinturasAlDisolvente = ['Esmalte Sintético', 'Barniz Sintético'];
    this.pinturasEspeciales = [
      'Imprimaciones',
      'Pinturas de Suelos',
      'Impermeabilizante',
      'Pintura en spray',
    ];
    this.pincelesBrochasRodillos = [
      'Paletinas',
      'Pinceles',
      'Brochas',
      'Rodillos',
    ];
    this.masillas = ['Plaste en polvo', 'Plaste al uso', 'Varios'];
    this.anexosPintura = [
      'Cintas, papel, plástico y lonas',
      'Cubetas y alargos',
      'Abrasivos',
      'Herramientas',
    ];
    this.adhesivos = ['Colas y pegamentos', 'Siliconas y selladores'];

    this.celulosa = ['Papel higienico', 'Papel mecha', 'Servilletas'];

    this.limpiadores = [
      ' Limpiadores uso General',
      'Multisuperficies',
      'Lejias y amoniacos',
      'Desengrasantes y Lavavajillas',
      'Ambientadores',
    ],
      this.anexosLimpieza = [
        'Estropajos y bayetas',
        'Fregonas, cepillos y mopas',
        'Bolsas basura',
        'Cubos, recogedores ....',
        'Varios',
      ];

    

    this.lavanderiaDomestica = ['Detergentes y aditivos'];

    this.lavanderiaIndustrial = ['Detergentes industriales'];
  }

  getTipo() {
    return this.tipoProducto;
  }

  getPinturasFamilia() {
    return this.pinturaFamilia;
  }

  getLimpiezaFamilia() {
    return this.limpiezaFamilia;
  }

  getLavanderiaFamilia() {
    return this.lavanderiaFamilia
  }

  getSubfamilia(familia: string) {
    let response: string[] = [];
    if (familia == 'Pinturas al agua') response = this.pinturasAlAgua;

    if (familia == 'Pinturas al disolvente')
      response = this.pinturasAlDisolvente;
    if (familia == 'Pinturas Especiales') 
        response = this.pinturasEspeciales;
    if (familia == 'Pinceles brochas y rodillos')
      response = this.pincelesBrochasRodillos;
    if (familia == 'Masillas') 
        response = this.masillas;
    if (familia == 'Anexos pintura') 
        response = this.anexosPintura;
    if (familia == 'Adhesivos') 
        response = this.adhesivos;

    if (familia == 'Celulosa') 
        response = this.celulosa;
    if (familia == 'Limpiadores') 
        response = this.limpiadores;
    if (familia == 'Anexos limpieza') 
        response = this.anexosLimpieza;

    if (familia == 'Lavandería doméstica')
      response = this.lavanderiaDomestica;

    if (familia == 'Lavandería indutrial')
      response = this.lavanderiaIndustrial

    return response;
  }

  getPinturasAlAgua() {
    return this.pinturasAlAgua;
  }

  getPinturasAlDisolvente() {
    return this.pinturasAlDisolvente;
  }

  getPinturasEspeciales() {
    return this.pinturasEspeciales;
  }

  getPincelesBrochasYRodillos() {
    return this.pincelesBrochasRodillos;
  }

  getMasillas() {
    return this.masillas;
  }

  getAnexosPinturas() {
    return this.anexosPintura;
  }

  getAdhesivos() {
    return this.adhesivos;
  }
}
