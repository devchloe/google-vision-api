# Google Cloud Project, Bucket 생성

# Node.js 개발 환경
## NVM 설치 
```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
$ export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
## NVM으로 npm, node 설치
```bash
$ nvm install node
$ node --version
$ which node
$ nvm ls-remote # nvm으로 설치할 수 있는 노드버전 목록
$ nvm install v10
$ nvm ls # 로컬에 설치한 노드버전
$ nvm use v10.x.x # 사용할 노드버전 명시
$ nvm alias default v10.x.x # 터미널에서 v10.x.x를 기본 버전으로 사용
$ which node
```

## Google Cloud SDK 다운로드 

## google-cloud/vision NodeJS용 클라이언트 라이브러리 설치 
```bash
$ npm install --save @google-cloud/vision
```

## Reference
https://cloud.google.com/vision/docs/libraries?hl=ko#client-libraries-install-nodejs
https://cloud.google.com/nodejs/docs/setup


# Node.js 클라이언트 라이브러리를 이용한 개발

## 클라이언트 라이브러리 실행을 위한 인증 설정
- Cloud SDK 다운로드 & 환경변수 설정 or https://cloud.google.com/docs/authentication/production?hl=ko
```bash
$ gcloud iam service-accounts create [NAME] # service account 생성 
$ gcloud projects add-iam-policy-binding [PROJECT_ID] --member "serviceAccount:[NAME]@[PROJECT_ID].iam.gserviceaccount.com" --role "roles/owner" # service account에 project 접근 권한 부여
$ gcloud iam service-accounts keys create [FILE_NAME].json --iam-account [NAME]@[PROJECT_ID].iam.gserviceaccount.com # key file 생성
```

gcloud config set account [ACCOUNT]
gcloud config set project [PROJECT_ID]


## 인증 credential를 환경변수로 설정 
```bash
$ export GOOGLE_APPLICATION_CREDENTIALS="[PATH]"
```

> Could not load the default credentials.
> resolved: gcloud auth application-default login

## 클라이언트 라이브러리 사용

### Sample - Labels
```js
const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient();

client
    .labelDetection('./resources/demo-image.jpg')
    .then(results => {
        const labels = results[0].labelAnnotations;

        console.log('Lables:');
        labels.forEach(label => console.log(label.description));
    })
    .catch(err => {
        console.error('Error:', err);
    });
```
### Sample - Text Detection
```js

```
## Reference
Node.js API 참조 문서
https://cloud.google.com/nodejs/docs/reference/vision/0.23.x/?hl=ko