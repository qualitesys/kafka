console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/cache/LRUCache.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/cache/LRUCache.java 8 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/cache/LRUCache.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Cache<K,V>"
 , "c2" : "org.apache.kafka.common.cache.LRUCache"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.cache.LRUCache" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "LRUCache"
 , "c2" : "LRUCache(int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "V"
 , "c2" : "get(K)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "put(K;V)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "remove(K)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
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
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/LRUCache.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/LRUCache.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00008"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/LRUCache.java.html#8"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00008] The class LRUCache contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/LRUCache.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00012] In method org.apache.kafka.common.cache.LRUCache.LRUCache@POLYN144728 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/LRUCache.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00012] In method org.apache.kafka.common.cache.LRUCache.LRUCache@POLYN144728 the MagicNumber/String  .75f should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/LRUCache.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00012] In method org.apache.kafka.common.cache.LRUCache.LRUCache@POLYN144728 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/LRUCache.java.html#21"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00021] For method get arguments K  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/LRUCache.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method put arguments K  key|V  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/LRUCache.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method remove arguments K  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/cache/LRUCache.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.common.cache.LRUCache.remove@POLYN145562 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
