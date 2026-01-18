## 접속 확인 
- https://tools-httpstatus.pickup-services.com/200
- https://tools-httpstatus.pickup-services.com/404
- https://tools-httpstatus.pickup-services.com/500

<br>



## ◆ httpstat.us / 404
- 서버는 살아 있고 응답 
- 잘못된 주소 요청 
- 인증/토큰 없거나 만료 상태이거나
- 권한 없는 기능이 접근하거나 

## ◆ httpstat.us / 500 
- 서버 내부에서 터지는 
- 코드 실행 중에 에러가 생김
- 처리하다가 사망 ( 서버 과부하 아니면 다운 )
- 외부 API 장애거나

## 4xx (클라이언트 에러)와 5xx(서버에러) 차이점

| 구분 |  4xx 클라언트 에러 | 5xx 서버 에러 |
|:---:|:---:|:---:|
| 책임 | 클라언트| 서버 | 
| 상태 | 정상 | 비정상 |
| 요청 | 필요 | 불필요 | 
| 해결 담당 | 프론트엔드 | 백엔드 | 
| 예시 | 400,401,403,404 | 500,502, 503 | 

