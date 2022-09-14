import { PropertyCode } from './calculator/common/enums';

export class Properties {
  static readonly DependentProperties = {
    [PropertyCode.ABCO]: [],
    [PropertyCode.ACC]: [],
    [PropertyCode.ACCB]: [],
    [PropertyCode.ACT]: [],
    [PropertyCode.ACW]: [],
    [PropertyCode.ACWT]: [],
    [PropertyCode.AEC]: [PropertyCode.ECEFF],
    [PropertyCode.AECO]: [],
    [PropertyCode.AISF]: [],
    [PropertyCode.ALC]: [],
    [PropertyCode.ALSF]: [],
    [PropertyCode.ALT]: [],
    [PropertyCode.ASC1_INFO]: [],
    [PropertyCode.ASC1]: [],
    [PropertyCode.ASCB_INFO]: [],
    [PropertyCode.ASCB]: [],
    [PropertyCode.ASCF]: [],
    [PropertyCode.ASCM]: [],
    [PropertyCode.ASIH]: [],
    [PropertyCode.ASIN]: [],
    [PropertyCode.ASMAIN]: [],
    [PropertyCode.ASSMY]: [],
    [PropertyCode.ASSMZ]: [],
    [PropertyCode.ASST]: [],
    [PropertyCode.ASSY]: [],
    [PropertyCode.ASSYT]: [],
    [PropertyCode.ASSZ]: [],
    [PropertyCode.ASSZT]: [],
    [PropertyCode.AST1_INFO]: [],
    [PropertyCode.AST1]: [],
    [PropertyCode.ASTB_INFO]: [],
    [PropertyCode.ASTB]: [],
    [PropertyCode.ASTF]: [],
    [PropertyCode.ASTM]: [],
    [PropertyCode.ASWS]: [],
    [PropertyCode.ASWSM]: [],
    [PropertyCode.BCC]: [],
    [PropertyCode.BCTT0]: [],
    [PropertyCode.BFLI]: [],
    [PropertyCode.C]: [PropertyCode.A, PropertyCode.B],
    [PropertyCode.CCC_INFO]: [],
    [PropertyCode.CCC_INFO2]: [],
    [PropertyCode.CCC]: [],
    [PropertyCode.CCS_INFO]: [],
    [PropertyCode.CCS_INFO2]: [],
    [PropertyCode.CCS]: [],
    [PropertyCode.CDY_INFO]: [],
    [PropertyCode.CRDC622]: [],
    [PropertyCode.D]: [PropertyCode.A, PropertyCode.B],
    [PropertyCode.DFL]: [],
    [PropertyCode.DLD17]: [],
    [PropertyCode.DLD92]: [],
    [PropertyCode.E]: [PropertyCode.A, PropertyCode.B],
    [PropertyCode.EC1]: [],
    [PropertyCode.EC2]: [],
    [PropertyCode.EC3]: [],
    [PropertyCode.ECAT]: [],
    [PropertyCode.ECDT]: [],
    [PropertyCode.ECEFF]: [],
    [PropertyCode.ECM]: [],
    [PropertyCode.ECMT]: [],
    [PropertyCode.ECS]: [],
    [PropertyCode.ECU1]: [],
    [PropertyCode.ECU2]: [],
    [PropertyCode.ECU3]: [],
    [PropertyCode.EDS1]: [],
    [PropertyCode.EDS2]: [],
    [PropertyCode.EPSUK]: [],
    [PropertyCode.F0C]: [],
    [PropertyCode.FBTT0]: [],
    [PropertyCode.FCK]: [],
    [PropertyCode.FCKCUBE]: [],
    [PropertyCode.FCKT]: [],
    [PropertyCode.FCM]: [],
    [PropertyCode.FCMT]: [],
    [PropertyCode.FCTK005]: [],
    [PropertyCode.FCTK095]: [],
    [PropertyCode.FCTM]: [],
    [PropertyCode.FCTMT]: [],
    [PropertyCode.FDTT0]: [],
    [PropertyCode.FNOK]: [],
    [PropertyCode.FTOK]: [],
    [PropertyCode.FTT0]: [],
    [PropertyCode.FYK]: [],
    [PropertyCode.H0C]: [],
    [PropertyCode.HHFL]: [],
    [PropertyCode.HNS]: [],
    [PropertyCode.K]: [],
    [PropertyCode.K1622]: [],
    [PropertyCode.K1PJ3]: [],
    [PropertyCode.K1S654]: [],
    [PropertyCode.K2PJ3]: [],
    [PropertyCode.K3F]: [],
    [PropertyCode.K4F]: [],
    [PropertyCode.KUNIT]: [],
    [PropertyCode.LASC1]: [],
    [PropertyCode.LASC2]: [],
    [PropertyCode.LASC3]: [],
    [PropertyCode.LAST1]: [],
    [PropertyCode.LAST2]: [],
    [PropertyCode.LAST3]: [],
    [PropertyCode.MAXTC]: [],
    [PropertyCode.MCNOM]: [],
    [PropertyCode.MRELU]: [],
    [PropertyCode.N]: [],
    [PropertyCode.N1TO]: [],
    [PropertyCode.N622]: [],
    [PropertyCode.N622X06]: [],
    [PropertyCode.NASC1]: [],
    [PropertyCode.NASC2]: [],
    [PropertyCode.NASC3]: [],
    [PropertyCode.NAST1]: [],
    [PropertyCode.NAST2]: [],
    [PropertyCode.NAST3]: [],
    [PropertyCode.PDD]: [],
    [PropertyCode.QCC_INFO]: [],
    [PropertyCode.QCC_INFO2]: [],
    [PropertyCode.QCC]: [],
    [PropertyCode.QCF_INFO]: [],
    [PropertyCode.QCF_INFO2]: [],
    [PropertyCode.QCF]: [],
    [PropertyCode.S1EDCB_INFO]: [],
    [PropertyCode.S1EDCB_OK]: [],
    [PropertyCode.S1EDCB]: [],
    [PropertyCode.S2EDCA_INFO]: [],
    [PropertyCode.S2EDCA_OK]: [],
    [PropertyCode.S2EDCA]: [],
    [PropertyCode.SCO]: [],
    [PropertyCode.SIGCC_INFO]: [],
    [PropertyCode.SIGCC]: [],
    [PropertyCode.SIGRMAX]: [],
    [PropertyCode.SIGSF_INFO]: [],
    [PropertyCode.SIGSF]: [],
    [PropertyCode.SLM]: [],
    [PropertyCode.SLMY]: [],
    [PropertyCode.SLMZ]: [],
    [PropertyCode.SPBC_INFO]: [],
    [PropertyCode.SPBT_INFO]: [],
    [PropertyCode.SRDM]: [],
    [PropertyCode.SSAS]: [],
    [PropertyCode.STMY]: [],
    [PropertyCode.STMZ]: [],
    [PropertyCode.STR_MAX_SF]: [],
    [PropertyCode.STR_MAX_TO]: [],
    [PropertyCode.STR_MIN_SF]: [],
    [PropertyCode.STR_MIN_TO]: [],
    [PropertyCode.STR_SF]: [],
    [PropertyCode.STR_TO]: [],
    [PropertyCode.TCOR]: [],
    [PropertyCode.TDD]: [],
    [PropertyCode.TEF_INFO]: [],
    [PropertyCode.TEF]: [],
    [PropertyCode.TPSF]: [],
    [PropertyCode.TRDC]: [],
    [PropertyCode.TRDM]: [],
    [PropertyCode.TTVV_INFO]: [],
    [PropertyCode.TTVV]: [],
    [PropertyCode.VEDI_INFO]: [],
    [PropertyCode.VEDI]: [],
    [PropertyCode.VMC]: [],
    [PropertyCode.VMY]: [],
    [PropertyCode.VMZ]: [],
    [PropertyCode.VRDC_INFO]: [],
    [PropertyCode.VRDC]: [],
    [PropertyCode.VRDCY]: [],
    [PropertyCode.VRDCZ]: [],
    [PropertyCode.VRDI]: [],
    [PropertyCode.VRDM_INFO]: [],
    [PropertyCode.VRDM]: [],
    [PropertyCode.VRDMY]: [],
    [PropertyCode.VRDMZ]: [],
    [PropertyCode.WKF_INFO]: [],
    [PropertyCode.WKF_INFO2]: [],
    [PropertyCode.WKF]: [],
    [PropertyCode.XELU]: [],
    [PropertyCode.XQC_INFO]: [],
    [PropertyCode.XQC_INFO2]: [],
    [PropertyCode.XQC]: [],
    [PropertyCode.Z0CO]: [],
  };

  static isDependent(propertyCode: string) {
    return propertyCode in Properties.DependentProperties;
  }

  static getDependentValues(
    property: PropertyCode,
    properties: Record<PropertyCode, any>
  ): any[] | undefined {
    if (property in properties) {
      let values = [];
      let codes = Properties.DependentProperties[property];
      codes.forEach((code) => values.push(properties[code]));
      return values;
    } else {
      return undefined;
    }
  }

  A = 3;
  B = 2;
  C = 0;
  D = 0;
  E = 0;
  ABCO = '0.091930';
  ACC = '1';
  ACCB = '1';
  ACCO = '0.5';
  ACO = '4.5';
  ACT = '1';
  ACW = '1.00';
  ACWT = '1.00';
  AEC = '11.058897';
  AECO = '0.094697';
  AEF = '15';
  AGF = 'LIMESTONE';
  AISF = '0.89011780200006';
  ALC = '1';
  ALSF = '0.378';
  ALT = '1.900080';
  AM0D = '1.00';
  ARH = '80';
  ASC1 = '0';
  ASC1_INFO = '';
  ASCB = '24.543693';
  ASCB_INFO = '';
  ASCD = '24.5436926061703';
  ASCF = '0.001';
  ASCM = '0';
  ASF = '0.6';
  ASIH = '0';
  ASIN = '5.75';
  ASLSF = '0';
  ASMAIN = '20.363972';
  ASSMY = '4.38178';
  ASSMZ = '2.629068';
  ASST = '0.027449883351344';
  ASSY = '0';
  ASSYT = '0.027449883351344';
  ASSZ = '2.04030699267581';
  ASSZT = '2.06775687602715';
  AST1 = '3.62128560000013';
  AST1_INFO = '';
  ASTB = '4.523893';
  ASTB_INFO = '';
  ASTD = '4.5238934211693';
  ASTF = '0.609048';
  ASTM = '1.90008';
  ASWS = '0';
  ASWSM = '2.629068';
  ATO = '90.0';
  BAUTO = '0';
  BCC = '0.688246';
  BCO = '0.3';
  BCTT0 = '0.477756';
  BESF = '1.00';
  BFL = '0.3';
  BFLI = '0.30';
  CBAR = 'HY';
  CCC = '5.47';
  CCC_INFO = '< 0.6f<sub>ck</sub> = 18 MPa --> {{{OK}}} _GREEN_';
  CCC_INFO2 = '({{{Characteristic combination}}})';
  CCS = '265.48';
  CCS_INFO = '< 0.8f<sub>yk</sub> = 400 MPa --> {{{OK}}} _GREEN_';
  CCS_INFO2 = '({{{Characteristic combination}}})';
  CCSA = '0.3';
  CDF = 'PRD';
  CDY = '0';
  CDY_INFO = '{{{Shear stress allowable}}} _GREEN_';
  CFL = '50';
  CNOM = '50';
  CON = 'C3037';
  CRDC622 = '0.12';
  DFL = '0.47002';
  DLD17 = '1.1';
  DLD92 = '2.52';
  EC1 = '2.2';
  EC2 = '2';
  EC3 = '1.75';
  ECAT = '0.043233';
  ECDT = '0.070394';
  ECEFF = '18085';
  ECF = 'XD';
  ECM = '32836.5680313308';
  ECMT = '29354.9124';
  ECS = '0.113627';
  ECU1 = '3.5';
  ECU2 = '3.5';
  ECU3 = '3.5';
  EDS1 = '4';
  EDS2 = '0.12';
  ENT = 'MOMENTS';
  EPSUK = 'null';
  F0C = '1.707316';
  FBTT0 = '0';
  FCK = '30';
  FCKCUBE = '37';
  FCKT = '18.15';
  FCM = '38';
  FCMT = '26.1533318465364';
  FCTK005 = '2';
  FCTK095 = '3.8';
  FCTM = '2.9';
  FCTMT = '2';
  FDTT0 = '0';
  FED = '50';
  FNOK = '1';
  FTOK = '1';
  FTT0 = '0.815681';
  FYK = '500';
  GACF = '1.5';
  GCF = '0.08';
  GSF = '1.15';
  GTC = '0.1';
  GTF = '0.08';
  H0C = '240';
  HCC = '0.8';
  HCOC = '0';
  HED = '40';
  HFL = '0.5';
  HHFL = '0.25';
  HNS = '120';
  K = 'null';
  K1622 = '0.15';
  K1PJ3 = '0.25';
  K1S654 = '1';
  K2PJ3 = '0.5';
  K3F = '2.141866';
  K4F = '0.425';
  KCO = 'H';
  KUNIT = '10000';
  LASC1 = '25';
  LASC2 = '0';
  LASC3 = '0';
  LAST1 = '12';
  LAST2 = '32';
  LAST3 = '16';
  LEFFD = '6.3';
  LFL = 'LTL';
  LIFE = '0';
  LND = '6';
  MAXTC = '28';
  MCNOM = '0.05';
  MCSF = '0.19845';
  MED = '0.00';
  MELSC = '4.465125';
  MELSF = '4.465125';
  MELSQ = '4.465125';
  MELU = '6.400013';
  MPSF = '1.5876';
  MQSF = '2.480625';
  MRELU = '3.014406';
  MRSF = '0.19845';
  N = '2';
  N1TO = '0.528';
  N622 = '0.88';
  N622X06 = '0.528';
  NASC1 = '5';
  NASC2 = '0';
  NASC3 = '0';
  NAST1 = '4';
  NAST2 = '0';
  NAST3 = '0';
  NEDPI = '0.00';
  NEDSF = '0.00';
  NEDT = '0.00';
  NELSC = '0';
  NELSF = '0';
  NELSQ = '0';
  NELU = '0';
  PDD = '0.325304630112591';
  QCC = '5.47';
  QCC_INFO = '< 0.45f<sub>ck</sub> = 13.5 MPa --> {{{OK}}} _GREEN_';
  QCC_INFO2 = '({{{Quasi-permanent combination}}})';
  QCF = 'NaN';
  QCF_INFO = '';
  QCF_INFO2 = '({{{Quasi-permanent combination}}})';
  QPCC = '1.00';
  RH = '80';
  S1EDCB = '0.587967659772366';
  S1EDCB_INFO = '<';
  S1EDCB_OK = '1';
  S2EDCA = '0.234550145454561';
  S2EDCA_INFO = '<';
  S2EDCA_OK = '1';
  SCEC = '15';
  SCO = '0.25';
  SFC = '1';
  SFS = 'BEAM';
  SIGCC = '1.4';
  SIGCC_INFO = '';
  SIGRMAX = '14.96';
  SIGSF = '299.94';
  SIGSF_INFO = '';
  SLM = '0.315';
  SLMY = '0.165';
  SLMZ = '0.2';
  SPBC = '200';
  SPBC_INFO = '';
  SPBT = '200';
  SPBT_INFO = '';
  SRDM = '17.6';
  SREP = 'ROUGH';
  SRSF = '90.0';
  SSAS = '29.4798534798534';
  STA = 'NF_EN_1992_1_1_NA';
  STD = 'CBEAM';
  STMY = '0.165';
  STMZ = '0.315';
  STR_MAX_SF = '45';
  STR_MAX_TO = '45';
  STR_MIN_SF = '21.8';
  STR_MIN_TO = '21.8';
  STR_SF = '45.0';
  STR_TO = '45.0';
  T0C = '28';
  TABMI = '100';
  TACFL = '30';
  TCO = '100';
  TCOR = '50.100128';
  TDD = '1.06529145083096';
  TED = '0.01';
  TEF = '0.09375';
  TEF_INFO = '< 2gt {{{or}}} < 2gc --> {{{NOK!}}} _RED_';
  TPSF = '39.168160';
  TRDC = '2.094727';
  TRDM = '8.295117';
  TSC = '28';
  TSE = '1';
  TTVV = '0.0658412606854779';
  TTVV_INFO = '< 1 --> {{{OK}}} _GREEN_';
  TYC = 'N';
  UCO = '2.5';
  UDR = '2.5';
  UNIT = 'T';
  VED = '3.87007740000026';
  VEDI = '0.29569666666668';
  VEDI_INFO = '<';
  VEDR = '3.35320020000015';
  VEDY = '0.00';
  VEDYR = '0.00';
  VEDZ = '3.87';
  VEDZR = '3.35';
  VMC = '0.364409';
  VMY = '0.421196';
  VMZ = '0.421196';
  VRDC = '5.30706668016356';
  VRDC_INFO = '{{{Transverse reinforcement not required}}}';
  VRDCY = '5.757434';
  VRDCZ = '5.307067';
  VRDI = '0.533333';
  VRDM = '59.8752';
  VRDM_INFO = '{{{OK}}} _GREEN_';
  VRDMY = '52.272';
  VRDMZ = '59.875200';
  WKF = '0.229';
  WKF_INFO = '< w<sub>max</sub> = 0.3 mm --> {{{OK}}} _GREEN_';
  WKF_INFO2 = '({{{Quasi-permanent combination}}})';
  WMAX = '0.3';
  XELU = '0.032';
  XQC = '0.099';
  XQC_INFO = '';
  XQC_INFO2 = '({{{Quasi-permanent combination}}})';
  Z0CO = '0.597458';
}
