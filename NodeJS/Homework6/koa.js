const Koa = require('koa');
const json=require('koa-json')
const koaRouter=require('koa-router')
const app = new Koa(); 
const port=3000
const router = new koaRouter()


app.use(json())

app.use(router.routes()).use(router.allowedMethods())


router.get('/',async ctx => ctx.body="<h1>HOSGELDINIZ</h1>")


router.get('/index',async ctx => ctx.body="<h1>INDEX SAYFASINA HOSGELDINIZ</h1>")

router.get('/about',async ctx => ctx.body="<h1>ABOUT SAYFASINA HOSGELDINIZ</h1>")

router.get('/contact',async ctx => ctx.body= "<h1>CONTACT SAYFASINA HOSGELDINIZ</h1>")

app.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı.`);
 });
  
