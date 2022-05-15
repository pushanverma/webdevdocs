const url ='https://www.espncricinfo.com/series/ipl-2020-21-1210595'
const request =require('request')
const cheerio =require('cheerio')


request(url,cb)


//response always comes , it is a part of sytax
// response gives us statuscode

function cb(err,response,html)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        extractLink(html);
    }
}

function extractLink(html)
{
    //loading all the html
 let $ =cheerio.load(html)
 
 //extracting view results button details
 let anchorElem =$('a[data-hover="View All Results"]');
    let link =anchorElem.attr('href');

    console.log(link);
    //👉ans ->/series/ipl-2020-21-1210595/match-results

    let fullink ='https://www.espncricinfo.com/'+link
    console.log(fullink);

    //👉ans ->https://www.espncricinfo.com//series/ipl-2020-21-1210595/match-results

    getAllmatchLink(fullink);
    

}

function getAllmatchLink(uri)
{
    //request module is used since we have to extract html 
    request(uri,function(error,response,html){
        if(error)
        {
            console.log(err);
        }
        else
        {
            extractAllLink(html);
        }

    })
}

function extractAllLink(html)
{
    let $ =cheerio.load(html);

    //here $ is the selector tool(you can treat $ as interface).

    let scoreCardArr=$('a[data-hover="Scorecard"]');

    for(let i=0;i<scoreCardArr.length;i++)
    {
        let link =$(scoreCardArr[i]).attr('href');
        let fulllink ='https://www.espncricinfo.com/'+link;
        console.log(fulllink);
    }
}