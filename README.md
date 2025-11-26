# 포트폴리오 웹사이트 템플릿

Next.js 16과 TypeScript를 기반으로 한 모던한 포트폴리오 웹사이트 템플릿입니다. JSON 파일만 수정하면 코드 수정 없이 내용을 업데이트할 수 있습니다.

## ✨ 주요 기능

- 📱 **완전 반응형 디자인** - 모바일, 태블릿, 데스크톱 모든 디바이스 지원
- 🌙 **다크 모드 지원** - 사용자가 테마를 선택할 수 있습니다
- 🚀 **SEO 최적화** - Next.js Metadata API와 JSON-LD 구조화된 데이터
- ⚡ **높은 성능** - 코드 스플리팅, 이미지 최적화, 동적 import
- 🎨 **모던한 UI** - Tailwind CSS와 Radix UI 기반
- 📝 **JSON 기반 데이터 관리** - 코드 수정 없이 내용만 업데이트

## 🚀 시작하기

### 설치

```bash
# 의존성 설치
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
npm start
```

## 📝 데이터 수정 가이드

모든 내용은 `src/data/` 폴더의 JSON 파일을 수정하여 변경할 수 있습니다.

### 1. 자기소개 섹션 수정

**파일 위치**: `src/data/aboutMe.json`

#### 수정 방법:

```json
{
  "name": "홍길동",                    // 화면 상단에 표시되는 이름
  "profileImg": "/profile.jpg",       // 프로필 이미지 경로 (public 폴더 기준)
  "job": "프론트엔드",                 // 직무 (예: "프론트엔드", "백엔드", "풀스택")
  "githubLink": "https://github.com/your-username",  // GitHub 프로필 링크
  "email": "your-email@example.com",  // 이메일 주소
  "introductions": [                   // 자기소개 문구들 (배열)
    "첫 번째 소개 문구입니다.",
    "두 번째 소개 문구입니다.",
    "세 번째 소개 문구입니다."
  ]
}
```

#### 화면에 표시되는 위치:
- **name**: 페이지 상단 "안녕하세요, {job} 개발자 {name}입니다." 형태로 표시
- **profileImg**: 왼쪽에 원형 프로필 이미지로 표시
- **job**: 이름 앞에 표시 (예: "프론트엔드 개발자")
- **githubLink**: 프로필 이미지 아래 GitHub 버튼으로 표시
- **email**: 프로필 이미지 아래 이메일 복사 버튼으로 표시
- **introductions**: 프로필 아래 불릿 포인트로 표시

#### 예시:

```json
{
  "name": "홍길동",
  "profileImg": "/my-profile.jpg",
  "job": "풀스택",
  "githubLink": "https://github.com/honggildong",
  "email": "hong@example.com",
  "introductions": [
    "React와 Node.js를 활용한 풀스택 개발 경험이 있습니다.",
    "사용자 경험을 중시하는 개발을 추구합니다."
  ]
}
```

---

### 2. 역량 섹션 수정

**파일 위치**: `src/data/competency.json`

#### 수정 방법:

```json
{
  "competencies": [
    {
      "title": "역량 제목",                    // 역량 카드의 제목
      "description": "역량에 대한 설명입니다.",  // 역량 설명
      "logos": [                              // 관련 기술 로고들
        {
          "src": "/logos/frontend/React.svg",  // 로고 이미지 경로
          "alt": "React Logo"                 // 이미지 대체 텍스트
        }
      ]
    }
  ]
}
```

#### 화면에 표시되는 위치:
- **title**: 역량 카드 상단에 큰 제목으로 표시
- **description**: 제목 아래 설명 텍스트로 표시
- **logos**: 설명 아래 기술 로고들이 나란히 표시

#### 예시:

```json
{
  "competencies": [
    {
      "title": "프론트엔드 개발",
      "description": "React와 Vue.js를 활용한 모던 프론트엔드 개발 경험이 있습니다.",
      "logos": [
        { "src": "/logos/frontend/React.svg", "alt": "React Logo" },
        { "src": "/logos/frontend/Vue.svg", "alt": "Vue Logo" }
      ]
    },
    {
      "title": "백엔드 개발",
      "description": "Node.js와 Express를 활용한 RESTful API 개발 경험이 있습니다.",
      "logos": [
        { "src": "/logos/backend/Node.js.svg", "alt": "Node.js Logo" }
      ]
    }
  ]
}
```

---

### 3. 기술 스택 섹션 수정

**파일 위치**: `src/data/skills.json`

#### 수정 방법:

```json
{
  "skills": [
    {
      "title": "카테고리 제목",              // 기술 카테고리 (예: "프론트엔드", "백엔드")
      "logos": [                            // 해당 카테고리의 기술 로고들
        {
          "src": "/logos/frontend/React.svg",  // 로고 이미지 경로
          "alt": "React Logo"                  // 이미지 대체 텍스트
        }
      ]
    }
  ]
}
```

#### 화면에 표시되는 위치:
- **title**: 기술 카드 상단에 제목으로 표시
- **logos**: 제목 아래 기술 로고들이 그리드 형태로 표시

#### 예시:

```json
{
  "skills": [
    {
      "title": "프론트엔드",
      "logos": [
        { "src": "/logos/frontend/React.svg", "alt": "React Logo" },
        { "src": "/logos/frontend/Next.js.svg", "alt": "Next.js Logo" },
        { "src": "/logos/frontend/TypeScript.svg", "alt": "TypeScript Logo" }
      ]
    },
    {
      "title": "백엔드",
      "logos": [
        { "src": "/logos/backend/Node.js.svg", "alt": "Node.js Logo" },
        { "src": "/logos/backend/Express.svg", "alt": "Express Logo" }
      ]
    }
  ]
}
```

---

### 4. 프로젝트 섹션 수정

**파일 위치**: `src/data/project.json`

#### 수정 방법:

```json
{
  "project": [
    {
      "id": 1,                                    // 프로젝트 고유 ID
      "title": "프로젝트 제목",                    // 프로젝트 이름
      "description": "프로젝트에 대한 간단한 설명입니다.",  // 프로젝트 요약 설명
      "team": "3명 (FE 2, BE 1)",                // 팀 구성
      "role": "Frontend",                         // 본인의 역할
      "period": "2024.01 ~ 2024.03",            // 프로젝트 기간
      "projectImage": [                          // 프로젝트 스크린샷 이미지들
        {
          "src": "/images/project1/image1.png",   // 이미지 경로
          "alt": "프로젝트 스크린샷 1"            // 이미지 대체 텍스트
        }
      ],
      "projectDescription": [                    // 프로젝트 상세 설명들
        {
          "id": 1,
          "content": "프로젝트의 첫 번째 상세 설명입니다."
        },
        {
          "id": 2,
          "content": "프로젝트의 두 번째 상세 설명입니다."
        }
      ],
      "techLogos": [                             // 사용한 기술 스택 로고들
        {
          "src": "/logos/frontend/React.svg",
          "alt": "React Logo"
        }
      ],
      "githubLink": "https://github.com/username/project",  // GitHub 링크
      "hoverBackground": "#ffffff",               // 카드 호버 시 배경색 (사용 안 함)
      "hoverBorder": "#000000"                   // 카드 호버 시 테두리 색상 (사용 안 함)
    }
  ]
}
```

#### 화면에 표시되는 위치:

**프로젝트 카드 (목록 화면)**:
- **title**: 카드 상단에 큰 제목으로 표시
- **period**: 제목 옆에 회색 텍스트로 표시
- **description**: 제목 아래 설명 텍스트로 표시
- **techLogos**: 설명 아래 기술 로고들이 작게 표시

**프로젝트 상세 다이얼로그 (카드 클릭 시)**:
- **title**: 다이얼로그 상단에 제목으로 표시
- **projectImage**: 이미지 캐러셀로 표시 (여러 이미지 슬라이드 가능)
- **description**: "프로젝트 설명" 섹션에 표시
- **techLogos**: "기술 스택" 섹션에 표시
- **team**: "참여인원" 항목에 표시
- **period**: "기간" 항목에 표시
- **githubLink**: "관련 링크" 항목에 GitHub 버튼으로 표시
- **role**: "역할" 항목에 표시
- **projectDescription**: "상세 내용" 섹션에 불릿 포인트로 표시

#### 예시:

```json
{
  "project": [
    {
      "id": 1,
      "title": "온라인 쇼핑몰",
      "description": "React와 Node.js를 활용한 풀스택 쇼핑몰 프로젝트입니다.",
      "team": "4명 (FE 2, BE 2)",
      "role": "Frontend Lead",
      "period": "2024.01 ~ 2024.04",
      "projectImage": [
        {
          "src": "/images/project1/home.png",
          "alt": "홈 화면"
        },
        {
          "src": "/images/project1/product.png",
          "alt": "상품 상세 화면"
        }
      ],
      "projectDescription": [
        {
          "id": 1,
          "content": "React Query를 활용한 서버 상태 관리 및 캐싱 최적화"
        },
        {
          "id": 2,
          "content": "Tailwind CSS를 활용한 반응형 디자인 구현"
        }
      ],
      "techLogos": [
        { "src": "/logos/frontend/React.svg", "alt": "React Logo" },
        { "src": "/logos/frontend/TypeScript.svg", "alt": "TypeScript Logo" }
      ],
      "githubLink": "https://github.com/username/shopping-mall",
      "hoverBackground": "#ffffff",
      "hoverBorder": "#000000"
    }
  ]
}
```

---

## 🖼️ 이미지 추가 방법

### 프로필 이미지 추가

1. 이미지 파일을 `public/` 폴더에 추가
2. `src/data/aboutMe.json`의 `profileImg` 필드에 경로 입력
   ```json
   {
     "profileImg": "/my-profile.jpg"
   }
   ```

### 프로젝트 이미지 추가

1. 프로젝트별 폴더 생성 (예: `public/images/project1/`)
2. 스크린샷 이미지들을 해당 폴더에 추가
3. `src/data/project.json`의 `projectImage` 배열에 추가
   ```json
   {
     "projectImage": [
       {
         "src": "/images/project1/screenshot1.png",
         "alt": "스크린샷 1"
       }
     ]
   }
   ```

### 기술 로고 추가

1. 로고 이미지를 적절한 폴더에 추가
   - 프론트엔드: `public/logos/frontend/`
   - 백엔드: `public/logos/backend/`
   - 협업: `public/logos/collaboration/`
2. JSON 파일에서 경로 참조
   ```json
   {
     "src": "/logos/frontend/React.svg",
     "alt": "React Logo"
   }
   ```

### 이미지 최적화 팁

- **형식**: PNG 또는 JPG 사용 권장
- **크기**: 프로젝트 이미지는 너비 800px 권장
- **압축**: 온라인 도구로 이미지 압축 후 사용 권장

---

## 🎨 커스터마이징

### 색상 변경

`src/app/globals.css` 파일에서 Tailwind CSS 변수를 수정할 수 있습니다.

### 폰트 변경

`src/app/layout.tsx` 파일에서 폰트를 변경할 수 있습니다:

```typescript
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
```

### 메타데이터 수정

`src/app/layout.tsx` 파일의 `metadata` 객체를 수정하여 SEO 정보를 변경할 수 있습니다.

---

## 📦 배포

### Vercel 배포 (권장)

1. GitHub에 프로젝트 푸시
2. [Vercel](https://vercel.com)에 접속
3. "New Project" 클릭
4. GitHub 저장소 선택
5. 자동으로 배포됨

### 다른 플랫폼 배포

```bash
npm run build
```

빌드된 파일은 `.next` 폴더에 생성됩니다.

---

## 📁 프로젝트 구조

```
Portfolio/
├── public/                 # 정적 파일 (이미지, 로고 등)
│   ├── images/           # 프로젝트 이미지
│   └── logos/            # 기술 스택 로고
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # 루트 레이아웃
│   │   └── page.tsx      # 홈페이지
│   ├── components/       # React 컴포넌트
│   ├── data/             # JSON 데이터 파일 ⭐ 여기를 수정하세요!
│   │   ├── aboutMe.json
│   │   ├── competency.json
│   │   ├── project.json
│   │   └── skills.json
│   ├── hooks/            # 커스텀 훅
│   ├── lib/              # 유틸리티 함수
│   └── types/            # TypeScript 타입 정의
└── package.json
```

---

## 🔧 기술 스택

- **Framework**: Next.js 16.0.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Font**: Geist (Vercel)

---

## 📝 주의사항

1. **JSON 파일 형식**: JSON 파일을 수정할 때 쉼표(`,`)와 따옴표(`"`)를 정확히 입력하세요.
2. **이미지 경로**: 모든 이미지 경로는 `public/` 폴더 기준으로 작성하세요. (예: `/images/project1.png`)
3. **배열 추가**: 프로젝트나 기술 스택을 추가할 때는 배열 안에 새 객체를 추가하세요.
4. **ID 중복**: 프로젝트의 `id`는 고유해야 합니다.

