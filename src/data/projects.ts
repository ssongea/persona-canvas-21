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
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: "hr-solution",
    title: "올인원 HR 솔루션 기획",
    category: ["UX/앱기획"],
    description: "경쟁사 리서치부터 Figma 화면 설계까지 — 근태·휴가·전자결재·급여를 통합하는 SaaS HR 플랫폼",
    role: "서비스 기획 (경쟁사 분석 → PPT 스토리보드 → Figma 상세 설계)",
    duration: "2023 – 2024",
    tags: ["Figma", "SaaS", "B2B", "UX 기획"],
    background:
      "기업 내 반복되는 인사 행정 업무의 비효율을 해결하기 위해 SaaS 형태의 통합 HR 솔루션 개발. 특히 노코드툴을 활용하여 각 기업별로 개발지식이 없는 담당자가 기업맞춤형 메뉴 구조 변경 가능. 서비스 기획에 앞서 시프티·플렉스·원티드스페이스·에버타임·워크업·유스트라HR 6개 경쟁사를 분석하여 출퇴근 관리·휴가·전자결재·급여 정산 등 HR 솔루션이 갖춰야 할 핵심 기능 도출.",
    myRole: [
      "6개 HR 경쟁사 기능 비교 분석 (시프티·플렉스·원티드스페이스·에버타임·워크업·유스트라HR)",
      "PPT 스토리보드 작성 및 Figma 상세 화면 설계",
      "반반차·오전/오후 반차 등 다양한 근무 유형별 휴가 차감 로직 및 잔여 연차 자동 계산 공식 수립",
      "휴직 기간별 급여 지급율 자동 연동 — 인사팀·재무팀 간 업무 정합성 확보",
      "조직도 기반 참조·합의·결재 라인 동적 UI 설계 (전자결재 워크플로우)",
      "엑셀 대량 업로드 기능 기획으로 실무자 운영 리소스 절감",
    ],
    process: [
      { step: "경쟁사 분석", description: "6개 HR 솔루션 기능 비교" },
      { step: "요구사항 정의", description: "핵심 기능 도출" },
      { step: "스토리보드", description: "PPT 화면 흐름 설계" },
      { step: "Figma 설계", description: "상세 화면 및 컴포넌트" },
      { step: "기능 명세", description: "개발팀 Spec 전달" },
    ],
    gallery: [
      { url: "/projects/hr/figma1.png", label: "교육 관리 화면 — 일괄 등록 모달" },
      { url: "/projects/hr/figma2.png", label: "휴직 정보 등록 — 달력 컴포넌트" },
      { url: "/projects/hr/figma3.png", label: "휴가 신청 — 결재선 및 승인 플로우" },
      { url: "/projects/hr/figma4.png", label: "증명서 발급 — 수신 대상 선택 모달" },
    ],
    outcomes: [
      { value: "6개사", label: "경쟁사 기능 비교 분석 완료" },
      { value: "3종", label: "통합 모듈 (근태·급여·전자결재)" },
      { value: "0건", label: "수기 업무 오류 (프로세스 표준화)" },
    ],
    coverGradient: "from-[#1a1a2e] to-[#16213e]",
  },
  {
    id: "kbio",
    title: "Korea Bio Platform — 글로벌 의료관광 플랫폼",
    category: ["UX/앱기획", "글로벌 서비스", "바이브코딩"],
    description: "한국 의료기술과 글로벌 소비자를 연결하는 토큰 기반 의료관광·헬스커머스 플랫폼 — 전체 IA 설계부터 병원·사용자 플로우 기획",
    role: "글로벌 서비스 기획 / IA 설계 / 프로토타입 제작",
    duration: "2025",
    tags: ["앱기획", "글로벌", "IA 설계", "다국어", "블록체인"],
    background:
      "전 세계 의료관광 시장은 연평균 15.7% 성장하며 2027년까지 약 2,730억 달러 규모로 확대될 전망. 한국의 세계적 수준 의료기술과 글로벌 소비자를 연결하는 토큰 기반 의료관광·헬스커머스 플랫폼 필요. 두바이 현지 클라이언트를 대상으로 프로토타입 시연을 통해 빠른 피드백 수렴이 핵심 과제.",
    myRole: [
      "플랫폼 전체 IA 설계 — 홈·시술의료·헬스커머스·여행숙박·파트너허브·마이페이지 6개 섹션",
      "글로벌 고객·병원/클리닉·브랜드/기업·플랫폼관리자 4개 사용자 그룹 정의",
      "사용자 예약 플로우 설계 — 홈→병원상세→예약하기→예약확인→완료→내역",
      "병원 관리 플로우 설계 — 등록→스케줄설정→예약현황→신규예약→알림",
      "RTL(아랍어) UI 구조 및 한국어·영어·아랍어 3개국어 전환 UX 설계",
      "바이브코딩으로 실제 작동하는 예약 화면 프로토타입 직접 구현",
      "두바이 현지 클라이언트 시연 — 시차·언어 장벽 없이 Agile 피드백 수렴",
    ],
    process: [
      { step: "시장 조사", description: "글로벌 의료관광 시장 분석" },
      { step: "사용자 정의", description: "4개 그룹 니즈 분석" },
      { step: "IA 설계", description: "전체 서비스 구조 설계" },
      { step: "플로우 설계", description: "사용자·병원 플로우" },
      { step: "프로토타입", description: "BASE44 바이브코딩 제작" },
      { step: "현지 시연", description: "두바이 클라이언트 피드백" },
    ],
    gallery: [
      { url: "/projects/kbio/kbio1.png", label: "플랫폼 소개 — 의료기술·토큰·의료관광·헬스커머스 4축" },
      { url: "/projects/kbio/kbio2.png", label: "전체 앱 IA — 6개 메인 섹션 구조" },
      { url: "/projects/kbio/kbio3.png", label: "서비스 구조 마인드맵 — 두바이·한국 서비스" },
      { url: "/projects/kbio/kbio4.png", label: "사용자 예약 플로우 차트" },
      { url: "/projects/kbio/kbio5.png", label: "병원 관리 플로우 차트" },
    ],
    outcomes: [
      { value: "6섹션", label: "전체 앱 IA 설계 완료" },
      { value: "3개국어", label: "한국어·영어·아랍어 동시 지원" },
      { value: "즉시 시연", label: "바이브코딩 프로토타입 현지 클라이언트 시연" },
    ],
    coverGradient: "from-[#1b4332] to-[#081c15]",
  },
  {
    id: "wizbl-wallet",
    title: "WIZBL WALLET — 블록체인 암호화폐 지갑",
    category: ["UX/앱기획", "글로벌 서비스"],
    description: "기술 장벽 높은 블록체인 지갑을 금융 앱처럼 직관적으로 — Google Play Store 정식 출시",
    role: "서비스 기획 / UX 설계",
    duration: "2022 – 2025",
    tags: ["금융", "블록체인", "QA", "Google Play"],
    background:
      "기술적 진입장벽이 높은 블록체인 지갑을 일반 사용자도 금융 앱처럼 직관적으로 사용할 수 있도록 UI/UX를 개선하고 실제 마켓에 출시하여 검증. Google Play Console의 엄격한 금융·보안 정책 심사 통과가 핵심 도전 과제.",
    myRole: [
      "서비스 기획 및 UX 설계 전담",
      "Google Play Console 금융·보안 정책 대응 — 반려 사유 분석 및 기능 명세 수정·재제출",
      "QA 리스트 직접 작성 및 기능 명세 테스트",
      "송금 대기·완료·실패 등 예외 케이스(Exception Case) 검증",
      "복잡한 송금 과정을 3단계(주소입력-확인-비밀번호)로 단순화",
      "레드마인 플랫폼으로 개발팀 실시간 QA 결과 공유 및 빠른 피드백 전달",
    ],
    process: [
      { step: "UX 리서치", description: "경쟁 앱 분석" },
      { step: "화면 설계", description: "Figma 기능 명세" },
      { step: "정책 대응", description: "Google Play 심사" },
      { step: "QA", description: "예외 케이스 검증" },
      { step: "스토어 출시", description: "정식 배포" },
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
    id: "estv",
    title: "ESTV — 글로벌 이스포츠 스트리밍 플랫폼",
    category: ["UX/앱기획", "글로벌 서비스"],
    description: "미국 대학 이스포츠 리그 24/7 라이브 스트리밍 + Watch-to-Earn 수익 모델 기획 — Google Play Store 런칭",
    role: "서비스 기획",
    duration: "2025",
    tags: ["웹앱서비스", "글로벌", "스트리밍플랫폼", "Google Play"],
    background:
      "미국 대학 이스포츠 리그를 실시간 스트리밍하고, 광고 시청 시 포인트를 지급하여 인앱 스토어에서 상품을 구매할 수 있는 Watch-to-Earn 수익 모델의 글로벌 미디어 플랫폼 기획. 콘텐츠 소비와 광고 수익이 연결되는 지속 가능한 비즈니스 모델 구현이 핵심.",
    myRole: [
      "서비스 기획 전담",
      "라이브 방송 광고 끝까지 시청 시 포인트 실시간 적립 로직 설계",
      "부정 적립 방지를 위한 시청 시간 체크 로직 설계",
      "인앱 스토어 아이디어 기획 — 포인트로 상품 구매 가능한 스토어",
      "디바이스 언어 설정에 따른 UI 텍스트 자동 변환 구조 설계 (한국어·영어)",
      "Google Play Store 정식 런칭 및 미국 중심 서비스 운영",
    ],
    process: [
      { step: "BM 설계", description: "Watch-to-Earn 수익 모델" },
      { step: "핵심 기능", description: "라이브·VOD·포인트 로직" },
      { step: "다국어 구조", description: "한국어·영어 자동 전환" },
      { step: "QA", description: "기능 검증" },
      { step: "스토어 출시", description: "Google Play 배포" },
    ],
    gallery: [
      { url: "/projects/estv/flow.png", label: "ESTV 서비스 플로우 차트" },
      { url: "", label: "Watch-to-Earn 포인트 로직" },
      { url: "", label: "인앱 스토어 기획" },
      { url: "", label: "다국어 설계 구조" },
    ],
    outcomes: [
      { value: "완료", label: "Google Play Store 정식 런칭" },
      { value: "2개국어", label: "한국어·영어 글로벌 지원" },
      { value: "지속가능", label: "Watch-to-Earn 수익 모델 구현" },
    ],
    coverGradient: "from-[#1a0533] to-[#3d0066]",
  },
  {
    id: "public-research",
    title: "공공기관·민간 소비자 조사 — 6년 리서치 경험",
    category: ["리서치·분석"],
    description: "N=2,000+ 대규모 정량·정성 조사 설계, SPSS/SAS 통계 분석, 정책 타당성 보고서 — 50건 이상 프로젝트 PM 수행",
    role: "조사 기획 · 데이터 분석 · PM (포커스컴퍼니 / 한국리서치)",
    duration: "2015 – 2021",
    tags: ["SPSS", "FGD", "IDI", "데이터 분석", "PM"],
    background:
      "포커스컴퍼니(2015–2017)와 한국리서치(2017–2021)에서 6년간 공공기관·대학·민간 대상 정량·정성 조사를 수행했습니다. 자동차·렌탈·금융·공공기관 등 10개 이상 업종에서 50건 이상의 CS·만족도 조사를 전 과정 독립 수행하며, 대규모 데이터 속에서 사용자의 진짜 니즈를 발굴하고 정책 의사결정을 지원했습니다.",
    myRole: [
      "조사 목적에 부합하는 표본 설계 및 설문 로직 구조화",
      "SPSS·SAS 활용 빈도·교차·회귀 분석으로 비즈니스·정책 인사이트 도출",
      "FGD·IDI 정성 조사 직접 설계 및 모더레이팅 — 잠재적 니즈 구체화",
      "현상 분석→원인 진단→해결 방안 구조의 논리적 결과 보고서 작성",
      "탑라인 가중치 작업 엑셀 매크로 자동화 — 업무량 80% 감소, 작업 시간 75% 단축",
      "청소년 건강패널 10년 종단연구 연구 총괄 PM — 예비조사 완수 후 본조사 계약 달성",
    ],
    process: [
      { step: "조사 설계", description: "표본·설문 로직 설계" },
      { step: "데이터 수집", description: "정량·정성 조사 운영" },
      { step: "통계 분석", description: "SPSS·SAS 분석" },
      { step: "인사이트 도출", description: "핵심 발견 및 시사점" },
      { step: "보고서 발표", description: "클라이언트 발표·제안" },
    ],
    gallery: [
      { url: "", label: "조사 설계서" },
      { url: "", label: "SPSS 통계 분석 결과" },
      { url: "", label: "결과 보고서" },
      { url: "", label: "가중치 자동화 매크로" },
    ],
    outcomes: [
      { value: "50건+", label: "CS·만족도 조사 수행 (10개 업종)" },
      { value: "80%", label: "가중치 작업 자동화로 업무량 감소" },
      { value: "6년", label: "정량·정성 조사 전 과정 독립 수행" },
    ],
    coverGradient: "from-[#1c1c1c] to-[#3a3a3a]",
  },
];

export const categories = ["전체", "UX/앱기획", "리서치·분석", "글로벌 서비스", "바이브코딩"];
