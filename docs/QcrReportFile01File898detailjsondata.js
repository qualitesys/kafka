console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/FixedOrderMap.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/FixedOrderMap.java 6 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/FixedOrderMap.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "LinkedHashMap<K,V>"
 , "c2" : "org.apache.kafka.common.utils.FixedOrderMap"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.FixedOrderMap" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "removeEldestEntry(Map.Entry<K,V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "V"
 , "c2" : "remove(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "remove(Object;Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "FixedOrderMap<K,V>"
 , "c2" : "clone()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/FixedOrderMap.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/FixedOrderMap.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/FixedOrderMap.java.html#13"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00013] For method removeEldestEntry arguments Map.Entry&lt;K ,V &gt;  eldest"
}} 
,
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/FixedOrderMap.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00014] In method org.apache.kafka.common.utils.FixedOrderMap.removeEldestEntry@POLYN164043 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/FixedOrderMap.java.html#19"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00019] For method remove arguments Object  key"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/FixedOrderMap.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.common.utils.FixedOrderMap.remove@POLYN164229 the MagicNumber/String  'Removing from registeredStores is not allowed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/FixedOrderMap.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method remove arguments Object  key|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/FixedOrderMap.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.common.utils.FixedOrderMap.remove@POLYN164408 the MagicNumber/String  'Removing from registeredStores is not allowed' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
