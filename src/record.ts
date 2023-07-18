export{};

// ２つのジェネリクス型を有する型
// Record<K, T>
// K にはユニオン型、

type Prefecture = 'Tokyo' | 'Osaka' | 'Chiba' | 'Shiga';

type Covid19InfectionInfo = {
    kanji_name: string;
    confirmed_cases: number;
};

const Covid19Japan: Record<Prefecture, Covid19InfectionInfo> = {
    Tokyo: { kanji_name: '東京', confirmed_cases: 1111 },
    Osaka: { kanji_name: '大阪', confirmed_cases: 100 },
    Chiba: { kanji_name: '千葉', confirmed_cases: 7777 },
    Shiga: { kanji_name: '滋賀', confirmed_cases: 7 }
};