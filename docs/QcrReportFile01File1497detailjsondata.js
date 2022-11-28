console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.html" 
 , "texte" : "File secujava/java.util.concurrent.ConcurrentMap.java 6 rule violations " 
 , "fic2"  : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Map<K,V>"
 , "c2" : "java.util.concurrent.ConcurrentMap"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "java.util.concurrent.ConcurrentMap" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00017"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#17"
 , "c1" : "V"
 , "c2" : "getOrDefault(Object;V)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#24"
 , "c1" : "void"
 , "c2" : "forEach(BiConsumer<?superK,?superV>)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#41"
 , "c1" : "V"
 , "c2" : "putIfAbsent(K;V)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#44"
 , "c1" : "boolean"
 , "c2" : "remove(Object;Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#47"
 , "c1" : "boolean"
 , "c2" : "replace(K;V;V)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#50"
 , "c1" : "V"
 , "c2" : "replace(K;V)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#54"
 , "c1" : "void"
 , "c2" : "replaceAll(BiFunction<?superK,?superV,?extendsV>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#69"
 , "c1" : "V"
 , "c2" : "computeIfAbsent(K;Function<?superK,?extendsV>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#80"
 , "c1" : "V"
 , "c2" : "computeIfPresent(K;BiFunction<?superK,?superV,?extendsV>)"
 , "c3" : "6"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#97"
 , "c1" : "V"
 , "c2" : "compute(K;BiFunction<?superK,?superV,?extendsV>)"
 , "c3" : "11"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00145"
 , "c5link" : "././qc/secujava/java.util.concurrent.ConcurrentMap.java.html#145"
 , "c1" : "V"
 , "c2" : "merge(K;V;BiFunction<?superV,?superV,?extendsV>)"
 , "c3" : "9"
 , "c4" : "10"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.png" 

 , "ligneplantuml" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.svg" }

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
"data11" : [
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
 , "c1" : "00024"
 , "c1link" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.html#24"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00024] The argument action is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument function is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.html#70"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00070] The argument mappingFunction is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument remappingFunction is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.html#98"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00098] The argument remappingFunction is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.html#146"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00146] The argument remappingFunction is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/secujava/java.util.concurrent.ConcurrentMap.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
