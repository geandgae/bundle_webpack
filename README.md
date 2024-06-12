# bundle_webpack
webpack test

* src/assets/js/ui.js = page 
* src/ia/core.js = guide 

* dev serve 실시간 감지 / dist는 스타일과 js

* HtmlWebpackPlugin / hot

* webpack server live


devServer 설정:

static: 정적 파일이 제공될 경로입니다.
hot: HMR을 활성화합니다.
open: 서버 시작 시 브라우저를 엽니다.
watchFiles: 감시할 파일 경로를 명시적으로 설정하여 파일 변경을 감지합니다.



my-project/
|-- dist/
|-- src/
|   |-- index.html
|   |-- assets/
|       |-- scss/
|           |-- styles.scss
|-- package.json
|-- webpack.config.js


cmd tree ./폴더명

src/
├─assets
│  ├─images
│  ├─js
│  │  |-- main.js
│  └─styles
│      ├─css
│      ├─fonts
│      └─scss
│         |-- style.js
└─html
    ├─ia
    │  |-- index.html
    └─pages


my_project/
├── README.md
├── .gitignore
├── src/
├── assets/
│   ├── images/
│   │   └── (image files)
│   ├── js/
│   │   └── main.js
│   ├── styles/
│       ├── css/
│       │   └── (compiled CSS files)
│       ├── fonts/
│       │   └── (font files)
│       └── scss/
│           └── style.scss
└── html/
    ├── ia/
    │   └── index.html
    └── pages/
        └── (other HTML pages)


my_project/
├── README.md
├── .gitignore
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── (image files)
│   │   ├── js/
│   │   │   └── main.js
│   │   └── styles/
│   │       ├── css/
│   │       │   └── (compiled CSS files)
│   │       ├── fonts/
│   │       │   └── (font files)
│   │       └── scss/
│   │           └── style.scss
│   └── html/
│       ├── index.html
│       └── pages/
│           └── (additional HTML pages)
└── docs/
    └── (documentation files)

    my_project/src/assets/style/css/



- 웹팩을 사용해서 프로젝트를 관리할거임
- ia/index.html을 시작화면
- style.scss를 컴파일 하면 my_project/src/assets/style/css/ 폴더에 저장 (압축하지 않음)
- main.js는 my_project/src/assets/js/bundle 폴더에 저장 (난독화 및 압축)
- webpackserver를 사용해서 테스트