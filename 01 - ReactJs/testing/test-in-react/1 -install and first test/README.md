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
<br/>
<br/>

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
نصب می کنیم
<br/>
<br/>
یک فایل برای ما ایجاد می کنه به اسم vitejs.config.js 
<br/>
<br/>
نیاز هست یک سری config بهش اضافه کنیم
<br/>
<br/>
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
<br/>
<br/>
به صورت default بعد از نصب `defineConfig`
هستش و نیاز به نوشتنش نیست
<br/>
<br/>
اما چیزی که نیاز هست بهش اضافه کنیم config های مربوط به test هست . 

```javascript
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
  },
```

اولین globals هستش vitest به صورت default نمی تونیم از api هاش به طور global استفاده کنیم.
<br/>
<br/>
برای اینکه بتونیم به طور global به vitest دسترسی داشته باشیم درون کانفیگ globals رو روی true قرار میدیم. 

<br/>
<br/>

بعدی environment است که به طور default درون vitest این محیط بر روی nodejs هستش .
<br/>
<br/>
برای اینکه بتونیم درون web ازش استفاده کنیم نیاز هست از `jsdom` یا از `happy-dom` استفاده کنیم .
<br/>
<br/>
که بتونیم از ennironment درون محیط Web استفاده کنیم . که اینجا ما از `jsdom` استفاده کردیم .
<br/>
<br/>

مورد بعدی css هست که می تونیم روی true قرار بدیم.
<br/>
<br/>
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
<br/>
<br/>

خب کار های که بایدانجام میدادیم روانجام دادیم
ایجاد کنیم test می تونیم یک فایل
<br/>
<br/>
صرفا برای اینکه متوجه شیم که برنامه ما
اماده برای تست نویسی هست یا خیر
<br/>
<br/>
بعد از انجام مراح بالا درون پروژه یک فایل test.jsx ایجاد می کنیم .


<br/>
<p align="center">
  <img src="https://github.com/mosenn/test-in-react/assets/91747908/8d65f669-6ff5-4793-a56a-6db40040b93d" alt="file test"/>
</p>
<br/>

یک فایل به اسم User.test.jsx ایجاد کردیم همونطور که در عکس بالا مشاهده می کنید .
<br/>
<br/>
درون این فایل کد زیر رو داریم .
<br/>

```javascript
test("test");
```

صرفا یک فانکشن به اسم `()test` صدا زدیم و درونش یک `string` قرار دادیم
<br/>
<br/>

این string پیام تست ما هست که موقع run  شدن test به ما نمایش میده . 
<br/>
<br/>
می تونید هر چیزی که نیاز هست بنویسید . اینجا صرفا test رو نوشتیم . 

خب ترمینال vscode رو باز می کنیم . 
<br/>
<br/>
و دستور `npm test` رو می زنیم .
<br/>
<br/>
اتفاقی که باید بیوفته برنامه ما شروع می کنه به test کردن .

و اگر همه چیز اوکی باشه  `passed` رو به رنگ سبز درون ترمینال مشاهده می کنید .

<br/>
<br/>



<p align="center">
  <img src="https://github.com/mosenn/test-in-react/assets/91747908/a2528c33-5a32-4c88-b660-b50d368f00d9" alt="vscode terminal testing"/>
</p>


نصب و راه اندازی unit test در react که به وسیله vitejs نصب شده به پایان رسید .
<br/>
<br/>
در فولدر بعدی یک پروژه ساده todo list رو براش test می نویسیم . 
