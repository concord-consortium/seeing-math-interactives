!function(){var t=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["base-view-template"]=t(function(t,n,e,i,a){this.compilerInfo=[4,">= 1.0.0"],e=this.merge(e,t.helpers),a=a||{}
var s,l="",r="function",o=this.escapeExpression
return l+='<div id="'+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.title_short,typeof s===r?s.apply(n):s))+'-main-container" class="pbs-base-main-container" role="application">\r\n        <div id="'+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.title_short,typeof s===r?s.apply(n):s))+'-header-container" class="pbs-base-main-header">\r\n       		<div id="pbs-base-links-header-container" class="pbs-base-links-header-container">\r\n           Related Links:	<a id="pbs-base-links-guide" href="#" onclick="window.open(\''+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.user_guide_href,typeof s===r?s.apply(n):s))+"')\">"+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.user_guide,typeof s===r?s.apply(n):s))+'</a>\r\n                  				<a id="pbs-base-links-faq" href="#" onclick="window.open(\''+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.faq_href,typeof s===r?s.apply(n):s))+"')\">"+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.faq,typeof s===r?s.apply(n):s))+'</a>\r\n       				            <a id="pbs-base-links-warmup" href="#" onclick="window.open(\''+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.warmup_href,typeof s===r?s.apply(n):s))+"')\">"+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.warmup,typeof s===r?s.apply(n):s))+'</a>\r\n       				            <a id="pbs-base-links-sampleactivity" href="#" onclick="window.open(\''+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.sampleactivity_href,typeof s===r?s.apply(n):s))+"')\">"+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.sampleactivity,typeof s===r?s.apply(n):s))+'</a> \r\n            <p id="cc-logo-header-container" class="cc-logo-header-container">     </p>\r\n        	</div>\r\n          <div id="Dummy"></div>\r\n        	<div id="pbs-base-title-header-container" class="pbs-base-title-header-container">\r\n        		<div id="pbs-base-title-content" class="pbs-base-title-content">\r\n            '+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.title_content,typeof s===r?s.apply(n):s))+'</div>\r\n        	\r\n          	\r\n            <div id="pbs-base-title-cam-icon-content" title="'+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.tooltip,s=null==s||s===!1?s:s.titleCam,typeof s===r?s.apply(n):s))+'" class="pbs-base-title-cam-icon-content" > \r\n               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" width="20px" height="18px">\r\n                <style type="text/css"><![CDATA[\r\n                .style0 {\r\n                  font-size: 18px;\r\n                  font-family: "FontAwesome";\r\n                  fill: rgb(255,255,255);\r\n                }\r\n                ]]></style>\r\n                <text class="style0" transform="translate(-20 16)"><tspan fill="rgb(255, 255, 255)" x="20"></tspan></text></svg>\r\n            </div>\r\n            <div id="pbs-base-title-i-icon-content" title="'+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.tooltip,s=null==s||s===!1?s:s.titleI,typeof s===r?s.apply(n):s))+'" class="pbs-base-title-i-icon-content"> \r\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 16" width="7px" height="16px">\r\n                <style type="text/css"><![CDATA[\r\n                .style0 {\r\n                  font-size: 18px;\r\n                  font-family: "FontAwesome";\r\n                  fill: rgb(255,255,255);\r\n                }\r\n                ]]></style>\r\n              <text class="style0" transform="translate(-20 15)"><tspan fill="rgb(255, 255, 255)" x="20"></tspan></text></svg>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n       \r\n        <div id="'+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.title_short,typeof s===r?s.apply(n):s))+'-activity-area-container" class="pbs-base-main-activity-area">\r\n           \r\n        </div>\r\n       \r\n        <div id="'+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.title_short,typeof s===r?s.apply(n):s))+'-footer-container" class="pbs-base-main-footer"> \r\n       \r\n        	<div id="pbs-base-links-footer-container" class="pbs-base-links-footer-container">\r\n        		  <a id="pbs-base-links-more" href="#" onclick="window.open(\''+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.footer_more_href,typeof s===r?s.apply(n):s))+"')\">"+o((s=n&&n["activity-json"],s=null==s||s===!1?s:s.footer_more,typeof s===r?s.apply(n):s))+'</a>\r\n              <span id="pbs-base-copyright-text" class="pbs-base-copyright-text">Copyright &#169 2016 The Concord Consortium.</span>\r\n        	</div>\r\n       \r\n        </div>\r\n</div>'})}()