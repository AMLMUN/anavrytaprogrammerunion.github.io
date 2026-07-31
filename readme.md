Welcome abroad.

This is the official AMLMUN website repository. I am leaving you here a small documentation so that you can get started.

All the main pages are located in the same level as this document. The first-level files are as follows:



\-agenda.html: the agenda page.

\-amend.html: this is an unused test page for submitting amendments dating back to the 4th AMLMUN, if you open it you'll see it's very broken.

\-announcements.html: the announcements page. While adding announcements, take GREAT care to put only up to 3 announcements in a row, otherwise the page's layout will eventually break and be utter hell.

\-anycolouryoulike.php: the backfront of amend.html. For security reasons, I named it after the Pink Floyd (aka my favorite band) song "Any Colour You Like" so it's more undetectable by bots.

\-archives.html: the archive page, the "archives" folder supposedly contains pages for each of the conferences, but in reality most of them do not exist.

\-article-template.html: unused page that basically contains a sample article layout that can be used for announcements (in the announcements.html page, when you click "Click More" on an announcement, it'll lead you to a page like that, but the guys think it's useless. Less hassle for you anyway).

\-chairs.html: the chairs page (for now)

\-chairs-registration.html: the student officers registration page (no need to edit, they have all registered)

\-chairs-template.html: template page for the chairs. When the OT asks you to put the chairs' names on, straight up copy paste the content of this page to "chairs.html" and put their names in the respective places.

\-charter.html: the page that leads to the charter.

\-CNAME: VS file, ignore.

\-general-info.html: just a general information page for the conference, do not edit unless told to by the OT.

\-google9bfa6d07497fbc87.html: it's for google search, don't touch.

\-index.html: main page. On the announcements section, put ONLY the relevant announcements, as instructed by the OT.

\-manual.html: the page that leads to the manual.

\-mun-beginners.html: there, you will put a video that is an MUN tutorial for beginners. DO NOT edit if you're not told to, I'm speaking from personal experience.

\-our-team.html: the our team page.

\-our-team-template.html: when you get all the team information, copy-paste its code to "our-team.html", then replace the names, descriptions and photos. If a photo gets cut, try to edit it by stretching the photo horizontally. Also, in the "Heads of Technical Team" section, remove our tiles and put yourself in.

\-readme.md: this file.

\-Robots.txt: the file which points to the sitemap of the website.

\-rops.html: the page that leads to the rules of procedure.

\-schedule.html: the AMLMUN official schedule page.

\-school-registration.html: the schools' registration page.

\-sitemap.xml: the sitemap, DO NOT edit, as it is used by Google to display the website's pages on Google Search. If you add/remove pages, go to the sitemap generator and generate a new sitemap.

\-staff-registration.html: the staff/press team registration page.

\-study-guides.html: the study guides page. To save time, go to /archives/fourth/study-guides.html, copy-paste the code into this page ("/study-guides.html") and then edit everything accordingly. PROTIP: use full names for the subjects.

\-unavailable.html: used as a placeholder for non-existent pages (i.e. most archive pages). Use it as an easy temporary solution if you haven't finished something.



The folders are as follows:

\-archives: contains four sub-folders, each one corresponding to a conference. Each sub-folder has HTML pages for what you see on the archives.html page.

\-assets: contains a handful of sub-folders:

&#x09;-animateCSS: CSS code, mostly for animations. Do not edit/delete.

&#x09;-bootstrap: obviously, the bootstrap CSS framework. DO NOT, IN ANY CASE, delete this folder. Edit ONLY IF YOU KNOW WHAT YOU'RE DOING.

&#x09;-countdown: JavaScript code for the countdown of the index page. DO NOT EDIT.

&#x09;-css: you can add your custom CSS code files there. Currently has only one file, navbar.css which does adjustments to the navbar and YOU SHOULD NOT DELETE/EDIT that file because it solved some bugs with the navbar.

&#x09;-docs: contains files such as the agenda, ROPS, manual, charter and has a sub-folder named studyguides, where you will put the current conference study guides. "studyguides" also has sub-folders for each committee.

&#x09;-dropdown: CSS and JavaScript code for the dropdown menus. DO NOT EDIT/DELETE.

&#x09;-embla: JavaScript assets. Do not edit/delete.

&#x09;-formoid: Same as above.

&#x09;-images: whatever image exists, be it a logo, a person, a background, a banner, you will put it THERE AND THERE ONLY.

&#x09;-imagesloaded: the JS code that renders the images.

&#x09;-js: you can add your custom JS code files there. Currently has only one file, resolution.js which is supposed to make the website scaled down to 90% when the resolution is low, but I haven't gotten it to work.

&#x09;-masonry: no, it has nothing to do with freemasons. It has JS code of the bootstrap framework.

&#x09;-mobirise: has Mobiri.se CSS code. DO NOT, IN ANY CASE, delete this folder. Edit ONLY IF YOU KNOW WHAT YOU'RE DOING.

&#x09;-parallax: CSS/JS code.

&#x09;-playervimeo: integrated video player code.

&#x09;-smoothscroll: used to improve page rendering when scrolling. DO NOT EDIT/DELETE.

&#x09;-socicon: contains fonts and CSS code. DO NOT EDIT/DELETE.

&#x09;-theme: contains CSS/JS code for the website style.

&#x09;-vimeoplayer: more integrated video player code (lol).

&#x09;-web: Mobiri.se assets/fonts

&#x09;-ytplayer: integrated YT video player code.

\-misc: contains some mini web-games I made back in '24-'25 when I was in the 10th. I happened to put it to my servers so that we test if they work for hosting the website back in July '25, left it as an easter egg ever since.



This is basically everything you need to know for the files. In general, do not edit the <head> sections unless you want to add more CSS/JS code. Also, keep the navbar (you will see a < section >< nav >...< /nav >< /section > block) and the bottom bar (last < section >...< /section > block) as they are.



That's all from me. You now inherit my (and my best friend's, Alexandros Zilos) position as the Head of the Technical Team for the 5th AMLMUN. I hope you manage to figure things out with these guys, because, as you can see, my friend and I didn't.



Signing off,

Dimitris Kotsonis, former Head of the Technical Team of the 5th AMLMUN



