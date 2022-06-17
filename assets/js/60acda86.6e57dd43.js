"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[77165],{27542:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return p}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),n=["components"],i={title:"Moodle 3.0.5",tags:["Release notes","Moodle 3.0"],sidebar_position:5,moodleVersion:"3.0.5"},d=void 0,m={unversionedId:"releases/3.0/3.0.5",id:"releases/3.0/3.0.5",title:"Moodle 3.0.5",description:"Release date: 11 July, 2016",source:"@site/general/releases/3.0/3.0.5.md",sourceDirName:"releases/3.0",slug:"/releases/3.0/3.0.5",permalink:"/devdocs/general/releases/3.0/3.0.5",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.0/3.0.5.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.0",permalink:"/devdocs/general/tags/moodle-3-0"}],version:"current",lastUpdatedBy:"ferranrecio",lastUpdatedAt:1655463643,formattedLastUpdatedAt:"17/06/2022",sidebarPosition:5,frontMatter:{title:"Moodle 3.0.5",tags:["Release notes","Moodle 3.0"],sidebar_position:5,moodleVersion:"3.0.5"},sidebar:"releaseNotes",previous:{title:"Moodle 3.0.4",permalink:"/devdocs/general/releases/3.0/3.0.4"},next:{title:"Moodle 3.0.6",permalink:"/devdocs/general/releases/3.0/3.0.6"}},u={},p=[{value:"Highlights",id:"highlights",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"For developers",id:"for-developers",level:2},{value:"Translations",id:"translations",level:2}],h={toc:p};function c(e){var t=e.components,r=(0,o.Z)(e,n);return(0,s.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:i},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 11 July, 2016"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.0.5%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.0.5"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41922"},"MDL-41922")," - Completed quizzes no longer appear in the Course overview block for students"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41945"},"MDL-41945")," - Do not overwrite submission with an empty filearea when several team members edit the same assignment"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49852"},"MDL-49852")," - Mark assignment as completed for all students in the team when one student from the team has made a submission"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29905"},"MDL-29905")," - Fixed the bug when deleting empty quiz category was showing an error that it has questions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46721"},"MDL-46721")," - Assignment blind marking: participant number in the notification email matches the number on the submission"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45427"},"MDL-45427")," - Database activity: When creating a template clicking on the tags should add it to the textarea when Atto editor is used"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35104"},"MDL-35104")," - Allow to change username of a user registered under LDAP authentication method"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51806"},"MDL-51806")," - Workshop: allow to save edited settings when using comma as a decimal separator"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43887"},"MDL-43887")," - Fixed bug when handling optional date/time custom user profile field with date range starting later than 1970"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35987"},"MDL-35987")," - Do not abort restore process in case of multichoice question error 'Backup error: invalid input syntax for integer: \"\"'")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45390"},"MDL-45390")," - Fixed rounding problem resulting with letter 57% not being processed properly. This change may ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Gradebook_calculation_changes#20160518_-_letter_grade_boundary_issue"},"freeze gradebook calculations"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55020"},"MDL-55020")," - Fixed bug when installing plugin downloaded from github repository"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53111"},"MDL-53111")," - Allow to unmark completion criterion 'Require end reached'"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37138"},"MDL-37138")," - When clicking a URL in chat, it should open in a new window or tab"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54934"},"MDL-54934")," - Accessibility enhancements: Indicate phase name/form name on the Workshop title")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=336698"},"MSA-16-0020")," Text injection in email headers"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=336699"},"MSA-16-0021")," Unenrolled user still receives event monitor notifications even though they can no longer access course")),(0,s.kt)("h2",{id:"for-developers"},"For developers"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54034"},"MDL-54034")," - Filters should be applied by default in AJAX calls. Make sure context is set correctly when calling external_format_string()"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53019"},"MDL-53019")," - PHP 5.6.5 or higher is required for development on master branch")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.0.5"},"Notes de mise \xe0 jour de Moodle 3.0.5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.0.5"},"Notas de Moodle 3.0.5"))))}c.isMDXComponent=!0}}]);