console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.html" 
 , "texte" : "File secujava/java.util.concurrent.ConcurrentMap.java 6 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Map<K,V>"
 , "c2" : "java.util.concurrent.ConcurrentMap"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "java.util.concurrent.ConcurrentMap" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#78"
 , "c1" : "V"
 , "c2" : "getOrDefault(Object;V)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#102"
 , "c1" : "void"
 , "c2" : "forEach(BiConsumer&lt;?superK,?superV&gt;)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00150"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#150"
 , "c1" : "V"
 , "c2" : "putIfAbsent(K;V)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00180"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#180"
 , "c1" : "boolean"
 , "c2" : "remove(Object;Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00211"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#211"
 , "c1" : "boolean"
 , "c2" : "replace(K;V;V)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00244"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#244"
 , "c1" : "V"
 , "c2" : "replace(K;V)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00275"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#275"
 , "c1" : "void"
 , "c2" : "replaceAll(BiFunction&lt;?superK,?superV,?extendsV&gt;)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00319"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#319"
 , "c1" : "V"
 , "c2" : "computeIfAbsent(K;Function&lt;?superK,?extendsV&gt;)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00362"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#362"
 , "c1" : "V"
 , "c2" : "computeIfPresent(K;BiFunction&lt;?superK,?superV,?extendsV&gt;)"
 , "c3" : "6"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00416"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#416"
 , "c1" : "V"
 , "c2" : "compute(K;BiFunction&lt;?superK,?superV,?extendsV&gt;)"
 , "c3" : "11"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00495"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#495"
 , "c1" : "V"
 , "c2" : "merge(K;V;BiFunction&lt;?superV,?superV,?extendsV&gt;)"
 , "c3" : "9"
 , "c4" : "10"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.html#102"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00102] The argument action is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00275"
 , "c1link" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.html#275"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00275] The argument function is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.html#320"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00320] The argument mappingFunction is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00363"
 , "c1link" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.html#363"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00363] The argument remappingFunction is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00417"
 , "c1link" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.html#417"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00417] The argument remappingFunction is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00496"
 , "c1link" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.html#496"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00496] The argument remappingFunction is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
