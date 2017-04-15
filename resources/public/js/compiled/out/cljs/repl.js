// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__48935){
var map__48960 = p__48935;
var map__48960__$1 = ((((!((map__48960 == null)))?((((map__48960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48960):map__48960);
var m = map__48960__$1;
var n = cljs.core.get.call(null,map__48960__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__48960__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48962_48984 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48963_48985 = null;
var count__48964_48986 = (0);
var i__48965_48987 = (0);
while(true){
if((i__48965_48987 < count__48964_48986)){
var f_48988 = cljs.core._nth.call(null,chunk__48963_48985,i__48965_48987);
cljs.core.println.call(null,"  ",f_48988);

var G__48989 = seq__48962_48984;
var G__48990 = chunk__48963_48985;
var G__48991 = count__48964_48986;
var G__48992 = (i__48965_48987 + (1));
seq__48962_48984 = G__48989;
chunk__48963_48985 = G__48990;
count__48964_48986 = G__48991;
i__48965_48987 = G__48992;
continue;
} else {
var temp__4657__auto___48993 = cljs.core.seq.call(null,seq__48962_48984);
if(temp__4657__auto___48993){
var seq__48962_48994__$1 = temp__4657__auto___48993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48962_48994__$1)){
var c__47591__auto___48995 = cljs.core.chunk_first.call(null,seq__48962_48994__$1);
var G__48996 = cljs.core.chunk_rest.call(null,seq__48962_48994__$1);
var G__48997 = c__47591__auto___48995;
var G__48998 = cljs.core.count.call(null,c__47591__auto___48995);
var G__48999 = (0);
seq__48962_48984 = G__48996;
chunk__48963_48985 = G__48997;
count__48964_48986 = G__48998;
i__48965_48987 = G__48999;
continue;
} else {
var f_49000 = cljs.core.first.call(null,seq__48962_48994__$1);
cljs.core.println.call(null,"  ",f_49000);

var G__49001 = cljs.core.next.call(null,seq__48962_48994__$1);
var G__49002 = null;
var G__49003 = (0);
var G__49004 = (0);
seq__48962_48984 = G__49001;
chunk__48963_48985 = G__49002;
count__48964_48986 = G__49003;
i__48965_48987 = G__49004;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49005 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__46780__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__46780__auto__)){
return or__46780__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49005);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49005)))?cljs.core.second.call(null,arglists_49005):arglists_49005));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48966_49006 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48967_49007 = null;
var count__48968_49008 = (0);
var i__48969_49009 = (0);
while(true){
if((i__48969_49009 < count__48968_49008)){
var vec__48970_49010 = cljs.core._nth.call(null,chunk__48967_49007,i__48969_49009);
var name_49011 = cljs.core.nth.call(null,vec__48970_49010,(0),null);
var map__48973_49012 = cljs.core.nth.call(null,vec__48970_49010,(1),null);
var map__48973_49013__$1 = ((((!((map__48973_49012 == null)))?((((map__48973_49012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48973_49012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48973_49012):map__48973_49012);
var doc_49014 = cljs.core.get.call(null,map__48973_49013__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49015 = cljs.core.get.call(null,map__48973_49013__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49011);

cljs.core.println.call(null," ",arglists_49015);

if(cljs.core.truth_(doc_49014)){
cljs.core.println.call(null," ",doc_49014);
} else {
}

var G__49016 = seq__48966_49006;
var G__49017 = chunk__48967_49007;
var G__49018 = count__48968_49008;
var G__49019 = (i__48969_49009 + (1));
seq__48966_49006 = G__49016;
chunk__48967_49007 = G__49017;
count__48968_49008 = G__49018;
i__48969_49009 = G__49019;
continue;
} else {
var temp__4657__auto___49020 = cljs.core.seq.call(null,seq__48966_49006);
if(temp__4657__auto___49020){
var seq__48966_49021__$1 = temp__4657__auto___49020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48966_49021__$1)){
var c__47591__auto___49022 = cljs.core.chunk_first.call(null,seq__48966_49021__$1);
var G__49023 = cljs.core.chunk_rest.call(null,seq__48966_49021__$1);
var G__49024 = c__47591__auto___49022;
var G__49025 = cljs.core.count.call(null,c__47591__auto___49022);
var G__49026 = (0);
seq__48966_49006 = G__49023;
chunk__48967_49007 = G__49024;
count__48968_49008 = G__49025;
i__48969_49009 = G__49026;
continue;
} else {
var vec__48975_49027 = cljs.core.first.call(null,seq__48966_49021__$1);
var name_49028 = cljs.core.nth.call(null,vec__48975_49027,(0),null);
var map__48978_49029 = cljs.core.nth.call(null,vec__48975_49027,(1),null);
var map__48978_49030__$1 = ((((!((map__48978_49029 == null)))?((((map__48978_49029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48978_49029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48978_49029):map__48978_49029);
var doc_49031 = cljs.core.get.call(null,map__48978_49030__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49032 = cljs.core.get.call(null,map__48978_49030__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49028);

cljs.core.println.call(null," ",arglists_49032);

if(cljs.core.truth_(doc_49031)){
cljs.core.println.call(null," ",doc_49031);
} else {
}

var G__49033 = cljs.core.next.call(null,seq__48966_49021__$1);
var G__49034 = null;
var G__49035 = (0);
var G__49036 = (0);
seq__48966_49006 = G__49033;
chunk__48967_49007 = G__49034;
count__48968_49008 = G__49035;
i__48969_49009 = G__49036;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__48980 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__48981 = null;
var count__48982 = (0);
var i__48983 = (0);
while(true){
if((i__48983 < count__48982)){
var role = cljs.core._nth.call(null,chunk__48981,i__48983);
var temp__4657__auto___49037__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___49037__$1)){
var spec_49038 = temp__4657__auto___49037__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_49038));
} else {
}

var G__49039 = seq__48980;
var G__49040 = chunk__48981;
var G__49041 = count__48982;
var G__49042 = (i__48983 + (1));
seq__48980 = G__49039;
chunk__48981 = G__49040;
count__48982 = G__49041;
i__48983 = G__49042;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__48980);
if(temp__4657__auto____$1){
var seq__48980__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48980__$1)){
var c__47591__auto__ = cljs.core.chunk_first.call(null,seq__48980__$1);
var G__49043 = cljs.core.chunk_rest.call(null,seq__48980__$1);
var G__49044 = c__47591__auto__;
var G__49045 = cljs.core.count.call(null,c__47591__auto__);
var G__49046 = (0);
seq__48980 = G__49043;
chunk__48981 = G__49044;
count__48982 = G__49045;
i__48983 = G__49046;
continue;
} else {
var role = cljs.core.first.call(null,seq__48980__$1);
var temp__4657__auto___49047__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___49047__$2)){
var spec_49048 = temp__4657__auto___49047__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_49048));
} else {
}

var G__49049 = cljs.core.next.call(null,seq__48980__$1);
var G__49050 = null;
var G__49051 = (0);
var G__49052 = (0);
seq__48980 = G__49049;
chunk__48981 = G__49050;
count__48982 = G__49051;
i__48983 = G__49052;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1492150115785