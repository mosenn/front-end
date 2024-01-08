# vitejs در unit test نصب و راه اندازی

امروزه برای نصب ریکت از  vitejs
استفاده میشه پس طبعا نیاز داریم که در قدم اول vitejs
رو نصب کنیم

### install

```javascript
npm create vite@latest
```

روش های نصب دیگه هم هست برای vitejs که می تونید 
درون وب سایت خوده vitejs مشاهده کنید 

### website

[https://vitejs.dev/guide/](https://vitejs.dev/guide/)

### install vitest

برای اینکه بتونیم تست رو درون vitejs
 انجام بدیم نیاز  به یک کتابخونه به اسم vitest داریم 


```javascript
npm install -D vitest
```

از اونجای که تست صرفا در محیط development برنامه انجام میشه 
خوده کتابخونه vitest از D- استفاده کرده .
اینکار باعث میشه vitest درون devDependencies قرار بگیره

```javascript
"devDependencies": {"vitest": "^0.31.4"}
```

### vitest Website

[https://vitest.dev](https://vitest.dev)

### install testing Library

بعد از اینکه نصب انجام شد نوبت نصب library های تست هستش 

```javascript
npm i jsdom
npm i @testing-library/jest-dom
npm i @testing-library/react
npm i @testing-library/user-event
```

می تونید همه رو یک جا به این صورت نصب کنید

```javascript
npm i jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

### vitejs.config.js

زمانی که یک پروژه ریکت به وسیله vitejs
نصب می کنیم یک فایل برای ما ایجاد می کنه به اسم vitejs.config.js
نیاز هست یک سری config بهش اضافه کنیم
برای دیدن config های بیشتر مروبط به vitest می تونید به لینک زیر مراجعه کنید


[https://vitest.dev/config/](https://vitest.dev/config/)

```javascript
/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
  },
});
```

در قسمت بالا 2 تا reference داریم که هر دو نیاز هست اضافه شه
اشاره می کنه به vitejs و vitest


```javascript
/// <reference types="vitest"/>
/// <reference types="vite/client"/>
```

دقت داشته باشید که حتما 3 تا back slash رو بزارید
در غیر این صورت با ارور مواجه می شید
به صورت default بعد از نصب `defineConfig`
هستش و نیاز به نوشتنش نیست 
اما چیزی که نیاز هست بهش اضافه کنیم config های مربوط به test هست . 

```javascript
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
  },
```

اولین globals هستش اجازه میده به طور global به test ها 
دسترسی داشته باشیم . 

بعدی environment نوع متغییر رو مشخص می کنه 
که بهش گفته شد  jsdom استفاده کنه که نصب کردیم اول کار  

مورد بعدی css هست که می تونیم روی true قرار بدیم 
و زمانی که روی true قرار بدیم می تونیم برای css ها هم تست بنویسیم . 

### script Package.json

تنها کاری که مونده نیاز هست یک script مربوط به test 
درون package.json اضافه کنیم 

```javascript
  "scripts": {
    "test": "vitest",
  }
```
داریم از vitest برای test نویسی استفاده می کنیم 
در نهایت test رو برابر با vitest قرار میدیم .

خب کار های که بایدانجام میدادیم روانجام دادیم
ایجاد کنیم test می تونیم یک فایل
صرفا برای اینکه متوجه شیم که برنامه ما
اماده برای تست نویسی هست یا خیر
