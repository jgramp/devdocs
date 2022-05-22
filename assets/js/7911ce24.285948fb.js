"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[2725],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,k=u["".concat(d,".").concat(g)]||u[g]||m[g]||l;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2451:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={title:"Moodle App Release process",sidebar_label:"Release process",sidebar_position:8,tags:["Moodle App","Release notes"]},d=void 0,p={unversionedId:"moodleapp/development/release-process",id:"moodleapp/development/release-process",title:"Moodle App Release process",description:"Two weeks before (Code freeze)",source:"@site/docs/moodleapp/development/release-process.md",sourceDirName:"moodleapp/development",slug:"/moodleapp/development/release-process",permalink:"/devdocs/docs/moodleapp/development/release-process",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/release-process.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"},{label:"Release notes",permalink:"/devdocs/docs/tags/release-notes"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1653232530,formattedLastUpdatedAt:"22/05/2022",sidebarPosition:8,frontMatter:{title:"Moodle App Release process",sidebar_label:"Release process",sidebar_position:8,tags:["Moodle App","Release notes"]},sidebar:"docs",previous:{title:"gulp push",permalink:"/devdocs/docs/moodleapp/development/scripts/gulp-push"},next:{title:"FAQ",permalink:"/devdocs/docs/moodleapp/faq"}},s={},m=[{value:"Two weeks before (Code freeze)",id:"two-weeks-before-code-freeze",level:2},{value:"The release day",id:"the-release-day",level:2},{value:"The following days",id:"the-following-days",level:2},{value:"See also",id:"see-also",level:2}],u={toc:m};function g(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"two-weeks-before-code-freeze"},"Two weeks before (Code freeze)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"#")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Task")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Responsibility")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Create an issue in the tracker for the release, like: ",(0,l.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/browse/MOBILE-1248"},"MOBILE-1248")),(0,l.kt)("td",{parentName:"tr",align:null},"Integration Lead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Force an update of the ",(0,l.kt)("a",{parentName:"td",href:"https://moodle.org/plugins/view.php?id=997"},"local_moodlemobileapp")," plugin (as release candidate) with new strings in moodle.org/plugins (only for Moodle version 2.6)."),(0,l.kt)("td",{parentName:"tr",align:null},"Dev")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Ask someone from sites or community team to review the new English strings."),(0,l.kt)("td",{parentName:"tr",align:null},"Community or Sites team")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Announce in the ",(0,l.kt)("a",{parentName:"td",href:"https://lang.moodle.org/mod/forum/view.php?id=5"},"moodle translation forums")," the new strings available. This will allow translators to add the new strings during the days prior to the release."),(0,l.kt)("td",{parentName:"tr",align:null},"Integration Lead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Add the release notes in the release issue created (search for the ",(0,l.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=project%20%3D%20MOBILE%20AND%20labels%20%3D%20release_notes"},"release_notes tag"),"). Ask someone from the documentation team or Martin to review the release notes."),(0,l.kt)("td",{parentName:"tr",align:null},"Integration Lead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6."),(0,l.kt)("td",{parentName:"tr",align:null},"Contact the marketing team announcing the new release and highlights."),(0,l.kt)("td",{parentName:"tr",align:null},"Integration Lead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7."),(0,l.kt)("td",{parentName:"tr",align:null},'Add new QA tests to the "Testing cases" document. New QA tests should be labeled with ',(0,l.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=project%20%3D%20MOBILE%20AND%20resolution%20in%20(Unresolved%2C%20Fixed)%20AND%20labels%20%3D%20qa_test_required%20ORDER%20BY%20priority%20DESC%2C%20updated%20DESC"},"qa_test_required"),". Remove that label once are added to the document."),(0,l.kt)("td",{parentName:"tr",align:null},"Tester")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8."),(0,l.kt)("td",{parentName:"tr",align:null},"Run npm audit to ensure all the dependencies are OK."),(0,l.kt)("td",{parentName:"tr",align:null},"Developer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9."),(0,l.kt)("td",{parentName:"tr",align:null},"Freeze Cordova plugins and Javascript libraries versions (node modules) in the integration branch."),(0,l.kt)("td",{parentName:"tr",align:null},"Developer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Start testing")),(0,l.kt)("td",{parentName:"tr",align:null},"Tester")))),(0,l.kt)("h2",{id:"the-release-day"},"The release day"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"#")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Task")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Responsibility")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Fix the version name in integration:config.xml, integration:package.json and integration:src/config.json (remove the -dev)."),(0,l.kt)("td",{parentName:"tr",align:null},"Integration Lead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Integrate the ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/moodlehq/moodleapp/compare/master...integration"},"integration branch onto the master one"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"Integration Lead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Do some testing with the production builds before sending the application to the stores (overall testing to see that nothing is broken because of the branch merge done in step 2): ",(0,l.kt)("ul",null,(0,l.kt)("li",null,"Correct definitive version name displayed (and commit)"),(0,l.kt)("li",null,"AOT compiling worked"),(0,l.kt)("li",null,"Language strings synchronised from lang.moodle.net"),(0,l.kt)("li",null,"New language packs added"))),(0,l.kt)("td",{parentName:"tr",align:null},"All the team")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Send the applications to the stores for review."),(0,l.kt)("td",{parentName:"tr",align:null},"Integration Lead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Create a TAG/Release in github (",(0,l.kt)("a",{parentName:"td",href:"https://github.com/moodlehq/moodleapp/releases"},"moodlehq/moodleapp"),") with the version number."),(0,l.kt)("td",{parentName:"tr",align:null},"Integration Lead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6."),(0,l.kt)("td",{parentName:"tr",align:null},"Mark the issue and the ",(0,l.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/projects/MOBILE?selectedItem=com.atlassian.jira.jira-projects-plugin:release-page"},"version")," as released in the tracker."),(0,l.kt)("td",{parentName:"tr",align:null},"Integration Lead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7."),(0,l.kt)("td",{parentName:"tr",align:null},"Update ",(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Moodle_App_Release_Notes"},"release notes"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"Integration Lead")))),(0,l.kt)("h2",{id:"the-following-days"},"The following days"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"#")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Task")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Responsibility")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Social media announcements (Forum and Twitter)."),(0,l.kt)("td",{parentName:"tr",align:null},"All the team & Marketing team")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Post in moodle.org/news."),(0,l.kt)("td",{parentName:"tr",align:null},"Team Lead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Review the users and developers documentation (check that everything is in order). Review the ",(0,l.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=project%20%3D%20MOBILE%20AND%20labels%20in%20%28docs_required%2C%20dev_docs_required%29"},"docs_required and dev_docs_required_tags"),". Review the ",(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/en/Moodle_Mobile_features"},"Mobile features wiki documentation"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"All the team")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Delete the integration and desktop branches and create it again based on master."),(0,l.kt)("td",{parentName:"tr",align:null},"Team Lead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Bump version numbers in the following files in the integration branch: config.xml, src/config.json (appending a -dev to the versionname field to indicate that is a development version), package.json (including mac->bundleVersion) and desktop/assets/windows/AppXManifest.xml."),(0,l.kt)("td",{parentName:"tr",align:null},"Integration Lead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6."),(0,l.kt)("td",{parentName:"tr",align:null},"Unfreeze Cordova plugins and Javascript libraries versions (node modules)."),(0,l.kt)("td",{parentName:"tr",align:null},"Developer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7."),(0,l.kt)("td",{parentName:"tr",align:null},"Check that the ",(0,l.kt)("a",{parentName:"td",href:"https://cloud.docker.com/u/moodlehq/repository/docker/moodlehq/moodleapp/general"},"Docker image")," for the new version was successfully built."),(0,l.kt)("td",{parentName:"tr",align:null},"Integration Lead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8."),(0,l.kt)("td",{parentName:"tr",align:null},"Update of the ",(0,l.kt)("a",{parentName:"td",href:"https://moodle.org/plugins/view.php?id=997"},"local_moodlemobileapp")," plugin (as final release) in moodle.org/plugins."),(0,l.kt)("td",{parentName:"tr",align:null},"Developer")))),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_App_Release_Notes"},"Moodle App Release Notes"))))}g.isMDXComponent=!0}}]);