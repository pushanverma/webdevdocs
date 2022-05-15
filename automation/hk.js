const loginLink = "https://www.hackerrank.com/auth/login";

let puppeteer =require('puppeteer');

//puppeteer will only work with *promise only*

// to open a browser , we have a fn in puppeteer called launch which is promise based

console.log('Before');

let browserWillBeLaunched =puppeteer.launch({
    headless:false,
    defaultViewport:null,
    rgs:['--start-maximized']

})

// (from this we can open a page in the browser)
// browserWillBeLaunched.then(function(browseInstance){
//     return browseInstance
// })

browserWillBeLaunched.then(function(browseInstance){
    let newTabPromise =browseInstance.newPage();
    return newTabPromise;
}).then(function(newTab){
    console.log('New tab opened');
    let pageWillbeOpenedPromise =newTab.goto(loginLink);
    return pageWillbeOpenedPromise;
}).then(function(webPage){
    console.log('website opened');
})


console.log('After');