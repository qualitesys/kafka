console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html" 
 , "texte" : "File connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java 11 rule violations " 
 , "fic2"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "TopicFilter"
 , "c2" : "org.apache.kafka.connect.mirror.DefaultTopicFilter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.mirror.DefaultTopicFilter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#29"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#36"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#39"
 , "c1" : "boolean"
 , "c2" : "included(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#43"
 , "c1" : "boolean"
 , "c2" : "excluded(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#48"
 , "c1" : "boolean"
 , "c2" : "shouldReplicateTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.png" 

 , "ligneplantuml" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class DefaultTopicFilter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method configure arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method included arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.connect.mirror.DefaultTopicFilter.included@POLYN151717 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method excluded arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.connect.mirror.DefaultTopicFilter.excluded@POLYN151930 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method shouldReplicateTopic arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.connect.mirror.DefaultTopicFilter.TopicFilterConfig.TopicFilterConfig@POLYN152955 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#36"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00036] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#36"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00036] Void method close is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.DefaultTopicFilter.configure@POLYN151319"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
