import{r as h,b as d,o as a,d as u,w as p,e as _,f as l,u as v,i as g,t as y,p as f,q as k,s as x,k as $,l as S,v as w,c,x as B,F as C,m as V,n as b,a as D}from"./index-5b889531.js";const F={alt:"",class:"main__search-list-item-img"},N={class:"main__search-list-item-name"},T={__name:"SearchContent",props:["item"],setup(e){return(t,s)=>{const r=h("router-link"),i=d("lazy");return a(),u(r,{to:e.item.media_type+"/"+e.item.id,class:"main__search-list-item"},{default:p(()=>[_(l("img",F,null,512),[[i,v(g)+e.item.backdrop_path]]),l("h2",N,y(e.item.name||e.item.title),1)]),_:1},8,["to"])}}},U=f({id:"search",state:()=>({url:"https://api.themoviedb.org/3",result:null}),actions:{async searching(e){try{const t=await k.get(`${this.url}/search/multi?api_key=${x}&language=ru-RU&query=${e}`);this.result=t.data.results}catch(t){console.log("Ошибка произошла при поиске данных",t)}}}}),q={class:"main__search"},z={class:"container"},A={key:0,class:"main__search-list"},E={__name:"Search",setup(e){const t=U(),s=$(""),r=S(()=>t.result);let i=null;return w(s,o=>{clearTimeout(i),i=setTimeout(()=>{t.searching(o)},500)}),(o,m)=>(a(),c("div",q,[l("div",z,[_(l("input",{type:"text",class:"main__search-input",placeholder:"Найти фильм, сериал...","onUpdate:modelValue":m[0]||(m[0]=n=>s.value=n)},null,512),[[B,s.value]]),r.value?(a(),c("div",A,[(a(!0),c(C,null,V(r.value,n=>(a(),u(T,{key:n.id,item:n},null,8,["item"]))),128))])):b("",!0)])]))}},K={class:"main"},M={__name:"SearchPage",setup(e){return(t,s)=>(a(),c("main",K,[D(E)]))}};export{M as default};
