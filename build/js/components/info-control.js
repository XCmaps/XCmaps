const InfoControl=L.Control.extend({onAdd:function(e){var t=L.DomUtil.create("div","info-control leaflet-bar leaflet-control"),o=L.DomUtil.create("a","leaflet-control-button",t);o.href="#";var n=L.DomUtil.create("img","info-control-icon",o);n.src="assets/images/info.png",n.alt="Information",n.style.width="24px",n.style.height="24px",n.style.padding="4px",L.DomEvent.disableClickPropagation(t);let a=null,i=null,s=null,r=null,l=null,c=null,d=null,p=null,u=!1;const m={home:'\n                <h3>About XCmaps</h3>\n                <p>XCmaps is a non-commercial project that brings together various data sources for para- and hang-gliders, providing valuable insights for the community.</p>\n\n                <h3>Contact</h3>\n                <p>You can reach out to us via the Feedback form below or by <a href="mailto:info@XCmaps.com" target="_blank">email</a>.</p>\n                <p>If you’d like to report an issue, such as a bug or a feature request, please visit our <a href="https://github.com/XCmaps/XCmaps" target="_blank">GitHub</a> project page.</p>\n                <p>To stay up-to date on latest updates, please follow us on <a href="https://facebook.com/xcmaps" target="_blank">Facebook</a> or <a href="https://github.com/XCmaps/XCmaps" target="_blank">GitHub</a>.</p>\n\n                <p>If you enjoy our content, consider buying us a landing beer! Your support helps keep this service running, as we cover real costs for servers, storage, AI models, and data sources.<br>It’s simple: the more funding we receive, the faster we can roll out new features!</p>\n                <p><a href="https://buymeacoffee.com/XCmaps" target="_blank" class="donation-button"> 🍺 Buy us a Landing Beer</a></p>\n\n                <h3>Features</h3>\n                <ul>\n                  <li><strong>Weather Stations:</strong> Wind, Gusts, Direction, Temp and Camera if available</li>\n                  <li><strong>Rain Viewer:</strong> Radar and Satellite, past 60 min + 20 min forecast</li>\n                  <li><strong>Thermals:</strong> kk7 thermal map</li>\n                  <li><strong>Spots:</strong> Para- and Hangliding take-off and Landing Zones (© <a href="https://paraglidingspots.com" target="_blank">paraglidingspots.com</a>)</li>\n                  <li><strong>Airspaces:</strong> Xcontest Airspaces & Activations, filter for today and the next 6 days and lowest floor level</li>\n                  <li><strong>Obstacles:</strong> OSM based obstacles from Xcontest</li>\n                  <li><strong>Locate and Track:</strong> Locate and Track your position using the Locate Control</li>\n                </ul>\n\n                <h3>Credits</h3>\n                <ul>\n                  <li><strong>Base Maps:</strong> <a href="https://www.jawg.io" target="_blank">Jawg.io</a>, <a href="https://openstreetmap.org" target="_blank">OpenStreetMap</a>, <a href="https://xcontest.org" target="_blank">XContest</a>, <a href="https://maptiler.com" target="_blank">MapTiler</a></li>\n                  <li><strong>Weather Stations:</strong> <a href="https://github.com/winds-mobi" target="_blank">winds.mobi</a> by Yann Savary and additional data sources</li>\n                  <li><strong>Airspaces & Obstacles:</strong> <a href="https://xcontest.org" target="_blank">XContest</a>, <a href="https://openaip.net" target="_blank">OpenAIP</a></li>\n                  <li><strong>Take-off and Landing Spots:</strong> © <a href="https://paraglidingspots.com" target="_blank">paraglidingspots.com</a> by Karsten Ehlers</li>\n                  <li><strong>Rain Viewer:</strong> <a href="https://www.rainviewer.com" target="_blank">rainviewer</a></li>\n                  <li><strong>Thermals:</strong> <a href="https://thermal.kk7.ch" target="_blank">thermal.kk7</a> by Michi von Känel</li>\n                  <li>and many more open source libraries, projects, and artwork</li>\n                </ul>\n\n                <h3>License and Code</h3>\n                <p>As some integrations are licensed under CC BY-NC-SA 4.0, XCmaps applied the same level and is licensed under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.</a></p>\n            ',privacy:'\n                <h3>XCmaps Privacy Policy</h3>\n                <p>At XCmaps (referred to as "we", "us" or "our" in this policy), we understand the importance of protecting your personal data. This privacy policy explains how we collect, use, share and store information when you access our website at XCmaps.com, which is operated by us, and any other services provided by flyXC (collectively referred to as the "Services").</p>\n                <p>You acknowledge that this Privacy Policy is part of our Site Terms of Use, and by accessing or using our site, you agree to be bound by all of its terms and conditions. If you do not agree to these terms, please do not access or use this site.</p>\n                <p>We reserve the right to change this Privacy Policy at any time. Such changes, modifications, additions or deletions shall be effective immediately upon notice thereof, which may be given by means including, but not limited to issuing an email to the email address listed by registered users and posting the revised Policy on this page. You acknowledge and agree that it is your responsibility to maintain a valid email address as a registered user, review this site and this Policy periodically and to be aware of any modifications. Your continued use of the site after such modifications will constitute your: (a) acknowledgment of the modified Policy; and (b) agreement to abide and be bound by the modified Policy.</p>\n                <h4>1. Information We Collect</h4>\n                <p>We collect two types of information: Personal Data and Non-Personal Data.</p>\n                <p><strong>A) Personal Data:</strong> This includes data that can be used to directly or indirectly identify you, such as your name, location, email address, and other similar information. You are not required to provide the personal data that we have requested, but if you choose not to do so, in many cases we will not be able to provide you with our products or services, and/or respond to any queries or requests you may have.</p>\n                <p><strong>B) Non-Personal Data:</strong> This includes information that cannot identify a specific individual, such as browser types, operating systems, and the pages viewed while navigating through the Services. We collect this data using cookies and other similar technologies.</p>\n                <h4>2. How We Collect Information</h4>\n                <p>We may obtain Personal Data from you when you:</p>\n                <ul><li>Register on our website or application;</li><li>Submit an inquiry through the Services;</li><li>Communicate with us via email, phone, or other means</li></ul>\n                <p>We do not collect any Personally Identifiable Information about you unless you voluntarily provide it to us. You provide certain Personally Identifiable Information to us when you register your account.</p>\n                <p>We collect your registered tracker positions continuously and use that to display your position on the map for up to 48 hours. By signing up for XCmaps and registering your tracker devices, you acknowledge and agree that your tracker devices location will be displayed and viewable via our services.</p>\n                <p>For safety purpose, we keep an archive of the last 30 days for the live tracks. The archive is not publicly accessible.</p>\n                <p>We reserve the right to use any track uploaded on our services. i.e. to derive heat maps of thermal locations.</p>\n                <h4>3. How We Use Information</h4>\n                <p>We use your information to:</p>\n                <ul><li>Provide and improve our products and services;</li><li>Respond to requests, inquiries, and comments;</li><li>Analyze usage trends and preferences;</li><li>Comply with legal obligations;</li><li>Enforce our terms of service;</li><li>Protect the rights, property, or safety of XCmaps, our users, or others.</li></ul>\n                <h4>4. How We Share Information</h4>\n                <p>We may share your information:</p>\n                <ul><li>With third parties who provide services on our behalf;</li><li>In response to legal process;</li><li>To investigate suspected fraud or potential threats to the security of our Services;</li><li>In connection with an acquisition, merger, or sale of assets;</li><li>When we have your explicit consent.</li></ul>\n                <h4>5. How We Store Information</h4>\n                <p>We store your information on secure servers that are protected by appropriate physical, technical, and organizational measures designed to prevent unauthorized access, loss, misuse, disclosure, alteration, and destruction. However, no electronic transmission or storage of data is completely secure, so we cannot guarantee the absolute security of this information.</p>\n                <h4>6. Your Rights</h4>\n                <p>You have certain rights regarding your Personal Data, subject to local law. These include the right to request access, correction, erasure, restriction, portability, and objection to processing of your Personal Data. You can exercise these rights by contacting us using the details provided in this policy.</p>\n                <h4>7. Children\'s Privacy</h4>\n                <p>Our Services are not directed at children under 16 years old. If you learn that a child has provided us with their information without consent, please contact us immediately so we can take appropriate action.</p>\n                <h4>8. Changes to This Policy</h4>\n                <p>We may update our privacy policy from time to time. When we make significant changes, we will notify you by posting a notice on our website or through other communication channels. We encourage you to review this page periodically for the latest information on our privacy practices.</p>\n                <h4>9. Contact Information</h4>\n                <p>If you have any questions about this Privacy Policy, please contact us at: info@XCmaps.com</p>\n            ',terms:'\n                <h3>XCmaps Terms and Conditions</h3>\n                <p>This website, XCmaps.com (the "Website"), provides various data sources for para- and hang-gliders, providing valuable insights for the community.</p>\n                <p>By using the Website, you agree to these terms and conditions (the "Terms") and acknowledge that they constitute a legally binding contract between you and XCmaps. If you do not agree to these Terms, please do not use the Website. We reserve the right to modify or update these Terms at any time without prior notice. Your continued use of the Website after any changes indicates your acceptance of the new terms and conditions. Therefore, we recommend that you review these Terms regularly for any changes.</p>\n\n                <h4>1. Purpose of the Website</h4>\n                <p>The purpose of the Website is to enhance safety and education in free flight sports such as paragliding and hang gliding. The Website provides users with access to various features, including:</p>\n                <ul>\n                  <li><strong>Weather Stations:</strong> Wind, Gusts, Direction, Temp and Camera if available</li>\n                  <li><strong>Rain Viewer:</strong> Radar and Satellite incl. forecast</li>\n                  <li><strong>Thermals:</strong> kk7 thermal map</li>\n                  <li><strong>Spots:</strong> Para- and Hangliding take-off and Landing Zones (© <a href="https://paraglidingspots.com" target="_blank">paraglidingspots.com</a>)</li>\n                  <li><strong>Airspaces:</strong> Xcontest Airspaces & Activations, filter for today and the next 6 days</li>\n                  <li><strong>Obstacles:</strong> OSM based obstacles from Xcontest</li>\n                </ul>\n\n                <h4>2. Data Collection and Use</h4>\n                <p>XCmaps does not collect data from its users.</p>\n                <p>XCmaps does not sell, rent, or otherwise share your personal information with any third parties, except as required by law or as necessary to protect the rights, property, or safety of XCmaps, its employees, users, or others. XCmaps may also disclose your data if it is involved in a merger, acquisition, or sale of all or part of its assets.</p>\n\n                <h4>3. Ownership and Intellectual Property Rights</h4>\n                <p>The Website, including but not limited to its design, layout, content, graphics, images, audio, video, and code, is owned by XCmaps and protected by copyright laws and international intellectual property rights. You may not reproduce, modify, distribute, sell, or otherwise use any part of the Website without the prior written consent of XCmaps.</p>\n\n                <h4>4. Disclaimer of Warranties and Liability</h4>\n                <p>The Website is provided "as is" and "as available". XCmaps disclaims all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, title, non-infringement, and security. XCmaps does not guarantee that the Website will be error-free, uninterrupted, or accessible at all times. XCmaps is not responsible for any losses, damages, or expenses arising from your use of the Website, including but not limited to direct, indirect, special, incidental, consequential, or punitive damages. XCmaps also disclaims any liability for any actions taken by you or others based on the information provided by the Website, which may be inaccurate, incomplete, or outdated.</p>\n\n                <h4>5. Indemnification</h4>\n                <p>You agree to indemnify and hold harmless XCmaps, its officers, directors, employees, agents, licensors, and suppliers from any claims, actions, demands, liabilities, costs, damages, and expenses (including reasonable attorneys\' fees) arising from your use of the Website or your violation of these Terms.</p>\n\n                <h4>6. Applicable Law and Dispute Resolution</h4>\n                <p>These Terms shall be governed by and construed in accordance with the laws of France, without giving effect to any principles of conflicts of law. Any disputes arising out of or in connection with these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>\n\n                <h4>7. Entire Agreement</h4>\n                <p>These Terms constitute the entire agreement between you and XCmaps regarding your use of the Website and supersede any prior agreements, understandings, or representations, whether written or oral. If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable.</p>\n                <p>By using the Website, you acknowledge that you have read, understood, and agreed to these Terms. If you do not agree to these Terms, please do not use the Website.</p>\n            '};function h(){const e=L.DomUtil.create("div","info-popup-container");r=L.DomUtil.create("div","info-popup-header",e);const t=L.DomUtil.create("div","info-popup-header-left",r),o=L.DomUtil.create("img","info-popup-logo",t);o.src="assets/images/XCmapsLogo.png",o.alt="XCmaps Logo",c=L.DomUtil.create("div","info-popup-breadcrumbs",t);const n=L.DomUtil.create("div","info-popup-header-right",r),a=L.DomUtil.create("a","social-icon",n);a.href="https://facebook.com/xcmaps",a.target="_blank";const i=L.DomUtil.create("img","",a);i.src="assets/images/facebook.png",i.alt="Facebook";const d=L.DomUtil.create("a","social-icon",n);d.href="https://github.com/XCmaps/XCmaps",d.target="_blank";const p=L.DomUtil.create("img","",d);p.src="assets/images/github.svg",p.alt="GitHub";return L.DomUtil.create("span","info-popup-close",n).innerHTML="&times;",s=L.DomUtil.create("div","info-popup-content",e),l=L.DomUtil.create("div","info-popup-footer d-flex justify-content-between align-items-center",e),l.innerHTML='\n                <div class="footer-links">\n                    <a href="#" data-section="privacy">Privacy Policy</a>\n                    <a href="#" data-section="terms">Terms and Conditions</a>\n                </div>\n                <div class="d-flex align-items-center">\n                    <div id="info-feedback-message" class="text-start" style="margin-right: 10px;"></div>\n                    <button class="btn btn-primary btn-sm me-2 info-popup-feedback-btn">Feedback</button>\n                    <button class="btn btn-dark btn-sm info-popup-footer-close">Close</button>\n                </div>\n            ',b("home"),L.DomEvent.on(e,"click",w),e}function f(){!function(){if(u)return;a=L.DomUtil.create("div","info-modal-overlay",document.body),a.style.display="none",i=L.DomUtil.create("div","info-modal-content",a);const e=h();i.appendChild(e);const t=i.querySelector(".info-popup-close");t&&L.DomEvent.on(t,"click",g),L.DomEvent.on(a,"click",(e=>{e.target===a&&g()})),u=!0}(),b("home"),a&&(a.style.display="flex"),e&&(e.dragging.disable(),e.touchZoom.disable(),e.doubleClickZoom.disable(),e.scrollWheelZoom.disable(),e.boxZoom.disable(),e.keyboard.disable(),e.tap&&e.tap.disable(),L.DomUtil.addClass(e.getContainer(),"modal-open"))}function g(){v(!1),a&&(a.style.display="none"),e&&(e.dragging.enable(),e.touchZoom.enable(),e.doubleClickZoom.enable(),e.scrollWheelZoom.enable(),e.boxZoom.enable(),e.keyboard.enable(),e.tap&&e.tap.enable(),L.DomUtil.removeClass(e.getContainer(),"modal-open"))}function b(e){if(s&&c&&l)if(v(!1),m[e]){if(s.innerHTML=m[e],l.style.display="home"===e?"flex":"none",c.innerHTML="","home"!==e){c.innerHTML='<a href="#" data-section="home" class="breadcrumb-link">Home</a> / ';const t=L.DomUtil.create("span","breadcrumb-current",c);"privacy"===e?t.innerText="Privacy Policy":"terms"===e&&(t.innerText="Terms and Conditions")}s.scrollTop=0}else console.error("Unknown section:",e)}async function y(e){if(!l)return;if(e.preventDefault(),!p)return;const t=new FormData;t.append("subject","General XCmaps Info Feedback"),t.append("feedbackText",p.querySelector("#infoFeedbackText").value),t.append("userName",p.querySelector("#infoUserName").value),t.append("userEmail",p.querySelector("#infoUserEmail").value),d&&d.files.forEach((e=>{e.status!==Dropzone.ADDED&&e.status!==Dropzone.QUEUED||t.append("images",e)}));try{const e=await fetch("/api/send-feedback",{method:"POST",body:t}),o=await e.json();v(!1);const n=l.querySelector("#info-feedback-message");n&&(n.textContent=o.success?o.message||"Feedback submitted!":o.error||"Submission error.",n.className=o.success?"text-start text-success":"text-start text-danger"),c&&""!==c.innerHTML||(l.style.display="flex")}catch(e){console.error("Submission error:",e),v(!0);const t=l.querySelector("#info-feedback-message");t&&(t.textContent="Network error during submission.",t.className="text-start text-danger")}}function v(e=!0){if(!s)return;const t=s.querySelector("#infoFeedbackFormHtml");if(t&&t.remove(),p=null,d&&("function"==typeof d.destroy&&d.destroy(),d=null),e&&l){const e=l.querySelector("#info-feedback-message");e&&(e.textContent=""),c&&""!==c.innerHTML?l.style.display="none":l.style.display="flex"}}function w(e){let t=e.target;if(l&&l.contains(t)&&t.classList.contains("info-popup-footer-close")){if(L.DomEvent.stopPropagation(e),a&&"none"!==a.style.display)g();else if("function"==typeof window.closeFullscreenInfo){const e=document.getElementById("fullScreenInfo");e&&e.classList.contains("visible")&&window.closeFullscreenInfo()}return}if(l&&l.contains(t)&&t.classList.contains("info-popup-feedback-btn"))return L.DomEvent.stopPropagation(e),void function(){if(!s||!l)return;v(!1);const e=l.querySelector("#info-feedback-message");e&&(e.textContent="",e.className="text-start"),l.style.display="none",s.insertAdjacentHTML("beforeend",'\n                <div id="infoFeedbackFormHtml" class="feedback-modal">\n                    <h5>Feedback for XCmaps</h5>\n                     <form id="infoFeedbackForm">\n                        <div class="form-group mb-2">\n                            <label for="infoFeedbackText">Feedback / Correction / Comment:</label>\n                            <textarea id="infoFeedbackText" class="form-control" required style="height: 100px;"></textarea>\n                        </div>\n                        <div class="form-group mb-2">\n                            <label>Upload Images (optional):</label>\n                            <div id="infoDropzoneFeedback" class="dropzone mt-1 border-dashed rounded-2 min-h-0 dz-clickable"></div>\n                        </div>\n                        <div class="form-group d-flex justify-content-between mb-2">\n                            <div style="width: 48%;">\n                                <label for="infoUserName">Name:</label>\n                                <input type="text" id="infoUserName" class="form-control" required>\n                            </div>\n                            <div style="width: 48%;">\n                                <label for="infoUserEmail">E-Mail:</label>\n                                <input type="email" id="infoUserEmail" class="form-control" required>\n                                <small class="text-danger d-none" id="infoEmailError">Please enter a valid email address.</small>\n                            </div>\n                        </div>\n                        <button type="submit" class="btn btn-sm btn-success me-2">Submit</button>\n                        <button type="button" class="btn btn-sm btn-secondary info-feedback-cancel-btn">Cancel</button>\n                    </form>\n                </div>\n             '),p=s.querySelector("#infoFeedbackFormHtml");try{d=new Dropzone("#infoDropzoneFeedback",{url:"/api/send-feedback",autoProcessQueue:!1,maxFiles:5,maxFilesize:10,acceptedFiles:"image/*",addRemoveLinks:!0,dictDefaultMessage:"Drop files or click here",clickable:!0,init:function(){}})}catch(e){console.error("Dropzone init failed.",e)}const t=p?.querySelector("#infoFeedbackForm"),o=p?.querySelector(".info-feedback-cancel-btn"),n=p?.querySelector("#infoUserEmail");t&&t.addEventListener("submit",y),o&&o.addEventListener("click",(()=>v(!0))),n&&n.addEventListener("input",(function(){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value),t=p?.querySelector("#infoEmailError");t&&t.classList.toggle("d-none",e)})),s.scrollTop=s.scrollHeight}();let o=0,n=t;for(;n&&n!==e.currentTarget&&!n.dataset.section&&o<3;)n=n.parentNode,o++;n&&n.dataset.section&&(L.DomEvent.preventDefault(e),L.DomEvent.stopPropagation(e),b(n.dataset.section))}return L.DomEvent.on(o,"click",(function(t){L.DomEvent.stop(t);if(a&&"none"!==a.style.display)return void g();const o=document.getElementById("fullScreenInfo"),n=o?.querySelector(".info-popup-container");o&&o.classList.contains("visible")&&n?"function"==typeof window.closeFullscreenInfo&&window.closeFullscreenInfo():window.innerWidth<768?function(){const t=h();L.popup({className:"info-popup",autoPan:!1}).setLatLng(e.getCenter()).setContent(t).openOn(e)}():f()})),t.onRemove=function(){a&&(a.remove(),a=null,u=!1),e&&L.DomUtil.removeClass(e.getContainer(),"modal-open")},t}});export default InfoControl;