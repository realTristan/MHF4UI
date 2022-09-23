import{S as se,i as re,s as ne,k as x,l as p,m as g,h as f,b as A,A as j,J as P,q as D,a as L,r as I,c as $,p as v,F as d,u as B,n as m,H as ie,f as J,d as ce,t as O,o as ue,L as fe,v as he,w as _e,M as de,x as me,y as ve,g as xe}from"../../../chunks/index-d3d824ee.js";const pe={title:"Lesson #1 | Factor Theorum",video:{url:"https://www.youtube.com/embed/oV3-Nbk9bow",title:"Unit #1 Lesson #1 Factor Theorem"},note:"https://drive.google.com/file/d/1DVJlB2dntH4L6rCX6NT8W5amSaj4Irbr/view",hw_full_solutions:"https://drive.google.com/file/d/1J8hK2GPQ5fvN9I5z-SdGpYzQefO99Jgq/view",hw_questions:[{title:"1. Factor each of the following fully",questions:["f(x) = x^3 - 3x^2 - 10x + 24","f(x) = 4x^3 + 12x^2 - x - 15","f(x) = x^4 + 8x^3 + 4x^2 - 48x","f(x) = 4x^4 + 7x^3 - 80x^2 - 21x + 270","f(x) = x^5 - 5x^4 - 7x^3 + 29x^2 + 30x","f(x) = x^4 + 2x^3 - 23x^2 - 24^x + 144"],solutions:["(x - 2)(x - 4)(x + 3)","(x - 1)(2x + 3)(2x + 5)","x(x - 2)(x + 4)(x + 6)","(x + 2)(x + 5)(4x - 9)(x - 3)","x(x + 2)(x + 1)(x - 3)(x - 5)","(x - 3)(x - 3)(x + 4)(x + 4)"]}]},ge={title:"Lesson #2 | Test",video:{url:"https://www.youtube.com/embed/none",title:"Video Title"},note:"#",hw_full_solutions:"#",hw_questions:[{title:"1. Task 1",questions:["Question 1","Question 2","Question 3","Question 4"],solutions:["Solution 1","Solution 2","Solution 3","Solution 4"]},{title:"2. Task 2",questions:["Question 5: Max 100 Characters","Question 6: Max 100 Characters","Question 7: Max 100 Characters","Question 8: Max 100 Characters"],solutions:["Solution 5","Solution 6","Solution 7","Solution 8"]}]},F={lesson_8:pe,lesson_2:ge};function X(u,o,t){const e=u.slice();return e[1]=o[t],e}function Y(u,o,t){const e=u.slice();return e[4]=o[t],e[6]=t,e}function Z(u){let o,t,e,s=ye[u[6]]+"",r,h,n,i=u[4]+"",l,_,a,k,M,H,w,y,R,V=u[1].solutions[u[6]]+"",C;return{c(){o=x("div"),t=x("div"),e=x("mark"),r=D(s),h=D(")"),n=L(),l=D(i),_=L(),a=x("div"),k=x("div"),M=x("mark"),H=D("\xA0\xA0Correct Answer:"),w=L(),y=x("mark"),R=D("\xA0"),C=D(V),this.h()},l(q){o=p(q,"DIV",{id:!0,class:!0});var b=g(o);t=p(b,"DIV",{id:!0,class:!0});var S=g(t);e=p(S,"MARK",{style:!0});var Q=g(e);r=I(Q,s),h=I(Q,")"),Q.forEach(f),n=$(S),l=I(S,i),_=$(S),a=p(S,"DIV",{id:!0,class:!0});var K=g(a);k=p(K,"DIV",{style:!0});var c=g(k);M=p(c,"MARK",{style:!0});var E=g(M);H=I(E,"\xA0\xA0Correct Answer:"),E.forEach(f),w=$(c),y=p(c,"MARK",{style:!0});var T=g(y);R=I(T,"\xA0"),C=I(T,V),T.forEach(f),c.forEach(f),K.forEach(f),S.forEach(f),b.forEach(f),this.h()},h(){v(e,"color","#3f3f46"),v(e,"background","none"),v(M,"color","black"),v(M,"background","none"),v(y,"color","#3f3f46"),v(y,"background","none"),v(k,"margin","10px"),v(k,"margin-top","15px"),m(a,"id","fade_in_text"),m(a,"class","svelte-13wow5y"),m(t,"id","slider"),m(t,"class","svelte-13wow5y"),m(o,"id","work_div"),m(o,"class","svelte-13wow5y")},m(q,b){A(q,o,b),d(o,t),d(t,e),d(e,r),d(e,h),d(t,n),d(t,l),d(t,_),d(t,a),d(a,k),d(k,M),d(M,H),d(k,w),d(k,y),d(y,R),d(y,C)},p(q,b){b&1&&i!==(i=q[4]+"")&&B(l,i),b&1&&V!==(V=q[1].solutions[q[6]]+"")&&B(C,V)},d(q){q&&f(o)}}}function ee(u){let o,t=u[1].title+"",e,s,r,h,n=u[1].questions,i=[];for(let l=0;l<n.length;l+=1)i[l]=Z(Y(u,n,l));return{c(){o=x("h3"),e=D(t),s=L(),r=x("div");for(let l=0;l<i.length;l+=1)i[l].c();h=L(),this.h()},l(l){o=p(l,"H3",{style:!0});var _=g(o);e=I(_,t),_.forEach(f),s=$(l),r=p(l,"DIV",{style:!0});var a=g(r);for(let k=0;k<i.length;k+=1)i[k].l(a);h=$(a),a.forEach(f),this.h()},h(){v(o,"margin-bottom","5px"),v(o,"margin-top","10px"),v(r,"margin-left","30%"),v(r,"margin-right","30%")},m(l,_){A(l,o,_),d(o,e),A(l,s,_),A(l,r,_);for(let a=0;a<i.length;a+=1)i[a].m(r,null);d(r,h)},p(l,_){if(_&1&&t!==(t=l[1].title+"")&&B(e,t),_&1){n=l[1].questions;let a;for(a=0;a<n.length;a+=1){const k=Y(l,n,a);i[a]?i[a].p(k,_):(i[a]=Z(k),i[a].c(),i[a].m(r,h))}for(;a<i.length;a+=1)i[a].d(1);i.length=n.length}},d(l){l&&f(o),l&&f(s),l&&f(r),P(i,l)}}}function ke(u){let o,t=u[0].hw_questions,e=[];for(let s=0;s<t.length;s+=1)e[s]=ee(X(u,t,s));return{c(){o=x("main");for(let s=0;s<e.length;s+=1)e[s].c()},l(s){o=p(s,"MAIN",{});var r=g(o);for(let h=0;h<e.length;h+=1)e[h].l(r);r.forEach(f)},m(s,r){A(s,o,r);for(let h=0;h<e.length;h+=1)e[h].m(o,null)},p(s,[r]){if(r&1){t=s[0].hw_questions;let h;for(h=0;h<t.length;h+=1){const n=X(s,t,h);e[h]?e[h].p(n,r):(e[h]=ee(n),e[h].c(),e[h].m(o,null))}for(;h<e.length;h+=1)e[h].d(1);e.length=t.length}},i:j,o:j,d(s){s&&f(o),P(e,s)}}}const ye="ABCDEFGHIJKLMNOPQRSTUVWXYZ";function we(u,o,t){let{LessonData:e}=o;return u.$$set=s=>{"LessonData"in s&&t(0,e=s.LessonData)},[e]}class be extends se{constructor(o){super(),re(this,o,we,ke,ne,{LessonData:0})}}const{document:te}=fe;function le(u,o,t){const e=u.slice();e[0]=o[t][0];const s=F[e[0]].title.split(" |");return e[1]=s,e}function oe(u){let o,t,e,s=u[1][0]+"",r,h,n=u[1][1]+"",i,l,_,a,k,M,H,w,y,R=u[1][0]+"",V,C,q,b,S,Q,K;return b=new be({props:{LessonData:F[u[0]]}}),{c(){o=x("h1"),t=x("a"),e=x("mark"),r=D(s),h=L(),i=D(n),l=L(),_=x("div"),a=x("iframe"),M=L(),H=x("h2"),w=x("a"),y=x("mark"),V=D(R),C=D(" Homework"),q=L(),he(b.$$.fragment),S=L(),Q=x("div"),this.h()},l(c){o=p(c,"H1",{class:!0});var E=g(o);t=p(E,"A",{style:!0,rel:!0,target:!0,href:!0});var T=g(t);e=p(T,"MARK",{style:!0});var G=g(e);r=I(G,s),G.forEach(f),h=$(T),i=I(T,n),T.forEach(f),E.forEach(f),l=$(c),_=p(c,"DIV",{});var U=g(_);a=p(U,"IFRAME",{style:!0,width:!0,height:!0,frameborder:!0,src:!0,title:!0,allow:!0});var ae=g(a);ae.forEach(f),U.forEach(f),M=$(c),H=p(c,"H2",{});var z=g(H);w=p(z,"A",{style:!0,rel:!0,target:!0,href:!0});var N=g(w);y=p(N,"MARK",{style:!0});var W=g(y);V=I(W,R),W.forEach(f),C=I(N," Homework"),N.forEach(f),z.forEach(f),q=$(c),_e(b.$$.fragment,c),S=$(c),Q=p(c,"DIV",{class:!0}),g(Q).forEach(f),this.h()},h(){v(e,"color","black"),v(e,"background","none"),v(t,"color","#7c3aed"),v(t,"text-decoration","none"),m(t,"rel","noopener noreferrer"),m(t,"target","_blank"),m(t,"href",F[u[0]].note),m(o,"class","svelte-1gtks54"),v(a,"border-radius","5px"),m(a,"width","480"),m(a,"height","220"),m(a,"frameborder","0"),de(a.src,k=F[u[0]].video.url)||m(a,"src",k),m(a,"title",F[u[0]].video.title),m(a,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),a.allowFullscreen=!0,v(y,"color","black"),v(y,"background","none"),v(w,"color","#7c3aed"),v(w,"text-decoration","none"),m(w,"rel","noopener noreferrer"),m(w,"target","_blank"),m(w,"href",F[u[0]].hw_full_solutions),m(Q,"class","seperator svelte-1gtks54")},m(c,E){A(c,o,E),d(o,t),d(t,e),d(e,r),d(t,h),d(t,i),A(c,l,E),A(c,_,E),d(_,a),A(c,M,E),A(c,H,E),d(H,w),d(w,y),d(y,V),d(w,C),A(c,q,E),me(b,c,E),A(c,S,E),A(c,Q,E),K=!0},p:j,i(c){K||(J(b.$$.fragment,c),K=!0)},o(c){O(b.$$.fragment,c),K=!1},d(c){c&&f(o),c&&f(l),c&&f(_),c&&f(M),c&&f(H),c&&f(q),ve(b,c),c&&f(S),c&&f(Q)}}}function Ee(u){let o,t,e,s=Object.entries(F),r=[];for(let n=0;n<s.length;n+=1)r[n]=oe(le(u,s,n));const h=n=>O(r[n],1,1,()=>{r[n]=null});return{c(){o=L(),t=x("main");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){ie('[data-svelte="svelte-1x1wwj2"]',te.head).forEach(f),o=$(n),t=p(n,"MAIN",{class:!0});var l=g(t);for(let _=0;_<r.length;_+=1)r[_].l(l);l.forEach(f),this.h()},h(){te.title="MHF4UI - Lesson",m(t,"class","svelte-1gtks54")},m(n,i){A(n,o,i),A(n,t,i);for(let l=0;l<r.length;l+=1)r[l].m(t,null);e=!0},p(n,[i]){if(i&0){s=Object.entries(F);let l;for(l=0;l<s.length;l+=1){const _=le(n,s,l);r[l]?(r[l].p(_,i),J(r[l],1)):(r[l]=oe(_),r[l].c(),J(r[l],1),r[l].m(t,null))}for(xe(),l=s.length;l<r.length;l+=1)h(l);ce()}},i(n){if(!e){for(let i=0;i<s.length;i+=1)J(r[i]);e=!0}},o(n){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)O(r[i]);e=!1},d(n){n&&f(o),n&&f(t),P(r,n)}}}function Ae(u,o,t,e){if(t.style.height=="20px"||t.style.height==""){t.style.height="60px",t.style.display="block",o[e].style.display="block";for(let s=0;s<u.length;s++)s!=e&&(u[s].style.height="20px",o[s].style.display="none")}else t.style.height="20px",o[e].style.display="none"}function qe(u){return ue(()=>{let o=[],t=[];document.querySelectorAll("#fade_in_text").forEach(e=>{e.style.display="none",t.push(e)}),document.querySelectorAll("#slider").forEach((e,s)=>{o.push(e),e.addEventListener("click",()=>Ae(o,t,e,s))})}),[]}class Se extends se{constructor(o){super(),re(this,o,qe,Ee,ne,{})}}export{Se as default};
