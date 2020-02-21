/*!
 * Lunr languages, `Thai` language
 * https://github.com/MihaiValentin/lunr-languages
 *
 * Copyright 2017, Keerati Thiwanruk
 * http://www.mozilla.org/MPL/
 */
/*!
 * based on
 * Snowball JavaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */
;(function(root,factory){if(typeof define==='function'&&define.amd){define(factory)}else if(typeof exports==='object'){module.exports=factory()}else{factory()(root.lunr);}}(this,function(){return function(lunr){if('undefined'===typeof lunr){throw new Error('Lunr is not present. Please include / require Lunr before this script.');}
if('undefined'===typeof lunr.stemmerSupport){throw new Error('Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.');}
var isLunr2=lunr.version[0]=="2";lunr.th=function(){this.pipeline.reset();this.pipeline.add(lunr.th.trimmer);if(isLunr2){this.tokenizer=lunr.th.tokenizer;}else{if(lunr.tokenizer){lunr.tokenizer=lunr.th.tokenizer;}
if(this.tokenizerFn){this.tokenizerFn=lunr.th.tokenizer;}}};lunr.th.wordCharacters="[\u0e00-\u0e7f]";lunr.th.trimmer=lunr.trimmerSupport.generateTrimmer(lunr.th.wordCharacters);lunr.Pipeline.registerFunction(lunr.th.trimmer,'trimmer-th');var segmenter=lunr.wordcut;segmenter.init();lunr.th.tokenizer=function(obj){if(!arguments.length||obj==null||obj==undefined)return[]
if(Array.isArray(obj))return obj.map(function(t){return isLunr2?new lunr.Token(t):t})
var str=obj.toString().replace(/^\s+/,'');return segmenter.cut(str).split('|');}};}))