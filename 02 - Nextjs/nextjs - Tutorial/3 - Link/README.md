# Link in Nextjs 

## difference a tag vs next/link

زمانی که ما بخوایم به یک صحفه داخلی link بدیم از Link درونی nextjs استفاده می کنیم . 

قبل از Next.js 12.2 از تگ a برای لینک دهی استفاده میشد , 

اما در ورژن های بالاتر از 12.2 دیگه از Link درونی خوده nextjs استفاده میشه 

```javascript
import Link from "next/link";
<Link href="/about">about us page</Link>
```

هنوزم برای لینک دادن به صحفات خارج از وب سایت از تگ `a` استفاده می کنیم . 

```javascript
     <a href="https://nextjs.org/learn/basics/navigate-between-pages/link-component">
        Navigate Between Pages
      </a>
```
به دلیل اینکه link درونی nextjs کلاینت ساید هست


و این client-side بودن به این معنی که از javascript برای جابه جای استفاده میشه 


به همین دلیل link درون nextjs سریع تر از تگ a مربوط به دیفالت خوده مرورگر عمل می کنه 


برای بهتر متوجه شدن این موضوع می تونید به لینک زیر مربوط به داکیومنت خوده nextjs مراجعه کنید : 


<a href='https://nextjs.org/learn/basics/navigate-between-pages/client-side'>navigate-between-pages</a>

در nextjs مثل reactjs , هر صحفه انچیزی که نیاز هست رو رندر می کنه .


زمانی که یک صحفه رندر میشه به عنوان مثال صحفه اول وب سایت , صحفات دیگه وب سایت ما رندر نمی شن


 همین دلیل صحفه اصلی وب سایت ما سریع تر لود خواهد شد .
 
 
  فقط صحفاتی که می خواهیم وارد اونها شیم کد اون صحفه شروع میکنه به اجرا شدن
  
  
 اگر مشکلی برای کد های صحفه باشه فقط همون قسمت از برنامه ما از کار می افته  مانند reactjs . 
 

**نکته** : 

زمانی که از Link درونی nextjs میایم استفاده می کنیم . 

و صحفات داخلی رو لینک دهی می کنیم . 

به عنوان مثال درون صحفه home چند لینک داریم .
```javascript

export default function Home() {
  return (
    <main className="flex flex-col  justify-center items-center  h-screen">
      <h1 className="m-3 p-4 text-4xl"> we are talk about link in nextjs</h1>
      <h3>go to about use page </h3>
      <Link href="/about">about us page</Link>
      <h3 className="">Read about link in nextjs doc</h3>
      <a href="https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating">
        Linking and Navigating
      </a>
      <a href="https://nextjs.org/learn/basics/navigate-between-pages/link-component">
        Navigate Between Pages
      </a>
    </main>
  );
}
```

یه این موضوع توجه کنید وقتی که ما داریم به صحفه `about` لینک دهی رو انجام میدیم . 

```javascript
 <Link href="/about">about us page</Link>
```

داریم ادرس فولدر `about` رو قرار میدیم که درون فولدر `about` یک فایل به اسم `page` هست . 

<img src='https://github.com/mosenn/nextjs/assets/91747908/d5202926-122c-4a3a-bc80-4ee1385f787f' alt='nextjs Link'/>

که درون فایل `page` کد زیرو داریم : 

```javascript
import React from "react";
const About = () => {
  return (
    <div>
      <h1>About us</h1>
    </div>
  );
};
export default About;
```

کاری که nextjs انجام میده اینه که به صورت خودکار اون صحفه ای که لینک شده رو رندر می کنه

و زمانی که روی لینک کلیک میشه انتقال به صحفه سریعتر انجام میشه 

به این دلیل که از قبل رندر شدن صحفات یا به اصطلاحا به طور خودکار `prefetches ` شدن .

 این امکان باعث بالا رفتن سرعت لود صحفات میشه . 


**نکته**: حالت `prefetches` در حالت توسعه `development` فعال نیست و فقط در حالت `production` فعال هست . 


