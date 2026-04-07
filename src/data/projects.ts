export interface Project {
  id: string;
  title: string;
  category: string[];
  description: string;
  role: string;
  duration: string;
  teamSize: string;
  background: string;
  myRole: string[];
  process: { step: string; description: string }[];
  gallery: { url: string; label: string }[];
  outcomes: { value: string; label: string }[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "모바일 커머스 리디자인",
    category: ["UX기획", "리서치"],
    description: "전환율 개선을 위한 모바일 쇼핑 경험 전면 재설계",
    role: "서비스 기획자",
    duration: "2023.03 – 2023.08",
    teamSize: "기획 2, 디자인 3, 개발 5",
    background:
      "기존 모바일 커머스 앱의 전환율이 업계 평균 대비 낮은 상황에서, 사용자 리서치를 기반으로 핵심 퍼널의 UX를 재설계하여 비즈니스 성과를 개선하고자 한 프로젝트입니다.",
    myRole: [
      "사용자 인터뷰 10건 기획 및 진행",
      "퍼널 분석을 통한 이탈 구간 도출",
      "와이어프레임 및 프로토타입 제작",
      "A/B 테스트 설계 및 결과 분석",
    ],
    process: [
      { step: "리서치", description: "사용자 인터뷰 및 정량 데이터 분석" },
      { step: "문제 정의", description: "핵심 이탈 구간 및 Pain Point 도출" },
      { step: "설계", description: "와이어프레임, IA, 프로토타입 제작" },
      { step: "검증", description: "A/B 테스트 및 사용성 테스트 진행" },
    ],
    gallery: [
      { url: "", label: "IA 다이어그램" },
      { url: "", label: "와이어프레임" },
      { url: "", label: "Figma 프로토타입" },
      { url: "", label: "A/B 테스트 결과" },
    ],
    outcomes: [
      { value: "32%↑", label: "전환율 개선" },
      { value: "18%↓", label: "이탈률 감소" },
      { value: "4.2→4.6", label: "앱스토어 평점" },
    ],
  },
  {
    id: "project-2",
    title: "B2B SaaS 대시보드 기획",
    category: ["UX기획", "IA/정보구조", "기능정의"],
    description: "데이터 기반 의사결정을 돕는 어드민 대시보드 설계",
    role: "UX 기획자",
    duration: "2023.09 – 2024.02",
    teamSize: "기획 1, 디자인 2, 개발 4",
    background:
      "B2B 고객사들이 데이터를 효과적으로 활용하지 못하는 문제를 해결하기 위해, 직관적인 대시보드와 리포트 시스템을 기획한 프로젝트입니다.",
    myRole: [
      "고객사 인터뷰 및 요구사항 분석",
      "정보구조(IA) 설계",
      "기능정의서 및 화면정의서 작성",
      "디자인·개발팀 협업 리드",
    ],
    process: [
      { step: "요구사항 분석", description: "고객 인터뷰 및 경쟁사 분석" },
      { step: "IA 설계", description: "정보구조 및 네비게이션 설계" },
      { step: "기능 정의", description: "기능정의서 및 화면정의서 작성" },
      { step: "QA & 런칭", description: "사용성 테스트 및 개선 반복" },
    ],
    gallery: [
      { url: "", label: "기능정의서" },
      { url: "", label: "IA 구조도" },
      { url: "", label: "Figma 화면" },
      { url: "", label: "PPT 발표자료" },
    ],
    outcomes: [
      { value: "40%↑", label: "데이터 활용률" },
      { value: "NPS 72", label: "고객 만족도" },
      { value: "15개", label: "신규 고객사 확보" },
    ],
  },
];

export const categories = ["전체", "UX기획", "IA/정보구조", "기능정의", "리서치"];
