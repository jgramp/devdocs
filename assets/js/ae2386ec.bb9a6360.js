"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[4931],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(n),g=a,u=m["".concat(l,".").concat(g)]||m[g]||c[g]||o;return n?i.createElement(u,s(s({ref:t},p),{},{components:n})):i.createElement(u,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var d=2;d<o;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4951:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return c}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],r={title:"Testing of integrated issues",description:"All the information related to the integration review process during the Moodle development.",tags:["Processes","Core development","Testing","Quality assurance"]},l=void 0,d={unversionedId:"development/process/testing/integrated-issues",id:"development/process/testing/integrated-issues",title:"Testing of integrated issues",description:"All the information related to the integration review process during the Moodle development.",source:"@site/general/development/process/testing/integrated-issues.md",sourceDirName:"development/process/testing",slug:"/development/process/testing/integrated-issues",permalink:"/devdocs/general/development/process/testing/integrated-issues",editUrl:"https://github.com/andrewnicols/devdocs/edit/main/general/development/process/testing/integrated-issues.md",tags:[{label:"Processes",permalink:"/devdocs/general/tags/processes"},{label:"Core development",permalink:"/devdocs/general/tags/core-development"},{label:"Testing",permalink:"/devdocs/general/tags/testing"},{label:"Quality assurance",permalink:"/devdocs/general/tags/quality-assurance"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1650518308,formattedLastUpdatedAt:"21/04/2022",frontMatter:{title:"Testing of integrated issues",description:"All the information related to the integration review process during the Moodle development.",tags:["Processes","Core development","Testing","Quality assurance"]},sidebar:"process",previous:{title:"Testing",permalink:"/devdocs/general/development/process/testing"},next:{title:"QA testing",permalink:"/devdocs/general/development/process/testing/qa"}},p={},c=[{value:"The testing process",id:"the-testing-process",level:2},{value:"Expectation from developer and peer-reviewer",id:"expectation-from-developer-and-peer-reviewer",level:2},{value:"Expectations of the Integration team",id:"expectations-of-the-integration-team",level:2},{value:"Expectation from tester",id:"expectation-from-tester",level:2},{value:"Checking tests assigned to you",id:"checking-tests-assigned-to-you",level:3},{value:"Differences in test process during continuous integration periods",id:"differences-in-test-process-during-continuous-integration-periods",level:2},{value:"Installing a local test site from the integration repository",id:"installing-a-local-test-site-from-the-integration-repository",level:2},{value:"Changing theme to another one",id:"changing-theme-to-another-one",level:3},{value:"Notes",id:"notes",level:2}],m={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Testing is an important part of the ",(0,o.kt)("a",{parentName:"p",href:"/general/development/process"},"Moodle development process"),".\nDepending on the integration period (normal or continuous) testing can take place at different times.\nYour first priority as a tester should be to finish testing on the day they have been assigned. You should update the testing status so that the testing status is clear."),(0,o.kt)("h2",{id:"the-testing-process"},"The testing process"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Tests are allocated during the week by the Integration Team. Tests are usually performed by a dedicated team of test engineers but sometimes they may be assigned to HQ developers too."),(0,o.kt)("li",{parentName:"ol"},"HQ developers should check mail or search tracker to see which issues are assigned to them for testing.")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Pull latest integration from ",(0,o.kt)("a",{parentName:"li",href:"git://git.moodle.org/integration.git"},"git://git.moodle.org/integration.git")),(0,o.kt)("li",{parentName:"ol"},"Test issue by following the ",(0,o.kt)("strong",{parentName:"li"},"Testing instructions")),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Pass test")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Fail test")," as appropriate, adding a short description of what was tested if not obvious"),(0,o.kt)("li",{parentName:"ol"},"If you find you cannot finish testing a particular issue, click ",(0,o.kt)("inlineCode",{parentName:"li"},"Stop testing")," and let the Integration team know about it."),(0,o.kt)("li",{parentName:"ol"},"When a test is failed the assignee is usually contacted and asked to respond or provide a fix. If the patch is provided late and there is no time to find a new tester then the issue will be reopened."),(0,o.kt)("li",{parentName:"ol"},"Once the fail fix is integrated, it goes back to ",(0,o.kt)("strong",{parentName:"li"},"complete re-testing"),"."),(0,o.kt)("li",{parentName:"ol"},"It's the responsibility of the tester to test the issue again, unless the patch is from tester. If the tester provides fix patch then test will be re-assigned.\nchanged."),(0,o.kt)("li",{parentName:"ol"},"The tester who passes the issue will be set as the tester for the issue.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Failing a test session")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For test sessions, if you encounter a failure, please fail the issue add a comment on the issue itself. If everything's good, add a comment in the session and complete the session. You may also comment on the issue and say that testing passes on your part."))),(0,o.kt)("h2",{id:"expectation-from-developer-and-peer-reviewer"},"Expectation from developer and peer-reviewer"),(0,o.kt)("p",null,"Testing instructions are clear, concise, complete, and accurate. Where possible they should be easy to perform. Please follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Testing_instructions_guide"},"Testing instructions guide")," recommendations."),(0,o.kt)("h2",{id:"expectations-of-the-integration-team"},"Expectations of the Integration team"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tests should be allocated when the issue is integrated."),(0,o.kt)("li",{parentName:"ul"},"The integration team may need to help/re-assign tests if developers are having problems.")),(0,o.kt)("h2",{id:"expectation-from-tester"},"Expectation from tester"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Testing ",(0,o.kt)("strong",{parentName:"li"},"must happen always against up to date integration.git repository")," (unless testing instructions include some exceptional git operation). More specifically, testing ",(0,o.kt)("strong",{parentName:"li"},"must not happen against development branches")," for a number of reasons (based on old core stuff, missing interdependencies with other issues or changes performed along the integration process, upgrade problems...)."),(0,o.kt)("li",{parentName:"ul"},"If tester is not available for testing, this should be raised ASAP."),(0,o.kt)("li",{parentName:"ul"},"Testers should try to finish testing as early as possible as they are assigned, so when tests fail, the issue assignee has as much time as possible to resolve it."),(0,o.kt)("li",{parentName:"ul"},"When a test fails, or new (related) regression found then fail test."),(0,o.kt)("li",{parentName:"ul"},"If tester is not sure of results or need explanation on testing instructions, then tester can either fail test with comments, or contact the assignee individually to raise the problem."),(0,o.kt)("li",{parentName:"ul"},"Testers should let the integration team know ASAP if they are facing any problems, need help or may not be able to complete their allocated tests"),(0,o.kt)("li",{parentName:"ul"},"For any reason (big test, not enough time, not started testing yet), if a test is dragged to next day then the tester should leave comment on tracker, updating the status of testing and adding the expected time needed to finish testing."),(0,o.kt)("li",{parentName:"ul"},"When a test is passed, it is recommended to add some extra information that confirms that all works as expected. This could be a browser screenshot, terminal output..."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"All UI tests should be tested on currently supported themes"),".")),(0,o.kt)("h3",{id:"checking-tests-assigned-to-you"},"Checking tests assigned to you"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to ",(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/"},"Tracker"),"."),(0,o.kt)("li",{parentName:"ol"},"Visit ",(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/issues/?filter=11801&jql=project%20%3D%20MDL%20AND%20Tester%20%3D%20currentUser()%20AND%20status%20%3D%20%22Waiting%20for%20testing%22"},"Issues waiting to be tested")," page.")),(0,o.kt)("h2",{id:"differences-in-test-process-during-continuous-integration-periods"},"Differences in test process during continuous integration periods"),(0,o.kt)("p",null,"During ",(0,o.kt)("a",{parentName:"p",href:"/general/development/process/integration-review#during-continuous-integrationfreezeqa-period"},"continuous integration")," the schedule is changed to allow faster iteration and for bug fixes to be applied more rapidly than the usual weekly cycle. The goal during this period is ...\ngoal during this period is to release a new version of master multiple times per week. We try to keep the process more flexible during this time in order that developers who have less pressing issues than others can take the load off those concentrating on big fixes. It works best if we work together to help each other out."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Priority is given to testing issues to ensure we can release regularly"))),(0,o.kt)("h2",{id:"installing-a-local-test-site-from-the-integration-repository"},"Installing a local test site from the integration repository"),(0,o.kt)("p",null,"Moodle uses two Git repositories for its source code. Their names are moodle.git and integration.git and they live at ",(0,o.kt)("a",{parentName:"p",href:"http://git.moodle.org."},"http://git.moodle.org.")," All submitted patches that were accepted during the integration review go to the integration.git first. Testers use integration.git as the source of the code to test. Patches that survive testing are then promoted to moodle.git and become the part of the official Moodle weekly build."),(0,o.kt)("p",null,"To obtain the code from the integration.git repository, follow the instructions at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Git_for_Administrators_page"},"Git for Administrators page"),". But instead of cloning from git://github.com/moodle/moodle.git, use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-git"},"   git clone git://git.moodle.org/integration.git\n")),(0,o.kt)("p",null,"as the very first command."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Alternatively, you can also use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Moodle_Development_kit"},"Moodle Development Kit (MDK)"),", and add the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--integration")," to install a Moodle instance based on integration.git."))),(0,o.kt)("h3",{id:"changing-theme-to-another-one"},"Changing theme to another one"),(0,o.kt)("p",null,"Ensure you have following setting in the config (it allows you to change the theme in the URL)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"   $CFG->allowthemechangeonurl = true;\n")),(0,o.kt)("p",null,'For changing to a theme named "yay" add ',(0,o.kt)("strong",{parentName:"p"},"?theme=yay")," to the url."),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the issue requires an Oracle or MSSQL installation for testing, and you don't have one, ",(0,o.kt)("a",{parentName:"li",href:"/docs/gettingstarted/quickstart#docker"},"docker")," may help you."),(0,o.kt)("li",{parentName:"ul"},"Any update should be added as a comment on the tracker issue being tested."),(0,o.kt)("li",{parentName:"ul"},"If testers pass or fail an issue by mistake, then please request the integration team to reopen it for testing."),(0,o.kt)("li",{parentName:"ul"},"Testers should not be involved in the bug fixing or review process."),(0,o.kt)("li",{parentName:"ul"},"If an issue cannot be fixed within a sprint and has to be reopened, the fix for sprint version should be removed and an appropriate backlog version set.")))}g.isMDXComponent=!0}}]);