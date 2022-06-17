"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[37581],{57825:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return c}});var r=a(83117),o=a(80102),s=(a(67294),a(3905)),l=a(13904),i=["components"],n={title:"Moodle 3.10.2",tags:["Release notes","Moodle 3.10"],sidebar_position:2,moodleVersion:"3.10.2"},d=void 0,p={unversionedId:"releases/3.10/3.10.2",id:"releases/3.10/3.10.2",title:"Moodle 3.10.2",description:"For sites upgrading from an earlier version, please upgrade to 3.10.3 and skip this version, as it is affected by an upgrade step which may corrupt calendar events (MDL-71156).",source:"@site/general/releases/3.10/3.10.2.md",sourceDirName:"releases/3.10",slug:"/releases/3.10/3.10.2",permalink:"/devdocs/general/releases/3.10/3.10.2",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.10/3.10.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.10",permalink:"/devdocs/general/tags/moodle-3-10"}],version:"current",lastUpdatedBy:"ferranrecio",lastUpdatedAt:1655463643,formattedLastUpdatedAt:"17/06/2022",sidebarPosition:2,frontMatter:{title:"Moodle 3.10.2",tags:["Release notes","Moodle 3.10"],sidebar_position:2,moodleVersion:"3.10.2"},sidebar:"releaseNotes",previous:{title:"Moodle 3.10.1",permalink:"/devdocs/general/releases/3.10/3.10.1"},next:{title:"Moodle 3.10.3",permalink:"/devdocs/general/releases/3.10/3.10.3"}},m={},c=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],h={toc:c};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,r.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"For sites upgrading from an earlier version, please upgrade to 3.10.3 and skip this version, as it is affected by an upgrade step which may corrupt calendar events (",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-71156"},"MDL-71156"),")."))),(0,s.kt)("p",null,"Release date: 8 March 2021"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.10.2%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.10.2"),"."),(0,s.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67959"},"MDL-67959")," - The default group icon should not be displayed when there is no group picture"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67515"},"MDL-67515")," - Uninstalled plugin breaks the custom lang tool if it had some strings customised"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66979"},"MDL-66979")," - Switch all the Behat testing to the new W3C drivers"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70535"},"MDL-70535")," - VideoJS  language doesn't fallback to en"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68970"},"MDL-68970")," - Pages during a quiz attempt should not be cached, so forwards/back do not lead to errors"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57020"},"MDL-57020")," - Unable to delete scales which are no longer used"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70268"},"MDL-70268")," - Dropbox repository requires log on to work - which fails"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46256"},"MDL-46256")," - count_words returns too few words when dealing with html tags"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70048"},"MDL-70048")," - Dropbox Search API: /files/search is being retired in favor of /files/search_v2"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69867"},"MDL-69867")," - Marking workflow display wrong current grade if using scales"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70736"},"MDL-70736")," - Unable to load Marking Guide Templates"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70796"},"MDL-70796")," - Moodle word count does not match other software"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69101"},"MDL-69101"),' - Essay question: "Accepted file types" and other new fields are not supported in Moodle XML file'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70377"},"MDL-70377")," - When reviewing an attempt as a teacher ",(0,s.kt)("inlineCode",{parentName:"li"},"$string['saved') {$a}")," not replaced"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43697"},"MDL-43697")," - Archived badges are restored during course restore"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70676"},"MDL-70676")," - Workshop assessment aspect with no grade is unusable"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70631"},"MDL-70631")," - Poor performance of zip_packer::extract_to_pathname()"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70648"},"MDL-70648")," - Editing a calendar event of type category and removing the category results in an error"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68958"},"MDL-68958")," - Undefined variable: href when creating IMSCP"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70339"},"MDL-70339")," - Activity chooser does not honour external tool icons"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56772"},"MDL-56772")," - File picker:Right align table column headers, in RTL mode (theme:boost)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70513"},"MDL-70513")," - Quiz manual grading page should warn if you try to leave with unsaved data"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70705"},"MDL-70705")," - Multilang Filters not applied to Recent blog entries block Blog entry titles"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70552"},"MDL-70552")," - Notification of submissions are not sent for anonymous feedback"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70574"},"MDL-70574")," - Cloze multianswer question leaks percentage if with decimal"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66932"},"MDL-66932")," - Grade percentage display in Gradebook should be LTR, in RTL mode"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70585"},"MDL-70585")," - Downloaded course content unbrowseable for some activity names"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70912"},"MDL-70912")," - Cannot access H5P content bank popup in Atto editor within mod_data textarea"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70264"},"MDL-70264")," - badges/oauth2callback.php should be removed and replaced by admin/oauth2callback.php"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67974"},"MDL-67974")," - Badge expiry error and missing expired stamp"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67494"},"MDL-67494")," - Course/activity calendar events are deleted when the teacher who created them requests their data to be deleted"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70995"},"MDL-70995")," - Group names not formatted in course participants filter"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69883"},"MDL-69883")," - Unable to scroll beyond 50 conversations in Messages tool"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69097"},"MDL-69097"),' - Language filters aren\'t correctly applied in "Whole forum grading"')),(0,s.kt)("h2",{id:"accessibility-improvements"},"Accessibility improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70169"},"MDL-70169")," - Login page accessibility issues"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70288"},"MDL-70288")," - Checkbox and advanced checkbox elements can have duplicate labels"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70173"},"MDL-70173")," - Dashboard accessibility issues"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65390"},"MDL-65390"),' - Accessibility #11 Content appears above "show more" button'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59782"},"MDL-59782")," - Question bank highlight of last added question is wrong in boost"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70172"},"MDL-70172")," - Site home page accessibility issues")),(0,s.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=419650"},"MSA-21-0006")," Stored XSS via ID number user profile field"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=419651"},"MSA-21-0007")," Stored XSS and blind SSRF possible via feedback answer text"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=419652"},"MSA-21-0008")," User full name disclosure within online users block"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=419653"},"MSA-21-0009")," Bypass email verification secret when confirming account registration"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=419654"},"MSA-21-0010")," Fetching a user's enrolled courses via web services did not check profile access in each course"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=419655"},"MSA-21-0011")," JQuery versions below 3.5.0 contain some potential vulnerabilities (upstream)")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.10.2"},"Notes de mise \xe0 jour de Moodle 3.10.2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.10.2"},"Notas de Moodle 3.10.2"))))}u.isMDXComponent=!0}}]);