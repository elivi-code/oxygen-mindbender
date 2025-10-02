export interface CardTheme {
    cardHeight: string;
    cardWidth: string;
    cardBackground: string;
    cardBoxShadow: string;
    cardBorder?: string;
    cardBorderTop: string;
    cardBorderRadius: string;
    cardHeaderFontWeight: string | number;
    cardHeaderFontSize: string;
    cardHeaderLineHeight: string;
    cardHeaderColor: string;
    cardSeparatorBackgroundColor: string;
    cardSeparatorHeight: string;
    cardSeparatorWidth: string;
}
declare const card: CardTheme;
declare const cardNovo: CardTheme;
declare const cardNovoDark: CardTheme;
declare const cardNeoLight: CardTheme;
declare const cardNeoDark: CardTheme;
export interface StatisticsTheme {
    numbersFontWeight: string | number;
    numbersFontSize: string;
    numbersLineHeight: string;
    numbersColor?: string;
    numbersColorError: string;
    textFontSize: string;
    textLineHeight: string;
    textColor: string;
    textColorError: string;
    boxMargin: string;
    boxWidth: string;
}
declare const statistics: StatisticsTheme;
declare const statisticsNovo: StatisticsTheme;
declare const statisticsNovoDark: StatisticsTheme;
declare const statisticsNeoLight: StatisticsTheme;
declare const statisticsNeoDark: StatisticsTheme;
export { card, cardNovo, cardNovoDark, cardNeoLight, cardNeoDark, statistics, statisticsNovo, statisticsNovoDark, statisticsNeoLight, statisticsNeoDark, };
//# sourceMappingURL=card.const.d.ts.map