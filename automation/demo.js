let puppeteer =require('puppeteer');

//puppeteer will only work with *promise only*

// to open a browser , we have a fn in puppeteer called launch which is promise based

console.log('Before');

let browserWillBeLaunchedPromise =puppeteer.launch({
    headless:false,
    // defaultViewport:null,
    // rgs:['--start-maximized']

})

// (from this we can open a page in the browser)
// browserWillBeLaunched.then(function(browseInstance){
//     return browseInstance
// })

browserWillBeLaunchedPromise.then(function(browseInstance){
    let newTabPromise =browseInstance.newPage();
    return newTabPromise;
}).then(function(newTab){
    console.log('New tab opened');
    let pageWillbeOpenedPromise =newTab.goto('https://www.pepcoding.com/resources/')
    return pageWillbeOpenedPromise;
}).then(function(){
    console.log('website opened');
}).catch(function(error)
{
    console.log(error);
})


console.log('After');