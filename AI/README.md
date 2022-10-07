# AI (Backend)
## 작성 버전
-  python==3.8.10 (gensim 3.8.3과의 호환 이슈)
### NLP
-  torch==1.6.0
-  gensim==3.8.3 (ko.bin과의 호환 이슈로 이전 버전 사용)
### 전처리
-  konlpy==0.5.2 (Komoran)
-  py-hanspell==1.1
-  emoji==0.6.0

## 레이어 구조
```mermaid
flowchart ID
    A[유저 히스토리(루틴 이름 벡터 평균) div==300] ----> C[입력 레이어 div=330]
    B[유저 히스토리(루틴 주기 벡터 평균) div==30] ----> C[입력 레이어 div=330]
    C ----> D[레이어 div=220]
    D ----> E[레이어 div=110]
    E ----> F[출력 레이어(루틴 30개 one-hot 벡터) div=30]
```