//last ball comment :

const request =require('request')
const cheerio =require('cheerio')

let url ='https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary'
console.log('Before');

request(url,cb)

function cb(err,response,html)
{
    if(err)
    {
    console.error(err);
    }
    else
    {
    handlehtml(html)
    }
}


function handlehtml(html)
{
    let selTool =cheerio.load(html);

    let contentArr=selTool('')
}

console.log('After');