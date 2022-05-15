const url ='https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard';
const request =require('request');
const cheerio=require('cheerio');

request(url,cb)


function cb(error,response,html){
    if(error)
    {
        console.log(err)
    }
    else
    {
        extractMatchdetails(html)
    }
}


function extractMatchdetails(html)
{
    let $ =cheerio.load(html)

    let descElem= $('.header-info .description');
    // console.log(descElem.text()); //.text gives you the text inside the div or the variable 

    // 👉ans -->1st Match (N), Abu Dhabi, Sep 19 2020, Indian Premier League

    let descArr = descElem.text().split(',');

    // console.log(descArr);
    //👉 ans-->
    // [
    //     '1st Match (N)',
    //     ' Abu Dhabi',
    //     ' Sep 19 2020',
    //     ' Indian Premier League'
    //   ]

    let result =$('.match-info.match-info-MATCH.match-info-MATCH-half-width .status-text').text();
    let venue =descArr[1].trim();
    let date =descArr[2].trim();

    

    console.log(venue);
    // 👉ans ->Abu Dhabi
    console.log(date);
    // 👉ans -> Sep 19 2020
    console.log(result);
    // 👉ans->Super Kings won by 5 wickets (with 4 balls remaining)

    
}




