# FILMEET-FRONTEND

## 💡서비스 이름 및 소개

### FILMEET

> **Filmeet**는 유저가 자신의 영화 취향을 발견하고 즐거운 경험을 할 수 있도록 돕는 **영화 추천 플랫폼**입니다.

## 👪 팀원소개

|                                                              **곽지욱**                                                               |                                                              **윤기현**                                                               |                                                              **이성혁**                                                               |                                                              **안주섭**                                                               |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: |
| <center><img src="https://avatars.githubusercontent.com/u/99489686?v=4" width="150" height="180"></center> | <center><img src="https://avatars.githubusercontent.com/u/116802387?v=4" width="150" height="180"></center> | <center><img src="https://avatars.githubusercontent.com/u/180507068?v=4" width="150" height="180"></center> | <center><img src="https://avatars.githubusercontent.com/u/71184910?v=4" width="150" height="180"></center> |

## 🔗 기술스택

| **category**  |                                                                                                                                                                                                      **stack**                                                                                                                                                                                                       |
| :-----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  Environment  |                                                                                                          ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white) ![VITE](https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=Vite&logoColor=white)                                                                                                          |
|    Common     |                                                                                                        ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white)                                                                                             |
|   Language    |                                                                                                                                                ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)                                                                                                                                                 |
|     Style     |                                                                                           ![Styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Ant Design](https://img.shields.io/badge/Ant%20Design-0170FE?style=for-the-badge&logo=AntDesign&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white)                                                                                          |
| Data Fetching |                                                                                     ![Fetch](https://img.shields.io/badge/Fetch-4285F4?style=for-the-badge&logo=Fetch&logoColor=white) ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white)                                                                                      |
| Collaboration | ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white) ![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white) ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white) ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white) |

## 📚 라이브러리

- `@tanstack/react-query: "^5.49.2"`
- `vite-plugin-svgr: "^4.2.0"`

## Commit 메시지 구조

```
💡 `type: subject`

타입은 태그와 제목으로 구성되고, 태그는 영어
```

## Commit Type

| 타입         |설명                                                           | 예시                                                  |
| ------------ | -------------------------------------------------------------- | ----------------------------------------------------- |
| **feat**     | 새로운 기능을 추가할 때 사용합니다.                            | `feat: 로그인 폼 유효성 검사 추가`                 |
| **fix**      | 버그를 수정할 때 사용합니다.                                   | `fix: 로그인 버그 수정`                            |
| **style**    | 사용자 인터페이스 관련 변경 사항.                              | `style: 네비게이션 바 디자인 수정`                 |
| **refactor** | 버그 수정이나 기능 추가 없이 코드 구조를 개선할 때 사용합니다. | `refactor: 컴포넌트 상태 관리 로직 단순화`         |
| **perf**     | 성능을 개선하는 코드 변경.                                     | `perf: 이미지 로딩 시간 최적화`                   |
| **test**     | 테스트 코드를 추가하거나 수정할 때 사용합니다.                 | `test: 버튼 컴포넌트에 대한 단위 테스트 추가`      |
| **docs**     | 문서만 변경할 때 사용합니다.                                   | `docs: 설치 단계 README에 추가`                    |
| **chore**    | 소스나 테스트 파일을 수정하지 않는 일반적인 작업이나 업데이트. | `chore: 종속성 패키지 업데이트`                    |
| **revert**   | 이전 커밋을 되돌릴 때 사용합니다.                              | `revert: "로그인 폼 유효성 검사 추가" 커밋 되돌림` |
| **init**     | 프로젝트 초기 설정 시 사용합니다.                              | `init: React 프로젝트 초기 설정`                   |
| **delete**   | 코드/파일 삭제.                                                | `delete: 안 쓰는 로그인 컴포넌트 삭제`             |
| **wip**      | 작업 중이거나 실험적인 변경 사항.                              | `wip: 새로운 인증 방법을 실험 중`                  |

[참고](https://velog.io/@shin6403/Git-git-%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

<details>
<summary>  branch 전략  </summary>
<br />

- `Github flow`
- 브랜치 운영
  - `main` : 완전히 안전하다고 판단되었을 때, 즉 배포가 가능한 최종 merge하는 곳
  - `develop` : 배포하기 전 개발 중일 때 각자의 브랜치에서 merge하는 브랜치
  - `feature/페이지명/#issue-구현 기능`: feature 브랜치. 새로운 기능 개발
  - `init/페이지명/#issue-구현 기능` : init 브랜치. 초기세팅 구현
  - `fix/페이지명/#issue-구현 기능` : fix 브랜치. 버그가 발생 시 수정
  - `refactor/페이지명/#issue-구현 기능` : refactor 브랜치. 리팩토링 구현

```
main
  ㄴ develop
       ㄴ feature/페이지명/#이슈번호-구현 기능(소문자 스네이크 케이스)
```

</details>

<details>
<summary> 1️⃣ 코딩 컨벤션 </summary>
<br />

- **컴포넌트**
  - `rjsfcp` → 팀원들과 이미 맞춘 스니펫을 사용.
  - 인터페이스 네이밍은 `컴포넌트 네임 + Props`로 작성.
  - `props`는 **구조 분해 할당**을 사용하여 가져온다.
  - 필수적인 prop이 아닌 경우 **`?:`(optional) 타입**으로 선언.
  - `?:` 옵셔널 타입의 prop은 사용 시 `undefined`가 될 수 있으므로, 구조 분해 할당 시 **default 값을 할당**.
    ```jsx
    const Button = ({ size = 'medium' }) => { ... }
    ```

- **폴더명**
  - 소문자로 시작.
  - **단수형**으로 작성.
  - **camelCase** 사용.

- **타입**
  - 컴포넌트 인터페이스 생성 시 **`HTMLAttributes` 혹은 `ComponentWith(out)Props` 인터페이스 상속** 적극 고려.
  - 상속 사용 시 **`rest` 문법**으로 작성한 `...props`를 컴포넌트 prop으로 넘겨준다.
    ```jsx
    const Button = ({ ...props }: ButtonProps) => {
      return <button {...props}>Button</button>
    }
    ```
  - 타입 네이밍은 **PascalCase** 사용.

- **변수**
  - `var` 절대 사용 금지.
  - 상수는 **대문자 스네이크 케이스** 사용: `GUIDE_MESSAGE`.
  - 변수명은 길어져도 무방하며, 의미가 퇴색되지 않도록 **명확히 작성**.
  - Boolean 변수는 `is`로 시작: `isOpen`, `isSelected`.

- **함수**
  - **화살표 함수**로 작성.
  - 함수 네이밍은 **동사 + 목적어**로 작성: `checkValidation`, `getResult`.
  - 분기 처리(조건문)가 많을 경우 **early return** 권장.

- **기타**
  - **선언형 프로그래밍**: `forEach`, `map` 등을 적극 사용, `for`, `while`은 지양.
  - **구조 분해 할당**: 객체 및 배열에서 적극 활용.
  - **시맨틱 태그** 적극 사용.
  - 무분별한 `div` 사용 지양.
  - CSS 단위는 **`px` 대신 `rem`** 사용.
  - `img` 태그에는 반드시 **`alt`** 속성을 추가.

</details>

<details>
<summary> 2️⃣ 네이밍 컨벤션 </summary>
<br />

- **컴포넌트**: 파스칼 케이스 `PascalCase` 사용.  
  - 예: `MainHeader`.

- **이벤트 핸들러**: 카멜 케이스 사용, `handle`로 시작.  
  - 예: `handleClick`.

- **이벤트 핸들러 prop**: 카멜 케이스 사용, `on`으로 시작.  
  - 예: `onClick`.

- **기타 변수명**: 카멜 케이스 `camelCase` 사용.

- **도메인을 포함한 컴포넌트의 prop**: 도메인을 포함하여 작성.  
  - 예: `onReservationComplete`.

- **Boolean Prop**: `is`로 시작.  
  - 예: `isClicked`, `isOpen`, `isSelected`.

- **유틸 함수**: `동사 + 목적어` 형식.  
  - 예: `checkValidation`, `getCalculatedAge`.

- **타입명**:
  - **직관적으로 작성**: PascalCase 사용.
  - **prop 타입**: `ButtonProps` (컴포넌트명 + Props).
  - **API 응답 타입**: `-Data` 접미사 사용.
  - **객체 변수 타입**: 해당 객체가 무엇인지 명확히 작성.
    - 예: `MemberId`, `UserInfo`.

</details>

## 폴더 구조
