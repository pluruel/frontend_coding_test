# TEST_TODO

## How to Start

---

1. fork / clone
2. yarn install / npm install
3. yarn start / npm start

## Goal

---

1. 현재시간을 Current Time: 우측에 YYYY-MM-DD HH:MM:SS로 나타내주세요(1초마다 갱신).
2. Title, text, duetime를 입력하고 Submit을 클릭하면 아래에 새로운 태스크가 등록되게 해주세요.  
   a. 여기서 Duetime은 DD/HH/MM 으로 입력되며, 현재로부터 DD일 HH시간 MM분 후에 완료되어야 하는 Task를 의미합니다.  
   b. 칸이 비어있거나 포맷이 다르면 등록되지 않아야 합니다.
3. Left for the deadline항목이 비어있습니다. 해당 항목에 HH:MM:SS로 남은시간을 나타내주세요.
4. TODO 항목을 삭제할 수 있는 버튼을 만들어주세요.

### 보너스 문제(시간이 남으면 진행해주세요)

1. TODO를 작업 완료 일자를 기준으로 모으고 작업 완료 일자를 해당 묶음 위에 보이게 해 주세요  
   a. 위에서 구현된 기능은 전부 동작해야 합니다.
2. "created"를 누르면 TODO가 생성된 시간순으로 정렬이 되도록 만들어주세요 한번 더 클릭 시 원래 순서(id 순)로 돌아가야 합니다.
3. Undo/Redo 구현  
   a. 우측 상단에 버튼 두개를 만들어 Undo/Redo 기능을 구현해주세요.

## 주의사항

---

- 모든 시간은 KST(UTC+9) 기준입니다.
- 라이브러리는 자유롭게 사용하셔도 좋습니다.
- 적절한 주석과 명시적인 변수명 선택은 별도의 점수가 있습니다.
- 인터넷 검색하시면서 하셔도 됩니다.
- 자료구조는 자유롭게 바꾸셔도 됩니다.
