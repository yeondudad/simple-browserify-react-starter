# Simple Browserify React Starter

## Getting started

저장소를 클론하고 서버를 구동시켜 애플리케이션 개발을 시작할 수 있습니다.

```
$ git clone git@github.com:UYEONG/simple-browserify-react-starter.git
$ cd simple-browserify-react-starter
$ npm install
$ npm start

listening on port 3000 and waiting for changes.
```

추가적인 npm 명령어는 다음과 같습니다.

```
$ npm run lint  # 코드 스타일 점검
$ npm run test  # 자바스크립트 코드 테스트
$ npm run build # 빌드하여 제품 코드 생성
$ npm run start # 개발용 서버 실행
```

## Live Reload

빌드 시 아래 인자를 추가하면 개발 코드가 변경 됐을 때 자동으로 빌드하고 브라우저를 리로드할 수 있습니다.

```
$ npm run build -- --watch --port 3000
```

## License

MIT License.
