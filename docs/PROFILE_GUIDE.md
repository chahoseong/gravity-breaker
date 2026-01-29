# 팀원 프로필 수정 가이드

이 문서는 팀원들이 자신의 프로필 정보를 수정하는 방법을 안내합니다.

## 📁 파일 위치

프로필 데이터는 다음 파일에 저장되어 있습니다:
- **데이터 파일**: `src/data/team-data.json`
- **프로필 사진**: `src/assets/images/team/`

## 🖼️ 프로필 사진 변경하기

### 1단계: 사진 준비
- **권장 크기**: 500x500px 이상의 정사각형 이미지
- **파일 형식**: JPG, PNG
- **파일명**: `member1.jpg`, `member2.jpg`, `member3.jpg`, `member4.jpg` 중 자신에게 해당하는 번호

### 2단계: 사진 업로드
1. 준비한 사진을 `src/assets/images/team/` 폴더에 복사
2. 기존 파일을 덮어쓰기 (예: `member1.jpg`)

**예시:**
```
src/assets/images/team/
├── member1.jpg  ← 여기에 자신의 사진 복사
├── member2.jpg
├── member3.jpg
└── member4.jpg
```

## ✏️ 프로필 정보 수정하기

### JSON 파일 열기
`src/data/team-data.json` 파일을 텍스트 에디터로 엽니다 (VS Code, 메모장 등).

### 수정 가능한 항목

각 팀원의 정보는 `crew` 배열 안에 있습니다. 자신의 인덱스를 찾아 수정하세요:
- `crew[0]` - 첫 번째 팀원
- `crew[1]` - 두 번째 팀원
- `crew[2]` - 세 번째 팀원
- `crew[3]` - 네 번째 팀원

#### 1. 기본 정보
```json
{
  "callsign": "ARES-1 LEAD",        // 호출 부호 (영문 대문자 권장)
  "realName": "홍길동",              // 실명
  "role": "Mission Director",       // 역할/직책
  "department": "Command",          // 부서
  "photo": "member1.jpg"            // 프로필 사진 파일명
}
```

#### 2. 연락처 정보
```json
"contact": {
  "commsId": "BHC1SX901",                    // 통신 ID (고유 코드)
  "techLog": "github.com/your-username"     // GitHub 주소
}
```

#### 3. 상태 정보
```json
"status": {
  "location": "Earth Orbit",      // 현재 위치
  "availability": "OPERATIONAL"   // 상태 (OPERATIONAL, STANDBY 등)
}
```

#### 4. 기술 스택
```json
"techStack": [
  { "name": "Python", "icon": "🐍" },
  { "name": "AWS", "icon": "☁️" },
  { "name": "Docker", "icon": "🐳" }
]
```

**사용 가능한 아이콘 예시:**
- Python: 🐍
- JavaScript: 💛
- React: ⚛️
- Node.js: 🟢
- AWS: ☁️
- Docker: 🐳
- Kubernetes: ☸️
- Rust: 🦀
- Go: 🔷
- C++: ⚙️

#### 5. 레이더 차트 데이터
```json
"radarData": {
  "focus": 95,           // 집중력 (0-100)
  "navigation": 88,      // 네비게이션 (0-100)
  "engineering": 92,     // 엔지니어링 (0-100)
  "communication": 85,   // 커뮤니케이션 (0-100)
  "survival": 90         // 생존력 (0-100)
}
```

**팁**: 각 항목은 0에서 100 사이의 숫자로 입력하세요.

## 📝 수정 예시

### 수정 전:
```json
{
  "callsign": "ARES-1 LEAD",
  "realName": "홍길동",
  "role": "Mission Director",
  "techStack": [
    { "name": "Python", "icon": "🐍" },
    { "name": "AWS", "icon": "☁️" }
  ]
}
```

### 수정 후:
```json
{
  "callsign": "NOVA COMMANDER",
  "realName": "김우주",
  "role": "Chief Technology Officer",
  "techStack": [
    { "name": "React", "icon": "⚛️" },
    { "name": "TypeScript", "icon": "💙" },
    { "name": "Docker", "icon": "🐳" }
  ]
}
```

## ⚠️ 주의사항

1. **JSON 형식 유지**: 쉼표(,), 중괄호({}), 대괄호([]) 등을 실수로 삭제하지 마세요
2. **따옴표 사용**: 모든 문자열은 큰따옴표("")로 감싸야 합니다
3. **마지막 항목**: 배열의 마지막 항목 뒤에는 쉼표를 붙이지 마세요
4. **파일 저장**: UTF-8 인코딩으로 저장하세요

## 🔍 변경사항 확인하기

1. 파일을 저장합니다
2. 브라우저에서 페이지를 새로고침합니다 (F5 또는 Ctrl+R)
3. 변경사항이 즉시 반영됩니다

## 🐛 문제 해결

### 페이지가 로드되지 않아요
- JSON 파일의 문법 오류를 확인하세요
- [JSONLint](https://jsonlint.com/)에서 파일 내용을 검증할 수 있습니다

### 프로필 사진이 안 보여요
- 파일명이 JSON에 입력한 것과 정확히 일치하는지 확인하세요
- 파일이 `src/assets/images/team/` 폴더에 있는지 확인하세요
- 파일 확장자가 올바른지 확인하세요 (.jpg, .png)

### 레이더 차트가 이상해요
- 모든 값이 0-100 사이의 숫자인지 확인하세요
- 숫자에 따옴표를 붙이지 않았는지 확인하세요

## 💡 팁

- **Git 사용**: 변경 전에 파일을 백업하거나 Git으로 버전 관리하세요
- **협업**: 여러 명이 동시에 수정할 때는 충돌을 방지하기 위해 순서를 정하세요
- **테스트**: 큰 변경을 하기 전에 작은 부분부터 수정하고 테스트하세요

## 📞 도움이 필요하신가요?

문제가 발생하면 팀 리더에게 문의하거나 GitHub Issue를 생성하세요.
