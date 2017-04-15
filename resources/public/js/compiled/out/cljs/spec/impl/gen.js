// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__47386__auto__,writer__47387__auto__,opt__47388__auto__){
return cljs.core._write.call(null,writer__47387__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__47862__auto__ = [];
var len__47855__auto___49921 = arguments.length;
var i__47856__auto___49922 = (0);
while(true){
if((i__47856__auto___49922 < len__47855__auto___49921)){
args__47862__auto__.push((arguments[i__47856__auto___49922]));

var G__49923 = (i__47856__auto___49922 + (1));
i__47856__auto___49922 = G__49923;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq49920){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49920));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__47862__auto__ = [];
var len__47855__auto___49925 = arguments.length;
var i__47856__auto___49926 = (0);
while(true){
if((i__47856__auto___49926 < len__47855__auto___49925)){
args__47862__auto__.push((arguments[i__47856__auto___49926]));

var G__49927 = (i__47856__auto___49926 + (1));
i__47856__auto___49926 = G__49927;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq49924){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49924));
});

var g_QMARK__49928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_49929 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__49928){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__49928))
,null));
var mkg_49930 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__49928,g_49929){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__49928,g_49929))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__49928,g_49929,mkg_49930){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__49928).call(null,x);
});})(g_QMARK__49928,g_49929,mkg_49930))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__49928,g_49929,mkg_49930){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_49930).call(null,gfn);
});})(g_QMARK__49928,g_49929,mkg_49930))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__49928,g_49929,mkg_49930){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_49929).call(null,generator);
});})(g_QMARK__49928,g_49929,mkg_49930))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__47939__auto___49949 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__47939__auto___49949){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__47862__auto__ = [];
var len__47855__auto___49950 = arguments.length;
var i__47856__auto___49951 = (0);
while(true){
if((i__47856__auto___49951 < len__47855__auto___49950)){
args__47862__auto__.push((arguments[i__47856__auto___49951]));

var G__49952 = (i__47856__auto___49951 + (1));
i__47856__auto___49951 = G__49952;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___49949))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___49949){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___49949),args);
});})(g__47939__auto___49949))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__47939__auto___49949){
return (function (seq49931){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49931));
});})(g__47939__auto___49949))
;


var g__47939__auto___49953 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__47939__auto___49953){
return (function cljs$spec$impl$gen$list(var_args){
var args__47862__auto__ = [];
var len__47855__auto___49954 = arguments.length;
var i__47856__auto___49955 = (0);
while(true){
if((i__47856__auto___49955 < len__47855__auto___49954)){
args__47862__auto__.push((arguments[i__47856__auto___49955]));

var G__49956 = (i__47856__auto___49955 + (1));
i__47856__auto___49955 = G__49956;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___49953))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___49953){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___49953),args);
});})(g__47939__auto___49953))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__47939__auto___49953){
return (function (seq49932){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49932));
});})(g__47939__auto___49953))
;


var g__47939__auto___49957 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__47939__auto___49957){
return (function cljs$spec$impl$gen$map(var_args){
var args__47862__auto__ = [];
var len__47855__auto___49958 = arguments.length;
var i__47856__auto___49959 = (0);
while(true){
if((i__47856__auto___49959 < len__47855__auto___49958)){
args__47862__auto__.push((arguments[i__47856__auto___49959]));

var G__49960 = (i__47856__auto___49959 + (1));
i__47856__auto___49959 = G__49960;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___49957))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___49957){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___49957),args);
});})(g__47939__auto___49957))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__47939__auto___49957){
return (function (seq49933){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49933));
});})(g__47939__auto___49957))
;


var g__47939__auto___49961 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__47939__auto___49961){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__47862__auto__ = [];
var len__47855__auto___49962 = arguments.length;
var i__47856__auto___49963 = (0);
while(true){
if((i__47856__auto___49963 < len__47855__auto___49962)){
args__47862__auto__.push((arguments[i__47856__auto___49963]));

var G__49964 = (i__47856__auto___49963 + (1));
i__47856__auto___49963 = G__49964;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___49961))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___49961){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___49961),args);
});})(g__47939__auto___49961))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__47939__auto___49961){
return (function (seq49934){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49934));
});})(g__47939__auto___49961))
;


var g__47939__auto___49965 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__47939__auto___49965){
return (function cljs$spec$impl$gen$set(var_args){
var args__47862__auto__ = [];
var len__47855__auto___49966 = arguments.length;
var i__47856__auto___49967 = (0);
while(true){
if((i__47856__auto___49967 < len__47855__auto___49966)){
args__47862__auto__.push((arguments[i__47856__auto___49967]));

var G__49968 = (i__47856__auto___49967 + (1));
i__47856__auto___49967 = G__49968;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___49965))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___49965){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___49965),args);
});})(g__47939__auto___49965))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__47939__auto___49965){
return (function (seq49935){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49935));
});})(g__47939__auto___49965))
;


var g__47939__auto___49969 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__47939__auto___49969){
return (function cljs$spec$impl$gen$vector(var_args){
var args__47862__auto__ = [];
var len__47855__auto___49970 = arguments.length;
var i__47856__auto___49971 = (0);
while(true){
if((i__47856__auto___49971 < len__47855__auto___49970)){
args__47862__auto__.push((arguments[i__47856__auto___49971]));

var G__49972 = (i__47856__auto___49971 + (1));
i__47856__auto___49971 = G__49972;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___49969))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___49969){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___49969),args);
});})(g__47939__auto___49969))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__47939__auto___49969){
return (function (seq49936){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49936));
});})(g__47939__auto___49969))
;


var g__47939__auto___49973 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__47939__auto___49973){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__47862__auto__ = [];
var len__47855__auto___49974 = arguments.length;
var i__47856__auto___49975 = (0);
while(true){
if((i__47856__auto___49975 < len__47855__auto___49974)){
args__47862__auto__.push((arguments[i__47856__auto___49975]));

var G__49976 = (i__47856__auto___49975 + (1));
i__47856__auto___49975 = G__49976;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___49973))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___49973){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___49973),args);
});})(g__47939__auto___49973))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__47939__auto___49973){
return (function (seq49937){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49937));
});})(g__47939__auto___49973))
;


var g__47939__auto___49977 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__47939__auto___49977){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__47862__auto__ = [];
var len__47855__auto___49978 = arguments.length;
var i__47856__auto___49979 = (0);
while(true){
if((i__47856__auto___49979 < len__47855__auto___49978)){
args__47862__auto__.push((arguments[i__47856__auto___49979]));

var G__49980 = (i__47856__auto___49979 + (1));
i__47856__auto___49979 = G__49980;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___49977))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___49977){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___49977),args);
});})(g__47939__auto___49977))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__47939__auto___49977){
return (function (seq49938){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49938));
});})(g__47939__auto___49977))
;


var g__47939__auto___49981 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__47939__auto___49981){
return (function cljs$spec$impl$gen$elements(var_args){
var args__47862__auto__ = [];
var len__47855__auto___49982 = arguments.length;
var i__47856__auto___49983 = (0);
while(true){
if((i__47856__auto___49983 < len__47855__auto___49982)){
args__47862__auto__.push((arguments[i__47856__auto___49983]));

var G__49984 = (i__47856__auto___49983 + (1));
i__47856__auto___49983 = G__49984;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___49981))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___49981){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___49981),args);
});})(g__47939__auto___49981))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__47939__auto___49981){
return (function (seq49939){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49939));
});})(g__47939__auto___49981))
;


var g__47939__auto___49985 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__47939__auto___49985){
return (function cljs$spec$impl$gen$bind(var_args){
var args__47862__auto__ = [];
var len__47855__auto___49986 = arguments.length;
var i__47856__auto___49987 = (0);
while(true){
if((i__47856__auto___49987 < len__47855__auto___49986)){
args__47862__auto__.push((arguments[i__47856__auto___49987]));

var G__49988 = (i__47856__auto___49987 + (1));
i__47856__auto___49987 = G__49988;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___49985))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___49985){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___49985),args);
});})(g__47939__auto___49985))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__47939__auto___49985){
return (function (seq49940){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49940));
});})(g__47939__auto___49985))
;


var g__47939__auto___49989 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__47939__auto___49989){
return (function cljs$spec$impl$gen$choose(var_args){
var args__47862__auto__ = [];
var len__47855__auto___49990 = arguments.length;
var i__47856__auto___49991 = (0);
while(true){
if((i__47856__auto___49991 < len__47855__auto___49990)){
args__47862__auto__.push((arguments[i__47856__auto___49991]));

var G__49992 = (i__47856__auto___49991 + (1));
i__47856__auto___49991 = G__49992;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___49989))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___49989){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___49989),args);
});})(g__47939__auto___49989))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__47939__auto___49989){
return (function (seq49941){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49941));
});})(g__47939__auto___49989))
;


var g__47939__auto___49993 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__47939__auto___49993){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__47862__auto__ = [];
var len__47855__auto___49994 = arguments.length;
var i__47856__auto___49995 = (0);
while(true){
if((i__47856__auto___49995 < len__47855__auto___49994)){
args__47862__auto__.push((arguments[i__47856__auto___49995]));

var G__49996 = (i__47856__auto___49995 + (1));
i__47856__auto___49995 = G__49996;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___49993))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___49993){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___49993),args);
});})(g__47939__auto___49993))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__47939__auto___49993){
return (function (seq49942){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49942));
});})(g__47939__auto___49993))
;


var g__47939__auto___49997 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__47939__auto___49997){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__47862__auto__ = [];
var len__47855__auto___49998 = arguments.length;
var i__47856__auto___49999 = (0);
while(true){
if((i__47856__auto___49999 < len__47855__auto___49998)){
args__47862__auto__.push((arguments[i__47856__auto___49999]));

var G__50000 = (i__47856__auto___49999 + (1));
i__47856__auto___49999 = G__50000;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___49997))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___49997){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___49997),args);
});})(g__47939__auto___49997))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__47939__auto___49997){
return (function (seq49943){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49943));
});})(g__47939__auto___49997))
;


var g__47939__auto___50001 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__47939__auto___50001){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50002 = arguments.length;
var i__47856__auto___50003 = (0);
while(true){
if((i__47856__auto___50003 < len__47855__auto___50002)){
args__47862__auto__.push((arguments[i__47856__auto___50003]));

var G__50004 = (i__47856__auto___50003 + (1));
i__47856__auto___50003 = G__50004;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___50001))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___50001){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___50001),args);
});})(g__47939__auto___50001))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__47939__auto___50001){
return (function (seq49944){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49944));
});})(g__47939__auto___50001))
;


var g__47939__auto___50005 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__47939__auto___50005){
return (function cljs$spec$impl$gen$sample(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50006 = arguments.length;
var i__47856__auto___50007 = (0);
while(true){
if((i__47856__auto___50007 < len__47855__auto___50006)){
args__47862__auto__.push((arguments[i__47856__auto___50007]));

var G__50008 = (i__47856__auto___50007 + (1));
i__47856__auto___50007 = G__50008;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___50005))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___50005){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___50005),args);
});})(g__47939__auto___50005))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__47939__auto___50005){
return (function (seq49945){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49945));
});})(g__47939__auto___50005))
;


var g__47939__auto___50009 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__47939__auto___50009){
return (function cljs$spec$impl$gen$return(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50010 = arguments.length;
var i__47856__auto___50011 = (0);
while(true){
if((i__47856__auto___50011 < len__47855__auto___50010)){
args__47862__auto__.push((arguments[i__47856__auto___50011]));

var G__50012 = (i__47856__auto___50011 + (1));
i__47856__auto___50011 = G__50012;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___50009))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___50009){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___50009),args);
});})(g__47939__auto___50009))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__47939__auto___50009){
return (function (seq49946){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49946));
});})(g__47939__auto___50009))
;


var g__47939__auto___50013 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__47939__auto___50013){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50014 = arguments.length;
var i__47856__auto___50015 = (0);
while(true){
if((i__47856__auto___50015 < len__47855__auto___50014)){
args__47862__auto__.push((arguments[i__47856__auto___50015]));

var G__50016 = (i__47856__auto___50015 + (1));
i__47856__auto___50015 = G__50016;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___50013))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___50013){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___50013),args);
});})(g__47939__auto___50013))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__47939__auto___50013){
return (function (seq49947){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49947));
});})(g__47939__auto___50013))
;


var g__47939__auto___50017 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__47939__auto___50017){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50018 = arguments.length;
var i__47856__auto___50019 = (0);
while(true){
if((i__47856__auto___50019 < len__47855__auto___50018)){
args__47862__auto__.push((arguments[i__47856__auto___50019]));

var G__50020 = (i__47856__auto___50019 + (1));
i__47856__auto___50019 = G__50020;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47939__auto___50017))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47939__auto___50017){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47939__auto___50017),args);
});})(g__47939__auto___50017))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__47939__auto___50017){
return (function (seq49948){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49948));
});})(g__47939__auto___50017))
;

var g__47952__auto___50042 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__47952__auto___50042){
return (function cljs$spec$impl$gen$any(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50043 = arguments.length;
var i__47856__auto___50044 = (0);
while(true){
if((i__47856__auto___50044 < len__47855__auto___50043)){
args__47862__auto__.push((arguments[i__47856__auto___50044]));

var G__50045 = (i__47856__auto___50044 + (1));
i__47856__auto___50044 = G__50045;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50042))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50042){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50042);
});})(g__47952__auto___50042))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__47952__auto___50042){
return (function (seq50021){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50021));
});})(g__47952__auto___50042))
;


var g__47952__auto___50046 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__47952__auto___50046){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50047 = arguments.length;
var i__47856__auto___50048 = (0);
while(true){
if((i__47856__auto___50048 < len__47855__auto___50047)){
args__47862__auto__.push((arguments[i__47856__auto___50048]));

var G__50049 = (i__47856__auto___50048 + (1));
i__47856__auto___50048 = G__50049;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50046))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50046){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50046);
});})(g__47952__auto___50046))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__47952__auto___50046){
return (function (seq50022){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50022));
});})(g__47952__auto___50046))
;


var g__47952__auto___50050 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__47952__auto___50050){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50051 = arguments.length;
var i__47856__auto___50052 = (0);
while(true){
if((i__47856__auto___50052 < len__47855__auto___50051)){
args__47862__auto__.push((arguments[i__47856__auto___50052]));

var G__50053 = (i__47856__auto___50052 + (1));
i__47856__auto___50052 = G__50053;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50050))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50050){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50050);
});})(g__47952__auto___50050))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__47952__auto___50050){
return (function (seq50023){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50023));
});})(g__47952__auto___50050))
;


var g__47952__auto___50054 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__47952__auto___50054){
return (function cljs$spec$impl$gen$char(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50055 = arguments.length;
var i__47856__auto___50056 = (0);
while(true){
if((i__47856__auto___50056 < len__47855__auto___50055)){
args__47862__auto__.push((arguments[i__47856__auto___50056]));

var G__50057 = (i__47856__auto___50056 + (1));
i__47856__auto___50056 = G__50057;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50054))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50054){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50054);
});})(g__47952__auto___50054))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__47952__auto___50054){
return (function (seq50024){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50024));
});})(g__47952__auto___50054))
;


var g__47952__auto___50058 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__47952__auto___50058){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50059 = arguments.length;
var i__47856__auto___50060 = (0);
while(true){
if((i__47856__auto___50060 < len__47855__auto___50059)){
args__47862__auto__.push((arguments[i__47856__auto___50060]));

var G__50061 = (i__47856__auto___50060 + (1));
i__47856__auto___50060 = G__50061;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50058))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50058){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50058);
});})(g__47952__auto___50058))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__47952__auto___50058){
return (function (seq50025){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50025));
});})(g__47952__auto___50058))
;


var g__47952__auto___50062 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__47952__auto___50062){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50063 = arguments.length;
var i__47856__auto___50064 = (0);
while(true){
if((i__47856__auto___50064 < len__47855__auto___50063)){
args__47862__auto__.push((arguments[i__47856__auto___50064]));

var G__50065 = (i__47856__auto___50064 + (1));
i__47856__auto___50064 = G__50065;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50062))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50062){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50062);
});})(g__47952__auto___50062))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__47952__auto___50062){
return (function (seq50026){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50026));
});})(g__47952__auto___50062))
;


var g__47952__auto___50066 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__47952__auto___50066){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50067 = arguments.length;
var i__47856__auto___50068 = (0);
while(true){
if((i__47856__auto___50068 < len__47855__auto___50067)){
args__47862__auto__.push((arguments[i__47856__auto___50068]));

var G__50069 = (i__47856__auto___50068 + (1));
i__47856__auto___50068 = G__50069;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50066))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50066){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50066);
});})(g__47952__auto___50066))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__47952__auto___50066){
return (function (seq50027){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50027));
});})(g__47952__auto___50066))
;


var g__47952__auto___50070 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__47952__auto___50070){
return (function cljs$spec$impl$gen$double(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50071 = arguments.length;
var i__47856__auto___50072 = (0);
while(true){
if((i__47856__auto___50072 < len__47855__auto___50071)){
args__47862__auto__.push((arguments[i__47856__auto___50072]));

var G__50073 = (i__47856__auto___50072 + (1));
i__47856__auto___50072 = G__50073;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50070))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50070){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50070);
});})(g__47952__auto___50070))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__47952__auto___50070){
return (function (seq50028){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50028));
});})(g__47952__auto___50070))
;


var g__47952__auto___50074 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__47952__auto___50074){
return (function cljs$spec$impl$gen$int(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50075 = arguments.length;
var i__47856__auto___50076 = (0);
while(true){
if((i__47856__auto___50076 < len__47855__auto___50075)){
args__47862__auto__.push((arguments[i__47856__auto___50076]));

var G__50077 = (i__47856__auto___50076 + (1));
i__47856__auto___50076 = G__50077;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50074))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50074){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50074);
});})(g__47952__auto___50074))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__47952__auto___50074){
return (function (seq50029){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50029));
});})(g__47952__auto___50074))
;


var g__47952__auto___50078 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__47952__auto___50078){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50079 = arguments.length;
var i__47856__auto___50080 = (0);
while(true){
if((i__47856__auto___50080 < len__47855__auto___50079)){
args__47862__auto__.push((arguments[i__47856__auto___50080]));

var G__50081 = (i__47856__auto___50080 + (1));
i__47856__auto___50080 = G__50081;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50078))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50078){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50078);
});})(g__47952__auto___50078))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__47952__auto___50078){
return (function (seq50030){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50030));
});})(g__47952__auto___50078))
;


var g__47952__auto___50082 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__47952__auto___50082){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50083 = arguments.length;
var i__47856__auto___50084 = (0);
while(true){
if((i__47856__auto___50084 < len__47855__auto___50083)){
args__47862__auto__.push((arguments[i__47856__auto___50084]));

var G__50085 = (i__47856__auto___50084 + (1));
i__47856__auto___50084 = G__50085;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50082))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50082){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50082);
});})(g__47952__auto___50082))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__47952__auto___50082){
return (function (seq50031){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50031));
});})(g__47952__auto___50082))
;


var g__47952__auto___50086 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__47952__auto___50086){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50087 = arguments.length;
var i__47856__auto___50088 = (0);
while(true){
if((i__47856__auto___50088 < len__47855__auto___50087)){
args__47862__auto__.push((arguments[i__47856__auto___50088]));

var G__50089 = (i__47856__auto___50088 + (1));
i__47856__auto___50088 = G__50089;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50086))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50086){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50086);
});})(g__47952__auto___50086))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__47952__auto___50086){
return (function (seq50032){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50032));
});})(g__47952__auto___50086))
;


var g__47952__auto___50090 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__47952__auto___50090){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50091 = arguments.length;
var i__47856__auto___50092 = (0);
while(true){
if((i__47856__auto___50092 < len__47855__auto___50091)){
args__47862__auto__.push((arguments[i__47856__auto___50092]));

var G__50093 = (i__47856__auto___50092 + (1));
i__47856__auto___50092 = G__50093;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50090))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50090){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50090);
});})(g__47952__auto___50090))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__47952__auto___50090){
return (function (seq50033){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50033));
});})(g__47952__auto___50090))
;


var g__47952__auto___50094 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__47952__auto___50094){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50095 = arguments.length;
var i__47856__auto___50096 = (0);
while(true){
if((i__47856__auto___50096 < len__47855__auto___50095)){
args__47862__auto__.push((arguments[i__47856__auto___50096]));

var G__50097 = (i__47856__auto___50096 + (1));
i__47856__auto___50096 = G__50097;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50094))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50094){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50094);
});})(g__47952__auto___50094))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__47952__auto___50094){
return (function (seq50034){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50034));
});})(g__47952__auto___50094))
;


var g__47952__auto___50098 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__47952__auto___50098){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50099 = arguments.length;
var i__47856__auto___50100 = (0);
while(true){
if((i__47856__auto___50100 < len__47855__auto___50099)){
args__47862__auto__.push((arguments[i__47856__auto___50100]));

var G__50101 = (i__47856__auto___50100 + (1));
i__47856__auto___50100 = G__50101;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50098))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50098){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50098);
});})(g__47952__auto___50098))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__47952__auto___50098){
return (function (seq50035){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50035));
});})(g__47952__auto___50098))
;


var g__47952__auto___50102 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__47952__auto___50102){
return (function cljs$spec$impl$gen$string(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50103 = arguments.length;
var i__47856__auto___50104 = (0);
while(true){
if((i__47856__auto___50104 < len__47855__auto___50103)){
args__47862__auto__.push((arguments[i__47856__auto___50104]));

var G__50105 = (i__47856__auto___50104 + (1));
i__47856__auto___50104 = G__50105;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50102))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50102){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50102);
});})(g__47952__auto___50102))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__47952__auto___50102){
return (function (seq50036){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50036));
});})(g__47952__auto___50102))
;


var g__47952__auto___50106 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__47952__auto___50106){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50107 = arguments.length;
var i__47856__auto___50108 = (0);
while(true){
if((i__47856__auto___50108 < len__47855__auto___50107)){
args__47862__auto__.push((arguments[i__47856__auto___50108]));

var G__50109 = (i__47856__auto___50108 + (1));
i__47856__auto___50108 = G__50109;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50106))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50106){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50106);
});})(g__47952__auto___50106))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__47952__auto___50106){
return (function (seq50037){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50037));
});})(g__47952__auto___50106))
;


var g__47952__auto___50110 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__47952__auto___50110){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50111 = arguments.length;
var i__47856__auto___50112 = (0);
while(true){
if((i__47856__auto___50112 < len__47855__auto___50111)){
args__47862__auto__.push((arguments[i__47856__auto___50112]));

var G__50113 = (i__47856__auto___50112 + (1));
i__47856__auto___50112 = G__50113;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50110))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50110){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50110);
});})(g__47952__auto___50110))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__47952__auto___50110){
return (function (seq50038){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50038));
});})(g__47952__auto___50110))
;


var g__47952__auto___50114 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__47952__auto___50114){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50115 = arguments.length;
var i__47856__auto___50116 = (0);
while(true){
if((i__47856__auto___50116 < len__47855__auto___50115)){
args__47862__auto__.push((arguments[i__47856__auto___50116]));

var G__50117 = (i__47856__auto___50116 + (1));
i__47856__auto___50116 = G__50117;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50114))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50114){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50114);
});})(g__47952__auto___50114))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__47952__auto___50114){
return (function (seq50039){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50039));
});})(g__47952__auto___50114))
;


var g__47952__auto___50118 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__47952__auto___50118){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50119 = arguments.length;
var i__47856__auto___50120 = (0);
while(true){
if((i__47856__auto___50120 < len__47855__auto___50119)){
args__47862__auto__.push((arguments[i__47856__auto___50120]));

var G__50121 = (i__47856__auto___50120 + (1));
i__47856__auto___50120 = G__50121;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50118))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50118){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50118);
});})(g__47952__auto___50118))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__47952__auto___50118){
return (function (seq50040){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50040));
});})(g__47952__auto___50118))
;


var g__47952__auto___50122 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__47952__auto___50122){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50123 = arguments.length;
var i__47856__auto___50124 = (0);
while(true){
if((i__47856__auto___50124 < len__47855__auto___50123)){
args__47862__auto__.push((arguments[i__47856__auto___50124]));

var G__50125 = (i__47856__auto___50124 + (1));
i__47856__auto___50124 = G__50125;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});})(g__47952__auto___50122))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47952__auto___50122){
return (function (args){
return cljs.core.deref.call(null,g__47952__auto___50122);
});})(g__47952__auto___50122))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__47952__auto___50122){
return (function (seq50041){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50041));
});})(g__47952__auto___50122))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__47862__auto__ = [];
var len__47855__auto___50128 = arguments.length;
var i__47856__auto___50129 = (0);
while(true){
if((i__47856__auto___50129 < len__47855__auto___50128)){
args__47862__auto__.push((arguments[i__47856__auto___50129]));

var G__50130 = (i__47856__auto___50129 + (1));
i__47856__auto___50129 = G__50130;
continue;
} else {
}
break;
}

var argseq__47863__auto__ = ((((0) < args__47862__auto__.length))?(new cljs.core.IndexedSeq(args__47862__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__47863__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__50126_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__50126_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq50127){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50127));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__50131_SHARP_){
return (new Date(p1__50131_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1492150117304