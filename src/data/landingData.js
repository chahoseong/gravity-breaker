export const engineSpecs = [
    {
        modelName: "GB-1 'Thunderbolt'",
        maxThrust: 850, // kN
        specificImpulse: 320, // sec
        isReusable: true,
        imageUrl: "assets/engine-1.jpg",
        description: "저궤도 물류의 주역. 신뢰성, 재사용성, 그리고 비용 효율성을 갖췄습니다."
    },
    {
        modelName: "GB-9 'Valkyrie'",
        maxThrust: 2300, // kN
        specificImpulse: 360, // sec
        isReusable: true,
        imageUrl: "assets/engine-2.jpg",
        description: "심우주 탐사를 위한 중량급 추진 능력. 다단계 연소 사이클로 구동됩니다."
    },
    {
        modelName: "GB-X 'Horizon'",
        maxThrust: 500, // kN
        specificImpulse: 450, // sec (Vacuum)
        isReusable: false,
        imageUrl: "assets/engine-3.jpg",
        description: "화성 및 그 너머로의 빠른 이동을 위한 차세대 원자력 열 추진 시스템."
    }
];

export const recentNews = [
    {
        id: "n1",
        title: "Valkyrie 엔진 정적 연소 시험 성공",
        date: "2026-01-15",
        summary: "GB-9 엔진이 105% 출력에서 목표 연소 시간을 달성하며 모든 성능 지표를 초과 달성했습니다.",
        thumbnail: "assets/news-fire.jpg",
        type: "MILESTONE"
    },
    {
        id: "n2",
        title: "Orbital Dynamics와 파트너십 발표",
        date: "2025-12-10",
        summary: "Gravity Breaker가 다가오는 OD-1 달 화물 임무를 위한 추진 시스템을 공급합니다.",
        thumbnail: "assets/news-partner.jpg",
        type: "PARTNERSHIP"
    },
    {
        id: "n3",
        title: "시리즈 B 투자 유치 완료",
        date: "2025-11-05",
        summary: "Horizon 원자력 열 엔진 프로그램 개발 가속화를 위해 1억 5천만 달러 규모의 투자를 유치했습니다.",
        thumbnail: "assets/news-check.jpg",
        type: "GENERIC"
    }
];
