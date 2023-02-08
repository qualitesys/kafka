console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html" 
 , "texte" : "File connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java 10 rule violations " 
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
 , "c5" : "00044"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#44"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#51"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#54"
 , "c1" : "boolean"
 , "c2" : "included(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#58"
 , "c1" : "boolean"
 , "c2" : "excluded(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#63"
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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
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
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method configure arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00044] For method configure list of called methods Object monObjet|java.util.regex.Pattern config_includePatternN152905|java.util.regex.Pattern config_excludePatternN152979"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method included arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.connect.mirror.DefaultTopicFilter.included@POLYN153087 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method excluded arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.mirror.DefaultTopicFilter.excluded@POLYN153300 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method shouldReplicateTopic arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.connect.mirror.DefaultTopicFilter.TopicFilterConfig.TopicFilterConfig@POLYN154325 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00051] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00051] Void method close is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultTopicFilter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
