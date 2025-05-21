# 👜 GUCCI Website Renewal

<p align="center">
  <img src="https://oloklkl.github.io/Gucci/resources/images/pattern/common/logo.svg" alt="GUCCI logo" width="120" />
</p>

## ✨ 프로젝트 소개

**GUCCI 공식 홈페이지**를 퍼블리싱 관점에서 **트렌디하고 감각적인 스타일**로 리뉴얼한 개인 포트폴리오용 웹사이트입니다.  
기존 구조를 단순히 복제하는 데 그치지 않고, 사용자 경험(UX)과 시각적 몰입감을 강화하기 위한 다양한 인터랙션을 반영하였습니다.

## 🔧 사용 기술

- **HTML5 / SCSS / JavaScript (Vanilla JS)**
- **GSAP** – 인트로 애니메이션 및 콘텐츠 모션 구현
- **Swiper.js** – 슬라이더 UI 구성
- **Vite** – 개발 서버 및 번들링
- **GitHub Pages** – 배포

## 📁 주요 페이지 및 기능

| 페이지 | 설명 |
|--------|------|
| `index.html` | 인트로 및 추천 섹션, 이미지 배너 등 홈 구성 |
| `header.html` | GNB 영역 (로고, 네비게이션 등) |
| `footer.html` | 하단 정보 영역 |

### 💡 주요 특징

- 📱 **반응형 지원**: 모바일~PC 다양한 해상도에 최적화
- 🎞️ **인트로 애니메이션**: 문이 열리듯 전개되는 GSAP 효과
- 🖼️ **Swiper 활용 슬라이더**: 커버플로우 효과 및 터치 제스처 지원
- 💅 **SCSS 구조화**: 컴포넌트 기반으로 스타일 분리
- 📁 **모듈형 구조**: header, footer는 `include-html`을 통해 각 페이지에 삽입

## 📸 데모 미리보기

> 👉 [바로가기 (GitHub Pages)](https://oloklkl.github.io/Gucci/)

![gucci-preview](https://user-images.githubusercontent.com/your-image-url/preview.jpg)

## 📂 폴더 구조

Gucci/
├── index.html
├── collection.html
├── layout/
│ ├── header.html
│ └── footer.html
├── resources/
│ ├── images/
│ ├── scss/
│ └── js/
└── README.md


## 🧩 개발 중 어려웠던 점

- `include-html` 방식으로 header/footer를 삽입할 경우, **상대경로에서 이미지가 보이지 않는 문제** 발생 → 해결을 위해 **절대경로** 또는 **GitHub Pages 배포용 URL**을 사용하여 해결
- Swiper의 coverflow에서 **모바일 대응 시 spaceBetween 조절**을 위해 `breakpoints` 설정 적용

## 🧑‍💻 개발자 정보

- 이름: 조성주 (Sungjoo Cho)
- GitHub: [@oloklkl](https://github.com/oloklkl)
- 포지션: 퍼블리셔 & 프론트엔드 지향

## 📌 기타

- 본 프로젝트는 비상업적 포트폴리오 용도로 제작되었습니다.
