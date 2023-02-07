console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java 7 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Cache<K,V>"
 , "c2" : "org.apache.kafka.common.cache.SynchronizedCache"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.cache.SynchronizedCache" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#27"
 , "c1" : "SynchronizedCache"
 , "c2" : "SynchronizedCache(Cache&lt;K,V&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#32"
 , "c1" : "V"
 , "c2" : "get(K)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#37"
 , "c1" : "void"
 , "c2" : "put(K;V)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#42"
 , "c1" : "boolean"
 , "c2" : "remove(K)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#47"
 , "c1" : "long"
 , "c2" : "size()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.svg" }

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
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#32"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00032] Lock statement on synchronized method get"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method get arguments K  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#37"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00037] Lock statement on synchronized method put"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method put arguments K  key|V  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#42"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00042] Lock statement on synchronized method remove"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method remove arguments K  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.html#47"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00047] Lock statement on synchronized method size"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/SynchronizedCache.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
