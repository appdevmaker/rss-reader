# rss-reader
Custom Angular.js directive to read rss feeds.

<p>I decided to develop a simple version widget to read rss feeds. It may be useful when you often read several urls but you haven't a lot of time to do that.</p>
To solve that typical problem, you can use special web-widget, which could be integrated into real web-project or operates just as separeted component.

<p><img src="/mock/screen_rss_reader.png?raw=true" alt="rss-reader-angularjs" /></p>

<p><b>Features:</b></p>
<ul>
<li> Ability to work with several feeds. </li>
<li> Custom tuning and styling fields. </li>
<li> Work as separated component. </li>
</ul>

<p><b>How to use:</b></p>

Just include <b>rss-reader</b> directive into your www-project. To do this, paste rss-reader folder into your project root directory. As a result, the way to rss-reader files must be like this: <i>"directive/rss-reader/..."</i>.<br/>
Of course, your project have to contain Angular.js library.<br/>
<p>Rss-reader works like an html-element so you can initialize it:</p>
 
```html
<rss-reader options="{{rssOptions}}"></rss-reader>
```

Into your Controller.js you have to define <b>rssOptions</b>. You can see the list of changing properties below:

```javascript
    // display/hide search field
    "DisplaySearchField": true,
    // groups list to initial items sorting
    "GroupsList": [],
    // max items in rss panel
    "Max": 10,
    // rss block items style
    "RssBlockStyle": {
        "width": "100%",
        "height": "300px",
        "overflow-y": "scroll",
        "margin": "20px 0 0 0"
    },
    // open each link in separate window
    "SingleWindow": true,
    // title in the panel
    // ** Required **
    "Title": "Football News",
    // url to load rss items
    // ** Required **
    "Urls": [
        "http://feeds.epicurious.com/latestfeatures",
        "http://feeds.epicurious.com/newrecipes"
    ],
    // widget panel style
    "WidgetStyle": {
        'height': '500px', // ** Required **
        'width': '500px', // ** Required **
        'margin': '10px' // ** Required **
    }
```

If you use several url-feeds, you may change initial <b>group filters</b> to get more readeble news for yourself. This action assumes you set special key-words, which report through special filter procedure to get a new items list.