let feedbackDropzone=null,currentFeedbackForm=null;function changeSwiper(){"undefined"!=typeof swiperc&&(window.innerWidth<576?($(".swiper2").css("height",""),$(".swiper2").css("width","320px"),$(".swiper2").css("padding-left",""),$(".swiper2").css("padding-top","30px"),$(".swiper2 > .swiper-wrapper").css("width",""),$(".swiper2 > .swiper-wrapper").css("height","100px"),swiperc.changeDirection("horizontal",!0)):(window.innerWidth<840?($(".swiper2").css("width",""),$(".swiper2").css("height","320px")):($(".swiper2").css("width",""),$(".swiper2").css("height","460px")),$(".swiper2").css("padding-top",""),$(".swiper2").css("padding-left","30px"),$(".swiper2 > .swiper-wrapper").css("height",""),$(".swiper2 > .swiper-wrapper").css("width","100px"),swiperc.changeDirection("vertical",!0)))}function initSwiper(e){let t,n;var r=!(e<4),o=!(e<5);t=new Swiper(".swiper1",{autoHeight:!0,direction:"horizontal",allowTouchMove:!1,mousewheel:!1,slidesPerView:1,loop:!1}),n=new Swiper(".swiper2",{direction:"vertical",allowTouchMove:!0,mousewheel:!0,slidesPerView:3,spaceBetween:10,loop:r,breakpoints:{840:{slidesPerView:4,loop:o}},scrollbar:{el:".swiper-scrollbar",hide:!1,draggable:!0},on:{click:function(){let e=this.clickedSlide.firstChild.id.substring(3)-1;t.slideTo(e,1)},transitionEnd:function(){let e=this.realIndex;t.slideTo(e,1)}}}),changeSwiper()}function getAngleRange(e){const t={N:0,NNE:22.5,NE:45,ENE:67.5,E:90,ESE:112.5,SE:135,SSE:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,WNW:292.5,NW:315,NNW:337.5};let n=[];return e.split(",").map((e=>e.trim())).forEach((e=>{let r=e.split("-").map((e=>e.trim()));if(1===r.length){let e=t[r[0]];void 0!==e&&n.push([e-22.5,e+22.5])}else if(2===r.length){let e=t[r[0]],o=t[r[1]];void 0!==e&&void 0!==o&&(o<e&&([e,o]=[o,e]),o-e>180&&([e,o]=[o,e]),n.push([e,o]))}})),n}async function loadPlaceDetails(e,t){try{const n=await fetch(`/api/places/${t}`),r=await n.json();if(r.error)return void console.error("Error fetching place details:",r.error);let o=/<center><b><a href="http:\/\/www\.paraglidingearth\.com\/index\.php\?site=\d+">More information on ParaglidingEarth<\/a><\/b><\/center>\n?/g,i=/<br>\n<b>Take off : <\/b><br>\n?/g,l=/H \d+(-\d+)? m(?:, |<br>)/g,a=/HD \d+ m(?:<br>| \/)/g,s=/\nrating \d+\/\d+(?:\n|<br>)*/gi,c=(r.properties.description||"").replace(o,"").replace(i,"").replace(l,"").replace(a,"").replace(s,"").trim();window.currentPlaceName=r.properties.name,window.currentPlaceId=r.properties.id,window.currentStrPlacemarkId=r.properties.strPlacemarkId;let d=`<span style="color: #0087F7;"><h5>${r.properties.name}</h5></span>\n                            <table style="border-collapse: collapse; width: 70%;">\n                            <tr>\n                                <th style="text-align: left; vertical-align: top;">Type:</th>\n                                <td style="text-align: left; vertical-align: top;">${r.properties.type}</td>\n                            </tr>\n                            <tr>\n                                <th style="text-align: left; vertical-align: top;">Direction:</th>\n                                <td style="text-align: left; vertical-align: top;">${r.properties.direction}</td>\n                            </tr>\n                            <tr>\n                                <th style="text-align: left; vertical-align: top;">Rating:</th>\n                                <td style="text-align: left; vertical-align: top;">${null!=r.properties.rating?r.properties.rating+"/6":" -"}</td>\n                            </tr>\n                            <tr>\n                                <th style="text-align: left; vertical-align: top;">Height:</th>\n                                <td style="text-align: left; vertical-align: top;">${null!=r.properties.height?r.properties.height:" -"}</td>\n                            </tr>\n                            <tr>\n                                <th style="text-align: left; vertical-align: top;">Height difference:</th>\n                                <td style="text-align: left; vertical-align: top;">${null!=r.properties.heightdifference?r.properties.heightdifference:" -"}</td>\n                            </tr>\n                            <tr>\n                                <th style="text-align: left; vertical-align: top;">Last Update:</th>\n                                <td style="text-align: left; vertical-align: top;">${r.properties.lastupdate}</td>\n                            </tr>\n                            </table><br>\n                            <b>Description:</b> <div class="spot-description">${c}</div><br>\n                            <b>© <a href="https://paraglidingspots.com" target="_blank">paraglidingspots.com</a></b>\n                            <div class="modal-footer d-flex justify-content-between">\n                            <div id="feedback-message" class="text-start"></div> \x3c!-- Message on the left --\x3e\n                            <div class="d-flex ms-auto">\n                                <button class="btn btn-primary btn-sm me-2" onclick="showFeebackForm()">Feedback/Correction</button>\n                                <button class="btn btn-dark btn-sm close-popup">Close</button>\n                            </div>\n                            </div>\n                            `;d+="<style>\n        /* Limit the height of the Swiper container */\n        .swiper-container {\n            max-height: 460px !important;\n            height: 460px !important;\n            overflow: hidden !important;\n        }\n\n        /* Ensure individual Swipers don't expand beyond this height */\n        .swiper, .swiper1, .swiper2 {\n            max-height: 460px !important;\n            height: 460px !important;\n            overflow: hidden !important;\n        }\n\n        /* Limit Swiper wrapper height */\n        .swiper-wrapper {\n            max-height: 460px !important;\n        }\n\n        /* Ensure Swiper slides don't stretch */\n        .swiper-slide {\n            max-height: 460px !important;\n            display: flex !important;\n            align-items: center !important; /* Keep images centered */\n            justify-content: center !important;\n        }\n\n        /* Prevent images from exceeding the swiper height */\n        .swiper-slide img {\n            max-height: 100% !important;\n            width: auto !important;\n        }\n        \n        /* Keep the overall popup size unchanged */\n        .leaflet-popup-content {\n            max-height: 780px !important; /* Keep original popup height */\n            overflow-y: auto; /* Allow scrolling inside the popup if needed */\n        }\n\n        .swiper-clear {\n            clear: both;\n            margin-bottom: 1px;\n        }\n        </style>";const p=document.getElementById("fullScreenInfo"),u=document.getElementById("fullscreen-content-area");if(p&&p.classList.contains("visible")&&u){console.log("Updating fullscreen info content area for spot");const e=p.querySelector("#default-fullscreen-close-btn"),t=p.querySelector("#default-fullscreen-footer");e&&e.remove(),t&&t.remove(),u.innerHTML=d}e.setPopupContent(d),setTimeout((()=>{let e=document.querySelector(".swiper1 .swiper-slide img");if(e){initSwiper(parseInt(e.id.replace(/\D/g,""),10)||1)}}),300),setTimeout((()=>{const t=document.getElementById("fullScreenInfo");let n=null;if(t&&t.classList.contains("visible"))n=t.querySelector("#fullscreen-content-area .close-popup"),n?(n.replaceWith(n.cloneNode(!0)),n=t.querySelector("#fullscreen-content-area .close-popup"),n.addEventListener("click",(function(){console.log("Fullscreen close button clicked"),window.closeFullscreenInfo()}))):console.error("Close button not found in fullscreen view");else{const t=e.getPopup().getElement();t&&(n=t.querySelector(".close-popup"),n?(n.replaceWith(n.cloneNode(!0)),n=t.querySelector(".close-popup"),n.addEventListener("click",(function(){console.log("Standard popup close button clicked"),window.map&&window.map.closePopup()}))):console.error("Close button not found in standard popup"))}}),350)}catch(e){console.error("Error fetching place details:",e)}}function showFeebackForm(){currentFeedbackForm&&(currentFeedbackForm.remove(),currentFeedbackForm=null),feedbackDropzone&&(feedbackDropzone.destroy(),feedbackDropzone=null);const e=document.getElementById("feedback-message");e&&(e.textContent="",e.classList.remove("text-success","text-danger"));const t=document.getElementById("fullScreenInfo"),n=t&&t.classList.contains("visible")?t.querySelector("#fullscreen-content-area"):document.querySelector(".leaflet-popup-content");if(!n)return void console.error("Could not find context element for feedback form.");let r=n.querySelector(".modal-footer");r&&(r.style.display="none");const o=`\n        <div id="feedbackFormHtml">\n            <div class="feedback-modal">\n                <span style="color: #0087F7;"><h5>Feedback for ${window.currentPlaceName}</h5></span>\n                <form id="feedbackForm">\n                    <div class="form-group">\n                        <label for="feedbackText">Feedback / Correction / Comment:</label>\n                        <textarea id="feedbackText" class="form-control" required style="height: 130px;"></textarea>\n                    </div>\n                    <div class="form-group">\n                        <label>Upload Images (optional):</label>\n                        <div id="dropzoneFeedback" class="dropzone mt-4 border-dashed rounded-2 min-h-0"></div>\n                    </div>\n                    <div class="form-group d-flex justify-content-between">\n                        <div style="width: 48%;">\n                            <label for="userName">Name:</label>\n                            <input type="text" id="userName" class="form-control" required>\n                        </div>\n                        <div style="width: 48%;">\n                            <label for="userEmail">E-Mail:</label>\n                            <input type="email" id="userEmail" class="form-control" required>\n                            <small class="text-danger d-none" id="emailError">Please enter a valid email address.</small>\n                        </div>\n                    </div>\n                    <button type="submit" class="btn btn-sm btn-success">Submit</button>\n                    <button type="button" class="btn btn-sm btn-secondary" onclick="cancelFeedback()">Cancel</button>\n                </form>\n            </div>\n        </div>\n    `;n?(n.insertAdjacentHTML("beforeend",o),currentFeedbackForm=n.querySelector("#feedbackFormHtml"),setTimeout((()=>{n&&n.scrollTo({top:n.scrollHeight,behavior:"smooth"})}),50),feedbackDropzone=new Dropzone("#dropzoneFeedback",{url:"/upload",autoProcessQueue:!1,maxFiles:5,maxFilesize:100,acceptedFiles:"image/*",addRemoveLinks:!1,dictDefaultMessage:"Drag & drop files here or click to upload",clickable:!0,init:function(){const e=this;this.on("addedfile",(function(t){const n=t.previewElement,r=document.createElement("img");r.src="/assets/images/imgdelete.png",r.alt="Delete",r.classList.add("delete-icon"),n.querySelector(".dz-image").appendChild(r),r.addEventListener("click",(function(n){n.preventDefault(),n.stopPropagation(),e.removeFile(t)}))})),this.on("removedfile",(function(e){console.log("File removed:",e.name)}))}}),document.getElementById("userEmail").addEventListener("input",(function(){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);document.getElementById("emailError").classList.toggle("d-none",e)})),document.getElementById("feedbackForm").addEventListener("submit",(async function(e){e.preventDefault();const t=new FormData;t.append("name",window.currentPlaceName),t.append("id",window.currentPlaceId),t.append("strPlacemarkId",window.currentStrPlacemarkId),t.append("feedbackText",document.getElementById("feedbackText").value),t.append("userName",document.getElementById("userName").value),t.append("userEmail",document.getElementById("userEmail").value),feedbackDropzone.files.forEach((e=>{t.append("images",e)}));try{const e=await fetch("/api/send-feedback",{method:"POST",body:t}),r=await e.json();currentFeedbackForm&&(currentFeedbackForm.remove(),currentFeedbackForm=null),feedbackDropzone&&(feedbackDropzone.destroy(),feedbackDropzone=null);const o=n?n.querySelector("#feedback-message"):document.getElementById("feedback-message"),i=n?n.querySelector(".modal-footer"):document.querySelector(".modal-footer");o?r.success?(o.textContent=r.message||"Feedback submitted successfully!",o.classList.remove("text-danger"),o.classList.add("text-success")):(o.textContent=r.error||"An error occurred.",o.classList.remove("text-success"),o.classList.add("text-danger")):console.error("Feedback message div not found in context."),i?i.style.display="flex":console.error("Modal footer not found in context.")}catch(e){console.error("Submission error:",e);const t=n?n.querySelector(".modal-footer"):document.querySelector(".modal-footer");t&&(t.style.display="flex")}}))):console.error("Popup content not found!")}function cancelFeedback(){currentFeedbackForm&&(currentFeedbackForm.remove(),currentFeedbackForm=null),feedbackDropzone&&(feedbackDropzone.destroy(),feedbackDropzone=null);const e=document.getElementById("fullScreenInfo"),t=e&&e.classList.contains("visible")?e.querySelector("#fullscreen-content-area"):document.querySelector(".leaflet-popup-content");if(t){let e=t.querySelector(".modal-footer");e&&(e.style.display="flex")}else{let e=document.querySelector(".modal-footer");e&&(e.style.display="flex")}}export{changeSwiper,initSwiper,getAngleRange,loadPlaceDetails,showFeebackForm,cancelFeedback};