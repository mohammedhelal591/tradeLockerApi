import{a as j,k as B}from"./chunk-7D26SDIZ.js";import"./chunk-ZIEV5ZTI.js";import{Aa as d,Ka as u,Qa as k,Sa as b,U as m,Va as T,Wa as f,Xa as v,Ya as C,Za as a,_ as s,_a as i,ab as N,ba as g,bb as I,cb as h,jb as l,ka as A,kb as S,la as $,mb as x,vb as y}from"./chunk-V5GLINCU.js";var z=function(n){return n.ASK="ASK",n.BID="BID",n.TRADE="TRADE",n}(z||{}),_=(()=>{let o=class o{constructor(){this.token=u(null,{equal:()=>!1}),this.locale="en",this.from=new Date,this.to=new Date,this.http=s(j);let t=localStorage.getItem("accessToken");t&&this.token.set(t)}getTradeAccount(t){debugger;return this.http.get("https://demo.tradelocker.com/backend-api/trade/accounts",{headers:{accept:"application/json",Authorization:`Bearer ${this.token()}`,accNum:`${t}`}})}getAccountExcutions(t,e){return this.http.get(`https://demo.tradelocker.com/backend-api/trade/accounts/${e}/excutions`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token()}`,accNum:`${t}`}})}getAccountInstruments(t,e){debugger;return this.http.get(`https://demo.tradelocker.com/backend-api/trade/accounts/${e}/instruments?locale=${this.locale}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token()}`,accNum:`${t}`}})}getAccountOrders(t,e,c,p,D){return this.http.get(`https://demo.tradelocker.com/backend-api/trade/accounts/${e}/orders?dateFrom=${this.from}&dateTo=${this.to}&instrumentId=${D}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token()}`,accNum:`${t}`}})}getAccountOpenPositions(t,e){return this.http.get(`https://demo.tradelocker.com/backend-api/trade/accounts/${e}/positions`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token()}`,accNum:`${t}`}})}getCurrentAccountState(t,e){return this.http.get(`https://demo.tradelocker.com/backend-api/trade/accounts/${e}/state`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token()}`,accNum:`${t}`}})}getInstruments(t,e,c){return this.http.get(`https://demo.tradelocker.com/backend-api/trade/instruments/${c}?routeId=${e}&locale=${this.locale}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token()}`,accNum:`${t}`}})}getSessions(t,e){return this.http.get(`https://demo.tradelocker.com/backend-api/trade/sessions/${e}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token()}`,accNum:`${t}`}})}getSessionStatus(t,e){return this.http.get(`https://demo.tradelocker.com/backend-api/trade/sessionStatuses/${t}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token()}`,accNum:`${e}`}})}getDailyBar(t,e,c,p){return this.http.get(`https://demo.tradelocker.com/backend-api/trade/dailyBar?routeId=${e}&barType=${z[c]}&tradableInstrumentId=${p}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token()}`,accNum:`${t}`}})}getMarketDepth(t,e,c){return this.http.get(`https://demo.tradelocker.com/backend-api/trade/depth?routeId=${e}&tradableInstrumentId=${c}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token()}`,accNum:`${t}`}})}getCurrentInstrumentPrices(t,e,c){return this.http.get(`https://demo.tradelocker.com/backend-api/trade/quotes?routeId=${e}&tradableInstrumentId=${c}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token()}`,accNum:`${t}`}})}placeNewOrder(t,e,c){return this.http.post(`https://demo.tradelocker.com/backend-api/trade/accounts/${t}/orders`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token()}`,accNum:`${e}`},body:c})}};o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=m({token:o,factory:o.\u0275fac,providedIn:"root"});let n=o;return n})();function O(n,o){if(n&1&&(a(0,"option",7),l(1),i()),n&2){let r=o.$implicit;b("value",r.accNum),d(),S(r.name)}}function E(n,o){if(n&1){let r=N();a(0,"div",2)(1,"h2",3),l(2,"Select Trade Account"),i(),a(3,"div",4)(4,"select",5),I("change",function(e){A(r);let c=h();return $(c.selectAccount(e))}),a(5,"option",6),l(6,"Account..."),i(),v(7,O,2,2,"option",7,f),i()()()}if(n&2){let r=h();d(7),C(r.accounts())}}var G=(()=>{let o=class o{constructor(){this.tradeService=s(_),this.authService=s(B),this.accounts=u([],{equal:()=>!1}),this.selectedTradeAccount=u(null,{equal:()=>!1}),this.getAllAccounts(),y(()=>{this.selectedTradeAccount()&&(this.getTradeAccount(),this.getAccountInstruments(),this.getAccountOrders(),this.getAccountOpenPositions())})}getAllAccounts(){this.authService.getAllAcounts(this.authService.accessToken()).subscribe({next:t=>{this.authService.accounts.set(t.accounts),this.accounts.set(t.accounts)}})}selectAccount(t){this.selectedTradeAccount.update(()=>{let e=this.accounts().find(c=>c.accNum==t.target.value);return console.log(e),e||null})}getTradeAccount(){this.tradeService.getTradeAccount(Number(this.selectedTradeAccount()?.accNum)).subscribe({next:t=>{console.log(t)}})}getAccountInstruments(){debugger;this.tradeService.getAccountInstruments(Number(this.selectedTradeAccount()?.accNum),Number(this.selectedTradeAccount()?.id)).subscribe({next:t=>{debugger;console.log(t)}})}getAccountOrders(){this.tradeService.getAccountOrders(Number(this.selectedTradeAccount()?.accNum),Number(this.selectedTradeAccount()?.id)).subscribe({next:t=>{console.log(t)}})}getAccountOpenPositions(){this.tradeService.getAccountOpenPositions(Number(this.selectedTradeAccount()?.accNum),Number(this.selectedTradeAccount()?.id)).subscribe({next:t=>{console.log(t)}})}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=g({type:o,selectors:[["app-trade-account"]],standalone:!0,features:[x],decls:3,vars:1,consts:[[1,"container"],[1,"row","p-5"],[1,"col-md-12"],[1,"text-light"],[1,"mt-3"],[1,"form-select",3,"change"],["value","null","selected","","disabled",""],[3,"value"]],template:function(e,c){e&1&&(a(0,"div",0)(1,"div",1),k(2,E,9,0,"div",2),i()()),e&2&&(d(2),T(2,c.accounts().length>0?2:-1))}});let n=o;return n})();export{G as TradeAccountComponent};
