console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java 24 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ConcurrentMap<K,V>"
 , "c2" : "org.apache.kafka.common.utils.CopyOnWriteMap"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.CopyOnWriteMap" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "CopyOnWriteMap"
 , "c2" : "CopyOnWriteMap()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CopyOnWriteMap"
 , "c2" : "CopyOnWriteMap(Map<K,V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "containsKey(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "containsValue(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<java.util.Map.Entry<K,V>>"
 , "c2" : "entrySet()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "V"
 , "c2" : "get(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isEmpty()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<K>"
 , "c2" : "keySet()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "size()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<V>"
 , "c2" : "values()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clear()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "V"
 , "c2" : "put(K;V)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putAll(Map<?extendsK,?extendsV>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "V"
 , "c2" : "remove(Object)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "V"
 , "c2" : "putIfAbsent(K;V)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "remove(Object;Object)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "replace(K;V;V)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "V"
 , "c2" : "replace(K;V)"
 , "c3" : "3"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.svg" }

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
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class CopyOnWriteMap contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method containsKey arguments Object  k"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method containsValue arguments Object  v"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method get arguments Object  k"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#65"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00065] Lock statement on synchronized method clear"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#70"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00070] Lock statement on synchronized method put"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method put arguments K  k|V  v"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#78"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00078] Lock statement on synchronized method putAll"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method putAll arguments Map&lt;?  extends K ,?  extends V &gt;  entries"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#85"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00085] Lock statement on synchronized method remove"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method remove arguments Object  key"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#93"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00093] Lock statement on synchronized method putIfAbsent"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method putIfAbsent arguments K  k|V  v"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#101"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00101] Lock statement on synchronized method remove"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method remove arguments Object  k|Object  v"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.common.utils.CopyOnWriteMap.remove@POLYN178372 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.common.utils.CopyOnWriteMap.remove@POLYN178372 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#111"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00111] Lock statement on synchronized method replace"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method replace arguments K  k|V  original|V  replacement"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.common.utils.CopyOnWriteMap.replace@POLYN178818 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.common.utils.CopyOnWriteMap.replace@POLYN178818 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#121"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00121] Lock statement on synchronized method replace"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method replace arguments K  k|V  v"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CopyOnWriteMap.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.common.utils.CopyOnWriteMap.replace@POLYN179311 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
