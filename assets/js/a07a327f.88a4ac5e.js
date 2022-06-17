"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[34942],{29700:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return p}});var i=n(83117),o=n(80102),a=(n(67294),n(3905)),s=n(13904),l=["components"],r={title:"Designing usable forms",tags:["Moodle User Interface Guidelines","UX","Guidelines","Forms"]},d=void 0,c={unversionedId:"development/policies/designing-usable-forms",id:"development/policies/designing-usable-forms",title:"Designing usable forms",description:"The following guidelines are intended to help you improve the user experience of both complex, and less complex, forms.",source:"@site/general/development/policies/designing-usable-forms.md",sourceDirName:"development/policies",slug:"/development/policies/designing-usable-forms",permalink:"/devdocs/general/development/policies/designing-usable-forms",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/designing-usable-forms.md",tags:[{label:"Moodle User Interface Guidelines",permalink:"/devdocs/general/tags/moodle-user-interface-guidelines"},{label:"UX",permalink:"/devdocs/general/tags/ux"},{label:"Guidelines",permalink:"/devdocs/general/tags/guidelines"},{label:"Forms",permalink:"/devdocs/general/tags/forms"}],version:"current",lastUpdatedBy:"ferranrecio",lastUpdatedAt:1655463643,formattedLastUpdatedAt:"17/06/2022",frontMatter:{title:"Designing usable forms",tags:["Moodle User Interface Guidelines","UX","Guidelines","Forms"]},sidebar:"coding",previous:{title:"Deprecation",permalink:"/devdocs/general/development/policies/deprecation"},next:{title:"Naming conventions",permalink:"/devdocs/general/development/policies/naming"}},m={},p=[{value:"Labelling settings",id:"labelling-settings",level:2},{value:"Naming sections",id:"naming-sections",level:2},{value:"Be accurate, clear, and concise",id:"be-accurate-clear-and-concise",level:3},{value:"Avoid ambiguous names",id:"avoid-ambiguous-names",level:3},{value:"Re-use existing names",id:"re-use-existing-names",level:2},{value:"Avoid using &#39;Options&#39; or &#39;Settings&#39;",id:"avoid-using-options-or-settings",level:3},{value:"Merging sections",id:"merging-sections",level:3},{value:"Use &#39;Show more/less&#39; advanced settings sparingly",id:"use-show-moreless-advanced-settings-sparingly",level:2},{value:"Adequate number of fields and sections",id:"adequate-number-of-fields-and-sections",level:2},{value:"Expanding more sections",id:"expanding-more-sections",level:2},{value:"Think about the flow",id:"think-about-the-flow",level:2}],u={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,(0,i.Z)({frontMatter:r},void 0!==c?{metadata:c}:{},{mdxType:"MoodlePageBanner"})),(0,a.kt)("p",null,"The following guidelines are intended to help you improve the user experience of both complex, and less complex, forms."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The terms ",(0,a.kt)("em",{parentName:"p"},"settings")," and ",(0,a.kt)("em",{parentName:"p"},"fields")," are used interchangeably here because these instructions apply to both the configuration of administration, and forms."))),(0,a.kt)("h2",{id:"labelling-settings"},"Labelling settings"),(0,a.kt)("p",null,"All fields in a form should have a descriptive label (not too long) that gives a clear idea of what the setting is for."),(0,a.kt)("p",null,"Do not rely on ",(0,a.kt)("em",{parentName:"p"},"Help")," popups to compensate for a poor label. If the user has to open and read the ",(0,a.kt)("em",{parentName:"p"},"Help")," popup to find out what the setting is about, then your label is not clear enough."),(0,a.kt)("h2",{id:"naming-sections"},"Naming sections"),(0,a.kt)("p",null,"Moodle has the ability to collapse sections in a form to simplify those forms. However, having collapsible sections to simplify the forms is not enough. ",(0,a.kt)("strong",{parentName:"p"},"Properly named sections is a key factor of usable forms.")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If the user has to expand the section to know what it contains, the section name is not good enough."))),(0,a.kt)("h3",{id:"be-accurate-clear-and-concise"},"Be accurate, clear, and concise"),(0,a.kt)("p",null,"Use short, clear and concise section names."),(0,a.kt)("p",null,"When a section is collapsed by default, it is really important that its name tells the user if the setting they are looking for is part of this section or not. If it does, the user can easily scan the form and find the adequate section."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Keep in mind that if section names are too long, scanning the form will become more difficult."))),(0,a.kt)("h3",{id:"avoid-ambiguous-names"},"Avoid ambiguous names"),(0,a.kt)("p",null,"It is easy to find yourself declaring a new section named ",(0,a.kt)("em",{parentName:"p"},"Miscellaneous"),", ",(0,a.kt)("em",{parentName:"p"},"Advanced settings")," or even ",(0,a.kt)("em",{parentName:"p"},"Additional options"),", but you ",(0,a.kt)("em",{parentName:"p"},"must")," definitely avoid this. It is sometimes very difficult to re-arrange your sections to prevent ambiguous ones, but remember that a user should be able to guess the content of the section just by reading its name."),(0,a.kt)("p",null,"If the section name is too ambiguous, the user will not remember what was part of the section when visiting your form for a second, third, or subsequent time... thus ruining your efforts of improving the user experience."),(0,a.kt)("h2",{id:"re-use-existing-names"},"Re-use existing names"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"General"),": Often used to name the first section (expanded by default), except when inappropriate or too vague"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Content"),": Describes a section defining the content, for example, the files available in a File resource, or the visual content of a Page resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Appearance"),": A section which contains options affecting appearance and display."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Availability"),": Contains the options affecting the availability of the content.")),(0,a.kt)("h3",{id:"avoid-using-options-or-settings"},"Avoid using 'Options' or 'Settings'"),(0,a.kt)("p",null,"It is usually implied that a section contains settings or options, so you should not use these terms in any of your sections names. However, in some rare occasions, you might want to be more descriptive when another section uses a similar name."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wrong: ",(0,a.kt)("em",{parentName:"li"},"Appearance settings")," (should be ",(0,a.kt)("em",{parentName:"li"},"Appearance"),")"),(0,a.kt)("li",{parentName:"ul"},"Acceptable: ",(0,a.kt)("em",{parentName:"li"},"Submission options")," (when you have another section called ",(0,a.kt)("em",{parentName:"li"},"Submission types"),", for example)")),(0,a.kt)("h3",{id:"merging-sections"},"Merging sections"),(0,a.kt)("p",null,"If you end up with two sections with few settings inside them, it is sometimes preferable to merge them into one section. But how do we keep an accurate section name then?"),(0,a.kt)("p",null,"Well, if the section name is still concise when it includes two subjects (e.g. ",(0,a.kt)("em",{parentName:"p"},"Foo & bar"),"), then the settings related to 'Foo' and 'Bar' could probably be placed in that one section."),(0,a.kt)("h2",{id:"use-show-moreless-advanced-settings-sparingly"},"Use 'Show more/less' advanced settings sparingly"),(0,a.kt)("p",null,"If you are tempted to use the 'Show more/less' functionality, it is probably because you have a section with many settings inside it. If so, you could probably try to split the section into multiple sections."),(0,a.kt)("p",null,"But there are some rare cases where those settings do not fit in another section, or are too trivial, then you might want to hide them behind a 'Show more' button."),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please keep in mind that this is not a recommended practice as it does not provide clues to the user about what is hidden behind 'Show more'. Also, due to the current coding design of Moodle forms, revealed settings can be displayed randomly throughout the section, which may confuse the user."))),(0,a.kt)("p",null,"A section should never contain ",(0,a.kt)("em",{parentName:"p"},"only")," advanced settings."),(0,a.kt)("p",null,"Try your best to avoid using this feature where possible."),(0,a.kt)("h2",{id:"adequate-number-of-fields-and-sections"},"Adequate number of fields and sections"),(0,a.kt)("p",null,"Do not overload a section with too many settings. If you have too many settings it is likely that your section could be split into more sections. An average of 5 to 6 settings per section seems to be a good compromise; it allows the user to quickly scan the content of the section without missing anything."),(0,a.kt)("p",null,"There is nothing wrong in having only a few settings in a section. You can even only have one single setting in a section, but you can only do so when the setting could not be placed in any other section without affecting the accuracy of the section name."),(0,a.kt)("p",null,"In the same way that too many settings in one section is not good practice, a form with too many sections is not good practice either. Try to find a right balance between both."),(0,a.kt)("h2",{id:"expanding-more-sections"},"Expanding more sections"),(0,a.kt)("p",null,"A form with 2 sections or less will expand its sections by default. Once there are more than 2 sections, all the sections but the first one will be collapsed. Any other section containing required settings will be expanded by default as well."),(0,a.kt)("p",null,"You should not change this default behaviour if it is avoidable, but if you do, keep in mind that expanding too many sections in a form will void the benefits of having collapsible sections."),(0,a.kt)("p",null,"And if you end up with a section being expanded by default because it contains a single required setting, you might want to consider moving this setting into a more important section, which is already expanded by default."),(0,a.kt)("h2",{id:"think-about-the-flow"},"Think about the flow"),(0,a.kt)("p",null,"The flow of a form is important. Think about the user who will land on the page and scan through the form."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"group together sections with similar content;"),(0,a.kt)("li",{parentName:"ul"},"group settings with similar content within sections;"),(0,a.kt)("li",{parentName:"ul"},"place more important sections and settings at the top of the form;"),(0,a.kt)("li",{parentName:"ul"},"do not intersperse collapsed or expanded sections - the expanded sections should be at the top.")))}h.isMDXComponent=!0}}]);