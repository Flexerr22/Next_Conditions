export const manufactures = [
    {
        name: 'Ballu',
        description: 'Производитель 1',
    },

    {
        name: 'Electroluxe',
        description: 'Производитель 2',
    },

    {
        name: 'Energoluxe',
        description: 'Производитель 3',
    },

    {
        name: 'Haier',
        description: 'Производитель 4',
    },

    {
        name: 'Toshiba',
        description: 'Производитель 5',
    },
]

export const products = [
    {
        name: 'Ballu BSK-07HN1',
        imageUrl: 'https://example.com/ballu_bsk_07hn1.jpg',
        description: 'Энергосберегающий кондиционер с функцией охлаждения и обогрева.',
        attributes: {
            capacity: '2.0 kW',
            energyEfficiencyClass: 'A++',
            noiseLevel: '25 dB',
            features: ['Сплит-система', 'Инверторный компрессор'],
        },
        price: 25000,
        manufacture_id: 1, // Предполагаем, что это ID производителя Ballu
    },
    {
        name: 'Electrolux EACM-09HF/N3',
        imageUrl: 'https://example.com/electrolux_eacm_09hf_n3.jpg',
        description: 'Кондиционер с функцией обогрева и охлаждения, подходит для помещений до 30 м².',
        attributes: {
            capacity: '2.7 kW',
            energyEfficiencyClass: 'A+',
            noiseLevel: '28 dB',
            features: ['Фреон R-32', 'Таймер'],
        },
        price: 32000,
        manufacture_id: 2, // ID для Electrolux
    },
    {
        name: 'Energoluxe EAC-12',
        imageUrl: 'https://example.com/energoluxe_eac_12.jpg',
        description: 'Кондиционер с высокой надежностью и хорошей производительностью.',
        attributes: {
            capacity: '3.5 kW',
            energyEfficiencyClass: 'A',
            noiseLevel: '35 dB',
            features: ['Инвертор', 'Wi-Fi управление'],
        },
        price: 29000,
        manufacture_id: 3, // ID для Energoluxe
    },
    {
        name: 'Haier HSU-12HNK03',
        imageUrl: 'https://example.com/haier_hsu_12hnk03.jpg',
        description: 'Современный кондиционер с низким уровнем шума и стильным дизайном.',
        attributes: {
            capacity: '3.5 kW',
            energyEfficiencyClass: 'A++',
            noiseLevel: '22 dB',
            features: ['Автоматическое очищение', 'Энергосберегающий режим'],
        },
        price: 35000,
        manufacture_id: 4, // ID для Haier
    },
    {
        name: 'Toshiba RAS-10N3KVR-E',
        imageUrl: 'https://example.com/toshiba_ras_10n3kvr_e.jpg',
        description: 'Кондиционер, который обеспечивает комфортный климат независимо от погоды.',
        attributes: {
            capacity: '2.2 kW',
            energyEfficiencyClass: 'A++',
            noiseLevel: '30 dB',
            features: ['Ночной режим', 'Фильтр PM 2.5'],
        },
        price: 31000,
        manufacture_id: 5, // ID для Toshiba
    },
];