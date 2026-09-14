const questions = [{"s": "CDP", "q": "एक शिक्षक कठिन प्रश्न का उत्तर सीधे बताने के बजाय संकेत देता है और धीरे-धीरे सहायता कम करता है। यह किस विचार से सबसे अधिक संबंधित है?", "o": ["रटकर सीखना", "Scaffolding", "दंड आधारित शिक्षण", "केवल व्याख्यान"], "a": 1, "l": "Scaffolding में शिक्षक शुरुआत में सहायता देता है और विद्यार्थी की क्षमता बढ़ने पर सहायता धीरे-धीरे कम करता है।"}, {"s": "Hindi", "q": "यदि विद्यार्थी किसी नए शब्द का अर्थ उसके वाक्य में प्रयोग और आसपास के शब्दों से अनुमान लगाता है, तो यह किस कौशल को दर्शाता है?", "o": ["केवल वर्तनी", "संदर्भ से अर्थ ग्रहण", "यांत्रिक लेखन", "श्रुतिलेख"], "a": 1, "l": "शब्द के आसपास के संदर्भ से अर्थ निकालना contextual meaning making है।"}, {"s": "English", "q": "A learner understands a new word by examining the words around it in a sentence. Which strategy is being used?", "o": ["Guessing randomly", "Using context clues", "Copying", "Memorising spelling"], "a": 1, "l": "Context clues help learners infer meaning from surrounding information rather than memorising isolated words."}, {"s": "Maths", "q": "यदि किसी संख्या का 25% = 40 है, तो उसी संख्या का 60% कितना होगा?", "o": ["80", "96", "100", "120"], "a": 1, "l": "25% = 40, इसलिए 100% = 160. अब 60% = 96."}, {"s": "Science", "q": "लोहे की कील को तांबे के सल्फेट विलयन में डालने पर विलयन का रंग बदलता है। इसका मुख्य कारण क्या है?", "o": ["वाष्पीकरण", "विस्थापन अभिक्रिया", "गलन", "प्रकाश का परावर्तन"], "a": 1, "l": "लोहा तांबे से अधिक क्रियाशील है, इसलिए वह तांबे को उसके यौगिक से विस्थापित करता है।"}, {"s": "SST", "q": "यदि किसी क्षेत्र में वर्षा कम हो लेकिन सिंचाई की सुविधा विकसित हो, तो कृषि पर सबसे सीधा प्रभाव क्या हो सकता है?", "o": ["कृषि हमेशा असंभव होगी", "फसल उत्पादन की निर्भरता केवल वर्षा पर कम हो सकती है", "मिट्टी समाप्त हो जाएगी", "नदियाँ सूख जाएँगी"], "a": 1, "l": "सिंचाई जल की वैकल्पिक व्यवस्था देती है, इसलिए कृषि की वर्षा पर निर्भरता घट सकती है।"}, {"s": "Sanskrit", "q": "‘रामः विद्यालयं गच्छति’ वाक्ये ‘रामः’ पदस्य का भूमिका अस्ति?", "o": ["कर्म", "कर्ता", "करण", "अधिकरण"], "a": 1, "l": "जो कार्य करता है वह कर्ता होता है। यहाँ गमन की क्रिया रामः करता है।"}];

let current="All";
function render(){
 const data=current==="All"?questions:questions.filter(x=>x.s===current);
 document.getElementById("stats").innerHTML=`<div class="count">${data.length} practice questions • ${current}</div>`;
 document.getElementById("quiz").innerHTML=data.map((x,i)=>`
 <article class="card">
   <span class="tag">${x.s}</span>
   <p class="q">${i+1}. ${x.q}</p>
   ${x.o.map((op,j)=>`<div class="option ${j===x.a?'correct':''}">${String.fromCharCode(65+j)}. ${op}${j===x.a?' ✓':''}</div>`).join("")}
   <div class="answer"><b>सही उत्तर:</b> ${String.fromCharCode(65+x.a)}. ${x.o[x.a]}</div>
   <div class="logic"><b>Logic / Concept:</b> ${x.l}</div>
 </article>`).join("");
}
function filterSubject(s){current=s;render()}
render();