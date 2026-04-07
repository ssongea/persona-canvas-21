export interface Project {
  id: string;
  title: string;
  category: string[];
  description: string;
  role: string;
  duration: string;
  teamSize?: string;
  background: string;
  myRole: string[];
  process: { step: string; description: string }[];
  gallery: { url: string; label: string }[];
  outcomes: { value: string; label: string }[];
  coverGradient: string;
}

export const projects: Project[] = [
  {
    id: "hr-solution",
    title: "올인원 HR 솔루션 기획",
    category: ["UX/앱기획"],
    description: "근태·휴가·전자결재·급여를 통합하는 인사관리 플랫폼 UX 설계",
    role: "서비스 기획 (PPT 스토리보드 + Figma 상세 설계)",
    duration: "2023 – 2024",
    background:
      "기업 내 반복되는 인사 행정 업무의 비효율을 해결하고, 근태·휴가·급여·전자결재 데이터를 통합 관리할 수 있는 SaaS 플랫폼 도입이 필요했습니다.",
    myRole: [
      "PPT 스토리보드 작성 및 Figma 상세 화면 설계",
      "근태/휴가 차감 로직 및 잔여 연차 자동 계산 공식 수립 후 UI 구현",
      "급여 자동화: 휴직 기간별 급여 지급율 자동 연동 설계",
      "조직도 기반 동적 전자결재 워크플로우 UI 설계",
      "엑셀 대량 업로드 기능으로 실무자 운영 리소스 절감",
    ],
    process: [
      { step: "문제 정의", description: "요구사항 수집" },
      { step: "스토리보드", description: "PPT 스토리보드 작성" },
      { step: "화면 설계", description: "Figma 상세 설계" },
      { step: "기능 명세", description: "Spec 전달" },
      { step: "QA", description: "피드백 반영" },
    ],
    gallery: [
      { url: "", label: "PPT 스토리보드" },
      { url: "", label: "Figma 화면 설계" },
      { url: "", label: "기능정의서" },
      { url: "", label: "근태 로직 다이어그램" },
    ],
    outcomes: [
      { value: "100%", label: "기획-개발 커뮤니케이션 비용 최소화" },
      { value: "0건", label: "수기 업무 오류 (프로세스 표준화)" },
      { value: "3종", label: "통합 모듈 (근태·급여·전자결재)" },
    ],
    coverGradient: "from-[#1a1a2e] to-[#16213e]",
  },
  {
    id: "wizbl-wallet",
    title: "WIZBL WALLET — 블록체인 암호화폐 지갑",
    category: ["UX/앱기획", "글로벌 서비스"],
    description: "기술 장벽 높은 블록체인 지갑을 금융 앱처럼 쉽게 — Google Play Store 정식 출시",
    role: "서비스 기획 / UX 설계",
    duration: "2022 – 2023",
    background:
      "기술적 진입장벽이 높은 블록체인 지갑을 일반 사용자도 금융 앱처럼 직관적으로 사용할 수 있도록 UI/UX를 개선하고 실제 마켓에 출시하여 검증해야 했습니다.",
    myRole: [
      "UX 설계 및 서비스 기획 전담",
      "Google Play Console 금융·보안 정책 대응 및 기능 명세 조정",
      "QA 리스트 직접 작성 및 기능 명세 테스트",
      "토큰 송금 예외 케이스(대기/완료/실패) 시나리오 검증",
      "레드마인으로 실시간 QA 결과 공유 및 빠른 피드백 전달",
    ],
    process: [
      { step: "UX 리서치", description: "경쟁사 분석" },
      { step: "화면 설계", description: "기능 명세" },
      { step: "정책 대응", description: "QA 진행" },
      { step: "스토어 출시", description: "Google Play 배포" },
    ],
    gallery: [
      { url: "", label: "화면 설계서" },
      { url: "", label: "QA 테스트 시트" },
      { url: "", label: "트랜잭션 시나리오" },
      { url: "", label: "스토어 출시 화면" },
    ],
    outcomes: [
      { value: "3단계", label: "송금 프로세스 단순화" },
      { value: "완료", label: "Google Play Store 정식 등록" },
      { value: "전주기", label: "기획→런칭 전 과정 경험" },
    ],
    coverGradient: "from-[#0f3460] to-[#533483]",
  },
  {
    id: "dubai-medical",
    title: "두바이 의료관광 병원 예약 플랫폼",
    category: ["글로벌 서비스", "바이브코딩"],
    description: "아랍권 RTL UI·3개국어 지원, BASE44 바이브코딩으로 프로토타입 현지 시연",
    role: "글로벌 서비스 기획",
    duration: "2024",
    background:
      "아랍권 문화와 사용자 특성을 고려한 의료관광 예약 플랫폼이 필요했습니다. RTL(아랍어) UI 구조와 의사-환자 간 실시간 스케줄링 매칭이 핵심 과제였습니다.",
    myRole: [
      "글로벌 서비스 기획 전담",
      "RTL(아랍어) UI 레이아웃 및 한국어/영어/아랍어 3개국어 전환 UX 설계",
      "의사 진료 가능 시간-환자 예약 요청 실시간 동기화 캘린더 기능 기획",
      "BASE44 바이브코딩으로 작동하는 예약 프로토타입 직접 제작",
      "두바이 현지 클라이언트에게 실시간 시연으로 빠른 피드백 수렴",
    ],
    process: [
      { step: "사용자 리서치", description: "문화 분석" },
      { step: "RTL UI 설계", description: "다국어 구조" },
      { step: "프로토타입", description: "BASE44 제작" },
      { step: "현지 시연", description: "피드백 반영" },
    ],
    gallery: [
      { url: "", label: "RTL 화면 설계" },
      { url: "", label: "예약 매칭 로직" },
      { url: "", label: "BASE44 프로토타입" },
      { url: "", label: "다국어 UX 정의서" },
    ],
    outcomes: [
      { value: "3개국어", label: "한국어·영어·아랍어 동시 지원" },
      { value: "즉각", label: "바이브코딩 프로토타입 현지 시연" },
      { value: "Agile", label: "글로벌 기획 방식 체득" },
    ],
    coverGradient: "from-[#1b4332] to-[#081c15]",
  },
  {
    id: "estv",
    title: "ESTV — 글로벌 이스포츠 스트리밍 플랫폼",
    category: ["UX/앱기획", "글로벌 서비스"],
    description: "미국 대학 이스포츠 리그 24/7 라이브 스트리밍 + Watch-to-Earn 수익 모델 기획",
    role: "서비스 기획",
    duration: "2023 – 2024",
    background:
      "미국 대학 이스포츠 리그를 실시간 스트리밍하고, 광고 시청 시 포인트를 지급하여 인앱 스토어에서 사용하는 Watch-to-Earn 수익 모델의 글로벌 미디어 플랫폼을 기획했습니다.",
    myRole: [
      "서비스 기획 전담",
      "광고 끝까지 시청 시 포인트 실시간 적립 로직 설계",
      "부정 적립 방지를 위한 시청 시간 체크 로직 설계",
      "인앱 스토어 아이디어 기획",
      "디바이스 언어 설정에 따른 UI 텍스트 자동 변환 구조 설계",
    ],
    process: [
      { step: "BM 설계", description: "수익 모델 정의" },
      { step: "핵심 기능", description: "라이브·VOD·포인트" },
      { step: "다국어 구조", description: "글로벌 설계" },
      { step: "스토어 출시", description: "Google Play 배포" },
    ],
    gallery: [
      { url: "", label: "서비스 기획서" },
      { url: "", label: "포인트 적립 로직" },
      { url: "", label: "인앱 스토어 기획" },
      { url: "", label: "다국어 설계 구조" },
    ],
    outcomes: [
      { value: "완료", label: "Google Play Store 정식 런칭" },
      { value: "2개국어", label: "한국어·영어 글로벌 지원" },
      { value: "지속가능", label: "Watch-to-Earn 수익 모델" },
    ],
    coverGradient: "from-[#1a0533] to-[#3d0066]",
  },
  {
    id: "public-research",
    title: "공공기관 사회조사 및 타당성 분석 (다수)",
    category: ["리서치·분석"],
    description: "N=2,000+ 대규모 정량·정성 조사 설계, SPSS 통계 분석, 정책 타당성 보고서 작성",
    role: "조사 기획 및 데이터 분석 연구",
    duration: "2015 – 2021",
    background:
      "6년간 공공기관·대학·민간 대상 정량·정성 조사를 수행하며 대규모 데이터 속에서 사용자의 진짜 니즈를 발굴하고 정책 의사결정을 지원했습니다.",
    myRole: [
      "조사 목적에 부합하는 표본 설계 및 설문 로직 구조화",
      "SPSS·SAS 활용 빈도·교차·회귀 분석으로 비즈니스·정책 인사이트 도출",
      "FGD·IDI 정성 조사로 수치로 파악 불가능한 잠재적 니즈 구체화",
      "현상 분석-원인 진단-해결 방안 구조의 논리적 결과 보고서 작성",
      "신규 정책·사업 도입 전 타당성 사전 검증",
    ],
    process: [
      { step: "조사 설계", description: "표본 설정" },
      { step: "데이터 수집", description: "정량·정성 조사" },
      { step: "통계 분석", description: "SPSS 분석" },
      { step: "보고서 작성", description: "인사이트 도출" },
    ],
    gallery: [
      { url: "", label: "조사 설계서" },
      { url: "", label: "SPSS 분석 결과" },
      { url: "", label: "결과 보고서" },
      { url: "", label: "타당성 분석 보고서" },
    ],
    outcomes: [
      { value: "2,000명+", label: "프로젝트당 평균 표본 규모" },
      { value: "6년", label: "공공·민간 리서치 누적 경험" },
      { value: "다수", label: "정부·공공기관·대학 프로젝트" },
    ],
    coverGradient: "from-[#1c1c1c] to-[#3a3a3a]",
  },
];

export const categories = ["전체", "UX/앱기획", "리서치·분석", "글로벌 서비스", "바이브코딩"];
