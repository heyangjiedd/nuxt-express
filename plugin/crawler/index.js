const puppeteer = require('puppeteer');
const url= 'https://news.dmzj.com/donghuaqingbao'
const crawler = async (req,res,next)=>{
    const brower = await puppeteer.launch({
        headless:true,
        args:['--no-sandbox']
    });
    console.log('爬虫启动');
    const page = await brower.newPage();
    await page.goto(url);
    const result = await page.evaluate(()=>{
        var $ = window.$;
        var title = $('.li_img_de h3');
        var crawlerData = [];
        for(let i = 0;i< title.length;i++){
            crawlerData.push(title[i].textContent)
        }
        return crawlerData
    });
    console.log(result)
    await brower.close();
    next();
}

module.exports = crawler