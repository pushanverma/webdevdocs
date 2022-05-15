const request =require('request');
const cheerio=require('cheerio');



console.log('Before');

request('https://www.worldometers.info/coronavirus/',cb)


function cb(err,response,html)
{

    if(err)
    {
        console.error(err);
    }
    else
    {
        handlehtml(html);
    }

}

function handlehtml(html){

    let selTool =cheerio.load(html);

    let contentArr = selTool('.maincounter-number span')


    for(let i=0;i<contentArr.length;i++)
    {
        let data =selTool(contentArr[i]).text()
        console.log(data);
    }

    // ans -->
    // Before
    // After
    // 364,520,319
    // 5,648,938
    // 288,411,997
    let totalcases =selTool(contentArr[0]).text()
    
    let totalDeaths =selTool(contentArr[1]).text(); 
    let totalrecoeved =selTool(contentArr[2]).text();

    console.log("Total cases :->"+ totalcases);
    console.log("Total Deaths :->"+ totalDeaths);
    console.log("Total Recovered :->"+ totalrecoeved);


}






console.log('After');