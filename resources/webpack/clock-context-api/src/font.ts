export interface IFontSet {
  fontName: string;
  fontsizelist: string;
}

export const DEFAULTFONT_FAMILIES_LIST: IFontSet[] = [
  {
    fontName: 'sans-serif',
    fontsizelist: '4,5,6,7,8,9',
  },
  {
    fontName: 'serif',
    fontsizelist: '4,5,6,7,8,9',
  },
  {
    fontName: 'monospace',
    fontsizelist: '4,5,6,7,8,9',
  },
];

export const WEBFONT_FAMILIES_LIST: IFontSet[] = [
  // font
  {
    fontName: 'Orbitron',
    fontsizelist: '4,5,6,7,8,9',
  },
  {
    fontName: 'Wallpoet',
    fontsizelist: '4',
  },
  {
    fontName: 'Roboto',
    fontsizelist: '1,3,7,9',
  },
  {
    fontName: 'Oswald',
    fontsizelist: '2,3,4,6,7,5',
  },
  {
    fontName: 'Balsamiq Sans',
    fontsizelist: '4,7',
  },
  {
    fontName: 'Anton',
    fontsizelist: '4',
  },
  {
    fontName: 'Barlow Condensed',
    fontsizelist: '1,2,3,4,5,6,7,8,9',
  },
  {
    fontName: 'Patrick Hand',
    fontsizelist: '4',
  },
  {
    fontName: 'Sacramento',
    fontsizelist: '4',
  },
  {
    fontName: 'Poiret One',
    fontsizelist: '4',
  },
  {
    fontName: 'Press Start 2P',
    fontsizelist: '4',
  },
  {
    fontName: 'Saira Condensed',
    fontsizelist: '1,2,3,4,5,6,7,8,9',
  },
  {
    fontName: 'Chakra Petch',
    fontsizelist: '3,4,5,6,7',
  },
  {
    fontName: 'Baloo Chettan 2',
    fontsizelist: '4,5,6,7,8',
  },
  {
    fontName: 'Coda',
    fontsizelist: '4,8',
  },
  {
    fontName: 'Saira Semi Condensed',
    fontsizelist: '1,2,3,4,5,6,7,8,9',
  },
  {
    fontName: 'Saira Extra Condensed',
    fontsizelist: '1,2,3,4,5,6,7,8,9',
  },
  {
    fontName: 'Aldrich',
    fontsizelist: '4',
  },
  {
    fontName: 'Stardos Stencil',
    fontsizelist: '4,7',
  },
  {
    fontName: 'Megrim',
    fontsizelist: '4',
  },
  {
    fontName: 'Iceland',
    fontsizelist: '4',
  },
  {
    fontName: 'Sarpanch',
    fontsizelist: '4,5,6,7,8,9',
  },
  {
    fontName: 'Shojumaru',
    fontsizelist: '4',
  },
  {
    fontName: 'Londrina Outline',
    fontsizelist: '4',
  },
  {
    fontName: 'Geo',
    fontsizelist: '4',
  },
  {
    fontName: 'Libre Barcode 39 Extended Text',
    fontsizelist: '4',
  },
  {
    fontName: 'Tulpen One',
    fontsizelist: '4',
  },
];

export const FONT_FAMILIES_LIST = Array.prototype.concat(DEFAULTFONT_FAMILIES_LIST, WEBFONT_FAMILIES_LIST);

export const WEBFONT_FAMILIES = WEBFONT_FAMILIES_LIST.map(({ fontName, fontsizelist }: IFontSet) => {
  const replacedFontSizeList = fontsizelist.replace(/(\d)/g, '$100');
  return `${fontName}:${replacedFontSizeList}`;
});

export const FONT_NAME_LIST = FONT_FAMILIES_LIST.map(({ fontName }: IFontSet) => {
  return `${fontName}`;
});

export const getEnabledFontSize = (fontName: string): number[] | undefined => {
  const filteredList = FONT_FAMILIES_LIST.filter((fontset) => {
    return fontset.fontName === fontName;
  });

  if (!filteredList.length) {
    return [400];
  }

  const result = filteredList[0].fontsizelist
    .replace(/(\d)/g, '$100')
    .split(',')
    .map((val) => {
      //console.log(val);
      return parseInt(val, 10);
    });

  console.log(result);

  return result;
};
